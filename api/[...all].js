const express = require('express');
const { put, list } = require('@vercel/blob');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'moneymind_secret_2026';
const ADMIN_EMAIL = 'levy_ariel@outlook.com';
const BLOB_KEY = 'moneymind-db.json';

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  if (!req.path.startsWith('/api')) req.url = '/api' + req.url;
  next();
});

// ── Blob DB helpers ───────────────────────────────────────────────────────────
async function readDB() {
  try {
    const { blobs } = await list({ prefix: BLOB_KEY });
    if (!blobs.length) return await initDB();
    const res = await fetch(blobs[0].url);
    return await res.json();
  } catch {
    return await initDB();
  }
}

async function writeDB(data) {
  await put(BLOB_KEY, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json'
  });
}

async function initDB() {
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
  await writeDB(db);
  return db;
}

// ── Auth middleware ───────────────────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try { req.user = jwt.verify(token, JWT_SECRET); next(); }
  catch { res.status(401).json({ error: 'Invalid token' }); }
}

function adminMiddleware(req, res, next) {
  authMiddleware(req, res, () => {
    if (req.user.email !== ADMIN_EMAIL) return res.status(403).json({ error: 'Admin only' });
    next();
  });
}

// ── Auth ──────────────────────────────────────────────────────────────────────
app.post('/api/auth/register', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: 'Missing fields' });
  const db = await readDB();
  if (db.users.find(u => u.email === email))
    return res.status(409).json({ error: 'Email already registered' });
  db.users.push({ email, password: bcrypt.hashSync(password, 10), name, joinedAt: new Date().toISOString(), isAdmin: false, has_bp_plus: false });
  await writeDB(db);
  const token = jwt.sign({ email, name }, JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, name, email, isAdmin: false });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const db = await readDB();
  const user = db.users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, name: user.name, email: user.email, isAdmin: user.isAdmin, has_bp_plus: user.has_bp_plus });
});

app.post('/api/auth/change-password', authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const db = await readDB();
  const user = db.users.find(u => u.email === req.user.email);
  if (!user || !bcrypt.compareSync(currentPassword, user.password))
    return res.status(401).json({ error: 'Wrong current password' });
  user.password = bcrypt.hashSync(newPassword, 10);
  await writeDB(db);
  res.json({ ok: true });
});

app.delete('/api/auth/delete-account', authMiddleware, async (req, res) => {
  const db = await readDB();
  db.users = db.users.filter(u => u.email !== req.user.email);
  delete db.gamification[req.user.email];
  delete db.friends[req.user.email];
  delete db.battlepass[req.user.email];
  await writeDB(db);
  res.json({ ok: true });
});

// ── Users ─────────────────────────────────────────────────────────────────────
app.get('/api/users', adminMiddleware, async (req, res) => {
  const db = await readDB();
  res.json(db.users.map(u => ({ email: u.email, name: u.name, joinedAt: u.joinedAt, isAdmin: u.isAdmin, has_bp_plus: u.has_bp_plus })));
});

app.delete('/api/users/:email', adminMiddleware, async (req, res) => {
  const db = await readDB();
  db.users = db.users.filter(u => u.email !== req.params.email);
  await writeDB(db);
  res.json({ ok: true });
});

app.post('/api/users/:email/bp_plus', adminMiddleware, async (req, res) => {
  const db = await readDB();
  const user = db.users.find(u => u.email === req.params.email);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.has_bp_plus = true;
  await writeDB(db);
  res.json({ ok: true });
});

// ── Progress ──────────────────────────────────────────────────────────────────
app.get('/api/progress/:email', authMiddleware, async (req, res) => {
  if (req.user.email !== req.params.email && req.user.email !== ADMIN_EMAIL)
    return res.status(403).json({ error: 'Forbidden' });
  const db = await readDB();
  res.json(db.gamification[req.params.email] || { xp: 0, lessons: [], badges: [], streak: 0, lastLogin: '' });
});

