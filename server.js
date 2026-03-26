const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'moneymind_secret_2026';
const DB_FILE = path.join(__dirname, 'db.json');
const ADMIN_EMAIL = 'levy_ariel@outlook.com';

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ── Database helpers ──────────────────────────────────────────────────────────
function readDB() {
  if (!fs.existsSync(DB_FILE)) return initDB();
  try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
  catch { return initDB(); }
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function initDB() {
  const db = {
    users: [{
      email: ADMIN_EMAIL,
      password: bcrypt.hashSync('Ariel2308', 10),
      name: 'Ariel Levy',
      joinedAt: new Date().toISOString(),
      isAdmin: true,
      has_bp_plus: true
    }],
    gamification: {},
    friends: {},
    comments: {},
    notifications: [],
    battlepass: {},
    reports: {}
  };
  writeDB(db);
  return db;
}

// ── Auth middleware ───────────────────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

function adminMiddleware(req, res, next) {
  authMiddleware(req, res, () => {
    if (req.user.email !== ADMIN_EMAIL) return res.status(403).json({ error: 'Admin only' });
    next();
  });
}

// ── Auth routes ───────────────────────────────────────────────────────────────
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: 'Missing fields' });
  const db = readDB();
  if (db.users.find(u => u.email === email))
    return res.status(409).json({ error: 'Email already registered' });
  const hashed = bcrypt.hashSync(password, 10);
  const user = { email, password: hashed, name, joinedAt: new Date().toISOString(), isAdmin: false, has_bp_plus: false };
  db.users.push(user);
  writeDB(db);
  const token = jwt.sign({ email, name }, JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, name, email, isAdmin: false });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, name: user.name, email: user.email, isAdmin: user.isAdmin, has_bp_plus: user.has_bp_plus });
});

// ── User routes ───────────────────────────────────────────────────────────────
app.get('/api/users', adminMiddleware, (req, res) => {
  const db = readDB();
  res.json(db.users.map(u => ({ email: u.email, name: u.name, joinedAt: u.joinedAt, isAdmin: u.isAdmin, has_bp_plus: u.has_bp_plus })));
});

app.delete('/api/users/:email', adminMiddleware, (req, res) => {
  const db = readDB();
  db.users = db.users.filter(u => u.email !== req.params.email);
  writeDB(db);
  res.json({ ok: true });
});

app.post('/api/users/:email/bp_plus', adminMiddleware, (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.email === req.params.email);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.has_bp_plus = true;
  writeDB(db);
  res.json({ ok: true });
});

app.post('/api/auth/change-password', authMiddleware, (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.email === req.user.email);
  if (!user || !bcrypt.compareSync(currentPassword, user.password))
    return res.status(401).json({ error: 'Wrong current password' });
  user.password = bcrypt.hashSync(newPassword, 10);
  writeDB(db);
  res.json({ ok: true });
});

app.delete('/api/auth/delete-account', authMiddleware, (req, res) => {
  const db = readDB();
  db.users = db.users.filter(u => u.email !== req.user.email);
  delete db.gamification[req.user.email];
  delete db.friends[req.user.email];
  delete db.battlepass[req.user.email];
  writeDB(db);
  res.json({ ok: true });
});

// ── Gamification routes ───────────────────────────────────────────────────────
app.get('/api/progress/:email', authMiddleware, (req, res) => {
  if (req.user.email !== req.params.email && req.user.email !== ADMIN_EMAIL)
    return res.status(403).json({ error: 'Forbidden' });
  const db = readDB();
  res.json(db.gamification[req.params.email] || { xp: 0, lessons: [], badges: [], streak: 0, lastLogin: '' });
});

app.post('/api/progress/:email', authMiddleware, (req, res) => {
  if (req.user.email !== req.params.email && req.user.email !== ADMIN_EMAIL)
    return res.status(403).json({ error: 'Forbidden' });
  const db = readDB();
  db.gamification[req.params.email] = req.body;
  writeDB(db);
  res.json({ ok: true });
});

// ── Leaderboard ───────────────────────────────────────────────────────────────
app.get('/api/leaderboard', (req, res) => {
  const db = readDB();
  const validEmails = new Set(db.users.map(u => u.email));
  const rows = Object.entries(db.gamification)
    .filter(([email]) => validEmails.has(email))
    .map(([email, ud]) => {
      const user = db.users.find(u => u.email === email);
      return { email, name: user?.name || email, xp: ud.xp || 0, streak: ud.streak || 0, badges: (ud.badges || []).length };
    })
    .sort((a, b) => b.xp - a.xp)
    .slice(0, 10);
  res.json(rows);
});

// ── Notifications ─────────────────────────────────────────────────────────────
app.get('/api/notifications', (req, res) => {
  const db = readDB();
  res.json(db.notifications || []);
});

app.post('/api/notifications', adminMiddleware, (req, res) => {
  const { text } = req.body;
  const db = readDB();
  const notif = { id: Date.now(), text, time: new Date().toISOString() };
  db.notifications.unshift(notif);
  writeDB(db);
  res.json(notif);
});

app.delete('/api/notifications/:id', adminMiddleware, (req, res) => {
  const db = readDB();
  db.notifications = db.notifications.filter(n => n.id != req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

// ── Friends ───────────────────────────────────────────────────────────────────
app.get('/api/friends/:email', authMiddleware, (req, res) => {
  const db = readDB();
  res.json(db.friends[req.params.email] || { friends: [], sent: [], received: [] });
});

app.post('/api/friends/:email', authMiddleware, (req, res) => {
  if (req.user.email !== req.params.email) return res.status(403).json({ error: 'Forbidden' });
  const db = readDB();
  db.friends[req.params.email] = req.body;
  writeDB(db);
  res.json({ ok: true });
});

// ── Comments ──────────────────────────────────────────────────────────────────
app.get('/api/comments/:lessonId', (req, res) => {
  const db = readDB();
  res.json(db.comments[req.params.lessonId] || { likes: [], dislikes: [], comments: [] });
});

app.post('/api/comments/:lessonId', authMiddleware, (req, res) => {
  const db = readDB();
  db.comments[req.params.lessonId] = req.body;
  writeDB(db);
  res.json({ ok: true });
});

// ── Battle Pass ───────────────────────────────────────────────────────────────
app.get('/api/battlepass/:email', authMiddleware, (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.email === req.params.email);
  const bp = db.battlepass[req.params.email] || {};
  if (user?.has_bp_plus) bp.has_plus = true;
  res.json(bp);
});

app.post('/api/battlepass/:email', authMiddleware, (req, res) => {
  if (req.user.email !== req.params.email) return res.status(403).json({ error: 'Forbidden' });
  const db = readDB();
  db.battlepass[req.params.email] = req.body;
  writeDB(db);
  res.json({ ok: true });
});

// ── Reports ───────────────────────────────────────────────────────────────────
app.post('/api/reports', authMiddleware, (req, res) => {
  const { reportedEmail, reason } = req.body;
  const db = readDB();
  if (!db.reports[reportedEmail]) db.reports[reportedEmail] = [];
  db.reports[reportedEmail].push({ from: req.user.email, reason, time: new Date().toISOString() });
  writeDB(db);
  res.json({ ok: true });
});

app.get('/api/reports', adminMiddleware, (req, res) => {
  const db = readDB();
  res.json(db.reports || {});
});

// ── Serve frontend ────────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`✅ MoneyMind server running on port ${PORT}`));