app.post('/api/progress/:email', authMiddleware, async (req, res) => {
  if (req.user.email !== req.params.email && req.user.email !== ADMIN_EMAIL)
    return res.status(403).json({ error: 'Forbidden' });
  const db = await readDB();
  db.gamification[req.params.email] = req.body;
  await writeDB(db);
  res.json({ ok: true });
});

// ── Leaderboard ───────────────────────────────────────────────────────────────
app.get('/api/leaderboard', async (req, res) => {
  const db = await readDB();
  const validEmails = new Set(db.users.map(u => u.email));
  const rows = Object.entries(db.gamification)
    .filter(([email]) => validEmails.has(email))
    .map(([email, ud]) => {
      const user = db.users.find(u => u.email === email);
      return { email, name: user?.name || email, xp: ud.xp || 0, streak: ud.streak || 0, badges: (ud.badges || []).length };
    })
    .sort((a, b) => b.xp - a.xp).slice(0, 10);
  res.json(rows);
});

// ── Notifications ─────────────────────────────────────────────────────────────
app.get('/api/notifications', async (req, res) => {
  const db = await readDB();
  res.json(db.notifications || []);
});

app.post('/api/notifications', adminMiddleware, async (req, res) => {
  const db = await readDB();
  const notif = { id: Date.now(), text: req.body.text, time: new Date().toISOString() };
  db.notifications.unshift(notif);
  await writeDB(db);
  res.json(notif);
});

app.delete('/api/notifications/:id', adminMiddleware, async (req, res) => {
  const db = await readDB();
  db.notifications = db.notifications.filter(n => n.id != req.params.id);
  await writeDB(db);
  res.json({ ok: true });
});

// ── Friends ───────────────────────────────────────────────────────────────────
app.get('/api/friends/:email', authMiddleware, async (req, res) => {
  const db = await readDB();
  res.json(db.friends[req.params.email] || { friends: [], sent: [], received: [] });
});

app.post('/api/friends/:email', authMiddleware, async (req, res) => {
  if (req.user.email !== req.params.email) return res.status(403).json({ error: 'Forbidden' });
  const db = await readDB();
  db.friends[req.params.email] = req.body;
  await writeDB(db);
  res.json({ ok: true });
});

// ── Comments ──────────────────────────────────────────────────────────────────
app.get('/api/comments/:lessonId', async (req, res) => {
  const db = await readDB();
  res.json(db.comments[req.params.lessonId] || { likes: [], dislikes: [], comments: [] });
});

app.post('/api/comments/:lessonId', authMiddleware, async (req, res) => {
  const db = await readDB();
  db.comments[req.params.lessonId] = req.body;
  await writeDB(db);
  res.json({ ok: true });
});

// ── Battle Pass ───────────────────────────────────────────────────────────────
app.get('/api/battlepass/:email', authMiddleware, async (req, res) => {
  const db = await readDB();
  const user = db.users.find(u => u.email === req.params.email);
  const bp = db.battlepass[req.params.email] || {};
  if (user?.has_bp_plus) bp.has_plus = true;
  res.json(bp);
});

app.post('/api/battlepass/:email', authMiddleware, async (req, res) => {
  if (req.user.email !== req.params.email) return res.status(403).json({ error: 'Forbidden' });
  const db = await readDB();
  db.battlepass[req.params.email] = req.body;
  await writeDB(db);
  res.json({ ok: true });
});

// ── Reports ───────────────────────────────────────────────────────────────────
app.post('/api/reports', authMiddleware, async (req, res) => {
  const { reportedEmail, reason } = req.body;
  const db = await readDB();
  if (!db.reports[reportedEmail]) db.reports[reportedEmail] = [];
  db.reports[reportedEmail].push({ from: req.user.email, reason, time: new Date().toISOString() });
  await writeDB(db);
  res.json({ ok: true });
});

app.get('/api/reports', adminMiddleware, async (req, res) => {
  const db = await readDB();
  res.json(db.reports || {});
});

module.exports = app;
