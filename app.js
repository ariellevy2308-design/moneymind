// ===== INTERNATIONALIZATION =====
let currentLang = localStorage.getItem('lang') || 'en';

const i18n = {
  en: {
    nav_logo:'🚀 MoneyMind', nav_stocks:'📈 Stocks', nav_drop:'🛒 Dropshipping',
    nav_calc:'💰 Calculator', nav_quiz:'🧠 Quiz', nav_games:'🎮 Games', nav_auth:'Login / Sign Up',
    header_tag:'The Leading Financial Academy for the Next Generation',
    header_h1_1:'Learn. Trade.', header_h1_2:'Succeed Financially.',
    header_subtitle:'Professional courses in stocks & dropshipping — from zero to advanced, with live simulators',
    stat_lessons:'Professional Lessons', stat_stocks:'Stocks in Simulator', stat_potential:'Potential',
    stocks_title:'📈 Stocks Course', stocks_desc:'From the basics to advanced analysis — everything you need to invest smart',
    drop_title:'🛒 Dropshipping Course', drop_desc:'Build a profitable online business — from product selection to full automation',
    calc_title:'💰 Wealth Growth Calculator', calc_desc:'Enter your numbers and discover where your money will be in 5, 10, 20 years',
    quiz_title:'🧠 Knowledge Test', quiz_desc:'Test yourself — how much did you absorb? Get a score and know what to review',
    games_title:'🎮 Live Simulators', games_desc:'Practice what you learned with virtual money — real stock market and dropshipping with no risk',
    auth_login_tab:'Login', auth_register_tab:'Register',
    auth_login_title:'Welcome Back 👋', auth_login_subtitle:'Sign in to your account',
    auth_register_title:'Join Now 🚀', auth_register_subtitle:'Join MoneyMind — Full access to all courses',
    label_email:'Email', label_password:'Password', label_fullname:'Full Name',
    btn_login:'Sign In', btn_register:'Continue to Payment →',
    pay_title:'Secure Payment', pay_subtitle:'Full access to all MoneyMind courses',
    pay_feature1:'✅ Full access to all lessons', pay_feature2:'✅ Advanced investment calculator',
    pay_feature3:'✅ Quiz & knowledge tests', pay_feature4:'✅ Future updates free',
    label_card:'Card Number', label_expiry:'Expiry', label_cvv:'CVV', label_cardname:'Name on Card',
    btn_pay:'Pay $10 Securely', price_badge:'$10', secure_note:'🔒 Encrypted & Secure Payment',
    success_title:'Welcome to MoneyMind! 🚀', success_subtitle:'Payment received successfully',
    email_sent_title:'Access code sent to email', access_code_label:'Your Access Code',
    btn_start:'Start Learning 🚀', lp_back:'← Back to Lessons',
    calc_start:'Initial Amount', calc_yearly:'Annual Deposit', calc_rate:'Annual Return',
    calc_years:'Number of Years', calc_years_word:'years', calc_total:'Total at End', calc_invested:'Money Invested',
    calc_profit:'Market Profit', calc_mult:'Growth Multiplier',
    quiz_question_of:'Question {n} of {total}', quiz_next:'Next Question →',
    quiz_see_results:'See Results 🎉', quiz_answered:'You answered {score} questions correctly',
    quiz_amazing:'Amazing! You are ready 🚀', quiz_almost:'Almost! Go back to the lessons 💪',
    quiz_restart:'Try Again',
    game_tab_stocks:'📈 Stock Market', game_tab_drop:'🛒 Dropshipping',
    sg_cash:'Cash', sg_portfolio:'Portfolio Value', sg_pnl:'Profit/Loss', sg_reset:'🔄 Reset',
    sg_news_default:'📡 Market open — tracking news...',
    sg_search_placeholder:'🔍 Search stock...', sg_all_sectors:'All Sectors',
    sg_my_portfolio:'💼 My Portfolio', sg_no_stocks:'No stocks yet.\nChoose a stock and click Buy!',
    dg_day:'Business Day', dg_cash:'Cash', dg_profit:'Total Profit', dg_sales:"Today's Sales",
    dg_products_title:'🛍️ My Products — Set price and ad budget',
    dg_feed_title:'📊 Live Activity', dg_open:'🚀 Store opened! Customers starting to browse...',
    footer:'🚀 MoneyMind Academy | All Rights Reserved | The Financial Academy for the Next Generation',
    footer_tagline:'The Leading Financial Academy for the Next Generation',
    ls_s1_title:'What is a Stock?', ls_s1_tag:'Fundamentals', ls_s1_desc:'An ownership stake in a company — when you buy an Apple share you become a small partner',
    ls_s2_title:'Why Does a Stock Rise?', ls_s2_tag:'Fundamentals', ls_s2_desc:'More buyers than sellers = price rises. The stock market is psychology, not physics',
    ls_s3_title:'How to Choose a Stock?', ls_s3_tag:'Strategy', ls_s3_desc:'4 rules: know the product, be their customer, profitable company, diversify',
    ls_s4_title:'Reading Charts', ls_s4_tag:'Technical', ls_s4_desc:'Uptrend, downtrend, and sideways — how to read the story of a stock',
    ls_s5_title:'Support & Resistance', ls_s5_tag:'Technical', ls_s5_desc:'The floor and ceiling of a stock — when to buy and when to sell',
    ls_s6_title:'Market Cap', ls_s6_tag:'Fundamentals', ls_s6_desc:'Share price ≠ company value. Apple is worth more despite a lower price',
    ls_s7_title:'Beta & Volatility', ls_s7_tag:'Risk', ls_s7_desc:'How volatile a stock is — stable companies vs speculative stocks',
    ls_s8_title:'Trading Psychology', ls_s8_tag:'Psychology', ls_s8_desc:'FOMO, panic, overconfidence — the biggest enemies of investors',
    ls_s9_title:'Stop Loss & Take Profit', ls_s9_tag:'Strategy', ls_s9_desc:'The defense line and profit target — how to protect your investment',
    ls_s10_title:'Investment Diversification', ls_s10_tag:'Strategy', ls_s10_desc:'Don\'t put all eggs in one basket — smart diversification reduces risk',
    ls_s11_title:'Fundamental Analysis', ls_s11_tag:'Advanced', ls_s11_desc:'P/E, EPS, financial reports — the tools of a real investor',
    ls_s12_title:'Candlestick Charts', ls_s12_tag:'Technical', ls_s12_desc:'Every candle tells a story — green means buyers won, red means sellers won',
    ls_s13_title:'Short Selling', ls_s13_tag:'Advanced', ls_s13_desc:'How to profit when a stock falls — sell before you buy',
    ls_d1_title:'What is Dropshipping?', ls_d1_tag:'Fundamentals', ls_d1_desc:'Sell products without inventory — the supplier ships directly to the customer',
    ls_d2_title:'Dropshipping with a Parent', ls_d2_tag:'Fundamentals', ls_d2_desc:'How to run a legitimate business even when you\'re a minor',
    ls_d3_title:'The Money Engine', ls_d3_tag:'Strategy', ls_d3_desc:'The equation: product price × margin × volume = profit',
    ls_d4_title:'Dropshipping vs App', ls_d4_tag:'Fundamentals', ls_d4_desc:'Comparing business models — which one fits you best?',
    ls_d5_title:'Finding a Winning Product', ls_d5_tag:'Product', ls_d5_desc:'TikTok, AliExpress, Minea — the complete guide to product research',
    ls_d6_title:'Working with Suppliers', ls_d6_tag:'Suppliers', ls_d6_desc:'AliExpress, CJ, Spocket — how to choose and manage suppliers',
    ls_d7_title:'Building a Shopify Store', ls_d7_tag:'Technical', ls_d7_desc:'Design, product page, checkout — a step-by-step store setup guide',
    ls_d8_title:'Advertising on Meta Ads', ls_d8_tag:'Marketing', ls_d8_desc:'Audiences, creatives, budget — how to get profitable customers',
    ls_d9_title:'Customer Service', ls_d9_tag:'Management', ls_d9_desc:'Reviews, returns, reputation — the key to a long-term business',
    ls_d10_title:'Data Analysis & Profitability', ls_d10_tag:'Advanced', ls_d10_desc:'ROAS, CPP, LTV — the truth behind the numbers',
    ls_d11_title:'Automation & Scaling', ls_d11_tag:'Advanced', ls_d11_desc:'DSers, Klaviyo, Tidio — how the business runs itself',
    dg_sale_prefix:'Sale!', dg_profit_word:'Profit', dg_browsed:'Customer browsed',
    dg_day_word:'Day', dg_store_open:'Store opened.', dg_ad_cost:'Daily ad cost',
    dg_too_expensive:'Too expensive', dg_low_demand:'Low demand right now', dg_not_fit:'Not the right fit right now',
    dg_tip_prefix:'Tip: Profit on', dg_tip_suffix:'is low. Consider raising the price to',
    dg_cost_word:'Cost', dg_low_label:'Low', dg_demand_word:'Demand',
    lang_names:{en:'🇺🇸 EN', he:'🇮🇱 HE', es:'🇪🇸 ES', fr:'🇫🇷 FR', ar:'🇸🇦 AR', ru:'🇷🇺 RU'},
  },
  he: {
    nav_logo:'🚀 MoneyMind', nav_stocks:'📈 מניות', nav_drop:'🛒 דרופשיפינג',
    nav_calc:'💰 מחשבון', nav_quiz:'🧠 קוויז', nav_games:'🎮 משחקים', nav_auth:'כניסה / הרשמה',
    header_tag:'האקדמיה הפיננסית המובילה לדור הבא',
    header_h1_1:'למד. סחר.', header_h1_2:'תצליח כלכלית.',
    header_subtitle:'קורסים מקצועיים במניות ודרופשיפינג — מאפס לרמה גבוהה, עם סימולטורים חיים',
    stat_lessons:'שיעורים מקצועיים', stat_stocks:'מניות בסימולטור', stat_potential:'פוטנציאל',
    stocks_title:'📈 קורס מניות', stocks_desc:'מהבסיס ועד ניתוח מתקדם — כל מה שצריך לדעת כדי להשקיע חכם',
    drop_title:'🛒 קורס דרופשיפינג', drop_desc:'בנה עסק אונליין רווחי — מבחירת מוצר, דרך פרסום, ועד אוטומציה מלאה',
    calc_title:'💰 מחשבון צמיחת הון', calc_desc:'הזן את הנתונים שלך וגלה לאן הכסף שלך יגיע בעוד 5, 10, 20 שנה',
    quiz_title:'🧠 בחינת ידע', quiz_desc:'בדוק את עצמך — כמה מהחומר ספגת? קבל ציון ודע מה לחזור עליו',
    games_title:'🎮 סימולטורים חיים', games_desc:'תרגל את מה שלמדת עם כסף וירטואלי — שוק המניות ועסק דרופשיפינג אמיתי בלי סיכון',
    auth_login_tab:'כניסה', auth_register_tab:'הרשמה',
    auth_login_title:'ברוך הבא 👋', auth_login_subtitle:'התחבר לחשבונך',
    auth_register_title:'הצטרף עכשיו 🚀', auth_register_subtitle:'הצטרף ל-MoneyMind — גישה מלאה לכל הקורסים',
    label_email:'אימייל', label_password:'סיסמה', label_fullname:'שם מלא',
    btn_login:'כנס', btn_register:'המשך לתשלום ←',
    pay_title:'תשלום בטוח', pay_subtitle:'גישה מלאה לכל קורסי MoneyMind',
    pay_feature1:'✅ גישה מלאה לכל השיעורים', pay_feature2:'✅ מחשבון השקעות מתקדם',
    pay_feature3:'✅ קוויז ובדיקות ידע', pay_feature4:'✅ עדכונים עתידיים חינם',
    label_card:'מספר כרטיס', label_expiry:'תוקף', label_cvv:'CVV', label_cardname:'שם על הכרטיס',
    btn_pay:'שלם ₪37 בבטחה', price_badge:'₪37', secure_note:'🔒 תשלום מוצפן ומאובטח',
    success_title:'ברוך הבא ל-MoneyMind! 🚀', success_subtitle:'התשלום התקבל בהצלחה',
    email_sent_title:'קוד הגישה נשלח למייל', access_code_label:'קוד הגישה שלך',
    btn_start:'התחל ללמוד 🚀', lp_back:'← חזור לשיעורים',
    calc_start:'סכום התחלתי', calc_yearly:'הפקדה שנתית', calc_rate:'תשואה שנתית',
    calc_years:'מספר שנים', calc_years_word:'שנים', calc_total:'סה"כ בסוף התקופה', calc_invested:'כסף שהכנסת',
    calc_profit:'רווח מהשוק', calc_mult:'פי כמה גדל',
    quiz_question_of:'שאלה {n} מתוך {total}', quiz_next:'שאלה הבאה ←',
    quiz_see_results:'ראה תוצאות 🎉', quiz_answered:'ענית נכון על {score} שאלות',
    quiz_amazing:'מדהים! אתה מוכן 🚀', quiz_almost:'כמעט! תחזור לשיעורים 💪',
    quiz_restart:'נסה שוב',
    game_tab_stocks:'📈 שוק המניות', game_tab_drop:'🛒 דרופשיפינג',
    sg_cash:'מזומן', sg_portfolio:'שווי תיק', sg_pnl:'רווח/הפסד', sg_reset:'🔄 התחל מחדש',
    sg_news_default:'📡 שוק פתוח — עוקב אחר חדשות...',
    sg_search_placeholder:'🔍 חפש מניה...', sg_all_sectors:'כל הסקטורים',
    sg_my_portfolio:'💼 התיק שלי', sg_no_stocks:'עדיין לא קנית מניות.\nבחר מניה ולחץ קנה!',
    dg_day:'יום עסקים', dg_cash:'מזומן', dg_profit:'רווח כולל', dg_sales:'מכירות היום',
    dg_products_title:'🛍️ המוצרים שלי — קבע מחיר ותקציב פרסום',
    dg_feed_title:'📊 פעילות חיה', dg_open:'🚀 החנות נפתחה! לקוחות מתחילים לגלוש...',
    footer:'🚀 MoneyMind Academy | כל הזכויות שמורות | האקדמיה הפיננסית לדור הבא',
    footer_tagline:'האקדמיה הפיננסית המובילה לדור הבא',
    ls_s1_title:'מה זו מניה?', ls_s1_tag:'יסודות', ls_s1_desc:'חלק בעלות בחברה — כשקונים מניה של אפל הופכים לשותפים קטנים שלה',
    ls_s2_title:'למה מניה עולה?', ls_s2_tag:'יסודות', ls_s2_desc:'יותר קונים ממוכרים = מחיר עולה. הבורסה היא פסיכולוגיה, לא פיזיקה',
    ls_s3_title:'איך בוחרים מניה?', ls_s3_tag:'אסטרטגיה', ls_s3_desc:'4 כללים: מכיר את המוצר, לקוח שלהם, מרוויחה כסף, פיזור',
    ls_s4_title:'קריאת גרפים', ls_s4_tag:'טכני', ls_s4_desc:'מגמת עלייה, ירידה וצידית — איך לקרוא את סיפור המניה',
    ls_s5_title:'תמיכה והתנגדות', ls_s5_tag:'טכני', ls_s5_desc:'הרצפה והתקרה של המניה — מתי לקנות ומתי למכור',
    ls_s6_title:'Market Cap', ls_s6_tag:'יסודות', ls_s6_desc:'מחיר מניה ≠ שווי חברה. אפל יקרה יותר למרות מחיר נמוך יותר',
    ls_s7_title:'ביטא ותנודתיות', ls_s7_tag:'סיכון', ls_s7_desc:'כמה מניה תנודתית — חברות יציבות vs מניות ספקולטיביות',
    ls_s8_title:'פסיכולוגיה במסחר', ls_s8_tag:'פסיכולוגיה', ls_s8_desc:'FOMO, פאניקה, ביטחון יתר — האויבים הכי גדולים של המשקיעים',
    ls_s9_title:'Stop Loss ו-Take Profit', ls_s9_tag:'אסטרטגיה', ls_s9_desc:'קו ההגנה ומטרת הרווח — כיצד להגן על ההשקעה',
    ls_s10_title:'פיזור השקעות', ls_s10_tag:'אסטרטגיה', ls_s10_desc:'לא לשים הכל בסל אחד — פיזור חכם מפחית סיכון',
    ls_s11_title:'ניתוח פונדמנטלי', ls_s11_tag:'מתקדם', ls_s11_desc:'P/E, EPS, דוחות כספיים — הכלים של המשקיע האמיתי',
    ls_s12_title:'נרות יפניים', ls_s12_tag:'טכני', ls_s12_desc:'כל נר מספר סיפור — ירוק אומר הקונים ניצחו, אדום אומר המוכרים ניצחו',
    ls_s13_title:'שורט — מכירה בחסר', ls_s13_tag:'מתקדם', ls_s13_desc:'איך מרוויחים כשמניה יורדת — מוכרים לפני שקונים',
    ls_d1_title:'מה זה דרופשיפינג?', ls_d1_tag:'יסודות', ls_d1_desc:'עסק אונליין ללא מלאי — הספק שולח ישירות ללקוח',
    ls_d2_title:'דרופשיפינג עם הורה', ls_d2_tag:'יסודות', ls_d2_desc:'איך להקים עסק לגיטימי גם כשאתה קטין',
    ls_d3_title:'מנוע הכסף', ls_d3_tag:'אסטרטגיה', ls_d3_desc:'המשוואה: מחיר מוצר × מרג׳ין × כמות = רווח',
    ls_d4_title:'דרופשיפינג vs אפליקציה', ls_d4_tag:'יסודות', ls_d4_desc:'השוואת מודלים עסקיים — מה מתאים לך?',
    ls_d5_title:'איך מוצאים מוצר מנצח?', ls_d5_tag:'מוצר', ls_d5_desc:'TikTok, AliExpress, Minea — המדריך המלא למחקר מוצרים',
    ls_d6_title:'איך עובדים עם ספקים?', ls_d6_tag:'ספקים', ls_d6_desc:'AliExpress, CJ, Spocket — איך בוחרים ומנהלים',
    ls_d7_title:'בניית חנות Shopify', ls_d7_tag:'טכני', ls_d7_desc:'עיצוב, עמוד מוצר, תשלום — מדריך שלב אחר שלב',
    ls_d8_title:'פרסום ב-Meta Ads', ls_d8_tag:'שיווק', ls_d8_desc:'קהלים, Creative, תקציב — איך מקבלים לקוחות רווחיים',
    ls_d9_title:'שירות לקוחות', ls_d9_tag:'ניהול', ls_d9_desc:'ביקורות, החזרות, מוניטין — המפתח לביזנס ארוך טווח',
    ls_d10_title:'ניתוח נתונים ורווחיות', ls_d10_tag:'מתקדם', ls_d10_desc:'ROAS, CPP, LTV — האמת שמאחורי הנתונים',
    ls_d11_title:'אוטומציה וסקייל', ls_d11_tag:'מתקדם', ls_d11_desc:'DSers, Klaviyo, Tidio — איך הביזנס מנהל את עצמו',
    dg_sale_prefix:'מכירה!', dg_profit_word:'רווח', dg_browsed:'לקוח גלש',
    dg_day_word:'יום', dg_store_open:'החנות נפתחה.', dg_ad_cost:'עלות פרסום יומית',
    dg_too_expensive:'יקר מדי', dg_low_demand:'ביקוש נמוך כרגע', dg_not_fit:'לא מתאים עכשיו',
    dg_tip_prefix:'טיפ: הרווח על', dg_tip_suffix:'נמוך. שקול להעלות המחיר ל-',
    dg_cost_word:'עלות', dg_low_label:'נמוך', dg_demand_word:'ביקוש',
    lang_names:{en:'🇺🇸 EN', he:'🇮🇱 HE', es:'🇪🇸 ES', fr:'🇫🇷 FR', ar:'🇸🇦 AR', ru:'🇷🇺 RU'},
  },
  es: {
    nav_logo:'🚀 MoneyMind', nav_stocks:'📈 Acciones', nav_drop:'🛒 Dropshipping',
    nav_calc:'💰 Calculadora', nav_quiz:'🧠 Quiz', nav_games:'🎮 Juegos', nav_auth:'Entrar / Registrarse',
    header_tag:'La Academia Financiera Líder para la Nueva Generación',
    header_h1_1:'Aprende. Opera.', header_h1_2:'Triunfa Financieramente.',
    header_subtitle:'Cursos profesionales de acciones y dropshipping — de cero al nivel avanzado',
    stat_lessons:'Lecciones Profesionales', stat_stocks:'Acciones en Simulador', stat_potential:'Potencial',
    stocks_title:'📈 Curso de Acciones', stocks_desc:'Desde lo básico hasta análisis avanzado — todo lo que necesitas para invertir inteligentemente',
    drop_title:'🛒 Curso de Dropshipping', drop_desc:'Construye un negocio online rentable — desde la selección de producto hasta la automatización total',
    calc_title:'💰 Calculadora de Crecimiento', calc_desc:'Introduce tus datos y descubre dónde estará tu dinero en 5, 10, 20 años',
    quiz_title:'🧠 Prueba de Conocimiento', quiz_desc:'Evalúate — ¿cuánto has absorbido? Obtén una puntuación',
    games_title:'🎮 Simuladores en Vivo', games_desc:'Practica lo aprendido con dinero virtual — sin riesgo real',
    auth_login_tab:'Entrar', auth_register_tab:'Registro',
    auth_login_title:'Bienvenido 👋', auth_login_subtitle:'Inicia sesión en tu cuenta',
    auth_register_title:'Únete Ahora 🚀', auth_register_subtitle:'Únete a MoneyMind — Acceso completo a todos los cursos',
    label_email:'Correo electrónico', label_password:'Contraseña', label_fullname:'Nombre completo',
    btn_login:'Entrar', btn_register:'Continuar al Pago →',
    pay_title:'Pago Seguro', pay_subtitle:'Acceso completo a todos los cursos de MoneyMind',
    pay_feature1:'✅ Acceso completo a todas las lecciones', pay_feature2:'✅ Calculadora de inversiones avanzada',
    pay_feature3:'✅ Quiz y pruebas de conocimiento', pay_feature4:'✅ Actualizaciones futuras gratis',
    label_card:'Número de Tarjeta', label_expiry:'Vencimiento', label_cvv:'CVV', label_cardname:'Nombre en la Tarjeta',
    btn_pay:'Pagar €9 de forma segura', price_badge:'€9', secure_note:'🔒 Pago cifrado y seguro',
    success_title:'¡Bienvenido a MoneyMind! 🚀', success_subtitle:'Pago recibido con éxito',
    email_sent_title:'Código de acceso enviado al correo', access_code_label:'Tu Código de Acceso',
    btn_start:'Comenzar a Aprender 🚀', lp_back:'← Volver a Lecciones',
    calc_start:'Monto Inicial', calc_yearly:'Depósito Anual', calc_rate:'Rendimiento Anual',
    calc_years:'Número de Años', calc_years_word:'años', calc_total:'Total al Final', calc_invested:'Dinero Invertido',
    calc_profit:'Ganancia del Mercado', calc_mult:'Multiplicador de Crecimiento',
    quiz_question_of:'Pregunta {n} de {total}', quiz_next:'Siguiente Pregunta →',
    quiz_see_results:'Ver Resultados 🎉', quiz_answered:'Respondiste {score} preguntas correctamente',
    quiz_amazing:'¡Increíble! Estás listo 🚀', quiz_almost:'¡Casi! Repasa las lecciones 💪',
    quiz_restart:'Intentar de Nuevo',
    game_tab_stocks:'📈 Bolsa de Valores', game_tab_drop:'🛒 Dropshipping',
    sg_cash:'Efectivo', sg_portfolio:'Valor del Portfolio', sg_pnl:'Ganancias/Pérdidas', sg_reset:'🔄 Reiniciar',
    sg_news_default:'📡 Mercado abierto — siguiendo noticias...',
    sg_search_placeholder:'🔍 Buscar acción...', sg_all_sectors:'Todos los Sectores',
    sg_my_portfolio:'💼 Mi Portfolio', sg_no_stocks:'Aún no tienes acciones.\n¡Elige una y haz clic en Comprar!',
    dg_day:'Día de Negocios', dg_cash:'Efectivo', dg_profit:'Ganancia Total', dg_sales:'Ventas de Hoy',
    dg_products_title:'🛍️ Mis Productos — Define precio y presupuesto publicitario',
    dg_feed_title:'📊 Actividad en Vivo', dg_open:'🚀 ¡Tienda abierta! Los clientes empiezan a navegar...',
    footer:'🚀 MoneyMind Academy | Todos los Derechos Reservados',
    ls_s1_title:'¿Qué es una Acción?', ls_s1_tag:'Fundamentos', ls_s1_desc:'Una participación en una empresa — cuando compras Apple te vuelves socio',
    ls_s2_title:'¿Por qué sube una Acción?', ls_s2_tag:'Fundamentos', ls_s2_desc:'Más compradores que vendedores = sube el precio. La bolsa es psicología',
    ls_s3_title:'¿Cómo elegir una Acción?', ls_s3_tag:'Estrategia', ls_s3_desc:'4 reglas: conoce el producto, sé cliente, empresa rentable, diversifica',
    ls_s4_title:'Lectura de Gráficos', ls_s4_tag:'Técnico', ls_s4_desc:'Tendencia alcista, bajista y lateral — cómo leer la historia de una acción',
    ls_s5_title:'Soporte y Resistencia', ls_s5_tag:'Técnico', ls_s5_desc:'El suelo y el techo de una acción — cuándo comprar y cuándo vender',
    ls_s6_title:'Capitalización de Mercado', ls_s6_tag:'Fundamentos', ls_s6_desc:'Precio de acción ≠ valor de empresa. Apple vale más aunque sea más barata',
    ls_s7_title:'Beta y Volatilidad', ls_s7_tag:'Riesgo', ls_s7_desc:'Cuán volátil es una acción — empresas estables vs acciones especulativas',
    ls_s8_title:'Psicología del Trading', ls_s8_tag:'Psicología', ls_s8_desc:'FOMO, pánico, exceso de confianza — los mayores enemigos del inversor',
    ls_s9_title:'Stop Loss y Take Profit', ls_s9_tag:'Estrategia', ls_s9_desc:'La línea de defensa y el objetivo de ganancia — cómo proteger tu inversión',
    ls_s10_title:'Diversificación', ls_s10_tag:'Estrategia', ls_s10_desc:'No pongas todos los huevos en una cesta — la diversificación reduce el riesgo',
    ls_s11_title:'Análisis Fundamental', ls_s11_tag:'Avanzado', ls_s11_desc:'P/E, EPS, informes financieros — las herramientas del inversor real',
    ls_d1_title:'¿Qué es el Dropshipping?', ls_d1_tag:'Fundamentos', ls_d1_desc:'Vende sin inventario — el proveedor envía directamente al cliente',
    ls_d2_title:'Dropshipping con un Padre', ls_d2_tag:'Fundamentos', ls_d2_desc:'Cómo crear un negocio legítimo incluso siendo menor de edad',
    ls_d3_title:'El Motor del Dinero', ls_d3_tag:'Estrategia', ls_d3_desc:'La ecuación: precio × margen × volumen = ganancia',
    ls_d4_title:'Dropshipping vs App', ls_d4_tag:'Fundamentos', ls_d4_desc:'Comparando modelos de negocio — ¿cuál te conviene?',
    ls_d5_title:'Encontrar un Producto Ganador', ls_d5_tag:'Producto', ls_d5_desc:'TikTok, AliExpress, Minea — la guía completa de investigación de productos',
    ls_d6_title:'Trabajar con Proveedores', ls_d6_tag:'Proveedores', ls_d6_desc:'AliExpress, CJ, Spocket — cómo elegir y gestionar proveedores',
    ls_d7_title:'Crear Tienda en Shopify', ls_d7_tag:'Técnico', ls_d7_desc:'Diseño, página de producto, pago — guía paso a paso',
    ls_d8_title:'Publicidad en Meta Ads', ls_d8_tag:'Marketing', ls_d8_desc:'Audiencias, creatividades, presupuesto — cómo conseguir clientes rentables',
    ls_d9_title:'Servicio al Cliente', ls_d9_tag:'Gestión', ls_d9_desc:'Reseñas, devoluciones, reputación — la clave para un negocio duradero',
    ls_d10_title:'Análisis de Datos y Rentabilidad', ls_d10_tag:'Avanzado', ls_d10_desc:'ROAS, CPP, LTV — la verdad detrás de los números',
    ls_d11_title:'Automatización y Escalado', ls_d11_tag:'Avanzado', ls_d11_desc:'DSers, Klaviyo, Tidio — cómo el negocio se gestiona solo',
    dg_sale_prefix:'¡Venta!', dg_profit_word:'Ganancia', dg_browsed:'Cliente navegó',
    dg_day_word:'Día', dg_store_open:'Tienda abierta.', dg_ad_cost:'Coste publicitario diario',
    dg_too_expensive:'Muy caro', dg_low_demand:'Poca demanda ahora', dg_not_fit:'No encaja ahora',
    dg_tip_prefix:'Consejo: Ganancia en', dg_tip_suffix:'es baja. Sube el precio a',
    dg_cost_word:'Coste', dg_low_label:'Bajo', dg_demand_word:'Demanda',
    lang_names:{en:'🇺🇸 EN', he:'🇮🇱 HE', es:'🇪🇸 ES', fr:'🇫🇷 FR', ar:'🇸🇦 AR', ru:'🇷🇺 RU'},
  },
  fr: {
    nav_logo:'🚀 MoneyMind', nav_stocks:'📈 Actions', nav_drop:'🛒 Dropshipping',
    nav_calc:'💰 Calculateur', nav_quiz:'🧠 Quiz', nav_games:'🎮 Jeux', nav_auth:'Connexion / Inscription',
    header_tag:"L'Académie Financière de la Prochaine Génération",
    header_h1_1:'Apprenez. Tradez.', header_h1_2:'Réussissez Financièrement.',
    header_subtitle:"Cours professionnels en actions et dropshipping — du débutant au niveau avancé",
    stat_lessons:'Leçons Professionnelles', stat_stocks:'Actions dans le Simulateur', stat_potential:'Potentiel',
    stocks_title:"📈 Cours sur les Actions", stocks_desc:"Des bases aux analyses avancées",
    drop_title:"🛒 Cours sur le Dropshipping", drop_desc:"Créez une entreprise en ligne rentable",
    calc_title:"💰 Calculateur de Croissance", calc_desc:"Entrez vos données et découvrez où sera votre argent",
    quiz_title:"🧠 Test de Connaissances", quiz_desc:"Évaluez-vous — combien avez-vous assimilé?",
    games_title:"🎮 Simulateurs en Direct", games_desc:"Pratiquez avec de l'argent virtuel — sans risque réel",
    auth_login_tab:'Connexion', auth_register_tab:'Inscription',
    auth_login_title:'Bienvenue 👋', auth_login_subtitle:'Connectez-vous à votre compte',
    auth_register_title:'Rejoignez Maintenant 🚀', auth_register_subtitle:'Rejoignez MoneyMind — Accès complet à tous les cours',
    label_email:'Email', label_password:'Mot de passe', label_fullname:'Nom complet',
    btn_login:'Se Connecter', btn_register:'Continuer vers le Paiement →',
    pay_title:'Paiement Sécurisé', pay_subtitle:'Accès complet à tous les cours MoneyMind',
    pay_feature1:"✅ Accès complet à toutes les leçons", pay_feature2:"✅ Calculateur d'investissement avancé",
    pay_feature3:"✅ Quiz et tests de connaissances", pay_feature4:"✅ Mises à jour futures gratuites",
    label_card:'Numéro de Carte', label_expiry:'Expiration', label_cvv:'CVV', label_cardname:'Nom sur la Carte',
    btn_pay:'Payer €9 en toute sécurité', price_badge:'€9', secure_note:'🔒 Paiement chiffré et sécurisé',
    success_title:'Bienvenue chez MoneyMind! 🚀', success_subtitle:'Paiement reçu avec succès',
    email_sent_title:"Code d'accès envoyé par email", access_code_label:"Votre Code d'Accès",
    btn_start:'Commencer à Apprendre 🚀', lp_back:'← Retour aux Leçons',
    calc_start:'Montant Initial', calc_yearly:'Dépôt Annuel', calc_rate:'Rendement Annuel',
    calc_years:"Nombre d'Années", calc_years_word:'ans', calc_total:'Total à la Fin', calc_invested:'Argent Investi',
    calc_profit:'Profit du Marché', calc_mult:'Multiplicateur de Croissance',
    quiz_question_of:'Question {n} sur {total}', quiz_next:'Question Suivante →',
    quiz_see_results:'Voir les Résultats 🎉', quiz_answered:'Vous avez répondu correctement à {score} questions',
    quiz_amazing:'Incroyable! Vous êtes prêt 🚀', quiz_almost:'Presque! Révisez les leçons 💪',
    quiz_restart:'Réessayer',
    game_tab_stocks:'📈 Bourse', game_tab_drop:'🛒 Dropshipping',
    sg_cash:'Espèces', sg_portfolio:'Valeur du Portfolio', sg_pnl:'Gains/Pertes', sg_reset:'🔄 Réinitialiser',
    sg_news_default:'📡 Marché ouvert — suivi des actualités...',
    sg_search_placeholder:'🔍 Rechercher une action...', sg_all_sectors:'Tous les Secteurs',
    sg_my_portfolio:'💼 Mon Portfolio', sg_no_stocks:"Pas encore d'actions.\nChoisissez-en une et cliquez Acheter!",
    dg_day:"Jour d'Activité", dg_cash:'Espèces', dg_profit:'Profit Total', dg_sales:"Ventes d'Aujourd'hui",
    dg_products_title:'🛍️ Mes Produits — Définir le prix et le budget publicitaire',
    dg_feed_title:'📊 Activité en Direct', dg_open:"🚀 Boutique ouverte! Les clients commencent à naviguer...",
    footer:'🚀 MoneyMind Academy | Tous Droits Réservés',
    ls_s1_title:"Qu'est-ce qu'une Action?", ls_s1_tag:'Fondamentaux', ls_s1_desc:"Une part de propriété dans une entreprise — acheter Apple vous en rend actionnaire",
    ls_s2_title:"Pourquoi une Action Monte?", ls_s2_tag:'Fondamentaux', ls_s2_desc:"Plus d'acheteurs que de vendeurs = le prix monte. La bourse c'est de la psychologie",
    ls_s3_title:"Comment Choisir une Action?", ls_s3_tag:'Stratégie', ls_s3_desc:"4 règles: connaître le produit, être client, entreprise rentable, diversifier",
    ls_s4_title:'Lecture des Graphiques', ls_s4_tag:'Technique', ls_s4_desc:'Tendance haussière, baissière et latérale — comment lire une action',
    ls_s5_title:'Support et Résistance', ls_s5_tag:'Technique', ls_s5_desc:"Le plancher et le plafond d'une action — quand acheter et quand vendre",
    ls_s6_title:'Capitalisation Boursière', ls_s6_tag:'Fondamentaux', ls_s6_desc:"Prix de l'action ≠ valeur de l'entreprise. Apple vaut plus malgré un prix inférieur",
    ls_s7_title:'Bêta et Volatilité', ls_s7_tag:'Risque', ls_s7_desc:'La volatilité des actions — entreprises stables vs actions spéculatives',
    ls_s8_title:'Psychologie du Trading', ls_s8_tag:'Psychologie', ls_s8_desc:"FOMO, panique, excès de confiance — les pires ennemis de l'investisseur",
    ls_s9_title:'Stop Loss et Take Profit', ls_s9_tag:'Stratégie', ls_s9_desc:"La ligne de défense et l'objectif de profit — comment protéger son investissement",
    ls_s10_title:'Diversification', ls_s10_tag:'Stratégie', ls_s10_desc:"Ne pas mettre tous ses oeufs dans le même panier — la diversification réduit le risque",
    ls_s11_title:'Analyse Fondamentale', ls_s11_tag:'Avancé', ls_s11_desc:"P/E, BPA, rapports financiers — les outils du vrai investisseur",
    ls_d1_title:"Qu'est-ce que le Dropshipping?", ls_d1_tag:'Fondamentaux', ls_d1_desc:"Vendez sans stock — le fournisseur livre directement au client",
    ls_d2_title:'Dropshipping avec un Parent', ls_d2_tag:'Fondamentaux', ls_d2_desc:'Comment créer une entreprise légitime même mineur',
    ls_d3_title:"Le Moteur de l'Argent", ls_d3_tag:'Stratégie', ls_d3_desc:'L\'équation: prix × marge × volume = profit',
    ls_d4_title:'Dropshipping vs Application', ls_d4_tag:'Fondamentaux', ls_d4_desc:'Comparaison des modèles commerciaux — lequel vous convient?',
    ls_d5_title:'Trouver un Produit Gagnant', ls_d5_tag:'Produit', ls_d5_desc:'TikTok, AliExpress, Minea — le guide complet de la recherche produit',
    ls_d6_title:'Travailler avec des Fournisseurs', ls_d6_tag:'Fournisseurs', ls_d6_desc:'AliExpress, CJ, Spocket — comment choisir et gérer les fournisseurs',
    ls_d7_title:'Créer une Boutique Shopify', ls_d7_tag:'Technique', ls_d7_desc:'Design, page produit, paiement — guide pas à pas',
    ls_d8_title:'Publicité sur Meta Ads', ls_d8_tag:'Marketing', ls_d8_desc:'Audiences, créatifs, budget — comment obtenir des clients rentables',
    ls_d9_title:'Service Client', ls_d9_tag:'Gestion', ls_d9_desc:'Avis, retours, réputation — la clé pour une entreprise durable',
    ls_d10_title:'Analyse des Données', ls_d10_tag:'Avancé', ls_d10_desc:'ROAS, CPP, LTV — la vérité derrière les chiffres',
    ls_d11_title:'Automatisation et Croissance', ls_d11_tag:'Avancé', ls_d11_desc:'DSers, Klaviyo, Tidio — comment le business tourne tout seul',
    dg_sale_prefix:'Vente!', dg_profit_word:'Profit', dg_browsed:'Client a navigué',
    dg_day_word:'Jour', dg_store_open:'Boutique ouverte.', dg_ad_cost:'Coût pub quotidien',
    dg_too_expensive:'Trop cher', dg_low_demand:'Faible demande', dg_not_fit:'Pas adapté maintenant',
    dg_tip_prefix:'Conseil: Profit sur', dg_tip_suffix:'est faible. Augmentez le prix à',
    dg_cost_word:'Coût', dg_low_label:'Faible', dg_demand_word:'Demande',
    lang_names:{en:'🇺🇸 EN', he:'🇮🇱 HE', es:'🇪🇸 ES', fr:'🇫🇷 FR', ar:'🇸🇦 AR', ru:'🇷🇺 RU'},
  },
  ar: {
    nav_logo:'🚀 MoneyMind', nav_stocks:'📈 الأسهم', nav_drop:'🛒 دروبشيبينغ',
    nav_calc:'💰 الحاسبة', nav_quiz:'🧠 اختبار', nav_games:'🎮 ألعاب', nav_auth:'دخول / تسجيل',
    header_tag:'أكاديمية مالية رائدة للجيل القادم',
    header_h1_1:'تعلّم. تداوَل.', header_h1_2:'انجح مالياً.',
    header_subtitle:'دورات احترافية في الأسهم والدروبشيبينغ — من الصفر إلى المستوى المتقدم',
    stat_lessons:'دروس احترافية', stat_stocks:'سهم في المحاكي', stat_potential:'إمكانات لا محدودة',
    stocks_title:'📈 دورة الأسهم', stocks_desc:'من الأساسيات إلى التحليل المتقدم',
    drop_title:'🛒 دورة الدروبشيبينغ', drop_desc:'بناء عمل تجاري مربح عبر الإنترنت',
    calc_title:'💰 حاسبة نمو رأس المال', calc_desc:'أدخل بياناتك واكتشف أين سيكون مالك',
    quiz_title:'🧠 اختبار المعرفة', quiz_desc:'اختبر نفسك — كم استوعبت?',
    games_title:'🎮 محاكيات حية', games_desc:'تدرب على ما تعلمته بأموال افتراضية',
    auth_login_tab:'دخول', auth_register_tab:'تسجيل',
    auth_login_title:'أهلاً بك 👋', auth_login_subtitle:'سجل دخولك إلى حسابك',
    auth_register_title:'انضم الآن 🚀', auth_register_subtitle:'انضم إلى MoneyMind — وصول كامل لجميع الدورات',
    label_email:'البريد الإلكتروني', label_password:'كلمة المرور', label_fullname:'الاسم الكامل',
    btn_login:'دخول', btn_register:'متابعة للدفع →',
    pay_title:'دفع آمن', pay_subtitle:'وصول كامل لجميع دورات MoneyMind',
    pay_feature1:'✅ وصول كامل لجميع الدروس', pay_feature2:'✅ حاسبة استثمار متقدمة',
    pay_feature3:'✅ اختبارات ومسابقات', pay_feature4:'✅ تحديثات مستقبلية مجانية',
    label_card:'رقم البطاقة', label_expiry:'تاريخ الانتهاء', label_cvv:'CVV', label_cardname:'الاسم على البطاقة',
    btn_pay:'ادفع $10 بأمان', price_badge:'$10', secure_note:'🔒 دفع مشفر وآمن',
    success_title:'أهلاً بك في MoneyMind! 🚀', success_subtitle:'تم استلام الدفع بنجاح',
    email_sent_title:'تم إرسال رمز الوصول إلى بريدك', access_code_label:'رمز الوصول الخاص بك',
    btn_start:'ابدأ التعلم 🚀', lp_back:'← العودة إلى الدروس',
    calc_start:'المبلغ الأولي', calc_yearly:'الإيداع السنوي', calc_rate:'العائد السنوي',
    calc_years:'عدد السنوات', calc_years_word:'سنوات', calc_total:'المجموع في النهاية', calc_invested:'الأموال المستثمرة',
    calc_profit:'الربح من السوق', calc_mult:'مضاعف النمو',
    quiz_question_of:'السؤال {n} من {total}', quiz_next:'السؤال التالي →',
    quiz_see_results:'عرض النتائج 🎉', quiz_answered:'أجبت على {score} سؤالاً بشكل صحيح',
    quiz_amazing:'رائع! أنت مستعد 🚀', quiz_almost:'تقريباً! راجع الدروس 💪',
    quiz_restart:'حاول مرة أخرى',
    game_tab_stocks:'📈 سوق الأسهم', game_tab_drop:'🛒 دروبشيبينغ',
    sg_cash:'نقداً', sg_portfolio:'قيمة المحفظة', sg_pnl:'ربح/خسارة', sg_reset:'🔄 إعادة تشغيل',
    sg_news_default:'📡 السوق مفتوح — متابعة الأخبار...',
    sg_search_placeholder:'🔍 ابحث عن سهم...', sg_all_sectors:'جميع القطاعات',
    sg_my_portfolio:'💼 محفظتي', sg_no_stocks:'لم تشترِ أسهماً بعد.\nاختر سهماً وانقر شراء!',
    dg_day:'يوم عمل', dg_cash:'نقداً', dg_profit:'إجمالي الربح', dg_sales:'مبيعات اليوم',
    dg_products_title:'🛍️ منتجاتي — حدد السعر وميزانية الإعلانات',
    dg_feed_title:'📊 النشاط المباشر', dg_open:'🚀 المتجر مفتوح! العملاء يبدأون في التصفح...',
    footer:'🚀 MoneyMind Academy | جميع الحقوق محفوظة',
    ls_s1_title:'ما هو السهم؟', ls_s1_tag:'أساسيات', ls_s1_desc:'حصة ملكية في شركة — عند شراء سهم Apple تصبح شريكاً صغيراً',
    ls_s2_title:'لماذا يرتفع السهم؟', ls_s2_tag:'أساسيات', ls_s2_desc:'المشترون أكثر من البائعين = يرتفع السعر. البورصة علم نفس وليس فيزياء',
    ls_s3_title:'كيف تختار سهماً؟', ls_s3_tag:'استراتيجية', ls_s3_desc:'4 قواعد: اعرف المنتج، كن عميلهم، الشركة مربحة، التنويع',
    ls_s4_title:'قراءة الرسوم البيانية', ls_s4_tag:'تقني', ls_s4_desc:'اتجاه صاعد وهابط وجانبي — كيف تقرأ قصة السهم',
    ls_s5_title:'الدعم والمقاومة', ls_s5_tag:'تقني', ls_s5_desc:'أرضية وسقف السهم — متى تشتري ومتى تبيع',
    ls_s6_title:'القيمة السوقية', ls_s6_tag:'أساسيات', ls_s6_desc:'سعر السهم ≠ قيمة الشركة. Apple أغلى رغم السعر الأقل',
    ls_s7_title:'بيتا والتقلب', ls_s7_tag:'مخاطر', ls_s7_desc:'مدى تقلب السهم — الشركات المستقرة مقابل الأسهم المضاربية',
    ls_s8_title:'علم نفس التداول', ls_s8_tag:'سيكولوجية', ls_s8_desc:'FOMO والذعر والثقة الزائدة — أكبر أعداء المستثمرين',
    ls_s9_title:'وقف الخسارة وجني الربح', ls_s9_tag:'استراتيجية', ls_s9_desc:'خط الدفاع وهدف الربح — كيف تحمي استثمارك',
    ls_s10_title:'تنويع الاستثمار', ls_s10_tag:'استراتيجية', ls_s10_desc:'لا تضع كل البيض في سلة واحدة — التنويع يقلل المخاطر',
    ls_s11_title:'التحليل الأساسي', ls_s11_tag:'متقدم', ls_s11_desc:'P/E وEPS والتقارير المالية — أدوات المستثمر الحقيقي',
    ls_d1_title:'ما هو الدروبشيبينغ؟', ls_d1_tag:'أساسيات', ls_d1_desc:'بيع المنتجات بدون مخزون — المورد يشحن مباشرة للعميل',
    ls_d2_title:'الدروبشيبينغ مع أحد الوالدين', ls_d2_tag:'أساسيات', ls_d2_desc:'كيف تدير عملاً مشروعاً حتى وأنت قاصر',
    ls_d3_title:'محرك المال', ls_d3_tag:'استراتيجية', ls_d3_desc:'المعادلة: السعر × الهامش × الكمية = الربح',
    ls_d4_title:'دروبشيبينغ مقابل تطبيق', ls_d4_tag:'أساسيات', ls_d4_desc:'مقارنة نماذج الأعمال — أيهما يناسبك؟',
    ls_d5_title:'إيجاد منتج رابح', ls_d5_tag:'منتج', ls_d5_desc:'TikTok وAliExpress وMinea — الدليل الشامل لبحث المنتجات',
    ls_d6_title:'العمل مع الموردين', ls_d6_tag:'موردون', ls_d6_desc:'AliExpress وCJ وSpocket — كيف تختار وتدير الموردين',
    ls_d7_title:'إنشاء متجر Shopify', ls_d7_tag:'تقني', ls_d7_desc:'التصميم وصفحة المنتج والدفع — دليل خطوة بخطوة',
    ls_d8_title:'الإعلان على Meta Ads', ls_d8_tag:'تسويق', ls_d8_desc:'الجماهير والإبداعات والميزانية — كيف تحصل على عملاء مربحين',
    ls_d9_title:'خدمة العملاء', ls_d9_tag:'إدارة', ls_d9_desc:'التقييمات والمرتجعات والسمعة — مفتاح الأعمال الطويلة الأمد',
    ls_d10_title:'تحليل البيانات والربحية', ls_d10_tag:'متقدم', ls_d10_desc:'ROAS وCPP وLTV — الحقيقة وراء الأرقام',
    ls_d11_title:'الأتمتة والتوسع', ls_d11_tag:'متقدم', ls_d11_desc:'DSers وKlaviyo وTidio — كيف يدير العمل نفسه',
    dg_sale_prefix:'بيع!', dg_profit_word:'الربح', dg_browsed:'تصفح عميل',
    dg_day_word:'يوم', dg_store_open:'المتجر مفتوح.', dg_ad_cost:'تكلفة إعلانية يومية',
    dg_too_expensive:'غالٍ جداً', dg_low_demand:'طلب منخفض', dg_not_fit:'غير مناسب الآن',
    dg_tip_prefix:'نصيحة: الربح من', dg_tip_suffix:'منخفض. ارفع السعر إلى',
    dg_cost_word:'التكلفة', dg_low_label:'منخفض', dg_demand_word:'الطلب',
    lang_names:{en:'🇺🇸 EN', he:'🇮🇱 HE', es:'🇪🇸 ES', fr:'🇫🇷 FR', ar:'🇸🇦 AR', ru:'🇷🇺 RU'},
  },
  ru: {
    nav_logo:'🚀 MoneyMind', nav_stocks:'📈 Акции', nav_drop:'🛒 Дропшиппинг',
    nav_calc:'💰 Калькулятор', nav_quiz:'🧠 Тест', nav_games:'🎮 Игры', nav_auth:'Войти / Зарегистрироваться',
    header_tag:'Ведущая финансовая академия для нового поколения',
    header_h1_1:'Учись. Торгуй.', header_h1_2:'Добивайся успеха.',
    header_subtitle:'Профессиональные курсы по акциям и дропшиппингу — от нуля до продвинутого уровня',
    stat_lessons:'Профессиональных уроков', stat_stocks:'Акций в симуляторе', stat_potential:'Потенциал',
    stocks_title:'📈 Курс по Акциям', stocks_desc:'От основ до продвинутого анализа',
    drop_title:'🛒 Курс по Дропшиппингу', drop_desc:'Создайте прибыльный онлайн-бизнес',
    calc_title:'💰 Калькулятор Роста Капитала', calc_desc:'Введите данные и узнайте, где будут ваши деньги',
    quiz_title:'🧠 Тест Знаний', quiz_desc:'Проверьте себя — сколько усвоили?',
    games_title:'🎮 Живые Симуляторы', games_desc:'Практикуйте изученное с виртуальными деньгами',
    auth_login_tab:'Войти', auth_register_tab:'Регистрация',
    auth_login_title:'Добро пожаловать 👋', auth_login_subtitle:'Войдите в свой аккаунт',
    auth_register_title:'Присоединяйтесь 🚀', auth_register_subtitle:'Присоединитесь к MoneyMind — полный доступ ко всем курсам',
    label_email:'Электронная почта', label_password:'Пароль', label_fullname:'Полное имя',
    btn_login:'Войти', btn_register:'Перейти к оплате →',
    pay_title:'Безопасная Оплата', pay_subtitle:'Полный доступ ко всем курсам MoneyMind',
    pay_feature1:'✅ Полный доступ ко всем урокам', pay_feature2:'✅ Продвинутый инвестиционный калькулятор',
    pay_feature3:'✅ Тесты и проверки знаний', pay_feature4:'✅ Будущие обновления бесплатно',
    label_card:'Номер Карты', label_expiry:'Срок действия', label_cvv:'CVV', label_cardname:'Имя на карте',
    btn_pay:'Оплатить ₽900 безопасно', price_badge:'₽900', secure_note:'🔒 Зашифрованная и безопасная оплата',
    success_title:'Добро пожаловать в MoneyMind! 🚀', success_subtitle:'Оплата получена успешно',
    email_sent_title:'Код доступа отправлен на почту', access_code_label:'Ваш Код Доступа',
    btn_start:'Начать Обучение 🚀', lp_back:'← Назад к Урокам',
    calc_start:'Начальная сумма', calc_yearly:'Годовой взнос', calc_rate:'Годовая доходность',
    calc_years:'Количество лет', calc_years_word:'лет', calc_total:'Итого в конце', calc_invested:'Вложенные деньги',
    calc_profit:'Рыночная прибыль', calc_mult:'Множитель роста',
    quiz_question_of:'Вопрос {n} из {total}', quiz_next:'Следующий Вопрос →',
    quiz_see_results:'Посмотреть Результаты 🎉', quiz_answered:'Вы ответили правильно на {score} вопросов',
    quiz_amazing:'Отлично! Вы готовы 🚀', quiz_almost:'Почти! Повторите уроки 💪',
    quiz_restart:'Попробовать снова',
    game_tab_stocks:'📈 Фондовый Рынок', game_tab_drop:'🛒 Дропшиппинг',
    sg_cash:'Наличные', sg_portfolio:'Стоимость портфеля', sg_pnl:'Прибыль/Убыток', sg_reset:'🔄 Сбросить',
    sg_news_default:'📡 Рынок открыт — отслеживание новостей...',
    sg_search_placeholder:'🔍 Поиск акции...', sg_all_sectors:'Все Секторы',
    sg_my_portfolio:'💼 Мой Портфель', sg_no_stocks:'Акций ещё нет.\nВыберите акцию и нажмите Купить!',
    dg_day:'Рабочий день', dg_cash:'Наличные', dg_profit:'Общая прибыль', dg_sales:'Продажи сегодня',
    dg_products_title:'🛍️ Мои Продукты — Установите цену и рекламный бюджет',
    dg_feed_title:'📊 Живая Активность', dg_open:'🚀 Магазин открыт! Клиенты начинают просматривать...',
    footer:'🚀 MoneyMind Academy | Все Права Защищены',
    ls_s1_title:'Что такое Акция?', ls_s1_tag:'Основы', ls_s1_desc:'Доля владения в компании — купив акцию Apple, вы становитесь её совладельцем',
    ls_s2_title:'Почему Акция Растёт?', ls_s2_tag:'Основы', ls_s2_desc:'Больше покупателей чем продавцов = цена растёт. Биржа — это психология',
    ls_s3_title:'Как Выбрать Акцию?', ls_s3_tag:'Стратегия', ls_s3_desc:'4 правила: знай продукт, будь клиентом, прибыльная компания, диверсификация',
    ls_s4_title:'Чтение Графиков', ls_s4_tag:'Технический', ls_s4_desc:'Восходящий, нисходящий и боковой тренд — как читать историю акции',
    ls_s5_title:'Поддержка и Сопротивление', ls_s5_tag:'Технический', ls_s5_desc:'Пол и потолок акции — когда покупать и когда продавать',
    ls_s6_title:'Рыночная Капитализация', ls_s6_tag:'Основы', ls_s6_desc:'Цена акции ≠ стоимость компании. Apple дороже несмотря на меньшую цену',
    ls_s7_title:'Бета и Волатильность', ls_s7_tag:'Риски', ls_s7_desc:'Насколько волатильна акция — стабильные компании vs спекулятивные акции',
    ls_s8_title:'Психология Трейдинга', ls_s8_tag:'Психология', ls_s8_desc:'FOMO, паника, самоуверенность — главные враги инвестора',
    ls_s9_title:'Стоп-лосс и Тейк-профит', ls_s9_tag:'Стратегия', ls_s9_desc:'Линия защиты и цель прибыли — как защитить свои инвестиции',
    ls_s10_title:'Диверсификация', ls_s10_tag:'Стратегия', ls_s10_desc:'Не класть все яйца в одну корзину — диверсификация снижает риск',
    ls_s11_title:'Фундаментальный Анализ', ls_s11_tag:'Продвинутый', ls_s11_desc:'P/E, EPS, финансовые отчёты — инструменты настоящего инвестора',
    ls_d1_title:'Что такое Дропшиппинг?', ls_d1_tag:'Основы', ls_d1_desc:'Продажи без склада — поставщик отправляет товар напрямую покупателю',
    ls_d2_title:'Дропшиппинг с Родителем', ls_d2_tag:'Основы', ls_d2_desc:'Как вести законный бизнес даже если вы несовершеннолетний',
    ls_d3_title:'Денежный Двигатель', ls_d3_tag:'Стратегия', ls_d3_desc:'Формула: цена × маржа × объём = прибыль',
    ls_d4_title:'Дропшиппинг vs Приложение', ls_d4_tag:'Основы', ls_d4_desc:'Сравнение бизнес-моделей — что подходит именно вам?',
    ls_d5_title:'Найти Выигрышный Продукт', ls_d5_tag:'Продукт', ls_d5_desc:'TikTok, AliExpress, Minea — полный гид по исследованию продуктов',
    ls_d6_title:'Работа с Поставщиками', ls_d6_tag:'Поставщики', ls_d6_desc:'AliExpress, CJ, Spocket — как выбирать и управлять поставщиками',
    ls_d7_title:'Создание Магазина Shopify', ls_d7_tag:'Технический', ls_d7_desc:'Дизайн, страница товара, оплата — пошаговое руководство',
    ls_d8_title:'Реклама в Meta Ads', ls_d8_tag:'Маркетинг', ls_d8_desc:'Аудитории, креативы, бюджет — как привлечь прибыльных клиентов',
    ls_d9_title:'Обслуживание Клиентов', ls_d9_tag:'Управление', ls_d9_desc:'Отзывы, возвраты, репутация — ключ к долгосрочному бизнесу',
    ls_d10_title:'Анализ Данных и Прибыльность', ls_d10_tag:'Продвинутый', ls_d10_desc:'ROAS, CPP, LTV — правда за цифрами',
    ls_d11_title:'Автоматизация и Масштабирование', ls_d11_tag:'Продвинутый', ls_d11_desc:'DSers, Klaviyo, Tidio — как бизнес управляет собой сам',
    dg_sale_prefix:'Продажа!', dg_profit_word:'Прибыль', dg_browsed:'Клиент просматривал',
    dg_day_word:'День', dg_store_open:'Магазин открыт.', dg_ad_cost:'Ежедневные расходы на рекламу',
    dg_too_expensive:'Слишком дорого', dg_low_demand:'Низкий спрос', dg_not_fit:'Не подходит сейчас',
    dg_tip_prefix:'Совет: Прибыль от', dg_tip_suffix:'низкая. Повысьте цену до',
    dg_cost_word:'Стоимость', dg_low_label:'Низкая', dg_demand_word:'Спрос',
    lang_names:{en:'🇺🇸 EN', he:'🇮🇱 HE', es:'🇪🇸 ES', fr:'🇫🇷 FR', ar:'🇸🇦 AR', ru:'🇷🇺 RU'},
  },
};

const RTL_LANGS = ['he', 'ar'];
const CURRENCIES = {en:'$', he:'₪', es:'€', fr:'€', ar:'$', ru:'₽'};
function getCurrency() { return CURRENCIES[currentLang] || '$'; }

function t(key) {
  return (i18n[currentLang] || i18n.en)[key] || i18n.en[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const isRTL = RTL_LANGS.includes(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  applyTranslations();
  // Update auth button text manually (no data-i18n to avoid overwriting username)
  if (!isLoggedIn) {
    const authBtn = document.getElementById('nav-auth-btn');
    if (authBtn) authBtn.textContent = t('nav_auth');
  }
  // Update lang button label
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = '🌐 ' + lang.toUpperCase();
  // Close menu
  const menu = document.getElementById('lang-menu');
  if (menu) menu.style.display = 'none';
  // Re-render dynamic content
  renderLessons(stocksLessons, 'stocks-grid');
  renderLessons(dropLessons, 'drop-grid');
  currentQ = 0; score = 0; renderQuiz();
  // Refresh currency-dependent displays
  updateCalc();
  updateSgHeader();
  renderDgProducts();
  updateDgHeader();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const open = drawer.classList.toggle('open');
  overlay.classList.toggle('open', open);
  if (open) {
    // Populate drawer with nav links
    document.getElementById('mobile-nav-links').innerHTML =
      '<a href="#" onclick="showSection(\'stocks\');toggleMobileNav()" data-i18n="nav_stocks">📈 Stocks</a>' +
      '<a href="#" onclick="showSection(\'drop\');toggleMobileNav()" data-i18n="nav_drop">🛒 Dropshipping</a>' +
      '<a href="#" onclick="showSection(\'calculator\');toggleMobileNav()" data-i18n="nav_calc">💰 Calculator</a>' +
      '<a href="#" onclick="showSection(\'quiz\');toggleMobileNav()" data-i18n="nav_quiz">🧠 Quiz</a>' +
      '<a href="#" onclick="showSection(\'games\');toggleMobileNav()" data-i18n="nav_games">🎮 Games</a>';
    // Clone action buttons
    const actSrc = document.getElementById('nav-left');
    document.getElementById('mobile-nav-actions').innerHTML = actSrc ? actSrc.innerHTML : '';
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  document.getElementById('theme-btn').textContent = isLight ? '☀️' : '🌙';
}
// Apply saved theme on load
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}

function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  if (menu) menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Close lang menu when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.lang-picker')) {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.style.display = 'none';
  }
});

// ===== STOCK GAME =====
const SG_INITIAL_BALANCE = 10000;
const allStocks50 = [
  {sym:'AAPL', name:'Apple', price:254, beta:1.2, sector:'Technology', trend:0.0001},
  {sym:'NVDA', name:'Nvidia', price:182, beta:1.8, sector:'Technology', trend:0.0003},
  {sym:'MSFT', name:'Microsoft', price:415, beta:1.1, sector:'Technology', trend:0.0001},
  {sym:'GOOGL', name:'Alphabet', price:165, beta:1.2, sector:'Technology', trend:0.0001},
  {sym:'AMZN', name:'Amazon', price:220, beta:1.3, sector:'Technology', trend:0.0002},
  {sym:'META', name:'Meta', price:580, beta:1.4, sector:'Technology', trend:0.0002},
  {sym:'AMD', name:'AMD', price:175, beta:1.9, sector:'Technology', trend:0.0001},
  {sym:'INTC', name:'Intel', price:22, beta:1.3, sector:'Technology', trend:-0.0001},
  {sym:'ORCL', name:'Oracle', price:175, beta:1.1, sector:'Technology', trend:0.0001},
  {sym:'ADBE', name:'Adobe', price:390, beta:1.4, sector:'Technology', trend:0.0001},
  {sym:'CRM', name:'Salesforce', price:330, beta:1.3, sector:'Technology', trend:0.0001},
  {sym:'PLTR', name:'Palantir', price:95, beta:2.0, sector:'AI', trend:0.0003},
  {sym:'SHOP', name:'Shopify', price:120, beta:1.7, sector:'Technology', trend:0.0001},
  {sym:'SNAP', name:'Snapchat', price:15, beta:2.2, sector:'Technology', trend:-0.0001},
  {sym:'UBER', name:'Uber', price:80, beta:1.5, sector:'Transportation', trend:0.0001},
  {sym:'NFLX', name:'Netflix', price:900, beta:1.5, sector:'Entertainment', trend:0.0001},
  {sym:'DIS', name:'Disney', price:110, beta:1.1, sector:'Entertainment', trend:0.0},
  {sym:'SPOT', name:'Spotify', price:430, beta:1.6, sector:'Entertainment', trend:0.0002},
  {sym:'RBLX', name:'Roblox', price:42, beta:1.8, sector:'Gaming', trend:0.0001},
  {sym:'EA', name:'Electronic Arts', price:140, beta:1.1, sector:'Gaming', trend:0.0},
  {sym:'JPM', name:'JPMorgan', price:248, beta:1.1, sector:'Banking', trend:0.0001},
  {sym:'BAC', name:'Bank of America', price:44, beta:1.3, sector:'Banking', trend:0.0001},
  {sym:'GS', name:'Goldman Sachs', price:582, beta:1.4, sector:'Banking', trend:0.0001},
  {sym:'V', name:'Visa', price:335, beta:0.9, sector:'Finance', trend:0.0001},
  {sym:'MA', name:'Mastercard', price:550, beta:1.0, sector:'Finance', trend:0.0001},
  {sym:'PYPL', name:'PayPal', price:77, beta:1.6, sector:'Finance', trend:0.0},
  {sym:'COIN', name:'Coinbase', price:270, beta:2.5, sector:'Crypto', trend:0.0002},
  {sym:'JNJ', name:'Johnson & Johnson', price:155, beta:0.6, sector:'Healthcare', trend:0.0},
  {sym:'PFE', name:'Pfizer', price:26, beta:0.8, sector:'Healthcare', trend:-0.0001},
  {sym:'ABBV', name:'AbbVie', price:190, beta:0.7, sector:'Healthcare', trend:0.0001},
  {sym:'UNH', name:'UnitedHealth', price:520, beta:0.8, sector:'Healthcare', trend:0.0001},
  {sym:'MRK', name:'Merck', price:100, beta:0.7, sector:'Healthcare', trend:0.0},
  {sym:'WMT', name:'Walmart', price:95, beta:0.6, sector:'Retail', trend:0.0001},
  {sym:'COST', name:'Costco', price:940, beta:0.9, sector:'Retail', trend:0.0001},
  {sym:'TGT', name:'Target', price:132, beta:1.0, sector:'Retail', trend:0.0},
  {sym:'HD', name:'Home Depot', price:400, beta:1.0, sector:'Retail', trend:0.0001},
  {sym:'ABNB', name:'Airbnb', price:155, beta:1.7, sector:'Travel & Tourism', trend:0.0001},
  {sym:'MCD', name:"McDonald's", price:295, beta:0.7, sector:'Restaurants', trend:0.0},
  {sym:'SBUX', name:'Starbucks', price:100, beta:0.8, sector:'Restaurants', trend:0.0},
  {sym:'KO', name:'Coca-Cola', price:68, beta:0.6, sector:'Food & Beverage', trend:0.0},
  {sym:'PEP', name:'PepsiCo', price:145, beta:0.6, sector:'Food & Beverage', trend:0.0},
  {sym:'XOM', name:'ExxonMobil', price:115, beta:1.2, sector:'Energy', trend:0.0},
  {sym:'CVX', name:'Chevron', price:155, beta:1.2, sector:'Energy', trend:0.0},
  {sym:'NKE', name:'Nike', price:75, beta:1.1, sector:'Fashion', trend:0.0},
  {sym:'LULU', name:'Lululemon', price:350, beta:1.4, sector:'Fashion', trend:0.0},
  {sym:'TSLA', name:'Tesla', price:178, beta:2.0, sector:'Electric Vehicles', trend:0.0001},
  {sym:'RIVN', name:'Rivian', price:14, beta:2.5, sector:'Electric Vehicles', trend:-0.0001},
  {sym:'BRKB', name:'Berkshire Hathaway', price:480, beta:0.9, sector:'Investments', trend:0.0001},
  {sym:'GME', name:'GameStop', price:28, beta:3.0, sector:'Meme Stocks', trend:0.0},
  {sym:'AMC', name:'AMC Theatres', price:4, beta:3.5, sector:'Meme Stocks', trend:-0.0001},
];

const sgNewsEvents = [
  {text:'💹 NVDA: New AI chip announced! Massive demand surge.', sym:'NVDA', impact:0.08},
  {text:'📱 AAPL: New iPhone launches — 50M pre-orders on day one!', sym:'AAPL', impact:0.06},
  {text:'⚡ TSLA: Production delays reported. Expectations lowered.', sym:'TSLA', impact:-0.07},
  {text:'🏦 JPM: Earnings beat estimates by wide margin!', sym:'JPM', impact:0.05},
  {text:'💊 PFE: New drug approved by FDA!', sym:'PFE', impact:0.09},
  {text:'🎮 RBLX: One million new users this month!', sym:'RBLX', impact:0.07},
  {text:'🛒 WMT: Q3 revenue came in below expectations.', sym:'WMT', impact:-0.04},
  {text:'☕ SBUX: Worker strike hits operations — stock falls.', sym:'SBUX', impact:-0.05},
  {text:'☁️ AMZN: AWS grew 40% — all-time high!', sym:'AMZN', impact:0.06},
  {text:'🤖 META: New AI model rivals GPT performance.', sym:'META', impact:0.05},
  {text:'⛽ XOM: Oil prices spike. Energy stocks rally.', sym:'XOM', impact:0.06},
  {text:'🏛️ MSFT: Massive government cloud contract signed.', sym:'MSFT', impact:0.04},
  {text:'🪙 COIN: Bitcoin surges 20%! Coinbase climbs.', sym:'COIN', impact:0.12},
  {text:'📺 NFLX: Millions cancel after price hike.', sym:'NFLX', impact:-0.06},
  {text:'🏥 UNH: Medical costs higher than expected.', sym:'UNH', impact:-0.04},
  {text:'🚗 TSLA: New model revealed — market excited!', sym:'TSLA', impact:0.09},
  {text:'🎯 PLTR: Huge 2-year government contract secured!', sym:'PLTR', impact:0.10},
  {text:'📉 RIVN: Disappointing production report released.', sym:'RIVN', impact:-0.08},
  {text:'🃏 GME: Meme stock frenzy online — share price rockets!', sym:'GME', impact:0.20},
  {text:'🎬 DIS: New theme park planned — investors thrilled.', sym:'DIS', impact:0.05},
  {text:'🔵 COIN: Crypto regulation fears — stock drops.', sym:'COIN', impact:-0.10},
  {text:'👟 NKE: Online sales smash all records!', sym:'NKE', impact:0.04},
  {text:'💳 V: Holiday transactions break records — Visa profits.', sym:'V', impact:0.04},
  {text:'📊 AMD: New chip outperforms NVIDIA in benchmarks.', sym:'AMD', impact:0.08},
];

const sg = {
  balance: SG_INITIAL_BALANCE,
  holdings: {},
  prices: {},
  initialPrices: {},
  interval: null,
  tick: 0,
  started: false,
};

function initStockGame() {
  sg.balance = SG_INITIAL_BALANCE;
  sg.holdings = {};
  sg.prices = {};
  sg.initialPrices = {};
  sg.tick = 0;
  sg.started = true;
  allStocks50.forEach(s => {
    sg.prices[s.sym] = s.price;
    sg.initialPrices[s.sym] = s.price;
  });
  if (sg.interval) clearInterval(sg.interval);
  sg.interval = setInterval(sgTick, 2000);
  renderStocksList();
  renderSgPortfolio();
  updateSgHeader();
}

function sgTick() {
  sg.tick++;
  allStocks50.forEach(s => {
    const cur = sg.prices[s.sym];
    const rnd = (Math.random() - 0.485) * s.beta * 0.014;
    let next = cur * (1 + rnd + s.trend);
    next = Math.max(s.price * 0.15, Math.min(s.price * 8, next));
    sg.prices[s.sym] = parseFloat(next.toFixed(2));
  });
  if (sg.tick % 15 === 0) sgGenerateNews();
  renderStocksList();
  renderSgPortfolio();
  updateSgHeader();
}

function sgGenerateNews() {
  const ev = sgNewsEvents[Math.floor(Math.random() * sgNewsEvents.length)];
  sg.prices[ev.sym] = parseFloat((sg.prices[ev.sym] * (1 + ev.impact)).toFixed(2));
  const newsEl = document.getElementById('sg-news');
  if (newsEl) newsEl.textContent = ev.text;
}

function sgBuy(sym) {
  const price = sg.prices[sym];
  if (sg.balance < price) { alert('Not enough cash!'); return; }
  sg.balance -= price;
  if (!sg.holdings[sym]) sg.holdings[sym] = { qty: 0, avgPrice: 0 };
  const h = sg.holdings[sym];
  h.avgPrice = (h.avgPrice * h.qty + price) / (h.qty + 1);
  h.qty++;
  updateSgHeader(); renderSgPortfolio(); renderStocksList();
}

function sgSell(sym) {
  if (!sg.holdings[sym] || sg.holdings[sym].qty <= 0) { alert('No shares to sell!'); return; }
  sg.balance += sg.prices[sym];
  sg.holdings[sym].qty--;
  if (sg.holdings[sym].qty === 0) delete sg.holdings[sym];
  updateSgHeader(); renderSgPortfolio(); renderStocksList();
}

function updateSgHeader() {
  const portVal = Object.keys(sg.holdings).reduce((sum, sym) => sum + sg.prices[sym] * sg.holdings[sym].qty, 0);
  const total = sg.balance + portVal;
  const pnl = total - SG_INITIAL_BALANCE;
  const pnlPct = ((pnl / SG_INITIAL_BALANCE) * 100).toFixed(1);
  const balEl = document.getElementById('sg-balance');
  const pvEl = document.getElementById('sg-portfolio-val');
  const pnlEl = document.getElementById('sg-pnl');
  if (!balEl) return;
  balEl.textContent = getCurrency() + Math.round(sg.balance).toLocaleString();
  pvEl.textContent = getCurrency() + Math.round(total).toLocaleString();
  pnlEl.textContent = (pnl >= 0 ? '+' : '') + getCurrency() + Math.round(pnl).toLocaleString() + ' (' + (pnl >= 0 ? '+' : '') + pnlPct + '%)';
  pnlEl.style.color = pnl >= 0 ? 'var(--green)' : 'var(--red)';
}

function renderStocksList() {
  const el = document.getElementById('sg-stocks-list');
  if (!el) return;
  const search = (document.getElementById('sg-search')?.value || '').toLowerCase();
  const sector = document.getElementById('sg-sector')?.value || '';
  const filtered = allStocks50.filter(s =>
    (!search || s.sym.toLowerCase().includes(search) || s.name.toLowerCase().includes(search)) &&
    (!sector || s.sector === sector)
  );
  el.innerHTML = filtered.map(s => {
    const cur = sg.prices[s.sym] || s.price;
    const init = sg.initialPrices[s.sym] || s.price;
    const chg = ((cur - init) / init * 100).toFixed(2);
    const isUp = parseFloat(chg) >= 0;
    const h = sg.holdings[s.sym];
    return `<div class="sg-stock-card">
      <div class="sg-stock-sym">${s.sym}</div>
      <div class="sg-stock-name">${s.name}</div>
      <div class="sg-stock-sector">${s.sector}</div>
      <div class="sg-stock-price">$${cur.toFixed(2)}</div>
      <div class="sg-stock-change ${isUp ? 'up' : 'down'}">${isUp ? '▲' : '▼'} ${Math.abs(chg)}%</div>
      ${h ? `<div style="font-size:0.7rem;color:var(--muted);margin-top:3px">Held: ${h.qty}</div>` : ''}
      <div class="sg-stock-actions">
        <button class="sg-buy-btn" onclick="sgBuy('${s.sym}')">Buy $${cur.toFixed(0)}</button>
        ${h && h.qty > 0 ? `<button class="sg-sell-btn" onclick="sgSell('${s.sym}')">Sell</button>` : ''}
      </div>
    </div>`;
  }).join('');
}

function renderSgPortfolio() {
  const el = document.getElementById('sg-holdings');
  if (!el) return;
  const keys = Object.keys(sg.holdings).filter(k => sg.holdings[k].qty > 0);
  if (keys.length === 0) {
    el.innerHTML = '<div class="sg-empty">No stocks yet.<br>Choose a stock and click Buy!</div>';
    return;
  }
  el.innerHTML = keys.map(sym => {
    const h = sg.holdings[sym];
    const cur = sg.prices[sym];
    const curVal = cur * h.qty;
    const invested = h.avgPrice * h.qty;
    const pnl = curVal - invested;
    const pnlPct = ((pnl / invested) * 100).toFixed(1);
    return `<div class="sg-holding-row">
      <div class="sg-holding-top"><span class="sg-holding-sym">${sym}</span><span class="sg-holding-val">${getCurrency()}${Math.round(curVal).toLocaleString()}</span></div>
      <div class="sg-holding-detail">
        <span>${h.qty} units × ${getCurrency()}${cur.toFixed(1)}</span>
        <span class="sg-holding-pnl ${pnl >= 0 ? 'pos' : 'neg'}">${pnl >= 0 ? '+' : ''}${getCurrency()}${Math.round(pnl).toLocaleString()} (${pnl >= 0 ? '+' : ''}${pnlPct}%)</span>
      </div>
    </div>`;
  }).join('');
}

function resetStockGame() {
  if (sg.interval) clearInterval(sg.interval);
  sg.started = false;
  initStockGame();
}

function switchGameTab(tab) {
  document.getElementById('game-stocks-panel').style.display = tab === 'stocks' ? 'block' : 'none';
  document.getElementById('game-drop-panel').style.display = tab === 'drop' ? 'block' : 'none';
  document.getElementById('gtab-stocks').classList.toggle('active', tab === 'stocks');
  document.getElementById('gtab-drop').classList.toggle('active', tab === 'drop');
  if (tab === 'drop' && !dg.running) initDropGame();
  if (tab === 'stocks' && !sg.started) initStockGame();
}

// ===== DROPSHIPPING GAME =====
const DG_INITIAL_BALANCE = 5000;
const dgProductsCatalog = [
  {id:'led', icon:'💡', name:'Smart LED Lamp', cost:12, suggested:45, baseDemand:0.7, category:'Home'},
  {id:'case', icon:'📱', name:'Deluxe Phone Case', cost:5, suggested:22, baseDemand:0.85, category:'Electronics'},
  {id:'watch', icon:'⌚', name:'Smart Sports Watch', cost:25, suggested:80, baseDemand:0.6, category:'Electronics'},
  {id:'beauty', icon:'💄', name:'Facial Care Kit', cost:8, suggested:35, baseDemand:0.75, category:'Beauty'},
  {id:'kitchen', icon:'🍳', name:'Silicone Kitchen Tools', cost:10, suggested:38, baseDemand:0.65, category:'Home'},
  {id:'bag', icon:'🎒', name:'Sports Backpack', cost:18, suggested:65, baseDemand:0.7, category:'Fashion'},
  {id:'puzzle', icon:'🧩', name:'3D Wooden Puzzle', cost:9, suggested:40, baseDemand:0.8, category:'Toys'},
  {id:'band', icon:'🏋️', name:'Multi-Use Resistance Band', cost:7, suggested:30, baseDemand:0.9, category:'Sports'},
];

const dg = {
  balance: DG_INITIAL_BALANCE,
  day: 1, totalProfit: 0, totalSales: 0, todaySales: 0,
  running: false, interval: null, dayTick: 0,
  products: {}, demand: {},
};

function initDropGame() {
  dg.balance = DG_INITIAL_BALANCE;
  dg.day = 1; dg.totalProfit = 0; dg.totalSales = 0; dg.todaySales = 0;
  dg.running = true; dg.dayTick = 0;
  dgProductsCatalog.forEach(p => {
    dg.products[p.id] = { price: p.suggested, adBudget: 20 };
    dg.demand[p.id] = p.baseDemand;
  });
  if (dg.interval) clearInterval(dg.interval);
  dg.interval = setInterval(dgTick, 1500);
  renderDgProducts();
  updateDgHeader();
  const feed = document.getElementById('dg-feed');
  if (feed) feed.innerHTML = '<div class="dg-feed-item event">' + t('dg_open') + '</div>';
}

function dgTick() {
  dg.dayTick++;
  // Demand fluctuation per product
  dgProductsCatalog.forEach(p => {
    dg.demand[p.id] = Math.max(0.1, Math.min(1.0, dg.demand[p.id] + (Math.random() - 0.5) * 0.04));
  });
  // New day every 60 ticks
  if (dg.dayTick % 60 === 0) {
    dg.day++;
    dg.todaySales = 0;
    let adCost = 0;
    dgProductsCatalog.forEach(p => { adCost += dg.products[p.id].adBudget; });
    dg.balance -= adCost;
    if (dg.balance < 0) dg.balance = 0;
    dgAddFeed('event', `📅 ${t('dg_day_word')} ${dg.day} — ${t('dg_store_open')} ${t('dg_ad_cost')}: ${getCurrency()}${adCost}`);
  }
  // AI customers for each product
  dgProductsCatalog.forEach(p => {
    const pp = dg.products[p.id];
    const reach = Math.min(pp.adBudget / 80, 1);
    if (Math.random() > reach * 0.6) return; // didn't see the ad
    // AI decision
    const priceFactor = (p.cost * 3.2) / pp.price; // fair price = cost * 3.2
    const demandFactor = dg.demand[p.id];
    const timeFactor = dgTimeFactor();
    const convRate = 0.18 * priceFactor * demandFactor * timeFactor;
    if (Math.random() < convRate) {
      // Sale!
      const profit = pp.price - p.cost;
      dg.balance += pp.price;
      dg.totalProfit += profit;
      dg.totalSales++;
      dg.todaySales++;
      dgAddFeed('sale', `✅ ${t('dg_sale_prefix')} ${p.icon} ${p.name} — ${getCurrency()}${pp.price} | ${t('dg_profit_word')}: ${getCurrency()}${profit.toFixed(0)}`);
      if (profit < p.cost * 0.6) dgShowTip(`💡 ${t('dg_tip_prefix')} "${p.name}" ${t('dg_tip_suffix')} ${getCurrency()}${Math.round(p.cost * 3.5)}.`);
    } else if (Math.random() < 0.25) {
      let reason = priceFactor < 0.65 ? `${t('dg_too_expensive')} (${getCurrency()}${pp.price})` : demandFactor < 0.35 ? t('dg_low_demand') : t('dg_not_fit');
      dgAddFeed('pass', `👤 ${t('dg_browsed')} ${p.icon} ${p.name} — ${reason}`);
    }
  });
  updateDgHeader();
  renderDgProducts();
}

function dgTimeFactor() {
  const phase = (dg.dayTick % 60) / 60;
  if (phase < 0.15) return 1.3;
  if (phase < 0.45) return 0.8;
  if (phase < 0.75) return 1.5;
  return 0.9;
}

function dgAddFeed(type, text) {
  const feed = document.getElementById('dg-feed');
  if (!feed) return;
  const item = document.createElement('div');
  item.className = `dg-feed-item ${type}`;
  item.textContent = text;
  feed.insertBefore(item, feed.firstChild);
  while (feed.children.length > 60) feed.removeChild(feed.lastChild);
}

function dgShowTip(text) {
  const tip = document.getElementById('dg-tip');
  if (!tip) return;
  tip.style.display = 'block';
  tip.textContent = text;
  setTimeout(() => { tip.style.display = 'none'; }, 9000);
}

function updateDgHeader() {
  const dayEl = document.getElementById('dg-day');
  const balEl = document.getElementById('dg-balance');
  const profEl = document.getElementById('dg-profit');
  const salesEl = document.getElementById('dg-sales');
  if (!dayEl) return;
  dayEl.textContent = t('dg_day_word') + ' ' + dg.day;
  balEl.textContent = getCurrency() + Math.round(dg.balance).toLocaleString();
  profEl.textContent = (dg.totalProfit >= 0 ? '+' : '') + getCurrency() + Math.round(dg.totalProfit).toLocaleString();
  profEl.style.color = dg.totalProfit >= 0 ? 'var(--green)' : 'var(--red)';
  salesEl.textContent = dg.todaySales;
}

function renderDgProducts() {
  const el = document.getElementById('dg-products-list');
  if (!el) return;
  el.innerHTML = dgProductsCatalog.map(p => {
    const pp = dg.products?.[p.id];
    if (!pp) return '';
    const margin = pp.price - p.cost;
    const marginPct = ((margin / pp.price) * 100).toFixed(0);
    const good = margin >= p.cost * 0.7;
    const demPct = Math.round(dg.demand[p.id] * 100);
    return `<div class="dg-product-card">
      <div class="dg-product-icon">${p.icon}</div>
      <div class="dg-product-name">${p.name}</div>
      <div class="dg-product-cost">${t('dg_cost_word')}: ${getCurrency()}${p.cost} | ${p.category}</div>
      <div class="dg-price-row"><label>${t('dg_sale_prefix')}</label>
        <input type="number" class="dg-price-input" value="${pp.price}" min="${p.cost+1}"
          onchange="dgSetPrice('${p.id}',this.value)">${getCurrency()}</div>
      <div class="dg-price-row"><label>Ad/day:</label>
        <input type="number" class="dg-price-input" value="${pp.adBudget}" min="0" max="300"
          onchange="dgSetAd('${p.id}',this.value)">${getCurrency()}</div>
      <div class="dg-margin ${good ? 'good' : 'bad'}">${t('dg_profit_word')}: ${getCurrency()}${margin.toFixed(0)} (${marginPct}%) ${good ? '✅' : '⚠️ ' + t('dg_low_label')}</div>
      <div class="dg-demand-bar"><div class="dg-demand-fill" style="width:${demPct}%"></div></div>
      <div class="dg-demand-lbl">${t('dg_demand_word')}: ${demPct}%</div>
    </div>`;
  }).join('');
}

function dgSetPrice(id, val) {
  const p = dgProductsCatalog.find(x => x.id === id);
  dg.products[id].price = Math.max(p.cost + 1, parseFloat(val) || p.cost + 1);
}
function dgSetAd(id, val) {
  dg.products[id].adBudget = Math.max(0, Math.min(300, parseFloat(val) || 0));
}
function resetDropGame() {
  if (dg.interval) clearInterval(dg.interval);
  dg.running = false;
  initDropGame();
}

// ===== AUTH & PAYMENT =====
const TEST_USER = { email: 'levy_ariel@outlook.com', password: 'Ariel2308' };
const ADMIN_EMAIL = 'levy_ariel@outlook.com';
const PRESET_USERS = [];

const _isPreview = new URLSearchParams(window.location.search).get('preview') === '1';
const _loggedLS  = localStorage.getItem('kb_logged') === 'true';
const _loggedSS  = sessionStorage.getItem('kb_logged') === 'true';
let currentUserEmail = _isPreview ? '' : (localStorage.getItem('kb_email') || sessionStorage.getItem('kb_email') || '');
let currentUserName  = _isPreview ? '' : (localStorage.getItem('kb_name')  || sessionStorage.getItem('kb_name')  || '');
let isLoggedIn       = _isPreview ? false : (_loggedLS || _loggedSS);
let _regPassword = '';
let _regName = '';

function getUsers() {
  try { return JSON.parse(localStorage.getItem('kb_users') || '[]'); } catch(e) { return []; }
}
function saveUser(email, password, name) {
  const users = getUsers();
  if (!users.find(u => u.email === email)) {
    const now = new Date();
    const joinedAt = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-GB', {hour:'2-digit',minute:'2-digit'});
    users.push({ email, password, name: name || email, joinedAt });
  }
  localStorage.setItem('kb_users', JSON.stringify(users));
}
function getNameForEmail(email) {
  if (email === TEST_USER.email) return 'Ariel Levy';
  const preset = PRESET_USERS.find(u => u.email === email);
  if (preset) return preset.name;
  const u = getUsers().find(u => u.email === email);
  return u?.name || email;
}
function checkCredentials(email, password) {
  if (email === TEST_USER.email && password === TEST_USER.password) return true;
  if (PRESET_USERS.some(u => u.email === email && u.password === password)) return true;
  return getUsers().some(u => u.email === email && u.password === password);
}

function requireLogin(callback) {
  if (isLoggedIn) { callback(); return; }
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  if (drawer) { drawer.classList.remove('open'); }
  if (overlay) { overlay.classList.remove('open'); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  openAuthModal();
  window._pendingAction = callback;
}

function openAuthModal() {
  document.getElementById('auth-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  const savedEmail = localStorage.getItem('kb_saved_email');
  const savedPw = localStorage.getItem('kb_saved_pw');
  if (savedEmail) {
    const eEl = document.getElementById('login-email');
    const pEl = document.getElementById('login-password');
    if (eEl) eEl.value = savedEmail;
    if (pEl) pEl.value = savedPw || '';
  }
}
function closeAuthModal(e) {
  if (!e || e.target === document.getElementById('auth-modal')) {
    document.getElementById('auth-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}
function switchTab(tab) {
  document.getElementById('form-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('form-register').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
}
function handleLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (!email || !password) { alert('Please fill in all fields'); return; }
  if (!checkCredentials(email, password)) {
    alert('Incorrect email or password'); return;
  }
  currentUserEmail = email;
  currentUserName = getNameForEmail(email);
  isLoggedIn = true;
  const remember = document.getElementById('remember-me')?.checked !== false;
  const store = remember ? localStorage : sessionStorage;
  store.setItem('kb_logged', 'true');
  store.setItem('kb_email', email);
  store.setItem('kb_name', currentUserName);
  if (remember) {
    localStorage.setItem('kb_saved_email', email);
    localStorage.setItem('kb_saved_pw', password);
  }
  closeAuthModal();
  updateNavForLoggedIn();
  if (window._pendingAction) { window._pendingAction(); window._pendingAction = null; }
}
function handleRegister() {
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  if (!name || !email || !password) { alert('Please fill in all fields'); return; }
  currentUserEmail = email;
  currentUserName = name;
  _regPassword = password;
  _regName = name;
  closeAuthModal();
  openPaymentModal();
}
let selectedPayCurrency = null;
const PAY_OPTIONS = [
  {id:'usd', label:'🇺🇸 $10',    amount:'$10',   btn:'Pay $10 Securely'},
  {id:'ils', label:'🇮🇱 ₪37',   amount:'₪37',   btn:'שלם ₪37 בבטחה'},
  {id:'eur', label:'🇪🇺 €9',     amount:'€9',    btn:'Pay €9 Securely'},
  {id:'rub', label:'🇷🇺 ₽900',  amount:'₽900',  btn:'Оплатить ₽900'},
];
const LANG_TO_PAY = {en:'usd', he:'ils', es:'eur', fr:'eur', ar:'usd', ru:'rub'};
function selectCurrency(id) {
  selectedPayCurrency = id;
  document.querySelectorAll('.pay-opt-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.id === id);
  });
  const opt = PAY_OPTIONS.find(o => o.id === id);
  if (opt) {
    document.getElementById('price-badge').textContent = opt.amount;
    document.querySelector('.btn-pay span[data-i18n="btn_pay"]').textContent = opt.btn;
  }
}
function openPaymentModal() {
  document.getElementById('payment-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Select default currency based on current language
  const defaultId = LANG_TO_PAY[currentLang] || 'usd';
  setTimeout(() => selectCurrency(defaultId), 0);
}
function closePaymentModal(e) {
  if (!e || e.target === document.getElementById('payment-modal')) {
    document.getElementById('payment-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}
function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(\d{4})(?=\d)/g, '$1 ');
}
function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2);
  input.value = v;
}
function handlePayment() {
  const cardNum = document.getElementById('card-number').value;
  const expiry = document.getElementById('card-expiry').value;
  const cvv = document.getElementById('card-cvv').value;
  const name = document.getElementById('card-name').value;
  if (!cardNum || !expiry || !cvv || !name) { alert('Please fill in all card details'); return; }
  closePaymentModal();
  openSuccessModal();
}
function openSuccessModal() {
  const rand = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  document.getElementById('access-code').textContent = 'KB-' + rand() + '-' + rand();
  document.getElementById('success-email').textContent = currentUserEmail || 'your@email.com';
  document.getElementById('success-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSuccessModal() {
  document.getElementById('success-modal').classList.remove('open');
  document.body.style.overflow = '';
  isLoggedIn = true;
  localStorage.setItem('kb_logged', 'true');
  localStorage.setItem('kb_email', currentUserEmail);
  if (_regPassword) { saveUser(currentUserEmail, _regPassword, _regName); _regPassword = ''; _regName = ''; }
  localStorage.setItem('kb_name', currentUserName);
  updateNavForLoggedIn();
  if (window._pendingAction) { window._pendingAction(); window._pendingAction = null; }
}
function updateNavForLoggedIn() {
  initChatWidgets();
  const btn = document.getElementById('nav-auth-btn');
  const logoutBtn = document.getElementById('nav-logout-btn');
  if (btn) {
    const _av = getAvatar(currentUserEmail);
    btn.textContent = _av + ' ' + (currentUserName || currentUserEmail);
    btn.onclick = openProfile;
    btn.style.background = 'var(--surface2)';
    btn.style.border = '1px solid var(--border)';
    btn.style.color = 'var(--text)';
    btn.style.cursor = 'pointer';
  }
  if (logoutBtn) logoutBtn.style.display = 'inline-block';
  const lbEl = document.getElementById('nav-lb-btn');
  if (lbEl) lbEl.style.display = 'inline-block';
  const fbEl = document.getElementById('friend-bell');
  if (fbEl) { fbEl.style.display = 'inline-block'; updateFriendBell(); }
  const bpEl = document.getElementById('nav-bp-btn');
  if (bpEl) bpEl.style.display = 'inline-block';
  const msEl = document.getElementById('nav-missions-btn');
  if (msEl) msEl.style.display = 'inline-block';
  const gmEl = document.getElementById('nav-game-btn');
  if (gmEl) gmEl.style.display = 'inline-block';
  checkDailyStreak();
  updateXPDisplay();
  setTimeout(startOnboarding, 600);
  // Show stocks section after login
  const stocks = document.getElementById('section-stocks');
  if (stocks && stocks.style.display === 'none') {
    stocks.style.display = 'block';
    const navStocks = document.getElementById('nav-stocks');
    if (navStocks) navStocks.classList.add('nav-active');
  }
}

function handleLogout() {
  isLoggedIn = false;
  currentUserEmail = '';
  currentUserName = '';
  localStorage.removeItem('kb_logged');
  localStorage.removeItem('kb_email');
  localStorage.removeItem('kb_name');
  // Hide all content sections
  ['stocks','drop','calculator','quiz','games'].forEach(s => {
    const el = document.getElementById('section-'+s);
    if (el) el.style.display = 'none';
  });
  // Reset nav
  const btn = document.getElementById('nav-auth-btn');
  if (btn) {
    btn.textContent = t('nav_auth');
    btn.onclick = openAuthModal;
    btn.style.background = '';
    btn.style.border = '';
    btn.style.color = '';
    btn.style.cursor = '';
  }
  const logoutBtn = document.getElementById('nav-logout-btn');
  if (logoutBtn) logoutBtn.style.display = 'none';
  // Hide chatbots
  const adminBtn = document.getElementById('admin-nav-btn');
  if (adminBtn) adminBtn.style.display = 'none';
  ['nav-lb-btn','friend-bell','nav-bp-btn','nav-missions-btn','nav-game-btn'].forEach(id => {
    const el = document.getElementById(id); if (el) el.style.display = 'none';
  });
}

// ===== LESSON PAGE =====
let lpCharts = [];
function closeLessonPage() {
  lpCharts.forEach(c => c.destroy());
  lpCharts = [];
  document.getElementById('lesson-page').style.display = 'none';
  document.body.style.overflow = '';
}

// ===== AI TRANSLATION (Google Translate free API) =====
const _tlCache = {};
const LANG_CODES = {es:'es', fr:'fr', ar:'ar', ru:'ru'};

async function translateText(text, lang) {
  if (!text || !LANG_CODES[lang]) return text;
  const key = lang + '_' + text.slice(0, 40);
  if (_tlCache[key]) return _tlCache[key];
  const stored = localStorage.getItem('tl_' + key);
  if (stored) { _tlCache[key] = stored; return stored; }
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0,500))}&langpair=en|${LANG_CODES[lang]}`;
    const res = await fetch(url);
    const data = await res.json();
    const translated = data.responseData?.translatedText || text;
    if (translated && translated !== text) {
      _tlCache[key] = translated;
      localStorage.setItem('tl_' + key, translated);
    }
    return translated;
  } catch(e) { return text; }
}

async function translateDOMNode(node, lang) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.nodeValue.trim();
    if (text.length > 2) node.nodeValue = await translateText(text, lang);
  } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'CANVAS' && node.tagName !== 'INPUT') {
    for (const child of Array.from(node.childNodes)) await translateDOMNode(child, lang);
  }
}

async function translateLessonBody(html, lang) {
  if (!LANG_CODES[lang]) return html;
  const cacheKey = 'tlbody_' + lang + '_' + html.slice(0, 60);
  const cached = _tlCache[cacheKey] || localStorage.getItem(cacheKey);
  if (cached) { _tlCache[cacheKey] = cached; return cached; }
  const div = document.createElement('div');
  div.innerHTML = html;
  await translateDOMNode(div, lang);
  const result = div.innerHTML;
  _tlCache[cacheKey] = result;
  try { localStorage.setItem(cacheKey, result); } catch(e) {}
  return result;
}

async function openLessonPage(lesson, index, allLessons) {
  if (!isLoggedIn) { openAuthModal(); return; }
  lpCharts.forEach(c => c.destroy());
  lpCharts = [];
  const page = document.getElementById('lesson-page');
  const body = document.getElementById('lp-body');
  document.getElementById('lp-progress').textContent = `Lesson ${index + 1} of ${allLessons.length}`;
  // Show immediately with English content + loading if translation needed
  const rawContent = getLF(lesson, 'fullContent');
  body.innerHTML = buildLessonHTML(lesson, index, allLessons, rawContent);
  page.style.display = 'block';
  page.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  setTimeout(() => { buildLessonCharts(lesson); renderComments(lesson.id); renderLessonReactions(lesson.id); }, 100);
  // If language needs translation, translate in background
  if (LANG_CODES[currentLang]) {
    const translated = await translateLessonBody(rawContent, currentLang);
    if (translated !== rawContent) {
      body.innerHTML = buildLessonHTML(lesson, index, allLessons, translated);
      setTimeout(() => buildLessonCharts(lesson), 100);
    }
  }
}

function buildLessonHTML(lesson, index, all, overrideContent) {
  const prev = index > 0 ? `<button class="lp-nav-btn" onclick="openLessonPage(currentLessons[${index-1}],${index-1},currentLessons)">← ${getLF(all[index-1],'title')}</button>` : '<span></span>';
  const next = index < all.length-1 ? `<button class="lp-nav-btn next" onclick="openLessonPage(currentLessons[${index+1}],${index+1},currentLessons)">${getLF(all[index+1],'title')} →</button>` : '<span></span>';
  const content = overrideContent || getLF(lesson, 'fullContent');
  return `
    <div class="lp-hero">
      <div class="lp-icon">${lesson.icon}</div>
      <div class="lp-tag-chip">${getLF(lesson,'tag')}</div>
      <h1 class="lp-title">${getLF(lesson,'title')}</h1>
      <p class="lp-lead">${getLF(lesson,'desc')}</p>
    </div>
    ${content}
    <div class="lp-nav-btns">${prev}${next}</div>
    ${buildCommentsSection(lesson.id)}`;
}

function buildLessonCharts(lesson) {
  if (!lesson.charts) return;
  lesson.charts.forEach(cfg => {
    const el = document.getElementById(cfg.id);
    if (!el) return;
    lpCharts.push(new Chart(el, cfg.config));
  });
}

let currentLessons = [];

// ===== STOCKS LESSONS =====
const stocksLessons = [
{
  icon:'🏢', id:'s1', title:{en:'What is a Stock?', he:'מה זו מניה?'}, tag:{en:'Fundamentals', he:'יסודות'},
  desc:{en:'A ownership stake in a company — when you buy an Apple share you become a small partner', he:'חלק בעלות בחברה — כשאתה קונה מניית אפל אתה הופך לשותף קטן'},
  charts:[{
    id:'chart-share-growth',
    config:{type:'bar',data:{labels:['2019','2020','2021','2022','2023','2024'],datasets:[{label:'Apple Share Price ($)',data:[73,132,178,130,192,254],backgroundColor:'rgba(124,108,252,0.7)',borderRadius:8,borderSkipped:false}]},options:{plugins:{legend:{labels:{color:'#888899'}},tooltip:{callbacks:{label:ctx=>'$'+ctx.raw}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">What exactly is a stock?</div>
    <p class="lp-text">A stock is an <strong>ownership stake in a company</strong>. A company like Apple is worth trillions — but it is divided into billions of tiny pieces. Each piece = one share. When you buy a share — you become a small partner of the company.</p>
    <div class="lp-highlight">💡 Example: Apple is worth about $3.8 trillion. It divided itself into 15 billion shares. Each share = about $254. Bought one share? You own 1 out of 15 billion pieces of the most valuable company in the world.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">How do you profit from a stock?</div>
    <ul class="lp-list">
      <li><span>📈</span><div><strong>Value appreciation</strong> — bought at $100, sold at $150 = profit of $50 (50%). Money made money without you working!</div></li>
      <li><span>💰</span><div><strong>Dividend</strong> — companies like Microsoft distribute a portion of their profits to shareholders every quarter. You receive money just because you hold a share.</div></li>
      <li><span>🛡️</span><div><strong>Inflation protection</strong> — money in a bank account loses value. Shares in strong companies typically rise with inflation.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">Apple share price over the years</div>
    <div class="lp-chart-card"><div class="lp-chart-title">Someone who bought Apple in 2019 at $73 — today their share is worth $254 (3.5x in 5 years)</div>
    <div class="lp-chart-wrap"><canvas id="chart-share-growth"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">What to remember</div>
    <div class="lp-highlight red">⚠️ Only invest money you won't need in the next year or two. The stock market = long term!</div>
    <div class="lp-highlight green">✅ You don't need a lot of money to start — you can buy a fraction of a share (fractional shares) from as little as $10.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">מה בדיוק זו מניה?</div>
    <p class="lp-text">מניה היא <strong>חלק בעלות בחברה</strong>. חברה כמו אפל שווה טריליונים — אבל היא מחולקת למיליארדי חתיכות קטנות. כל חתיכה = מניה אחת. כשאתה קונה מניה — אתה הופך לשותף קטן של החברה.</p>
    <div class="lp-highlight">💡 דוגמה: אפל שווה כ-3.8 טריליון דולר. היא חילקה את עצמה ל-15 מיליארד מניות. כל מניה = כ-254$. קנית מניה אחת? אתה הבעלים של 1 מתוך 15 מיליארד חלקים מהחברה היקרה ביותר בעולם.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">איך מרוויחים ממניה?</div>
    <ul class="lp-list">
      <li><span>📈</span><div><strong>עלייה בערך</strong> — קנית ב-100$, מכרת ב-150$ = רווח של 50$ (50%). הכסף עשה כסף בלי שעבדת!</div></li>
      <li><span>💰</span><div><strong>דיבידנד</strong> — חברות כמו מיקרוסופט מחלקות חלק מהרווחים לבעלי המניות כל רבעון. אתה מקבל כסף רק בגלל שאתה מחזיק מניה.</div></li>
      <li><span>🛡️</span><div><strong>הגנה מפני אינפלציה</strong> — כסף בחשבון בנק מאבד ערך. מניות בחברות חזקות בדרך כלל עולות עם האינפלציה.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">מחיר מניית אפל לאורך השנים</div>
    <div class="lp-chart-card"><div class="lp-chart-title">מי שקנה אפל ב-2019 ב-73$ — היום המניה שלו שווה 254$ (פי 3.5 תוך 5 שנים)</div>
    <div class="lp-chart-wrap"><canvas id="chart-share-growth"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">מה לזכור</div>
    <div class="lp-highlight red">⚠️ השקיעו רק כסף שלא תצטרכו בשנה-שנתיים הקרובות. שוק המניות = לטווח ארוך!</div>
    <div class="lp-highlight green">✅ לא צריך הרבה כסף כדי להתחיל — אפשר לקנות שבריר מניה (fractional shares) מ-10$ בלבד.</div>
    </div>`}
},
{
  icon:'📈', id:'s2', title:{en:'Why Does a Stock Rise?', he:'למה מניה עולה?'}, tag:{en:'Fundamentals', he:'יסודות'},
  desc:{en:'More buyers than sellers = price rises. The stock market is psychology, not physics', he:'יותר קונים מוכרים = המחיר עולה. שוק המניות הוא פסיכולוגיה, לא פיזיקה'},
  charts:[{
    id:'chart-supply-demand',
    config:{type:'line',data:{labels:['January','February','March','April','May','June'],datasets:[{label:'Buyers',data:[40,55,70,60,90,110],borderColor:'#00e096',backgroundColor:'rgba(0,224,150,0.1)',tension:0.4,fill:true},{label:'Sellers',data:[60,50,45,55,40,35],borderColor:'#ff4d6d',backgroundColor:'rgba(255,77,109,0.1)',tension:0.4,fill:true}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The simple formula of the stock market</div>
    <p class="lp-text">The stock market works like any market — <strong>supply and demand</strong>: when demand is higher than supply, the price rises. When there are more people who want to buy a stock than those who want to sell — the price rises.</p>
    <div class="lp-highlight">📊 The chart below shows: when buyers (green) rise and surpass sellers (red) — the stock starts to rise!</div>
    <div class="lp-chart-card"><div class="lp-chart-title">Buyers vs Sellers — when buyers rise, the price rises</div>
    <div class="lp-chart-wrap"><canvas id="chart-supply-demand"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">What makes people buy?</div>
    <ul class="lp-list">
      <li><span>💹</span><div><strong>Big profits</strong> — Nvidia announced a massive profit from selling AI chips. Everyone wanted to buy → the stock rose 200% in a year.</div></li>
      <li><span>📰</span><div><strong>Good news</strong> — Apple announced Vision Pro. Most people thought it was a futuristic product → they bought.</div></li>
      <li><span>🌍</span><div><strong>Strong economy</strong> — when interest rates fall, people take money out of the bank and put it in the stock market.</div></li>
      <li><span>🐑</span><div><strong>Herd mentality</strong> — everyone is buying? Me too. It sounds silly but that's the reality.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">The stock market is mass psychology</div>
    <div class="lp-highlight red">🌷 Tulip mania in 1637: a Dutch tulip bulb rose to the value of an entire house. People sold everything to buy bulbs. Then — a 99% crash in one day. It happened because everyone <em>believed</em> it was worth money.</div>
    <div class="lp-highlight green">💡 The conclusion: the stock market is expectations, not reality. A stock rises when people <em>expect</em> the company to earn more in the future — even before it happens!</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">הנוסחה הפשוטה של שוק המניות</div>
    <p class="lp-text">שוק המניות עובד כמו כל שוק — <strong>היצע וביקוש</strong>: כשהביקוש גדול מההיצע, המחיר עולה. כשיש יותר אנשים שרוצים לקנות מניה מאלו שרוצים למכור — המחיר עולה.</p>
    <div class="lp-highlight">📊 הגרף למטה מראה: כשהקונים (ירוק) עולים ועוברים את המוכרים (אדום) — המניה מתחילה לעלות!</div>
    <div class="lp-chart-card"><div class="lp-chart-title">קונים מול מוכרים — כשהקונים עולים, המחיר עולה</div>
    <div class="lp-chart-wrap"><canvas id="chart-supply-demand"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">מה גורם לאנשים לקנות?</div>
    <ul class="lp-list">
      <li><span>💹</span><div><strong>רווחים גדולים</strong> — Nvidia הודיעה על רווח עצום ממכירת שבבי AI. כולם רצו לקנות → המניה עלתה 200% בשנה.</div></li>
      <li><span>📰</span><div><strong>חדשות טובות</strong> — אפל הכריזה על Vision Pro. רוב האנשים חשבו שזה מוצר עתידני → קנו.</div></li>
      <li><span>🌍</span><div><strong>כלכלה חזקה</strong> — כשריבית יורדת, אנשים מוציאים כסף מהבנק ומכניסים לשוק המניות.</div></li>
      <li><span>🐑</span><div><strong>עדר</strong> — כולם קונים? גם אני. נשמע טיפשי אבל זאת המציאות.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">שוק המניות הוא פסיכולוגיה המונית</div>
    <div class="lp-highlight red">🌷 משבר הצבעוניים ב-1637: בצל צבעוני הולנדי עלה לשווי של בית שלם. אנשים מכרו הכל כדי לקנות בצלים. ואז — קריסה של 99% ביום אחד. זה קרה כי כולם <em>האמינו</em> שהוא שווה כסף.</div>
    <div class="lp-highlight green">💡 המסקנה: שוק המניות הוא ציפיות, לא מציאות. מניה עולה כשאנשים <em>מצפים</em> שהחברה תרוויח יותר בעתיד — גם לפני שזה קרה!</div>
    </div>`}
},
{
  icon:'🎯', id:'s3', title:{en:'How to Choose a Stock?', he:'איך בוחרים מניה?'}, tag:{en:'Strategy', he:'אסטרטגיה'},
  desc:{en:'4 rules: know the product, be their customer, profitable company, diversify', he:'4 כללים: תכיר את המוצר, היה לקוח שלהם, חברה רווחית, פיזור'},
  charts:[{
    id:'chart-stock-pick',
    config:{type:'radar',data:{labels:['Rising Sales','Profitable','Known Product','Growing Demand','Fair P/E'],datasets:[{label:'NVDA',data:[95,85,90,100,60],borderColor:'#00e096',backgroundColor:'rgba(0,224,150,0.15)'},{label:'Random Stock',data:[40,20,35,30,80],borderColor:'#ff4d6d',backgroundColor:'rgba(255,77,109,0.1)'}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{r:{ticks:{display:false},grid:{color:'rgba(255,255,255,0.1)'},pointLabels:{color:'#888899'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Peter Lynch's rule — the investor who beat Wall Street</div>
    <p class="lp-text">Peter Lynch managed an investment fund that returned 29% per year for 13 years. His secret? <strong>"Invest in what you know."</strong> Before buying a stock — ask yourself: do you know and use their product?</p>
    <div class="lp-highlight">💡 You're a gamer? You use Nvidia's graphics card, play on Steam, subscribe to Microsoft's Game Pass. These are stocks you <em>understand</em> better than most analysts on Wall Street!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">4 questions before buying</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div><strong>Do you know the product?</strong> — Can you explain what the company does in less than 30 seconds?</div></li>
      <li><span>2️⃣</span><div><strong>Are you their customer?</strong> — Do you buy their product or service?</div></li>
      <li><span>3️⃣</span><div><strong>Is the company profitable?</strong> — Check on Google Finance: is there a positive Profit?</div></li>
      <li><span>4️⃣</span><div><strong>Diversify</strong> — no more than 10% of the portfolio on one stock. Even Nvidia.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">Comparison: good stock vs bad stock</div>
    <div class="lp-chart-card"><div class="lp-chart-title">Score by criteria — NVDA vs a random stock</div>
    <div class="lp-chart-wrap"><canvas id="chart-stock-pick"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Red flags — don't buy</div>
    <div class="lp-highlight red">🚩 "This company will change the world!" — but it doesn't earn a cent<br>🚩 Stock rose 500% in a month — possibly speculation<br>🚩 You don't know what the company does<br>🚩 "Everyone says buy" — FOMO is your enemy</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">כלל פיטר לינץ' — המשקיע שניצח את וול סטריט</div>
    <p class="lp-text">פיטר לינץ' ניהל קרן השקעות שהחזירה 29% בשנה במשך 13 שנים. הסוד שלו? <strong>"השקיעו במה שאתם מכירים."</strong> לפני שקונים מניה — שאל את עצמך: האם אתה מכיר ומשתמש במוצר שלהם?</p>
    <div class="lp-highlight">💡 גיימר? אתה משתמש בכרטיס המסך של Nvidia, משחק Steam, מנוי Game Pass של מיקרוסופט. אלו מניות שאתה <em>מבין</em> טוב יותר מרוב האנליסטים בוול סטריט!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">4 שאלות לפני הקנייה</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div><strong>האם אתה מכיר את המוצר?</strong> — האם תוכל להסביר מה החברה עושה בפחות מ-30 שניות?</div></li>
      <li><span>2️⃣</span><div><strong>האם אתה לקוח שלהם?</strong> — האם אתה קונה את המוצר או השירות שלהם?</div></li>
      <li><span>3️⃣</span><div><strong>האם החברה רווחית?</strong> — בדוק ב-Google Finance: האם יש רווח חיובי?</div></li>
      <li><span>4️⃣</span><div><strong>פיזר</strong> — לא יותר מ-10% מהתיק על מניה אחת. גם Nvidia.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">השוואה: מניה טובה vs מניה רעה</div>
    <div class="lp-chart-card"><div class="lp-chart-title">ניקוד לפי קריטריונים — NVDA מול מניה אקראית</div>
    <div class="lp-chart-wrap"><canvas id="chart-stock-pick"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">דגלים אדומים — אל תקנה</div>
    <div class="lp-highlight red">🚩 "החברה הזאת תשנה את העולם!" — אבל לא מרוויחה שקל<br>🚩 מניה עלתה 500% בחודש — ייתכן ספקולציה<br>🚩 אתה לא יודע מה החברה עושה<br>🚩 "כולם אומרים לקנות" — FOMO הוא האויב שלך</div>
    </div>`}
},
{
  icon:'📊', id:'s4', title:{en:'Reading Charts', he:'קריאת גרפים'}, tag:{en:'Technical', he:'טכני'},
  desc:{en:'Uptrend, downtrend and sideways — how to read the story of a stock', he:'מגמה עולה, יורדת ורוחבית — איך לקרוא את הסיפור של מניה'},
  charts:[{
    id:'chart-trends',
    config:{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],datasets:[{label:'Uptrend',data:[100,105,102,110,108,118,115,125,122,130,128,140],borderColor:'#00e096',tension:0.4,fill:false},{label:'Downtrend',data:[null,null,null,null,140,135,138,130,133,125,120,115],borderColor:'#ff4d6d',tension:0.4,fill:false},{label:'Sideways Trend',data:[null,null,null,null,null,null,null,null,80,82,79,81],borderColor:'#7c6cfc',tension:0.4,fill:false}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The only three trends that exist</div>
    <p class="lp-text">Every stock at every moment is in one of three trends. Once you identify the trend — you know what to do.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">⬆️</div><div class="lp-mini-lbl">Uptrend — higher highs. Every dip is temporary. This is a time to buy!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">⬇️</div><div class="lp-mini-lbl">Downtrend — lower lows. Don't buy the fall!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#7c6cfc">➡️</div><div class="lp-mini-lbl">Sideways — the stock is stuck. Wait for a breakout.</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">3 trends over the same period — green rising, red falling, purple sideways</div>
    <div class="lp-chart-wrap"><canvas id="chart-trends"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">The trick: ask "over what timeframe?"</div>
    <p class="lp-text">The exact same stock can be in an uptrend over a year but in a downtrend over a week. Therefore:</p>
    <ul class="lp-list">
      <li><span>📅</span><div><strong>Long-term investor</strong> — look at a chart of one year or more. A weekly dip? Not relevant.</div></li>
      <li><span>📆</span><div><strong>Short-term trading</strong> — look at week/day. Every point matters here.</div></li>
    </ul>
    <div class="lp-highlight green">💡 S&P 500 (the 500 largest companies) — in every historical 10-year period since 1920, it rose. Even after the 2008 crash, COVID, and everything. Long-term uptrend = fact.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">שלוש המגמות היחידות שקיימות</div>
    <p class="lp-text">כל מניה בכל רגע נתון נמצאת באחת משלוש מגמות. ברגע שמזהים את המגמה — יודעים מה לעשות.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">⬆️</div><div class="lp-mini-lbl">מגמה עולה — שיאים גבוהים יותר. כל ירידה זמנית. זה זמן לקנות!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">⬇️</div><div class="lp-mini-lbl">מגמה יורדת — שפלים נמוכים יותר. אל תקנה את הנפילה!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#7c6cfc">➡️</div><div class="lp-mini-lbl">רוחבית — המניה תקועה. חכה לפריצה.</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">3 מגמות באותה תקופה — ירוק עולה, אדום יורד, סגול רוחבי</div>
    <div class="lp-chart-wrap"><canvas id="chart-trends"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">הטריק: שאל "על איזה טווח זמן?"</div>
    <p class="lp-text">אותה מניה בדיוק יכולה להיות במגמה עולה לאורך שנה אבל במגמה יורדת לאורך שבוע. לכן:</p>
    <ul class="lp-list">
      <li><span>📅</span><div><strong>משקיע לטווח ארוך</strong> — תסתכל על גרף של שנה ויותר. ירידה שבועית? לא רלוונטי.</div></li>
      <li><span>📆</span><div><strong>מסחר קצר טווח</strong> — תסתכל על שבוע/יום. כל נקודה חשובה פה.</div></li>
    </ul>
    <div class="lp-highlight green">💡 S&P 500 (500 החברות הגדולות) — בכל תקופת 10 שנים היסטורית מ-1920, הוא עלה. גם אחרי משבר 2008, קורונה, וכל השאר. מגמה עולה לטווח ארוך = עובדה.</div>
    </div>`}
},
{
  icon:'🧱', id:'s5', title:{en:'Support and Resistance', he:'תמיכה והתנגדות'}, tag:{en:'Technical', he:'טכני'},
  desc:{en:'The floor and ceiling of the stock — when to buy and when to sell', he:'הרצפה והתקרה של המניה — מתי לקנות ומתי למכור'},
  charts:[{
    id:'chart-support',
    config:{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],datasets:[{label:'Share Price',data:[120,135,128,140,132,141,129,138],borderColor:'#7c6cfc',tension:0.4,fill:false,pointRadius:4},{label:'Support ($125)',data:[125,125,125,125,125,125,125,125],borderColor:'#00e096',borderDash:[6,3],pointRadius:0},{label:'Resistance ($145)',data:[145,145,145,145,145,145,145,145],borderColor:'#ff4d6d',borderDash:[6,3],pointRadius:0}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The floor and ceiling of every stock</div>
    <p class="lp-text">Every stock touches a certain line and "bounces" back — again and again. It's not magic — it's mass psychology. Thousands of people see the same chart and react the same way.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">🟢 Support</div><div class="lp-mini-lbl">The floor — the price always bounced back up from here. Time to buy!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">🔴 Resistance</div><div class="lp-mini-lbl">The ceiling — the price always fell from here. Consider selling or waiting for a breakout.</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">Green support line ($125) — Red resistance line ($145)</div>
    <div class="lp-chart-wrap"><canvas id="chart-support"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Breakout — the strongest signal</div>
    <div class="lp-highlight green">🚀 When a stock <strong>breaks through the resistance line</strong> — it's one of the strongest buy signals! The reason: everyone who held the stock and was "stuck" at a loss — is now at break-even. They sell. But if the price rises above after they finish selling — there's strong upward momentum.</div>
    <div class="lp-highlight">📌 Important rule: a support that breaks becomes resistance. A resistance that breaks becomes support. The psychology has flipped!</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">הרצפה והתקרה של כל מניה</div>
    <p class="lp-text">כל מניה נוגעת בקו מסוים ו"קופצת" חזרה — שוב ושוב. זה לא קסם — זו פסיכולוגיה המונית. אלפי אנשים רואים את אותו גרף ומגיבים באותה דרך.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">🟢 תמיכה</div><div class="lp-mini-lbl">הרצפה — המחיר תמיד קפץ חזרה למעלה מכאן. זמן לקנות!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">🔴 התנגדות</div><div class="lp-mini-lbl">התקרה — המחיר תמיד נפל מכאן. שקול למכור או לחכות לפריצה.</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">קו תמיכה ירוק ($125) — קו התנגדות אדום ($145)</div>
    <div class="lp-chart-wrap"><canvas id="chart-support"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">פריצה — האות החזק ביותר</div>
    <div class="lp-highlight green">🚀 כשמניה <strong>פורצת את קו ההתנגדות</strong> — זה אחד מאותות הקנייה החזקים ביותר! הסיבה: כל מי שהחזיק את המניה ו"נתקע" בהפסד — עכשיו בנקודת איזון. הם מוכרים. אבל אם המחיר ממשיך לעלות אחרי שהם סיימו למכור — יש תנופה עולה חזקה.</div>
    <div class="lp-highlight">📌 כלל חשוב: תמיכה שנשברת הופכת להתנגדות. התנגדות שנשברת הופכת לתמיכה. הפסיכולוגיה התהפכה!</div>
    </div>`}
},
{
  icon:'🌍', id:'s6', title:{en:'Market Cap', he:'שווי שוק'}, tag:{en:'Fundamentals', he:'יסודות'},
  desc:{en:'Share price ≠ company value. Apple is worth more despite a lower price', he:'מחיר מניה ≠ שווי חברה. אפל שווה יותר למרות מחיר נמוך יותר'},
  charts:[{
    id:'chart-marketcap',
    config:{type:'bar',data:{labels:['Apple','NVIDIA','Microsoft','Google','Meta'],datasets:[{label:'Market Cap ($ Trillion)',data:[3.8,2.2,3.1,2.0,1.3],backgroundColor:['rgba(124,108,252,0.8)','rgba(0,224,150,0.8)','rgba(0,224,150,0.6)','rgba(124,108,252,0.6)','rgba(255,77,109,0.6)'],borderRadius:8,borderSkipped:false}]},options:{indexAxis:'y',plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>'$'+ctx.raw+' trillion'}}},scales:{x:{ticks:{color:'#888899',callback:v=>'$'+v+'T'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{display:false}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The price alone means nothing</div>
    <p class="lp-text">A very common mistake: "a stock at $50 is cheaper than a stock at $500". This is completely wrong. The price alone means nothing — what matters is the <strong>total market capitalization</strong> of the company.</p>
    <div class="lp-highlight">🍕 Example: Pizza A was divided into 4 slices at $50 each = $200 total. Pizza B was divided into 20 slices at $10 each = $200 total. Same pizza! A cheap slice doesn't mean a cheap pizza.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">The formula</div>
    <div class="lp-highlight green" style="font-size:1.1rem;text-align:center;">Market Cap = Share Price × Number of Shares</div>
    <ul class="lp-list">
      <li><span>🍎</span><div><strong>Apple:</strong> $254 × 15 billion shares = $3.8 trillion</div></li>
      <li><span>🟢</span><div><strong>Nvidia:</strong> $182 × 24 billion shares = $2.2 trillion</div></li>
    </ul>
    <p class="lp-text">Even though Nvidia's share price is lower than Apple's — Nvidia is worth less. Because it has more shares!</p>
    </div>
    <div class="lp-section"><div class="lp-section-title">The most valuable companies in the world</div>
    <div class="lp-chart-card"><div class="lp-chart-title">Market Cap — $trillions (2024)</div>
    <div class="lp-chart-wrap"><canvas id="chart-marketcap"></canvas></div></div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">המחיר לבד לא אומר כלום</div>
    <p class="lp-text">טעות נפוצה מאוד: "מניה ב-50$ זולה יותר ממניה ב-500$". זה לחלוטין לא נכון. המחיר לבד לא אומר כלום — מה שחשוב הוא <strong>שווי השוק הכולל</strong> של החברה.</p>
    <div class="lp-highlight">🍕 דוגמה: פיצה א' חולקה ל-4 פרוסות ב-50$ כל אחת = 200$ בסך הכל. פיצה ב' חולקה ל-20 פרוסות ב-10$ כל אחת = 200$ בסך הכל. אותה פיצה! פרוסה זולה לא אומרת פיצה זולה.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">הנוסחה</div>
    <div class="lp-highlight green" style="font-size:1.1rem;text-align:center;">שווי שוק = מחיר מניה × מספר מניות</div>
    <ul class="lp-list">
      <li><span>🍎</span><div><strong>אפל:</strong> 254$ × 15 מיליארד מניות = 3.8 טריליון דולר</div></li>
      <li><span>🟢</span><div><strong>Nvidia:</strong> 182$ × 24 מיליארד מניות = 2.2 טריליון דולר</div></li>
    </ul>
    <p class="lp-text">למרות שמחיר המניה של Nvidia נמוך מזה של אפל — Nvidia שווה פחות. כי יש לה יותר מניות!</p>
    </div>
    <div class="lp-section"><div class="lp-section-title">החברות היקרות ביותר בעולם</div>
    <div class="lp-chart-card"><div class="lp-chart-title">שווי שוק — בטריליוני דולר (2024)</div>
    <div class="lp-chart-wrap"><canvas id="chart-marketcap"></canvas></div></div>
    </div>`}
},
{
  icon:'⚡', id:'s7', title:{en:'Beta and Volatility', he:'בטא ותנודתיות'}, tag:{en:'Risk', he:'סיכון'},
  desc:{en:'How volatile a stock is — energy companies vs Apple', he:'כמה תנודתית מניה — חברות אנרגיה מול אפל'},
  charts:[{
    id:'chart-beta',
    config:{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Beta 2.0 (Very Volatile)',data:[100,140,90,155,80,145],borderColor:'#ff4d6d',tension:0.3,fill:false},{label:'Beta 1.0 (Market)',data:[100,110,95,115,100,120],borderColor:'#7c6cfc',tension:0.3,fill:false},{label:'Beta 0.5 (Stable)',data:[100,105,97,108,100,110],borderColor:'#00e096',tension:0.3,fill:false}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">What is Beta?</div>
    <p class="lp-text">Beta measures <strong>how volatile a stock is relative to the overall market</strong>. The market = Beta 1.0. A stock with a higher beta — larger moves in both directions.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num">0.5</div><div class="lp-mini-lbl">Stable — rises and falls less than the market. Less risk, less potential</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num">1.0</div><div class="lp-mini-lbl">Like the market — rises and falls like the S&P500</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">2.0</div><div class="lp-mini-lbl">Very volatile — market rose 10%? The stock rose 20%. Fell 10%? Fell 20%</div></div>
    </div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Volatility comparison</div>
    <div class="lp-chart-card"><div class="lp-chart-title">Same period — different beta = completely different moves</div>
    <div class="lp-chart-wrap"><canvas id="chart-beta"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Beta in reality</div>
    <ul class="lp-list">
      <li><span>🍎</span><div><strong>Apple — Beta ~1.2</strong>: Slightly volatile. People buy iPhones even in a recession.</div></li>
      <li><span>⛽</span><div><strong>Energy companies — Beta 1.7-2.0</strong>: Very volatile. Oil price goes crazy = the stock goes crazy.</div></li>
      <li><span>🎮</span><div><strong>Roblox — Beta ~1.8</strong>: Growth stock = more volatile = more potential and more risk.</div></li>
    </ul>
    <div class="lp-highlight red">⚠️ If you're a beginner — start with relatively low beta stocks (1.0-1.3). High beta = need strong nerves and don't sell in panic!</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">מה זה בטא?</div>
    <p class="lp-text">בטא מודד <strong>כמה תנודתית מניה ביחס לשוק הכללי</strong>. השוק = בטא 1.0. מניה עם בטא גבוה יותר — תנועות גדולות יותר בשני הכיוונים.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num">0.5</div><div class="lp-mini-lbl">יציבה — עולה ויורדת פחות מהשוק. פחות סיכון, פחות פוטנציאל</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num">1.0</div><div class="lp-mini-lbl">כמו השוק — עולה ויורדת כמו S&P500</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">2.0</div><div class="lp-mini-lbl">תנודתית מאוד — שוק עלה 10%? המניה עלתה 20%. ירד 10%? ירדה 20%</div></div>
    </div>
    </div>
    <div class="lp-section"><div class="lp-section-title">השוואת תנודתיות</div>
    <div class="lp-chart-card"><div class="lp-chart-title">אותה תקופה — בטא שונה = תנועות שונות לחלוטין</div>
    <div class="lp-chart-wrap"><canvas id="chart-beta"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">בטא במציאות</div>
    <ul class="lp-list">
      <li><span>🍎</span><div><strong>אפל — בטא ~1.2</strong>: תנודתית מעט. אנשים קונים אייפונים גם במיתון.</div></li>
      <li><span>⛽</span><div><strong>חברות אנרגיה — בטא 1.7-2.0</strong>: תנודתיות מאוד. מחיר הנפט משתגע = המניה משתגעת.</div></li>
      <li><span>🎮</span><div><strong>Roblox — בטא ~1.8</strong>: מניית צמיחה = יותר תנודתית = יותר פוטנציאל ויותר סיכון.</div></li>
    </ul>
    <div class="lp-highlight red">⚠️ אם אתה מתחיל — התחל עם מניות עם בטא יחסית נמוך (1.0-1.3). בטא גבוה = צריך עצבים חזקים ולא למכור בפאניקה!</div>
    </div>`}
},
{
  icon:'😱', id:'s8', title:{en:'Trading Psychology', he:'פסיכולוגיית מסחר'}, tag:{en:'Psychology', he:'פסיכולוגיה'},
  desc:{en:'FOMO, panic, Buy the Dip — why most people lose money', he:'FOMO, פאניקה, Buy the Dip — למה רוב האנשים מפסידים כסף'},
  charts:[{
    id:'chart-psych',
    config:{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],datasets:[{label:'Stock Price',data:[100,120,145,170,150,120,90,105,130,160],borderColor:'#7c6cfc',tension:0.4,fill:false,pointRadius:5},{label:'Average Investor Feeling',data:[null,null,null,null,null,null,null,null,null,null],borderColor:'transparent',pointRadius:0}]},options:{plugins:{legend:{labels:{color:'#888899'}},annotation:{}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Why do 90% of traders lose?</div>
    <p class="lp-text">Not because they're stupid. Because the human brain <strong>is not built to invest</strong>. Evolution programmed us to flee from danger and chase immediate reward. In the stock market — both of those traits will kill you.</p>
    <div class="lp-chart-card"><div class="lp-chart-title">The stock fell and rose — the average investor bought at the peak and sold at the bottom</div>
    <div class="lp-chart-wrap"><canvas id="chart-psych"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">The 3 big traps</div>
    <ul class="lp-list">
      <li><span>😰</span><div><strong>FOMO — Fear Of Missing Out</strong>: Everyone is talking about a stock that "rose 300%". You buy when it's already at its peak. Then it drops. You bought high and sold low.</div></li>
      <li><span>😱</span><div><strong>Panic</strong>: The stock fell 20%. Your brain screams "run!" You sell. The stock recovers. You sold at the bottom.</div></li>
      <li><span>🎯</span><div><strong>Over-Trading</strong>: Checking the portfolio 20 times a day and making trades based on emotions. Every trade = a fee. Total — a loss.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">The solution: Buy the Dip + Hold</div>
    <div class="lp-highlight green">💪 <strong>Buy the Dip</strong> — when a good stock falls without a real reason, it's not a disaster — it's an opportunity to buy more at a discount!</div>
    <div class="lp-highlight">🏆 Warren Buffett: "The stock market is a device for transferring money from the impatient to the patient." The best investor is the most boring — buys, holds, doesn't check every day.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">למה 90% מהסוחרים מפסידים?</div>
    <p class="lp-text">לא כי הם טיפשים. כי המוח האנושי <strong>לא בנוי להשקיע</strong>. האבולוציה תכנתה אותנו לברוח מסכנה ולרדוף אחרי תגמול מיידי. בשוק המניות — שתי התכונות האלו יהרגו אותך.</p>
    <div class="lp-chart-card"><div class="lp-chart-title">המניה נפלה ועלתה — המשקיע הממוצע קנה בשיא ומכר בתחתית</div>
    <div class="lp-chart-wrap"><canvas id="chart-psych"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">3 המלכודות הגדולות</div>
    <ul class="lp-list">
      <li><span>😰</span><div><strong>FOMO — פחד מהחמצה</strong>: כולם מדברים על מניה ש"עלתה 300%". אתה קונה כשהיא כבר בשיא. ואז היא יורדת. קנית גבוה ומכרת נמוך.</div></li>
      <li><span>😱</span><div><strong>פאניקה</strong>: המניה ירדה 20%. המוח שלך צועק "ברח!" אתה מוכר. המניה מתאוששת. מכרת בתחתית.</div></li>
      <li><span>🎯</span><div><strong>מסחר מוגזם</strong>: בדיקת התיק 20 פעם ביום וביצוע עסקאות על בסיס רגשות. כל עסקה = עמלה. בסך הכל — הפסד.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">הפתרון: Buy the Dip + Hold</div>
    <div class="lp-highlight green">💪 <strong>Buy the Dip</strong> — כשמניה טובה יורדת ללא סיבה אמיתית, זה לא אסון — זו הזדמנות לקנות יותר במחיר מוזל!</div>
    <div class="lp-highlight">🏆 וורן באפט: "שוק המניות הוא מכשיר להעברת כסף מחסרי הסבלנות לבעלי הסבלנות." המשקיע הטוב ביותר הוא המשעמם ביותר — קונה, מחזיק, לא בודק כל יום.</div>
    </div>`}
},
{
  icon:'🛑', id:'s9', title:{en:'Stop Loss & Take Profit', he:'סטופ לוס ורווח יעד'}, tag:{en:'Strategy', he:'אסטרטגיה'},
  desc:{en:'The two important buttons — maximum loss and maximum profit', he:'שני הכפתורים החשובים — הפסד מקסימלי ורווח מקסימלי'},
  charts:[{
    id:'chart-stoploss',
    config:{type:'line',data:{labels:['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7','Day 8','Day 9','Day 10'],datasets:[{label:'Price',data:[100,103,101,107,110,105,98,93,88,82],borderColor:'#7c6cfc',tension:0.4,fill:false},{label:'Stop Loss ($95)',data:[95,95,95,95,95,95,95,95,95,95],borderColor:'#ff4d6d',borderDash:[6,3],pointRadius:0},{label:'Take Profit ($115)',data:[115,115,115,115,115,115,115,115,115,115],borderColor:'#00e096',borderDash:[6,3],pointRadius:0}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">2 commands you must set before every purchase</div>
    <p class="lp-text">Before you click "Buy" — define two things: <strong>how much you're willing to lose</strong> and <strong>when you take profit</strong>. Not after you've bought — before. Because after, emotions take over.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">🛑 Stop Loss</div><div class="lp-mini-lbl">If the stock falls to price X — sell automatically. Protect your capital!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">🎯 Take Profit</div><div class="lp-mini-lbl">If the stock rises to price Y — sell automatically. Lock in the profit!</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">Example: Buy at $100, Stop Loss at $95, Take Profit at $115</div>
    <div class="lp-chart-wrap"><canvas id="chart-stoploss"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">How much to set?</div>
    <ul class="lp-list">
      <li><span>📉</span><div><strong>Stop Loss</strong>: usually 5-10% below the purchase price. Bought at $100? Stop Loss at $90-95.</div></li>
      <li><span>📈</span><div><strong>Take Profit</strong>: depends on expectations. Want 20% profit? Take Profit at $120.</div></li>
      <li><span>⚖️</span><div><strong>Risk/Reward ratio</strong>: ideally — potential profit should be at least 2x the risk. Risking $10? Expecting to earn at least $20.</div></li>
    </ul>
    <div class="lp-highlight green">💡 Trailing Stop Loss — a Stop Loss that moves up together with the stock! Stock rose to $120? The Stop Loss moves to $110. This locks in profits while the stock continues to rise.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">2 פקודות שחייבים להגדיר לפני כל קנייה</div>
    <p class="lp-text">לפני שלוחצים "קנה" — הגדר שני דברים: <strong>כמה אתה מוכן להפסיד</strong> ו<strong>מתי לקחת רווח</strong>. לא אחרי שקנית — לפני. כי אחרי, הרגשות משתלטים.</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">🛑 סטופ לוס</div><div class="lp-mini-lbl">אם המניה יורדת למחיר X — מכור אוטומטית. הגן על ההון שלך!</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">🎯 רווח יעד</div><div class="lp-mini-lbl">אם המניה עולה למחיר Y — מכור אוטומטית. נעל את הרווח!</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">דוגמה: קנה ב-100$, סטופ לוס ב-95$, רווח יעד ב-115$</div>
    <div class="lp-chart-wrap"><canvas id="chart-stoploss"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">כמה להגדיר?</div>
    <ul class="lp-list">
      <li><span>📉</span><div><strong>סטופ לוס</strong>: בדרך כלל 5-10% מתחת למחיר הקנייה. קנית ב-100$? סטופ לוס ב-90-95$.</div></li>
      <li><span>📈</span><div><strong>רווח יעד</strong>: תלוי בציפיות. רוצה 20% רווח? רווח יעד ב-120$.</div></li>
      <li><span>⚖️</span><div><strong>יחס סיכון/תגמול</strong>: אידיאלי — פוטנציאל הרווח צריך להיות לפחות פי 2 מהסיכון. מסתכן ב-10$? מצפה להרוויח לפחות 20$.</div></li>
    </ul>
    <div class="lp-highlight green">💡 Trailing Stop Loss — סטופ לוס שזזנ למעלה ביחד עם המניה! מניה עלתה ל-120$? הסטופ לוס זזן ל-110$. זה נועל רווחים בזמן שהמניה ממשיכה לעלות.</div>
    </div>`}
},
{
  icon:'🌐', id:'s10', title:{en:'Investment Diversification', he:'פיזור השקעות'}, tag:{en:'Strategy', he:'אסטרטגיה'},
  desc:{en:"Don't put all your eggs in one basket — across stocks, sectors and countries", he:'אל תשים את כל הביצים בסל אחד — פיזור על מניות, סקטורים ומדינות'},
  charts:[{
    id:'chart-diversify',
    config:{type:'doughnut',data:{labels:['Technology','Healthcare','Energy','Food & Beverages','Finance'],datasets:[{data:[30,20,15,20,15],backgroundColor:['rgba(124,108,252,0.8)','rgba(0,224,150,0.8)','rgba(255,77,109,0.8)','rgba(255,200,50,0.8)','rgba(100,200,255,0.8)'],borderWidth:0}]},options:{plugins:{legend:{labels:{color:'#888899',padding:15}}},cutout:'60%',responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Why is diversification important?</div>
    <p class="lp-text">If you put all your money into Nvidia in 2022 — you lost 50% in one year. If you had a diversified portfolio — you lost much less, because some stocks rose while Nvidia fell.</p>
    <div class="lp-highlight">🥚 "Don't put all your eggs in one basket" — an old saying but still the most important rule in investing.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">3 levels of diversification</div>
    <ul class="lp-list">
      <li><span>🏢</span><div><strong>Across stocks</strong>: no more than 10% on one company. 10 different stocks = basic diversification.</div></li>
      <li><span>🏭</span><div><strong>Across sectors</strong>: technology + healthcare + energy + food = when one sector falls, the others hold up.</div></li>
      <li><span>🌍</span><div><strong>Across countries</strong>: US + Europe + Asia. If one economy enters a recession — the others protect you.</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">Example diversified portfolio — no more than 30% in one sector</div>
    <div class="lp-chart-wrap"><canvas id="chart-diversify"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">The easiest solution: ETF</div>
    <div class="lp-highlight green">💡 ETF on S&P 500 (symbol: SPY or VOO) = one investment that invests in the 500 largest US companies. Historical performance: ~10% per year on average. Perfect for beginners!</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">למה פיזור חשוב?</div>
    <p class="lp-text">אם שמת את כל הכסף שלך על Nvidia ב-2022 — הפסדת 50% בשנה אחת. אם היה לך תיק מפוזר — הפסדת הרבה פחות, כי חלק מהמניות עלו בזמן ש-Nvidia ירדה.</p>
    <div class="lp-highlight">🥚 "אל תשים את כל הביצים בסל אחד" — פתגם ישן אבל עדיין הכלל החשוב ביותר בהשקעות.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">3 רמות של פיזור</div>
    <ul class="lp-list">
      <li><span>🏢</span><div><strong>פיזור על מניות</strong>: לא יותר מ-10% על חברה אחת. 10 מניות שונות = פיזור בסיסי.</div></li>
      <li><span>🏭</span><div><strong>פיזור על סקטורים</strong>: טכנולוגיה + בריאות + אנרגיה + מזון = כשסקטור אחד יורד, האחרים מחזיקים.</div></li>
      <li><span>🌍</span><div><strong>פיזור על מדינות</strong>: ארה"ב + אירופה + אסיה. אם כלכלה אחת נכנסת למיתון — האחרות מגינות עליך.</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">דוגמת תיק מפוזר — לא יותר מ-30% בסקטור אחד</div>
    <div class="lp-chart-wrap"><canvas id="chart-diversify"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">הפתרון הקל ביותר: ETF</div>
    <div class="lp-highlight green">💡 ETF על S&P 500 (סימול: SPY או VOO) = השקעה אחת שמשקיעה ב-500 החברות הגדולות בארה"ב. ביצועים היסטוריים: ~10% בשנה בממוצע. מושלם למתחילים!</div>
    </div>`}
},
{
  icon:'🔍', id:'s11', title:{en:'Fundamental Analysis', he:'ניתוח פונדמנטלי'}, tag:{en:'Advanced', he:'מתקדם'},
  desc:{en:'P/E Ratio, revenue, profit — 3 numbers every investor must know', he:'מכפיל רווח, הכנסות, רווח — 3 מספרים שכל משקיע חייב לדעת'},
  charts:[{
    id:'chart-fundamental',
    config:{type:'bar',data:{labels:['2021','2022','2023','2024'],datasets:[{label:'Revenue ($ billion)',data:[365,394,383,391],backgroundColor:'rgba(124,108,252,0.7)',borderRadius:6},{label:'Net Profit ($ billion)',data:[94,99,97,101],backgroundColor:'rgba(0,224,150,0.7)',borderRadius:6}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Fundamental Analysis — what is the company "really" worth?</div>
    <p class="lp-text">Technical analysis = analyzing charts. Fundamental analysis = analyzing the <strong>business</strong> itself. How much do they earn? How much are they growing? How much does it cost to buy $1 of their profit?</p>
    </div>
    <div class="lp-section"><div class="lp-section-title">The 3 important numbers</div>
    <ul class="lp-list">
      <li><span>📊</span><div><strong>P/E Ratio (Price-to-Earnings)</strong>: how much you pay for every $1 of profit. P/E = 20 means you pay $20 for $1 of annual profit. Lower = relatively "cheap". Historical average in S&P 500: ~15-20.</div></li>
      <li><span>💹</span><div><strong>Revenue</strong>: how much they sold. Rising every year = the business is growing. Falling = a problem.</div></li>
      <li><span>💰</span><div><strong>Net Profit</strong>: what's left after all expenses. A company that loses money = high risk, even if the stock is rising.</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">Apple — revenue and net profit over the years ($ billion)</div>
    <div class="lp-chart-wrap"><canvas id="chart-fundamental"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Where to check?</div>
    <ul class="lp-list">
      <li><span>🔍</span><div>Google Finance — search the stock name, click Financials</div></li>
      <li><span>📱</span><div>Yahoo Finance — free site with all the information</div></li>
      <li><span>📈</span><div>Macrotrends.net — historical charts for every financial number</div></li>
    </ul>
    <div class="lp-highlight green">✅ Ideal company: revenue rising every year + positive and growing profit + reasonable P/E (not 100+) + a product you understand.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">ניתוח פונדמנטלי — כמה החברה "באמת" שווה?</div>
    <p class="lp-text">ניתוח טכני = ניתוח גרפים. ניתוח פונדמנטלי = ניתוח ה<strong>עסק</strong> עצמו. כמה הם מרוויחים? כמה הם גדלים? כמה עולה לקנות 1$ מהרווח שלהם?</p>
    </div>
    <div class="lp-section"><div class="lp-section-title">3 המספרים החשובים</div>
    <ul class="lp-list">
      <li><span>📊</span><div><strong>מכפיל רווח (P/E)</strong>: כמה אתה משלם על כל 1$ רווח. P/E = 20 אומר שאתה משלם 20$ על 1$ רווח שנתי. נמוך יותר = יחסית "זול". ממוצע היסטורי ב-S&P 500: ~15-20.</div></li>
      <li><span>💹</span><div><strong>הכנסות</strong>: כמה הם מכרו. עולה כל שנה = העסק גדל. יורד = בעיה.</div></li>
      <li><span>💰</span><div><strong>רווח נקי</strong>: מה שנשאר אחרי כל ההוצאות. חברה שמפסידה כסף = סיכון גבוה, גם אם המניה עולה.</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">אפל — הכנסות ורווח נקי לאורך השנים (במיליארדי דולר)</div>
    <div class="lp-chart-wrap"><canvas id="chart-fundamental"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">איפה לבדוק?</div>
    <ul class="lp-list">
      <li><span>🔍</span><div>Google Finance — חפש את שם המניה, לחץ על Financials</div></li>
      <li><span>📱</span><div>Yahoo Finance — אתר חינמי עם כל המידע</div></li>
      <li><span>📈</span><div>Macrotrends.net — גרפים היסטוריים לכל מספר פיננסי</div></li>
    </ul>
    <div class="lp-highlight green">✅ חברה אידיאלית: הכנסות עולות כל שנה + רווח חיובי וגדל + P/E סביר (לא 100+) + מוצר שאתה מבין.</div>
    </div>`}
},
{
  icon:'🕯️', id:'s12', title:{en:'Candlestick Charts', he:'נרות יפניים'}, tag:{en:'Technical', he:'טכני'},
  desc:{en:'Every candle tells a story — green means buyers won, red means sellers won', he:'כל נר מספר סיפור — ירוק אומר הקונים ניצחו, אדום אומר המוכרים ניצחו'},
  charts:[{
    id:'chart-candle-sim',
    config:{type:'bar',data:{labels:['Mon','Tue','Wed','Thu','Fri','Mon','Tue','Wed'],datasets:[{label:'Body Up',data:[5,0,8,0,3,0,12,0],backgroundColor:'rgba(0,224,150,0.85)',stack:'candle'},{label:'Body Down',data:[0,7,0,4,0,9,0,5],backgroundColor:'rgba(255,77,109,0.85)',stack:'candle'}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">What is a candle?</div>
    <p class="lp-text">Each candle represents one time period (1 minute, 1 hour, 1 day — depending on the chart). Each candle contains 4 pieces of information:</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">O</div><div class="lp-mini-lbl"><strong>Open</strong> — price at start of the period</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">C</div><div class="lp-mini-lbl"><strong>Close</strong> — price at end of the period</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#7c6cfc">H</div><div class="lp-mini-lbl"><strong>High</strong> — highest price reached</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#f4c430">L</div><div class="lp-mini-lbl"><strong>Low</strong> — lowest price reached</div></div>
    </div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Green vs Red</div>
    <div class="lp-cards-row">
      <div class="lp-mini-card" style="border-color:#00e096"><div class="lp-mini-num" style="color:#00e096">🟢 Green Candle</div><div class="lp-mini-lbl">Close &gt; Open. Buyers were stronger. The body goes from Open (bottom) to Close (top).</div></div>
      <div class="lp-mini-card" style="border-color:#ff4d6d"><div class="lp-mini-num" style="color:#ff4d6d">🔴 Red Candle</div><div class="lp-mini-lbl">Close &lt; Open. Sellers were stronger. The body goes from Open (top) to Close (bottom).</div></div>
    </div>
    <div class="lp-highlight">🕯️ <strong>The wick (shadow)</strong> — the thin line above and below the body. Shows how far the price went in each direction before reversing. A long wick = strong rejection!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Key candle patterns</div>
    <ul class="lp-list">
      <li><span>🔨</span><div><strong>Hammer</strong> — small body, long bottom wick. Signals reversal upward. Strong buyers absorbed all the selling.</div></li>
      <li><span>⭐</span><div><strong>Doji</strong> — Open ≈ Close. Indecision. Neither buyers nor sellers won. Often signals a trend change.</div></li>
      <li><span>🕯️</span><div><strong>Engulfing</strong> — a candle that completely covers the previous one. The new color "wins". Very strong signal.</div></li>
      <li><span>🌟</span><div><strong>Shooting Star</strong> — small body, long upper wick. Signals reversal downward. Sellers rejected higher prices.</div></li>
    </ul>
    <div class="lp-highlight green">💡 Pro tip: a single candle means little. A candle <strong>at a key level</strong> (support/resistance) — that's a signal worth acting on!</div>
    </div>`,he:`
    <div class="lp-section"><div class="lp-section-title">מה זה נר?</div>
    <p class="lp-text">כל נר מייצג פרק זמן אחד (דקה, שעה, יום — תלוי בגרף). כל נר מכיל 4 פיסות מידע:</p>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#00e096">O</div><div class="lp-mini-lbl"><strong>פתיחה</strong> — מחיר בתחילת התקופה</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#ff4d6d">C</div><div class="lp-mini-lbl"><strong>סגירה</strong> — מחיר בסוף התקופה</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#7c6cfc">H</div><div class="lp-mini-lbl"><strong>גבוה</strong> — המחיר הגבוה ביותר שהגיע</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="color:#f4c430">L</div><div class="lp-mini-lbl"><strong>נמוך</strong> — המחיר הנמוך ביותר שהגיע</div></div>
    </div>
    </div>
    <div class="lp-section"><div class="lp-section-title">ירוק מול אדום</div>
    <div class="lp-cards-row">
      <div class="lp-mini-card" style="border-color:#00e096"><div class="lp-mini-num" style="color:#00e096">🟢 נר ירוק</div><div class="lp-mini-lbl">סגירה &gt; פתיחה. הקונים היו חזקים יותר. הגוף הולך מפתיחה (למטה) לסגירה (למעלה).</div></div>
      <div class="lp-mini-card" style="border-color:#ff4d6d"><div class="lp-mini-num" style="color:#ff4d6d">🔴 נר אדום</div><div class="lp-mini-lbl">סגירה &lt; פתיחה. המוכרים היו חזקים יותר. הגוף הולך מפתיחה (למעלה) לסגירה (למטה).</div></div>
    </div>
    <div class="lp-highlight">🕯️ <strong>הפתיל (צל)</strong> — הקו הדק מעל ומתחת לגוף. מראה עד כמה המחיר הגיע בכל כיוון לפני שהתהפך. פתיל ארוך = דחייה חזקה!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">פטרנים חשובים של נרות</div>
    <ul class="lp-list">
      <li><span>🔨</span><div><strong>פטיש (Hammer)</strong> — גוף קטן, פתיל תחתון ארוך. מסמן היפוך כלפי מעלה. קונים חזקים ספגו את כל המכירות.</div></li>
      <li><span>⭐</span><div><strong>דוג'י (Doji)</strong> — פתיחה ≈ סגירה. חוסר החלטה. לא קונים ולא מוכרים ניצחו. לרוב מסמן שינוי מגמה.</div></li>
      <li><span>🕯️</span><div><strong>בולעני (Engulfing)</strong> — נר שמכסה לחלוטין את הנר הקודם. הצבע החדש "ניצח". אות חזק מאוד.</div></li>
      <li><span>🌟</span><div><strong>כוכב ירי (Shooting Star)</strong> — גוף קטן, פתיל עליון ארוך. מסמן היפוך כלפי מטה. מוכרים דחו מחירים גבוהים יותר.</div></li>
    </ul>
    <div class="lp-highlight green">💡 טיפ מקצועי: נר בודד אומר מעט. נר <strong>ברמת מחיר מפתח</strong> (תמיכה/התנגדות) — זה אות שאפשר לפעול לפיו!</div>
    </div>`}
},
{
  icon:'📉', id:'s13', title:{en:'Short Selling', he:'שורט — מכירה בחסר'}, tag:{en:'Advanced', he:'מתקדם'},
  desc:{en:'How to profit when a stock falls — sell before you buy', he:'איך מרוויחים כשמניה יורדת — מוכרים לפני שקונים'},
  charts:[{
    id:'chart-short',
    config:{type:'line',data:{labels:['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7','Day 8'],datasets:[{label:'Stock Price',data:[100,98,93,88,85,82,78,80],borderColor:'#ff4d6d',tension:0.4,fill:false,pointRadius:4},{label:'Short Profit',data:[0,2,7,12,15,18,22,20],borderColor:'#00e096',tension:0.4,fill:false,borderDash:[5,3]}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Making money when prices fall?</div>
    <p class="lp-text">Regular investing: buy low → sell high. <strong>Short selling flips the order:</strong> borrow a stock, sell it now, buy it back cheaper later, return it — and keep the difference as profit.</p>
    <div class="lp-highlight" style="font-size:1rem;text-align:center;">Sell HIGH first → Buy LOW later = Profit 💰</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Step by step</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div>You borrow 1 share of Tesla at <strong>$100</strong> from your broker and sell it immediately.</div></li>
      <li><span>2️⃣</span><div>Tesla falls to <strong>$75</strong>. You buy 1 share for $75.</div></li>
      <li><span>3️⃣</span><div>You return the share to the broker. <strong>Profit: $25</strong> (minus fees).</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">Red = stock drops. Green = short seller's profit grows.</div>
    <div class="lp-chart-wrap"><canvas id="chart-short"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">⚠️ The risk: unlimited losses</div>
    <div class="lp-highlight" style="border-color:#ff4d6d">🚨 <strong>Regular buying:</strong> worst case = stock goes to $0, you lose 100% of your investment.<br><strong>Short selling:</strong> if the stock RISES instead of falls — there is NO ceiling on your loss! Stock goes from $100 to $500? You lost $400 per share.</div>
    <ul class="lp-list">
      <li><span>🛑</span><div><strong>Stop Loss is mandatory</strong> in short selling. Without it, one bad trade can wipe out all your gains.</div></li>
      <li><span>📊</span><div><strong>Short squeeze</strong> — when a heavily shorted stock suddenly rises, all shorts panic-buy, causing an even bigger rise. GameStop 2021 is the most famous example.</div></li>
    </ul>
    <div class="lp-highlight green">✅ Short selling is an advanced tool. It is used by professional traders, hedge funds, and experienced investors. Beginners: understand it, but start with regular buying.</div>
    </div>`,he:`
    <div class="lp-section"><div class="lp-section-title">מרוויחים כשמחירים יורדים?</div>
    <p class="lp-text">השקעה רגילה: קונים בזול → מוכרים ביוקר. <strong>שורט הופך את הסדר:</strong> שואלים מניה, מוכרים אותה עכשיו, קונים אותה בחזרה בזול יותר מאוחר יותר, מחזירים — ושומרים את ההפרש כרווח.</p>
    <div class="lp-highlight" style="font-size:1rem;text-align:center;">מוכרים גבוה קודם → קונים נמוך אחר כך = רווח 💰</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">צעד אחרי צעד</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div>שואלים מניה אחת של טסלה ב-<strong>100$</strong> מהברוקר ומוכרים אותה מיד.</div></li>
      <li><span>2️⃣</span><div>טסלה יורדת ל-<strong>75$</strong>. קונים מניה אחת ב-75$.</div></li>
      <li><span>3️⃣</span><div>מחזירים את המניה לברוקר. <strong>רווח: 25$</strong> (פחות עמלות).</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">אדום = מניה יורדת. ירוק = רווח של השורטיסט גדל.</div>
    <div class="lp-chart-wrap"><canvas id="chart-short"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">⚠️ הסיכון: הפסד בלתי מוגבל</div>
    <div class="lp-highlight" style="border-color:#ff4d6d">🚨 <strong>קנייה רגילה:</strong> במקרה הכי גרוע — מניה הולכת ל-0, מפסידים 100% מהסכום.<br><strong>שורט:</strong> אם המניה עולה במקום לרדת — אין תקרה להפסד! מניה עולה מ-100$ ל-500$? הפסדת 400$ למניה.</div>
    <ul class="lp-list">
      <li><span>🛑</span><div><strong>סטופ לוס חובה</strong> בשורט. בלעדיו, עסקה אחת רעה יכולה למחוק את כל הרווחים.</div></li>
      <li><span>📊</span><div><strong>Short Squeeze</strong> — כשמניה עם הרבה שורטים עולה פתאום, כולם קונים בבהלה, מה שגורם לעלייה עוד יותר גדולה. GameStop 2021 הוא הדוגמה המפורסמת ביותר.</div></li>
    </ul>
    <div class="lp-highlight green">✅ שורט הוא כלי מתקדם. משמש סוחרים מקצועיים, קרנות גידור ומשקיעים מנוסים. מתחילים: תבינו את זה, אבל התחילו עם קנייה רגילה.</div>
    </div>`}
}
];

// ===== DROPSHIPPING LESSONS =====
const dropLessons = [
{
  icon:'🛒', id:'d1', title:{en:'What is Dropshipping?', he:'מה זה דרופשיפינג?'}, tag:{en:'Fundamentals', he:'יסודות'},
  desc:{en:'Sell products without inventory — the supplier ships directly to the customer', he:'מוכר מוצרים ללא מלאי — הספק שולח ישירות ללקוח'},
  charts:[{
    id:'chart-drop-profit',
    config:{type:'doughnut',data:{labels:['Supplier Cost','Your Profit','Advertising Costs'],datasets:[{data:[50,35,15],backgroundColor:['rgba(255,77,109,0.8)','rgba(0,224,150,0.8)','rgba(124,108,252,0.8)'],borderWidth:0}]},options:{plugins:{legend:{labels:{color:'#888899',padding:15}}},cutout:'55%',responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The business that needs no inventory</div>
    <p class="lp-text">Dropshipping = you sell products online, but <strong>never touch them</strong>. The supplier ships directly to your customer. You're just the middleman — and you keep the difference.</p>
    <div class="lp-highlight">💡 Customer buys from you for $30 → you order from the supplier for $15 → supplier ships directly to the customer → your profit: $15 without touching the product!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">How the money is split</div>
    <div class="lp-chart-card"><div class="lp-chart-title">For every $30 sale — where does the money go</div>
    <div class="lp-chart-wrap"><canvas id="chart-drop-profit"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Advantages and disadvantages</div>
    <ul class="lp-list">
      <li><span>✅</span><div><strong>No inventory needed</strong> — zero investment in stock</div></li>
      <li><span>✅</span><div><strong>Work from anywhere</strong> — computer + internet = everything</div></li>
      <li><span>✅</span><div><strong>Can start small</strong> — with a few hundred dollars for advertising</div></li>
      <li><span>⚠️</span><div><strong>High competition</strong> — many people do the same thing. You need to be smart in product selection</div></li>
      <li><span>⚠️</span><div><strong>Dependent on supplier</strong> — if the supplier is late, the customer is angry at you</div></li>
    </ul>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">העסק שלא צריך מלאי</div>
    <p class="lp-text">דרופשיפינג = אתה מוכר מוצרים אונליין, אבל <strong>לא נוגע בהם לעולם</strong>. הספק שולח ישירות ללקוח שלך. אתה רק המתווך — ושומר על ההפרש.</p>
    <div class="lp-highlight">💡 לקוח קונה ממך ב-30$ → אתה מזמין מהספק ב-15$ → הספק שולח ישירות ללקוח → הרווח שלך: 15$ בלי לגעת במוצר!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">איך מתחלק הכסף</div>
    <div class="lp-chart-card"><div class="lp-chart-title">על כל מכירה של 30$ — לאן הולך הכסף</div>
    <div class="lp-chart-wrap"><canvas id="chart-drop-profit"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">יתרונות וחסרונות</div>
    <ul class="lp-list">
      <li><span>✅</span><div><strong>לא צריך מלאי</strong> — אפס השקעה במלאי</div></li>
      <li><span>✅</span><div><strong>עבודה מכל מקום</strong> — מחשב + אינטרנט = הכל</div></li>
      <li><span>✅</span><div><strong>אפשר להתחיל קטן</strong> — עם כמה מאות דולרים לפרסום</div></li>
      <li><span>⚠️</span><div><strong>תחרות גבוהה</strong> — הרבה אנשים עושים את אותו הדבר. צריך להיות חכם בבחירת מוצר</div></li>
      <li><span>⚠️</span><div><strong>תלות בספק</strong> — אם הספק מאחר, הלקוח כועס עליך</div></li>
    </ul>
    </div>`}
},
{
  icon:'👨‍👦', id:'d2', title:{en:'Dropshipping with a Parent', he:'דרופשיפינג עם הורה'}, tag:{en:'Fundamentals', he:'יסודות'},
  desc:{en:"Because you're a minor — the parent is the legal signatory, you're the manager", he:'כי אתה קטין — ההורה הוא החותם המשפטי, אתה המנהל'},
  charts:[],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Why do you need a parent?</div>
    <p class="lp-text">As a minor, you can't open a business PayPal account, be a registered business, or sign contracts. But that doesn't stop you from running a business — the parent is the "legal face", you're the real boss.</p>
    <ul class="lp-list">
      <li><span>👨‍👩‍👦</span><div><strong>The parent opens</strong>: a business PayPal account, Shopify account, business registration</div></li>
      <li><span>🧠</span><div><strong>You manage everything</strong>: product selection, store building, advertising, customer service, data analysis</div></li>
      <li><span>💰</span><div><strong>Profit sharing</strong>: whatever is agreed — many parents are happy to support their children's entrepreneurship</div></li>
    </ul>
    <div class="lp-highlight green">✅ This is completely legal and common! Thousands of young entrepreneurs under 18 run profitable dropshipping businesses.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Tools you need</div>
    <ul class="lp-list">
      <li><span>🛍️</span><div><strong>Shopify</strong> — store building platform. $29/month. Most popular for dropshipping.</div></li>
      <li><span>🏭</span><div><strong>AliExpress / Zendrop</strong> — suppliers. Finding cheap products for dropshipping.</div></li>
      <li><span>📱</span><div><strong>Meta Ads</strong> — advertising on Instagram and Facebook. Most effective for dropshipping products.</div></li>
    </ul>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">למה צריך הורה?</div>
    <p class="lp-text">כקטין, לא ניתן לפתוח חשבון PayPal עסקי, להיות עסק רשום, או לחתום על חוזים. אבל זה לא מונע ממך לנהל עסק — ההורה הוא "הפנים המשפטיות", אתה הבוס האמיתי.</p>
    <ul class="lp-list">
      <li><span>👨‍👩‍👦</span><div><strong>ההורה פותח</strong>: חשבון PayPal עסקי, חשבון Shopify, רישום עסקי</div></li>
      <li><span>🧠</span><div><strong>אתה מנהל הכל</strong>: בחירת מוצר, בניית חנות, פרסום, שירות לקוחות, ניתוח נתונים</div></li>
      <li><span>💰</span><div><strong>חלוקת רווחים</strong>: לפי הסכם — הרבה הורים שמחים לתמוך ביזמות ילדיהם</div></li>
    </ul>
    <div class="lp-highlight green">✅ זה לגמרי חוקי ונפוץ! אלפי יזמים צעירים מתחת לגיל 18 מנהלים עסקי דרופשיפינג רווחיים.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">כלים שצריך</div>
    <ul class="lp-list">
      <li><span>🛍️</span><div><strong>Shopify</strong> — פלטפורמת בניית חנויות. 29$ לחודש. הכי פופולרי לדרופשיפינג.</div></li>
      <li><span>🏭</span><div><strong>AliExpress / Zendrop</strong> — ספקים. מציאת מוצרים זולים לדרופשיפינג.</div></li>
      <li><span>📱</span><div><strong>Meta Ads</strong> — פרסום באינסטגרם ופייסבוק. הכי אפקטיבי למוצרי דרופשיפינג.</div></li>
    </ul>
    </div>`}
},
{
  icon:'🔄', id:'d3', title:{en:'The Money Engine', he:'מנוע הכסף'}, tag:{en:'Strategy', he:'אסטרטגיה'},
  desc:{en:'Dropshipping generates money → money goes into stocks → stocks grow on their own', he:'דרופשיפינג מייצר כסף → הכסף הולך למניות → מניות גדלות לבד'},
  charts:[{
    id:'chart-money-engine',
    config:{type:'line',data:{labels:['Year 1','Year 2','Year 3','Year 4','Year 5'],datasets:[{label:'Dropshipping Only',data:[5000,10000,15000,20000,25000],borderColor:'#7c6cfc',tension:0.4,fill:false},{label:'Dropshipping + Stocks',data:[5000,12000,22000,36000,55000],borderColor:'#00e096',tension:0.4,fill:true,backgroundColor:'rgba(0,224,150,0.08)'}]},options:{plugins:{legend:{labels:{color:'#888899'}},tooltip:{callbacks:{label:ctx=>'$'+ctx.raw.toLocaleString()}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899',callback:v=>'$'+v.toLocaleString()},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The cycle that builds wealth</div>
    <p class="lp-text">The brilliant idea is to combine the two engines: <strong>dropshipping</strong> generates active income (you work → money comes in). <strong>Stocks</strong> generate passive income (money works without you doing anything). Together — the snowball effect begins.</p>
    <div class="lp-highlight">🔄 Every profit from dropshipping → part for living expenses, part into stocks → stocks grow → more money → more investment → ...</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">The power of the combination</div>
    <div class="lp-chart-card"><div class="lp-chart-title">What happens when you invest dropshipping profits in stocks (10% annual return)</div>
    <div class="lp-chart-wrap"><canvas id="chart-money-engine"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">The right order</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div><strong>Learning stocks</strong> — understanding how money works before putting it to work</div></li>
      <li><span>2️⃣</span><div><strong>Dropshipping</strong> — an active income engine that generates capital to invest</div></li>
      <li><span>3️⃣</span><div><strong>Investing in stocks</strong> — every month put a portion of profits in</div></li>
      <li><span>4️⃣</span><div><strong>Coding + big projects</strong> — the next level when there's a foundation</div></li>
    </ul>
    <div class="lp-highlight green">🏆 Exactly what Warren Buffett did — worked as a teenager to save → invested → money worked more than him → today the richest in the world from investments alone.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">המחזור שבונה עושר</div>
    <p class="lp-text">הרעיון הגאוני הוא לשלב את שני המנועים: <strong>דרופשיפינג</strong> מייצר הכנסה פעילה (אתה עובד → כסף נכנס). <strong>מניות</strong> מייצרות הכנסה פסיבית (כסף עובד בלעדיך). ביחד — אפקט כדור השלג מתחיל.</p>
    <div class="lp-highlight">🔄 כל רווח מדרופשיפינג → חלק להוצאות מחיה, חלק למניות → מניות גדלות → יותר כסף → יותר השקעה → ...</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">כוח השילוב</div>
    <div class="lp-chart-card"><div class="lp-chart-title">מה קורה כשמשקיעים רווחי דרופשיפינג במניות (10% תשואה שנתית)</div>
    <div class="lp-chart-wrap"><canvas id="chart-money-engine"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">הסדר הנכון</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div><strong>לימוד מניות</strong> — הבנת איך כסף עובד לפני שמכניסים אותו לעבוד</div></li>
      <li><span>2️⃣</span><div><strong>דרופשיפינג</strong> — מנוע הכנסה פעיל שמייצר הון להשקעה</div></li>
      <li><span>3️⃣</span><div><strong>השקעה במניות</strong> — כל חודש לשים חלק מהרווחים</div></li>
      <li><span>4️⃣</span><div><strong>קוד + פרויקטים גדולים</strong> — הרמה הבאה כשיש בסיס</div></li>
    </ul>
    <div class="lp-highlight green">🏆 בדיוק מה שוורן באפט עשה — עבד כמתבגר כדי לחסוך → השקיע → כסף עבד יותר ממנו → היום העשיר ביותר בעולם מהשקעות בלבד.</div>
    </div>`}
},
{
  icon:'⚖️', id:'d4', title:{en:'Dropshipping vs App', he:'דרופשיפינג מול אפליקציה'}, tag:{en:'Fundamentals', he:'יסודות'},
  desc:{en:'Which is better and why — advantages and disadvantages of each', he:'מה עדיף ולמה — יתרונות וחסרונות של כל אחד'},
  charts:[{
    id:'chart-compare',
    config:{type:'radar',data:{labels:['Easy to Start','Fast Income','Passiveness','High Potential','Low Maintenance'],datasets:[{label:'Dropshipping',data:[85,75,60,70,70],borderColor:'#00e096',backgroundColor:'rgba(0,224,150,0.15)'},{label:'App/Website',data:[30,20,50,95,20],borderColor:'#7c6cfc',backgroundColor:'rgba(124,108,252,0.1)'}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{r:{ticks:{display:false},grid:{color:'rgba(255,255,255,0.1)'},pointLabels:{color:'#888899'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Direct comparison</div>
    <div class="lp-chart-card"><div class="lp-chart-title">Dropshipping vs App — by 5 criteria</div>
    <div class="lp-chart-wrap"><canvas id="chart-compare"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Dropshipping</div>
    <ul class="lp-list">
      <li><span>✅</span><div>Can start within two weeks</div></li>
      <li><span>✅</span><div>No coding knowledge required</div></li>
      <li><span>✅</span><div>First income can arrive within a month</div></li>
      <li><span>⚠️</span><div>High competition — need a unique product</div></li>
      <li><span>⚠️</span><div>Need to invest in advertising constantly</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">App / Website</div>
    <ul class="lp-list">
      <li><span>✅</span><div>Massive potential — a good app = millions</div></li>
      <li><span>✅</span><div>Relatively passive income when working</div></li>
      <li><span>⚠️</span><div>Need to know how to code well</div></li>
      <li><span>⚠️</span><div>Takes months to years until it works</div></li>
      <li><span>⚠️</span><div>Constant maintenance — bugs, updates, servers</div></li>
    </ul>
    <div class="lp-highlight">💡 The conclusion: dropshipping is the <strong>sprint</strong> — relatively fast money. An app is the <strong>marathon</strong> — takes longer but greater reward. Do both, in the right order!</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">השוואה ישירה</div>
    <div class="lp-chart-card"><div class="lp-chart-title">דרופשיפינג מול אפליקציה — לפי 5 קריטריונים</div>
    <div class="lp-chart-wrap"><canvas id="chart-compare"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">דרופשיפינג</div>
    <ul class="lp-list">
      <li><span>✅</span><div>אפשר להתחיל תוך שבועיים</div></li>
      <li><span>✅</span><div>לא נדרשת ידע בקוד</div></li>
      <li><span>✅</span><div>הכנסה ראשונה יכולה להגיע תוך חודש</div></li>
      <li><span>⚠️</span><div>תחרות גבוהה — צריך מוצר ייחודי</div></li>
      <li><span>⚠️</span><div>צריך להשקיע בפרסום כל הזמן</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">אפליקציה / אתר</div>
    <ul class="lp-list">
      <li><span>✅</span><div>פוטנציאל עצום — אפליקציה טובה = מיליונים</div></li>
      <li><span>✅</span><div>הכנסה פסיבית יחסית כשעובדת</div></li>
      <li><span>⚠️</span><div>צריך לדעת לקודד טוב</div></li>
      <li><span>⚠️</span><div>לוקח חודשים עד שנים עד שעובד</div></li>
      <li><span>⚠️</span><div>תחזוקה מתמדת — באגים, עדכונים, שרתים</div></li>
    </ul>
    <div class="lp-highlight">💡 המסקנה: דרופשיפינג הוא ה<strong>ספרינט</strong> — כסף יחסית מהיר. אפליקציה היא ה<strong>מרתון</strong> — לוקח יותר זמן אבל תגמול גדול יותר. עשה את שניהם, בסדר הנכון!</div>
    </div>`}
},
{
  icon:'🔍', id:'d5', title:{en:'How to Find a Winning Product?', he:'איך מוצאים מוצר מנצח?'}, tag:{en:'Product', he:'מוצר'},
  desc:{en:'3 criteria: solves a problem, people buy impulsively, hard to find in stores', he:'3 קריטריונים: פותר בעיה, אנשים קונים בדחף, קשה למצוא בחנויות'},
  charts:[{
    id:'chart-product-score',
    config:{type:'radar',data:{labels:['Solves a Problem','Impulse Purchase','Hard to Find','High Margin','Not Seasonal'],datasets:[{label:'Winning Product',data:[90,85,80,88,75],borderColor:'#00e096',backgroundColor:'rgba(0,224,150,0.15)'},{label:'Regular Product',data:[30,40,20,35,60],borderColor:'#ff4d6d',backgroundColor:'rgba(255,77,109,0.1)'}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{r:{ticks:{display:false},grid:{color:'rgba(255,255,255,0.1)'},pointLabels:{color:'#888899'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The 3 questions that filter out 90% of products</div>
    <p class="lp-text">Most people find a product and say "that looks cool!". Winners ask 3 questions first:</p>
    <ul class="lp-list">
      <li><span>❓</span><div><strong>Does it solve a problem?</strong> — A color-changing sleep LED lamp = solves "boring kids' room". Doesn't solve a problem = hard to sell.</div></li>
      <li><span>❓</span><div><strong>Do people buy it impulsively?</strong> — Will someone see an ad and think "I need this!" without thinking much?</div></li>
      <li><span>❓</span><div><strong>Is it hard to find in stores/Amazon?</strong> — If it can be bought anywhere — why would they buy from you?</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">Winning product vs regular product — score by criteria</div>
    <div class="lp-chart-wrap"><canvas id="chart-product-score"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">Where to find products?</div>
    <ul class="lp-list">
      <li><span>🎵</span><div><strong>TikTok</strong> — search #TikTokMadeMeBuyIt. What goes viral there = people buy impulsively</div></li>
      <li><span>🏷️</span><div><strong>AliExpress Bestsellers</strong> — filter by "Orders" — what sells the most = what people want</div></li>
      <li><span>🔥</span><div><strong>Amazon Movers & Shakers</strong> — list of products that rose the most in 24 hours</div></li>
      <li><span>👁️</span><div><strong>AdSpy / Minea</strong> — paid tools that show ads from other dropshippers that are working</div></li>
    </ul>
    <div class="lp-highlight green">💡 Trick: Google the product name + "free shipping" + "50% off". If there are many results = many dropshippers are already selling it = there's demand!</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">3 השאלות שמסננות 90% מהמוצרים</div>
    <p class="lp-text">רוב האנשים מוצאים מוצר ואומרים "נראה מגניב!". המנצחים שואלים 3 שאלות קודם:</p>
    <ul class="lp-list">
      <li><span>❓</span><div><strong>האם הוא פותר בעיה?</strong> — מנורת LED ששינה צבע לשינה = פותרת "חדר ילדים משעמם". לא פותר בעיה = קשה למכור.</div></li>
      <li><span>❓</span><div><strong>האם אנשים קונים אותו בדחף?</strong> — האם מישהו יראה פרסומת ויחשוב "אני חייב את זה!" בלי לחשוב הרבה?</div></li>
      <li><span>❓</span><div><strong>האם קשה למצוא בחנויות/אמזון?</strong> — אם אפשר לקנות בכל מקום — למה יקנו ממך?</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">מוצר מנצח מול מוצר רגיל — ניקוד לפי קריטריונים</div>
    <div class="lp-chart-wrap"><canvas id="chart-product-score"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">איפה למצוא מוצרים?</div>
    <ul class="lp-list">
      <li><span>🎵</span><div><strong>TikTok</strong> — חפש #TikTokMadeMeBuyIt. מה שהופך לוויראלי שם = אנשים קונים בדחף</div></li>
      <li><span>🏷️</span><div><strong>AliExpress Bestsellers</strong> — סנן לפי "הזמנות" — מה שנמכר הכי הרבה = מה שאנשים רוצים</div></li>
      <li><span>🔥</span><div><strong>Amazon Movers & Shakers</strong> — רשימת מוצרים שעלו הכי הרבה ב-24 שעות</div></li>
      <li><span>👁️</span><div><strong>AdSpy / Minea</strong> — כלים בתשלום שמראים פרסומות מדרופשיפרים אחרים שעובדות</div></li>
    </ul>
    <div class="lp-highlight green">💡 טריק: גגל את שם המוצר + "free shipping" + "50% off". אם יש הרבה תוצאות = הרבה דרופשיפרים כבר מוכרים אותו = יש ביקוש!</div>
    </div>`}
},
{
  icon:'📦', id:'d6', title:{en:'How to Work with Suppliers?', he:'איך עובדים עם ספקים?'}, tag:{en:'Suppliers', he:'ספקים'},
  desc:{en:'AliExpress, CJ, Zendrop — how to choose a supplier and avoid getting burned', he:'AliExpress, CJ, Zendrop — איך לבחור ספק ולא לנחות'},
  charts:[{
    id:'chart-suppliers',
    config:{type:'bar',data:{labels:['AliExpress','CJ Dropshipping','Zendrop','Local Supplier'],datasets:[{label:'Shipping Time (days)',data:[15,7,5,2],backgroundColor:['rgba(255,77,109,0.7)','rgba(255,150,50,0.7)','rgba(124,108,252,0.7)','rgba(0,224,150,0.7)'],borderRadius:6}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#888899'},grid:{display:false}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">The most popular suppliers</div>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="font-size:1.4rem">🛒</div><div style="font-weight:700;margin:4px 0">AliExpress</div><div class="lp-mini-lbl">Cheapest, 15-30 day shipping. Good for testing products.</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="font-size:1.4rem">📦</div><div style="font-weight:700;margin:4px 0">CJ Dropshipping</div><div class="lp-mini-lbl">7-14 days, Shopify integration, good prices.</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="font-size:1.4rem">⚡</div><div style="font-weight:700;margin:4px 0">Zendrop</div><div class="lp-mini-lbl">5-7 days, US stock, user-friendly interface. Slightly more expensive.</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">Shipping time by supplier — less = more satisfied customers</div>
    <div class="lp-chart-wrap"><canvas id="chart-suppliers"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">How to choose a good supplier?</div>
    <ul class="lp-list">
      <li><span>⭐</span><div><strong>Rating 4.7+</strong> — check reviews. Don't look only at price</div></li>
      <li><span>📸</span><div><strong>Real photos</strong> — ask the supplier for photos before you start selling. The customer expects to receive what they saw</div></li>
      <li><span>🛡️</span><div><strong>Return policy</strong> — a good supplier accepts returns. A bad supplier = the problem falls on you</div></li>
      <li><span>📦</span><div><strong>Order a sample</strong> — before selling 100 units, order one for yourself. Check the packaging, quality, and how long it took</div></li>
    </ul>
    <div class="lp-highlight red">⚠️ The most common mistake: not checking the product before selling. One item that arrives broken = negative review = kills the store.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">הספקים הכי פופולריים</div>
    <div class="lp-cards-row">
      <div class="lp-mini-card"><div class="lp-mini-num" style="font-size:1.4rem">🛒</div><div style="font-weight:700;margin:4px 0">AliExpress</div><div class="lp-mini-lbl">הכי זול, משלוח 15-30 יום. טוב לבדיקת מוצרים.</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="font-size:1.4rem">📦</div><div style="font-weight:700;margin:4px 0">CJ Dropshipping</div><div class="lp-mini-lbl">7-14 ימים, אינטגרציה עם Shopify, מחירים טובים.</div></div>
      <div class="lp-mini-card"><div class="lp-mini-num" style="font-size:1.4rem">⚡</div><div style="font-weight:700;margin:4px 0">Zendrop</div><div class="lp-mini-lbl">5-7 ימים, מלאי בארה"ב, ממשק ידידותי. קצת יותר יקר.</div></div>
    </div>
    <div class="lp-chart-card"><div class="lp-chart-title">זמן משלוח לפי ספק — פחות = לקוחות מרוצים יותר</div>
    <div class="lp-chart-wrap"><canvas id="chart-suppliers"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">איך בוחרים ספק טוב?</div>
    <ul class="lp-list">
      <li><span>⭐</span><div><strong>דירוג 4.7+</strong> — בדוק ביקורות. אל תסתכל רק על המחיר</div></li>
      <li><span>📸</span><div><strong>תמונות אמיתיות</strong> — בקש מהספק תמונות לפני שמתחיל למכור. הלקוח מצפה לקבל מה שראה</div></li>
      <li><span>🛡️</span><div><strong>מדיניות החזרות</strong> — ספק טוב מקבל החזרות. ספק רע = הבעיה נופלת עליך</div></li>
      <li><span>📦</span><div><strong>הזמן דוגמה</strong> — לפני שמוכרים 100 יחידות, הזמן אחת לעצמך. בדוק את האריזה, האיכות, וכמה זמן לקח</div></li>
    </ul>
    <div class="lp-highlight red">⚠️ הטעות הנפוצה ביותר: לא לבדוק את המוצר לפני המכירה. פריט אחד שמגיע שבור = ביקורת שלילית = הורג את החנות.</div>
    </div>`}
},
{
  icon:'🏪', id:'d7', title:{en:'Building a Shopify Store', he:'בניית חנות Shopify'}, tag:{en:'Technical', he:'טכני'},
  desc:{en:'Quick guide — a professional-looking store in one hour', he:'מדריך מהיר — חנות שנראית מקצועית תוך שעה'},
  charts:[],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Why Shopify?</div>
    <p class="lp-text">Shopify is the most popular platform for dropshipping. $29 a month, but worth every cent — you can build a professional store in an hour without knowing how to code.</p>
    <div class="lp-highlight green">✅ Shopify + DSers (free) = complete store + automatic connection to AliExpress. Every order is forwarded to the supplier automatically!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">5 steps to a professional store</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div><strong>Clear name and niche</strong> — not "general store". Choose a niche: "home fitness products" / "pet gadgets". Niche = higher trust.</div></li>
      <li><span>2️⃣</span><div><strong>Clean theme</strong> — Dawn (free) is the best. You don't need a paid theme when starting out.</div></li>
      <li><span>3️⃣</span><div><strong>Only 3-5 products</strong> — not 100 products. Less = more focus = less clutter.</div></li>
      <li><span>4️⃣</span><div><strong>Professional photos</strong> — AliExpress provides photos. But you can improve them with free Canva.</div></li>
      <li><span>5️⃣</span><div><strong>"About" + "Contact" page</strong> — without this the customer doesn't trust you. 2 minutes = +20% credibility.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">What must be on a product page</div>
    <ul class="lp-list">
      <li><span>📸</span><div><strong>3+ photos</strong> — from different angles, including in use</div></li>
      <li><span>📝</span><div><strong>A description that sells</strong> — not "pretty LED lamp". Yes: "Sleep better with calming light that suits your room"</div></li>
      <li><span>⭐</span><div><strong>Reviews</strong> — DSers imports reviews from AliExpress automatically</div></li>
      <li><span>⏰</span><div><strong>Urgency</strong> — "Only 3 left!" / "Sale until midnight" — increases conversion</div></li>
    </ul>
    <div class="lp-highlight">💡 Tip: Check the store from your phone! 70%+ of dropshipping purchases are from mobile. If it doesn't look good on a phone = losing most customers.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">למה Shopify?</div>
    <p class="lp-text">Shopify הוא הפלטפורמה הכי פופולרית לדרופשיפינג. 29$ לחודש, אבל שווה כל שקל — אפשר לבנות חנות מקצועית תוך שעה בלי לדעת לקודד.</p>
    <div class="lp-highlight green">✅ Shopify + DSers (חינמי) = חנות שלמה + חיבור אוטומטי ל-AliExpress. כל הזמנה מועברת לספק אוטומטית!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">5 שלבים לחנות מקצועית</div>
    <ul class="lp-list">
      <li><span>1️⃣</span><div><strong>שם ונישה ברורים</strong> — לא "חנות כללית". בחר נישה: "מוצרי כושר לבית" / "גאדג'טים לחיות מחמד". נישה = אמינות גבוהה יותר.</div></li>
      <li><span>2️⃣</span><div><strong>תמה נקייה</strong> — Dawn (חינמי) הוא הטוב ביותר. לא צריך תמה בתשלום בהתחלה.</div></li>
      <li><span>3️⃣</span><div><strong>רק 3-5 מוצרים</strong> — לא 100 מוצרים. פחות = יותר פוקוס = פחות עומס.</div></li>
      <li><span>4️⃣</span><div><strong>תמונות מקצועיות</strong> — AliExpress מספק תמונות. אבל אפשר לשפר אותן עם Canva חינמי.</div></li>
      <li><span>5️⃣</span><div><strong>דף "עלינו" + "צרו קשר"</strong> — בלי זה הלקוח לא סומך עליך. 2 דקות = +20% אמינות.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">מה חייב להיות בדף מוצר</div>
    <ul class="lp-list">
      <li><span>📸</span><div><strong>3+ תמונות</strong> — מזוויות שונות, כולל בשימוש</div></li>
      <li><span>📝</span><div><strong>תיאור שמוכר</strong> — לא "מנורת LED יפה". כן: "ישן טוב יותר עם אור מרגיע שמתאים לחדר שלך"</div></li>
      <li><span>⭐</span><div><strong>ביקורות</strong> — DSers מייבא ביקורות מ-AliExpress אוטומטית</div></li>
      <li><span>⏰</span><div><strong>דחיפות</strong> — "נשארו רק 3!" / "מבצע עד חצות" — מגביר המרה</div></li>
    </ul>
    <div class="lp-highlight">💡 טיפ: בדוק את החנות מהטלפון! 70%+ מהרכישות בדרופשיפינג הן מניידים. אם לא נראה טוב בטלפון = מפסיד רוב הלקוחות.</div>
    </div>`}
},
{
  icon:'📱', id:'d8', title:{en:'Advertising on Meta Ads', he:'פרסום ב-Meta Ads'}, tag:{en:'Marketing', he:'שיווק'},
  desc:{en:'Facebook + Instagram — the most effective way to attract buyers', he:'פייסבוק + אינסטגרם — הדרך האפקטיבית ביותר למשוך קונים'},
  charts:[{
    id:'chart-ads-funnel',
    config:{type:'bar',data:{labels:['Saw Ad','Clicked','Entered Site','Added to Cart','Bought'],datasets:[{label:'People (out of 1,000)',data:[1000,30,25,8,2],backgroundColor:['rgba(124,108,252,0.6)','rgba(124,108,252,0.7)','rgba(0,224,150,0.6)','rgba(0,224,150,0.7)','rgba(0,224,150,0.9)'],borderRadius:6}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#888899'},grid:{display:false}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Why Meta Ads?</div>
    <p class="lp-text">Facebook and Instagram allow you to advertise to millions of people with precise targeting — age, location, interests. $10-20 per day is enough to start.</p>
    <div class="lp-chart-card"><div class="lp-chart-title">Sales funnel — from every 1,000 people who see an ad</div>
    <div class="lp-chart-wrap"><canvas id="chart-ads-funnel"></canvas></div></div>
    <div class="lp-highlight">📊 From 1,000 viewers → 30 click → 25 enter → 8 add to cart → 2 buy. Conversion rate of 2% = normal. Above 3% = excellent!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">The structure of a winning campaign</div>
    <ul class="lp-list">
      <li><span>🎯</span><div><strong>Campaign</strong> — goal: "Purchases". Not "website traffic".</div></li>
      <li><span>👥</span><div><strong>Ad Set</strong> — audience: relevant interests + age + location. Budget: $10-15 per day.</div></li>
      <li><span>🎬</span><div><strong>Ad</strong> — video is better than image. The first 3-5 seconds = everything. If they didn't catch attention — they scrolled past.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">How to know if the ad is working?</div>
    <ul class="lp-list">
      <li><span>💰</span><div><strong>ROAS (Return on Ad Spend)</strong> — revenue ÷ spend. ROAS 2 = on $10 advertising you earned $20. ROAS 3+ = excellent!</div></li>
      <li><span>👆</span><div><strong>CTR (Click Through Rate)</strong> — what % clicked. Below 1% = the ad is uninteresting. Above 2% = good.</div></li>
      <li><span>💵</span><div><strong>CPA (Cost Per Acquisition)</strong> — how much each sale costs you. Must be less than your profit!</div></li>
    </ul>
    <div class="lp-highlight red">⚠️ Don't turn off an ad after one day! Meta needs 3-7 days to "learn". Give it time before deciding it doesn't work.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">למה Meta Ads?</div>
    <p class="lp-text">פייסבוק ואינסטגרם מאפשרים לפרסם למיליוני אנשים עם טרגוט מדויק — גיל, מיקום, תחומי עניין. 10-20$ ביום מספיק כדי להתחיל.</p>
    <div class="lp-chart-card"><div class="lp-chart-title">משפך מכירות — מכל 1,000 אנשים שרואים פרסומת</div>
    <div class="lp-chart-wrap"><canvas id="chart-ads-funnel"></canvas></div></div>
    <div class="lp-highlight">📊 מ-1,000 צופים → 30 לוחצים → 25 נכנסים → 8 מוסיפים לסל → 2 קונים. שיעור המרה של 2% = נורמלי. מעל 3% = מצויין!</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">מבנה קמפיין מנצח</div>
    <ul class="lp-list">
      <li><span>🎯</span><div><strong>קמפיין</strong> — מטרה: "רכישות". לא "תנועה לאתר".</div></li>
      <li><span>👥</span><div><strong>קבוצת מודעות</strong> — קהל: תחומי עניין רלוונטיים + גיל + מיקום. תקציב: 10-15$ ליום.</div></li>
      <li><span>🎬</span><div><strong>מודעה</strong> — וידאו עדיף על תמונה. 3-5 השניות הראשונות = הכל. אם לא תפסו תשומת לב — גללו הלאה.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">איך לדעת אם הפרסומת עובדת?</div>
    <ul class="lp-list">
      <li><span>💰</span><div><strong>ROAS</strong> — הכנסות ÷ הוצאות. ROAS 2 = על 10$ פרסום הרווחת 20$. ROAS 3+ = מצויין!</div></li>
      <li><span>👆</span><div><strong>CTR</strong> — איזה % לחץ. מתחת ל-1% = הפרסומת לא מעניינת. מעל 2% = טוב.</div></li>
      <li><span>💵</span><div><strong>CPA</strong> — כמה עולה כל מכירה. חייב להיות פחות מהרווח שלך!</div></li>
    </ul>
    <div class="lp-highlight red">⚠️ אל תכבה פרסומת אחרי יום אחד! Meta צריכה 3-7 ימים "ללמוד". תן לה זמן לפני שתחליט שהיא לא עובדת.</div>
    </div>`}
},
{
  icon:'💬', id:'d9', title:{en:'Customer Service', he:'שירות לקוחות'}, tag:{en:'Management', he:'ניהול'},
  desc:{en:'How to handle complaints, returns and angry customers without losing money', he:'איך לטפל בתלונות, החזרות ולקוחות כועסים בלי לאבד כסף'},
  charts:[],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">Why is customer service critical in dropshipping?</div>
    <p class="lp-text">In dropshipping you don't control the product, the packaging, or the shipping time. When something goes wrong — the customer comes to you. How you respond = the difference between a 5-star review and a public embarrassment.</p>
    <div class="lp-highlight green">⭐ A customer who received excellent service after a problem = more loyal than a customer who never had a problem. Respond fast, be polite, solve it.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">4 scenarios and how to handle them</div>
    <ul class="lp-list">
      <li><span>📦</span><div><strong>"The order didn't arrive"</strong> — check with the supplier. If 30+ days — resend or refund immediately. Don't argue.</div></li>
      <li><span>😞</span><div><strong>"The product is broken/different from the photo"</strong> — ask for a photo, apologize, send a new one. Many suppliers will reimburse you the cost.</div></li>
      <li><span>💳</span><div><strong>"Want to return it"</strong> — offer a coupon first. 30% of people will accept a coupon instead of a refund. Saves money.</div></li>
      <li><span>⭐</span><div><strong>Negative review</strong> — respond publicly and politely. "We've reached out to you privately to resolve this". Shows others that you care.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">Tools for managing customer service</div>
    <ul class="lp-list">
      <li><span>💬</span><div><strong>Tidio</strong> — live chat on the site. Free version available. Increases conversions by 15%+</div></li>
      <li><span>📧</span><div><strong>Email templates</strong> — write 5 answers to frequently asked questions. Save, copy, send. Saves hours.</div></li>
      <li><span>🤖</span><div><strong>ChatGPT</strong> — let it write professional and polite responses in English. Free and fast.</div></li>
    </ul>
    <div class="lp-highlight">💡 Golden rule: respond within 24 hours. A customer waiting two days = angry x5. A customer who got a reply within an hour = pleasantly surprised.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">למה שירות לקוחות קריטי בדרופשיפינג?</div>
    <p class="lp-text">בדרופשיפינג אתה לא שולט במוצר, האריזה, או זמן המשלוח. כשמשהו הולך לא בסדר — הלקוח מגיע אליך. איך אתה מגיב = ההבדל בין ביקורת 5 כוכבים לבין מבוכה פומבית.</p>
    <div class="lp-highlight green">⭐ לקוח שקיבל שירות מעולה אחרי בעיה = נאמן יותר מלקוח שמעולם לא הייתה לו בעיה. תגיב מהר, תהיה מנומס, תפתור את זה.</div>
    </div>
    <div class="lp-section"><div class="lp-section-title">4 תרחישים ואיך לטפל בהם</div>
    <ul class="lp-list">
      <li><span>📦</span><div><strong>"ההזמנה לא הגיעה"</strong> — בדוק עם הספק. אם 30+ יום — שלח מחדש או החזר כסף מיד. אל תתווכח.</div></li>
      <li><span>😞</span><div><strong>"המוצר שבור/שונה מהתמונה"</strong> — בקש תמונה, התנצל, שלח חדש. הרבה ספקים יחזירו לך את העלות.</div></li>
      <li><span>💳</span><div><strong>"רוצה להחזיר"</strong> — הצע קופון קודם. 30% מהאנשים יקבלו קופון במקום החזר כסף. חוסך כסף.</div></li>
      <li><span>⭐</span><div><strong>ביקורת שלילית</strong> — הגב פומבית ובנימוס. "פנינו אליך בפרטי לפתרון". מראה לאחרים שאכפת לך.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">כלים לניהול שירות לקוחות</div>
    <ul class="lp-list">
      <li><span>💬</span><div><strong>Tidio</strong> — צ'אט חי באתר. גרסה חינמית. מגביר המרות ב-15%+</div></li>
      <li><span>📧</span><div><strong>תבניות מייל</strong> — כתוב 5 תשובות לשאלות נפוצות. שמור, העתק, שלח. חוסך שעות.</div></li>
      <li><span>🤖</span><div><strong>ChatGPT</strong> — תן לו לכתוב תשובות מקצועיות ומנומסות באנגלית. חינמי ומהיר.</div></li>
    </ul>
    <div class="lp-highlight">💡 כלל זהב: הגב תוך 24 שעות. לקוח שמחכה יומיים = כועס פי 5. לקוח שקיבל תשובה תוך שעה = נעים נדהם.</div>
    </div>`}
},
{
  icon:'📊', id:'d10', title:{en:'Data Analysis and Profitability', he:'ניתוח נתונים ורווחיות'}, tag:{en:'Advanced', he:'מתקדם'},
  desc:{en:'How do you know if the business is profitable? The numbers you must track', he:'איך יודעים אם העסק רווחי? המספרים שחייבים לעקוב'},
  charts:[{
    id:'chart-drop-metrics',
    config:{type:'line',data:{labels:['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],datasets:[{label:'Revenue ($)',data:[300,450,420,600,750,900],borderColor:'#00e096',tension:0.4,fill:false},{label:'Ad Spend ($)',data:[200,200,200,200,200,200],borderColor:'#ff4d6d',borderDash:[5,3],tension:0.4,fill:false},{label:'Net Profit ($)',data:[50,180,150,320,460,600],borderColor:'#7c6cfc',tension:0.4,fill:true,backgroundColor:'rgba(124,108,252,0.08)'}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#888899',callback:v=>'$'+v},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">5 numbers you must know every day</div>
    <ul class="lp-list">
      <li><span>💰</span><div><strong>Gross Revenue</strong> — how much money came in. Not the profit!</div></li>
      <li><span>🏭</span><div><strong>Cost of Goods (COGS)</strong> — what you paid the supplier</div></li>
      <li><span>📢</span><div><strong>Advertising cost</strong> — how much you spent on ads</div></li>
      <li><span>✅</span><div><strong>Net Profit</strong> = Revenue − COGS − Advertising − Shopify fees</div></li>
      <li><span>🎯</span><div><strong>ROAS</strong> = Revenue ÷ Ad Spend. Below 2 = problem.</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">Example: a growing business — revenue rises while expenses stay fixed</div>
    <div class="lp-chart-wrap"><canvas id="chart-drop-metrics"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">When to add products and when to stop?</div>
    <ul class="lp-list">
      <li><span>🟢</span><div><strong>ROAS above 3 week after week</strong> — increase ad budget by 20% every week. No less, no more.</div></li>
      <li><span>🟡</span><div><strong>ROAS 1.5-3</strong> — improve the ad / product page before increasing budget.</div></li>
      <li><span>🔴</span><div><strong>ROAS below 1.5 for two weeks in a row</strong> — stop. Change the product. Don't keep burning money.</div></li>
    </ul>
    <div class="lp-highlight green">📈 The secret: successful dropshipping businesses find 1 winning product out of 10 they tried. The 9 that failed weren't wasted money — they were tuition!</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">5 מספרים שחייבים לדעת כל יום</div>
    <ul class="lp-list">
      <li><span>💰</span><div><strong>הכנסה גולמית</strong> — כמה כסף נכנס. לא הרווח!</div></li>
      <li><span>🏭</span><div><strong>עלות סחורה (COGS)</strong> — מה שילמת לספק</div></li>
      <li><span>📢</span><div><strong>עלות פרסום</strong> — כמה הוצאת על מודעות</div></li>
      <li><span>✅</span><div><strong>רווח נקי</strong> = הכנסה − COGS − פרסום − עמלות Shopify</div></li>
      <li><span>🎯</span><div><strong>ROAS</strong> = הכנסה ÷ הוצאות פרסום. מתחת ל-2 = בעיה.</div></li>
    </ul>
    <div class="lp-chart-card"><div class="lp-chart-title">דוגמה: עסק גדל — הכנסות עולות בעוד ההוצאות נשארות קבועות</div>
    <div class="lp-chart-wrap"><canvas id="chart-drop-metrics"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">מתי להוסיף מוצרים ומתי לעצור?</div>
    <ul class="lp-list">
      <li><span>🟢</span><div><strong>ROAS מעל 3 שבוע אחרי שבוע</strong> — הגדל תקציב פרסום ב-20% כל שבוע. לא פחות, לא יותר.</div></li>
      <li><span>🟡</span><div><strong>ROAS 1.5-3</strong> — שפר את הפרסומת / דף המוצר לפני הגדלת תקציב.</div></li>
      <li><span>🔴</span><div><strong>ROAS מתחת ל-1.5 שבועיים ברציפות</strong> — עצור. החלף מוצר. אל תמשיך לשרוף כסף.</div></li>
    </ul>
    <div class="lp-highlight green">📈 הסוד: עסקי דרופשיפינג מצליחים מוצאים מוצר מנצח אחד מתוך 10 שניסו. ה-9 שנכשלו לא היו כסף שהוצלח — הם היו שכר לימוד!</div>
    </div>`}
},
{
  icon:'🔁', id:'d11', title:{en:'Automation and Scaling', he:'אוטומציה וסקיילינג'}, tag:{en:'Advanced', he:'מתקדם'},
  desc:{en:'How to make the business run itself and multiply revenue without multiplying work', he:'איך לגרום לעסק לרוץ לבד ולהכפיל הכנסות בלי להכפיל עבודה'},
  charts:[{
    id:'chart-scale',
    config:{type:'bar',data:{labels:['Month 1','Month 2','Month 3','Month 4','Month 5','Month 6'],datasets:[{label:'Work Hours per Day',data:[5,5,4,3,2,1.5],backgroundColor:'rgba(255,77,109,0.6)',borderRadius:6},{label:'Daily Revenue ($×10)',data:[20,35,60,90,130,180],backgroundColor:'rgba(0,224,150,0.6)',borderRadius:6}]},options:{plugins:{legend:{labels:{color:'#888899'}}},scales:{x:{ticks:{color:'#888899'},grid:{display:false}},y:{ticks:{color:'#888899'},grid:{color:'rgba(255,255,255,0.05)'}}},responsive:true,maintainAspectRatio:false}}
  }],
  fullContent:{en:`
    <div class="lp-section"><div class="lp-section-title">What is scaling?</div>
    <p class="lp-text">Scaling = increasing revenue without increasing work at the same pace. At the start you do everything yourself. By month 3-4, you automate and delegate — and then the business runs mostly on its own.</p>
    <div class="lp-chart-card"><div class="lp-chart-title">With proper automation — revenue rises while work hours fall</div>
    <div class="lp-chart-wrap"><canvas id="chart-scale"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">What to automate first?</div>
    <ul class="lp-list">
      <li><span>📧</span><div><strong>Automated emails</strong> — Klaviyo sends automatic emails after a purchase, abandoned cart, and a week later. Increases revenue by 20-30%.</div></li>
      <li><span>📦</span><div><strong>Order processing</strong> — DSers/AutoDS forwards orders to the supplier automatically. No clicks needed.</div></li>
      <li><span>💬</span><div><strong>Automated replies</strong> — Tidio chatbot answers frequently asked questions 24/7 without you.</div></li>
      <li><span>📱</span><div><strong>Ads</strong> — Meta Advantage+ manages ads automatically based on who is most likely to buy.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">Proper scaling of advertising</div>
    <div class="lp-highlight">📈 The 20% rule: when a product is profitable — increase ad budget by 20% every 3-4 days only. Not x2 in one day — that destroys the Meta algorithm!</div>
    <div class="lp-highlight green">🌍 After your home market — international audience! USA, Canada, Australia = 100x bigger audience, with higher purchasing power. Same store, ads in English = revenue x10.</div>
    </div>`, he:`
    <div class="lp-section"><div class="lp-section-title">מה זה סקיילינג?</div>
    <p class="lp-text">סקיילינג = הגדלת הכנסות בלי להגדיל עבודה באותו קצב. בהתחלה אתה עושה הכל לבד. עד חודש 3-4, אתה מאוטמט ומאציל — ואז העסק רץ בעצמו בעיקר.</p>
    <div class="lp-chart-card"><div class="lp-chart-title">עם אוטומציה נכונה — הכנסות עולות בזמן שעות עבודה יורדות</div>
    <div class="lp-chart-wrap"><canvas id="chart-scale"></canvas></div></div>
    </div>
    <div class="lp-section"><div class="lp-section-title">מה לאוטמט קודם?</div>
    <ul class="lp-list">
      <li><span>📧</span><div><strong>מיילים אוטומטיים</strong> — Klaviyo שולח מיילים אוטומטיים אחרי רכישה, עגלה נטושה, ושבוע אחרי. מגביר הכנסות ב-20-30%.</div></li>
      <li><span>📦</span><div><strong>עיבוד הזמנות</strong> — DSers/AutoDS מעביר הזמנות לספק אוטומטית. אפס קליקים.</div></li>
      <li><span>💬</span><div><strong>תשובות אוטומטיות</strong> — צ'אטבוט Tidio עונה לשאלות נפוצות 24/7 בלעדיך.</div></li>
      <li><span>📱</span><div><strong>מודעות</strong> — Meta Advantage+ מנהל מודעות אוטומטית על בסיס מי הכי סביר לקנות.</div></li>
    </ul>
    </div>
    <div class="lp-section"><div class="lp-section-title">סקיילינג נכון של פרסום</div>
    <div class="lp-highlight">📈 כלל ה-20%: כשמוצר רווחי — הגדל תקציב פרסום ב-20% כל 3-4 ימים בלבד. לא פי 2 ביום אחד — זה הורס את האלגוריתם של Meta!</div>
    <div class="lp-highlight green">🌍 אחרי השוק המקומי שלך — קהל בינלאומי! ארה"ב, קנדה, אוסטרליה = קהל פי 100 גדול יותר, עם כוח קנייה גבוה יותר. אותה חנות, מודעות באנגלית = הכנסות פי 10.</div>
    </div>`}
}
];

// ===== RENDER =====
function getLF(lesson, field) {
  const v = lesson[field];
  if (typeof v === 'object') {
    if (v[currentLang]) return v[currentLang];
    const iKey = 'ls_' + lesson.id + '_' + field;
    const tr = t(iKey);
    return (tr !== iKey) ? tr : (v.en || '');
  }
  return v || '';
}
function renderLessons(lessons, gridId) {
  document.getElementById(gridId).innerHTML = lessons.map((l, i) => `
    <div class="lesson-card" onclick="openLesson('${gridId}',${i})">
      <div class="lesson-num">0${i+1}</div>
      <div class="lesson-icon">${l.icon}</div>
      <h3>${getLF(l,'title')}</h3>
      <p>${getLF(l,'desc')}</p>
      <div class="lesson-tag">${getLF(l,'tag')}</div>
    </div>`).join('');
}

renderLessons(stocksLessons, 'stocks-grid');
renderLessons(dropLessons, 'drop-grid');
// ===== NAV =====
function showSection(name) {
  requireLogin(() => {
    localStorage.setItem('active_section', name);
    ['stocks','drop','calculator','quiz','games'].forEach(s => {
      document.getElementById('section-'+s).style.display = s===name ? 'block' : 'none';
      const navId = s==='calculator' ? 'nav-calc' : 'nav-'+s;
      const navEl = document.getElementById(navId);
      if (navEl) navEl.classList.toggle('nav-active', s===name);
    });
    if (name === 'calculator') updateCalc();
    if (name === 'quiz') renderQuiz();
    if (name === 'games' && !sg.started) initStockGame();
    if (name !== 'games') {
      if (sg.interval) { clearInterval(sg.interval); sg.interval = null; sg.started = false; }
      if (dg.interval) { clearInterval(dg.interval); dg.interval = null; dg.running = false; }
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

// ===== MODAL =====
function openLesson(gridId, index) {
  requireLogin(() => {
  const _doOpen = () => {
    const arr = gridId==='stocks-grid' ? stocksLessons : dropLessons;
    currentLessons = arr;
    const lesson = arr[index];
    // Award XP for new lesson
    if (isLoggedIn) {
      const ud = getUD(currentUserEmail);
      if (!ud.lessons.includes(lesson.id)) {
        ud.lessons.push(lesson.id);
        saveUD(currentUserEmail, ud);
        addXP(10, 'Lesson: ' + lesson.id);
      }
      progressMission('open_lesson');
      progressMission('open3lessons');
      if (gridId === 'stocks-grid') progressMission('open_stock');
      if (gridId === 'drop-grid') progressMission('open_drop');
    }
    openLessonPage(lesson, index, arr);
  };
  _doOpen();
  });
}
function closeLesson() { document.getElementById('modal').classList.remove('open'); document.body.style.overflow=''; }
function closeModal(e) { if(e.target===document.getElementById('modal')) closeLesson(); }

// ===== CALC =====
function fmtNum(n) { return getCurrency() + Math.round(n).toLocaleString(); }
function updateCalc() {
  if (!document.getElementById('c-start')) return;
  const start=+document.getElementById('c-start').value, yearly=+document.getElementById('c-yearly').value;
  const rate=+document.getElementById('c-rate').value/100, years=+document.getElementById('c-years').value;
  document.getElementById('c-start-out').textContent=fmtNum(start);
  document.getElementById('c-yearly-out').textContent=fmtNum(yearly);
  document.getElementById('c-rate-out').textContent=document.getElementById('c-rate').value+'%';
  document.getElementById('c-years-out').textContent=years+' '+t('calc_years_word');
  let bal=start, inv=start;
  for(let i=0;i<years;i++){bal=bal*(1+rate)+yearly;inv+=yearly;}
  document.getElementById('c-total').textContent=fmtNum(bal);
  document.getElementById('c-invested').textContent=fmtNum(inv);
  document.getElementById('c-profit').textContent=fmtNum(bal-inv);
  document.getElementById('c-mult').textContent=(bal/inv).toFixed(1)+'x';
}
['c-start','c-yearly','c-rate','c-years'].forEach(id=>document.getElementById(id).addEventListener('input',updateCalc));
updateCalc();

// ===== QUIZ =====
const quizQuestions = [
  {
    q:{en:"What is a stock?",he:"מה זה מניה?",es:"¿Qué es una acción?",fr:"Qu'est-ce qu'une action?",ar:"ما هو السهم؟",ru:"Что такое акция?"},
    options:{
      en:["A loan to a company","An ownership stake in a company","A government bond","A savings fund"],
      he:["הלוואה לחברה","חלק בעלות בחברה","אגרות חוב ממשלתיות","קרן חיסכון"],
      es:["Un préstamo a la empresa","Una participación en la empresa","Un bono del gobierno","Un fondo de ahorro"],
      fr:["Un prêt à l'entreprise","Une participation dans l'entreprise","Une obligation d'État","Un fonds d'épargne"],
      ar:["قرض للشركة","حصة ملكية في الشركة","سند حكومي","صندوق ادخار"],
      ru:["Кредит компании","Доля собственности в компании","Государственная облигация","Сберегательный фонд"]
    },
    correct:1,
    feedback:{en:"Correct! A stock = ownership stake. Bought a share = became a partner!",he:"נכון! מניה = חלק בבעלות. קנית מניה = הפכת לשותף!",es:"¡Correcto! Una acción = participación. ¡Compraste una acción = te convertiste en socio!",fr:"Correct! Une action = participation. Acheter une action = devenir associé!",ar:"صحيح! السهم = حصة ملكية. اشتريت سهماً = أصبحت شريكاً!",ru:"Верно! Акция = доля собственности. Купил акцию = стал партнёром!"}
  },
  {
    q:{en:"What happens to the price when there are more buyers?",he:"מה קורה למחיר כשיש יותר קונים?",es:"¿Qué pasa con el precio cuando hay más compradores?",fr:"Que se passe-t-il avec le prix quand il y a plus d'acheteurs?",ar:"ماذا يحدث للسعر عندما يكون هناك مزيد من المشترين؟",ru:"Что происходит с ценой, когда больше покупателей?"},
    options:{
      en:["Falls","Stays the same","Rises","Resets to zero"],
      he:["יורד","נשאר אותו דבר","עולה","מתאפס"],
      es:["Baja","Se mantiene igual","Sube","Se reinicia a cero"],
      fr:["Baisse","Reste le même","Monte","Revient à zéro"],
      ar:["ينخفض","يبقى كما هو","يرتفع","يعود إلى الصفر"],
      ru:["Падает","Остаётся прежней","Растёт","Сбрасывается до нуля"]
    },
    correct:2,
    feedback:{en:"Exactly! More buyers = high demand = price rises.",he:"בדיוק! יותר קונים = ביקוש גבוה = מחיר עולה.",es:"¡Exacto! Más compradores = alta demanda = sube el precio.",fr:"Exactement! Plus d'acheteurs = forte demande = prix monte.",ar:"بالضبط! مزيد من المشترين = طلب مرتفع = ارتفاع السعر.",ru:"Именно! Больше покупателей = высокий спрос = цена растёт."}
  },
  {
    q:{en:"What is Market Cap?",he:"מה זה שווי שוק?",es:"¿Qué es la capitalización de mercado?",fr:"Qu'est-ce que la capitalisation boursière?",ar:"ما هي القيمة السوقية؟",ru:"Что такое рыночная капитализация?"},
    options:{
      en:["Price of one share","Share price × number of shares","Annual profit","IPO price"],
      he:["מחיר מניה אחת","מחיר מניה × מספר מניות","רווח שנתי","מחיר הנפקה"],
      es:["Precio de una acción","Precio × número de acciones","Ganancia anual","Precio de IPO"],
      fr:["Prix d'une action","Prix × nombre d'actions","Profit annuel","Prix d'introduction"],
      ar:["سعر سهم واحد","سعر السهم × عدد الأسهم","الربح السنوي","سعر الاكتتاب"],
      ru:["Цена одной акции","Цена × количество акций","Годовая прибыль","Цена IPO"]
    },
    correct:1,
    feedback:{en:"Yes! Market Cap = the true value of the company.",he:"כן! שווי שוק = הערך האמיתי של החברה.",es:"¡Sí! Cap. de mercado = el valor real de la empresa.",fr:"Oui! Capitalisation = la vraie valeur de l'entreprise.",ar:"نعم! القيمة السوقية = القيمة الحقيقية للشركة.",ru:"Да! Капитализация = реальная стоимость компании."}
  },
  {
    q:{en:"What is Support?",he:"מה זה רמת תמיכה?",es:"¿Qué es el soporte?",fr:"Qu'est-ce que le support?",ar:"ما هو مستوى الدعم؟",ru:"Что такое уровень поддержки?"},
    options:{
      en:["A price it will never reach","A price the stock always bounced from","A midline","The average price"],
      he:["מחיר שהמניה לא תגיע אליו","מחיר שהמניה תמיד קפצה ממנו","קו אמצע","מחיר ממוצע"],
      es:["Un precio que nunca alcanzará","Un precio desde el que siempre rebotó","Una línea media","El precio promedio"],
      fr:["Un prix qu'il n'atteindra jamais","Un prix depuis lequel il a toujours rebondi","Une ligne médiane","Le prix moyen"],
      ar:["سعر لن يصله أبداً","سعر ارتد منه السهم دائماً","خط منتصف","متوسط السعر"],
      ru:["Цена, которую никогда не достигнет","Цена, от которой акция всегда отскакивала","Средняя линия","Средняя цена"]
    },
    correct:1,
    feedback:{en:"Correct! Support = historical floor. A good time to buy!",he:"נכון! תמיכה = רצפה היסטורית. זמן טוב לקנות!",es:"¡Correcto! Soporte = suelo histórico. ¡Buen momento para comprar!",fr:"Correct! Support = plancher historique. Bon moment d'acheter!",ar:"صحيح! الدعم = قاع تاريخي. وقت جيد للشراء!",ru:"Верно! Поддержка = исторический минимум. Хороший момент для покупки!"}
  },
  {
    q:{en:"Beta 1.5 means the stock:",he:"בטא 1.5 אומר שהמניה:",es:"Beta 1.5 significa que la acción:",fr:"Un bêta de 1.5 signifie que l'action:",ar:"بيتا 1.5 تعني أن السهم:",ru:"Бета 1.5 означает, что акция:"},
    options:{
      en:["Moves like the market","Moves 50% less","Moves 50% more","Doesn't move"],
      he:["נעה כמו השוק","נעה 50% פחות","נעה 50% יותר","לא זה"],
      es:["Se mueve como el mercado","Se mueve 50% menos","Se mueve 50% más","No se mueve"],
      fr:["Bouge comme le marché","Bouge 50% moins","Bouge 50% plus","Ne bouge pas"],
      ar:["تتحرك مثل السوق","تتحرك أقل بنسبة 50%","تتحرك أكثر بنسبة 50%","لا تتحرك"],
      ru:["Движется как рынок","Движется на 50% меньше","Движется на 50% больше","Не движется"]
    },
    correct:2,
    feedback:{en:"Correct! Beta 1.5 = moves 50% more than the market!",he:"נכון! בטא 1.5 = נעה 50% יותר מהשוק!",es:"¡Correcto! Beta 1.5 = se mueve 50% más que el mercado!",fr:"Correct! Bêta 1.5 = bouge 50% de plus que le marché!",ar:"صحيح! بيتا 1.5 = تتحرك 50% أكثر من السوق!",ru:"Верно! Бета 1.5 = движется на 50% больше рынка!"}
  },
  {
    q:{en:"When you buy a stock today, who do you buy from?",he:"כשאתה קונה מניה היום, ממי אתה קונה?",es:"¿A quién le compras cuando compras una acción hoy?",fr:"Quand vous achetez une action aujourd'hui, à qui l'achetez-vous?",ar:"عندما تشتري سهماً اليوم، ممن تشتري؟",ru:"Когда вы покупаете акцию сегодня, у кого вы покупаете?"},
    options:{
      en:["The company","Another investor","The government","The bank"],
      he:["החברה","משקיע אחר","הממשלה","הבנק"],
      es:["La empresa","Otro inversor","El gobierno","El banco"],
      fr:["L'entreprise","Un autre investisseur","Le gouvernement","La banque"],
      ar:["الشركة","مستثمر آخر","الحكومة","البنك"],
      ru:["Компания","Другой инвестор","Правительство","Банк"]
    },
    correct:1,
    feedback:{en:"Exactly! After the IPO, all trading is between investors.",he:"בדיוק! אחרי ההנפקה, כל המסחר הוא בין משקיעים.",es:"¡Exacto! Después del IPO, todo el comercio es entre inversores.",fr:"Exactement! Après l'IPO, tout le commerce est entre investisseurs.",ar:"بالضبط! بعد الطرح العام الأولي، كل التداول بين المستثمرين.",ru:"Именно! После IPO всё торговля происходит между инвесторами."}
  },
  {
    q:{en:"What is dropshipping?",he:"מה זה דרופשיפינג?",es:"¿Qué es el dropshipping?",fr:"Qu'est-ce que le dropshipping?",ar:"ما هو الدروبشيبينغ؟",ru:"Что такое дропшиппинг?"},
    options:{
      en:["Selling stocks","Selling products without inventory","Buying real estate","Developing apps"],
      he:["מכירת מניות","מכירת מוצרים בלי מלאי","קנייה של נדל\"ן","פיתוח אפליקציות"],
      es:["Vender acciones","Vender productos sin inventario","Comprar bienes raíces","Desarrollar apps"],
      fr:["Vendre des actions","Vendre des produits sans stock","Acheter de l'immobilier","Développer des apps"],
      ar:["بيع الأسهم","بيع المنتجات بدون مخزون","شراء العقارات","تطوير التطبيقات"],
      ru:["Продажа акций","Продажа товаров без склада","Покупка недвижимости","Разработка приложений"]
    },
    correct:1,
    feedback:{en:"Correct! The supplier ships directly to the customer — you keep the difference!",he:"נכון! הספק שולח ישירות ללקוח — אתה שומר את ההפרש!",es:"¡Correcto! El proveedor envía directamente al cliente — ¡tú te quedas la diferencia!",fr:"Correct! Le fournisseur livre directement au client — vous gardez la différence!",ar:"صحيح! المورد يشحن مباشرة للعميل — أنت تحتفظ بالفرق!",ru:"Верно! Поставщик отправляет напрямую клиенту — вы оставляете разницу!"}
  },
  {
    q:{en:"What is a Stop Loss?",he:"מה זה סטופ לוס?",es:"¿Qué es un Stop Loss?",fr:"Qu'est-ce qu'un Stop Loss?",ar:"ما هو وقف الخسارة؟",ru:"Что такое Stop Loss?"},
    options:{
      en:["Stop buying","Sell automatically when it drops","Buy automatically","A volatility index"],
      he:["להפסיק לקנות","מכירה אוטומטית כשיורד","קנייה אוטומטית","מדד תנודתיות"],
      es:["Dejar de comprar","Vender automáticamente cuando baja","Comprar automáticamente","Un índice de volatilidad"],
      fr:["Arrêter d'acheter","Vendre automatiquement quand ça baisse","Acheter automatiquement","Un indice de volatilité"],
      ar:["التوقف عن الشراء","البيع تلقائياً عند الانخفاض","الشراء تلقائياً","مؤشر التقلب"],
      ru:["Прекратить покупку","Продать автоматически при падении","Купить автоматически","Индекс волатильности"]
    },
    correct:1,
    feedback:{en:"Exactly! Stop Loss protects against too large a loss.",he:"בדיוק! סטופ לוס מגן מפני הפסד גדול מדי.",es:"¡Exacto! El Stop Loss protege contra pérdidas demasiado grandes.",fr:"Exactement! Le Stop Loss protège contre des pertes trop importantes.",ar:"بالضبط! وقف الخسارة يحمي من خسارة كبيرة جداً.",ru:"Именно! Stop Loss защищает от слишком большого убытка."}
  }
];

let currentQ=0, score=0;
function qlang(obj){return obj[currentLang]||obj.en;}
function renderQuiz() {
  if(currentQ>=quizQuestions.length){
    finishQuiz();
    document.getElementById('quiz-container').innerHTML=`<div class="quiz-score"><div class="score-num">${score}/${quizQuestions.length}</div><p>${t('quiz_answered').replace('{score}',score).replace('{total}',quizQuestions.length)}</p>${score>=6?`<p style="color:#1D9E75;margin-top:0.5rem">${t('quiz_amazing')}</p>`:`<p style="color:var(--accent);margin-top:0.5rem">${t('quiz_almost')}</p>`}<button class="quiz-restart" onclick="restartQuiz()">${t('quiz_restart')}</button></div>`;
    return;
  }
  const q=quizQuestions[currentQ];
  const opts=qlang(q.options);
  document.getElementById('quiz-container').innerHTML=`<div style="font-size:0.8rem;color:var(--muted);margin-bottom:1rem">${t('quiz_question_of').replace('{n}',currentQ+1).replace('{total}',quizQuestions.length)}</div><div class="quiz-question">${qlang(q.q)}</div><div class="quiz-options">${opts.map((o,i)=>`<button class="quiz-option" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>`;
}
function answerQuiz(index) {
  const q=quizQuestions[currentQ];
  document.querySelectorAll('.quiz-option').forEach(o=>o.style.pointerEvents='none');
  if(index===q.correct){document.querySelectorAll('.quiz-option')[index].classList.add('correct');score++;addXP(20,'Correct answer');progressMission('quiz_correct');progressMission('quiz3correct');sfxCorrect();}
  else{document.querySelectorAll('.quiz-option')[index].classList.add('wrong');document.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');sfxWrong();}
  const fb=document.createElement('div');fb.className=`quiz-feedback ${index===q.correct?'correct':'wrong'}`;fb.textContent=(index===q.correct?'✅ ':'❌ ')+qlang(q.feedback);
  document.getElementById('quiz-container').appendChild(fb);
  const btn=document.createElement('button');btn.className='quiz-next';btn.textContent=currentQ<quizQuestions.length-1?t('quiz_next'):t('quiz_see_results');btn.onclick=()=>{currentQ++;renderQuiz();};
  document.getElementById('quiz-container').appendChild(btn);
}
function finishQuiz() {
  if (!isLoggedIn) return;
  progressMission('quiz_finish');
  const ud = getUD(currentUserEmail);
  if (!ud.badges.includes('quiz_pass')) { ud.badges.push('quiz_pass'); saveUD(currentUserEmail,ud); showBadgeToast(BADGES.find(b=>b.id==='quiz_pass')); }
  if (score === quizQuestions.length && !ud.badges.includes('quiz_perfect')) { ud.badges.push('quiz_perfect'); saveUD(currentUserEmail,ud); showBadgeToast(BADGES.find(b=>b.id==='quiz_perfect')); }
}
function restartQuiz(){currentQ=0;score=0;renderQuiz();}
// renderQuiz() called in initApp() below

// ===== GAMIFICATION =====
const BADGES = [
  { id:'first_lesson',  icon:'📖', name:'First Step',      desc:'Opened your first lesson' },
  { id:'lesson5',       icon:'🎓', name:'Student',         desc:'Completed 5 lessons' },
  { id:'lesson_all',    icon:'🏆', name:'Graduate',        desc:'Completed all lessons' },
  { id:'quiz_pass',     icon:'🧠', name:'Quiz Taker',      desc:'Completed the quiz' },
  { id:'quiz_perfect',  icon:'💯', name:'Perfect Score',   desc:'Got 100% on the quiz' },
  { id:'streak3',       icon:'🔥', name:'On Fire',         desc:'3-day login streak' },
  { id:'streak7',       icon:'⚡', name:'Unstoppable',     desc:'7-day login streak' },
  { id:'xp100',         icon:'💰', name:'Century',         desc:'Earned 100 XP' },
  { id:'xp500',         icon:'🚀', name:'High Flyer',      desc:'Earned 500 XP' },
];

function getGD() { // get gamification data
  try { return JSON.parse(localStorage.getItem('kb_gd') || '{}'); } catch(e) { return {}; }
}
function saveGD(d) { localStorage.setItem('kb_gd', JSON.stringify(d)); }
function getUD(email) { // get user data
  const d = getGD();
  if (!d[email]) d[email] = { xp:0, lessons:[], badges:[], streak:0, lastLogin:'' };
  return d[email];
}
function saveUD(email, ud) { const d=getGD(); d[email]=ud; saveGD(d); }

function addXP(amount, reason) {
  if (!isLoggedIn || !currentUserEmail) return;
  const ud = getUD(currentUserEmail);
  ud.xp += amount;
  saveUD(currentUserEmail, ud);
  showXPToast('+' + amount + ' XP — ' + reason);
  checkBadges();
  updateXPDisplay();
  progressMission('_xp', amount);
}

function showXPToast(msg) {
  let t = document.getElementById('xp-toast');
  if (!t) return;
  t.textContent = msg;
  t.style.opacity = '1'; t.style.transform = 'translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity='0'; t.style.transform='translateY(10px)'; }, 2200);
}

function checkBadges() {
  if (!isLoggedIn) return;
  const ud = getUD(currentUserEmail);
  const earned = [];
  const has = id => ud.badges.includes(id);
  const total = stocksLessons.length + dropLessons.length;
  if (!has('first_lesson') && ud.lessons.length >= 1) earned.push('first_lesson');
  if (!has('lesson5') && ud.lessons.length >= 5) earned.push('lesson5');
  if (!has('lesson_all') && ud.lessons.length >= total) earned.push('lesson_all');
  if (!has('xp100') && ud.xp >= 100) earned.push('xp100');
  if (!has('xp500') && ud.xp >= 500) earned.push('xp500');
  if (!has('streak3') && ud.streak >= 3) earned.push('streak3');
  if (!has('streak7') && ud.streak >= 7) earned.push('streak7');
  earned.forEach(id => {
    ud.badges.push(id);
    const b = BADGES.find(x=>x.id===id);
    if (b) showBadgeToast(b);
  });
  if (earned.length) saveUD(currentUserEmail, ud);
}

function showBadgeToast(b) {
  let el = document.getElementById('badge-toast');
  if (!el) return;
  el.innerHTML = `<span style="font-size:1.4rem">${b.icon}</span><div><div style="font-weight:700">Badge Unlocked!</div><div style="font-size:0.8rem;opacity:0.85">${b.name} — ${b.desc}</div></div>`;
  el.style.opacity='1'; el.style.transform='translateY(0)';
  clearTimeout(el._timer);
  el._timer = setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateY(20px)'; }, 3000);
  sfxBadge(); launchConfetti();
}

function updateXPDisplay() {
  if (!isLoggedIn) return;
  const ud = getUD(currentUserEmail);
  const btn = document.getElementById('nav-auth-btn');
  if (btn) {
    const streak = ud.streak > 1 ? ' · 🔥' + ud.streak : '';
    btn.textContent = '👤 ' + (currentUserName || currentUserEmail) + ' · ⚡' + ud.xp + streak;
  }
}

function checkDailyStreak() {
  if (!isLoggedIn) return;
  const ud = getUD(currentUserEmail);
  const today = new Date().toDateString();
  if (ud.lastLogin === today) return;
  const yesterday = new Date(Date.now()-86400000).toDateString();
  ud.streak = (ud.lastLogin === yesterday) ? ud.streak + 1 : 1;
  ud.lastLogin = today;
  addXP(5, 'Daily login');
  saveUD(currentUserEmail, ud);
  progressMission('login');
  if (ud.streak >= 3) progressMission('streak3');
  checkBadges();
}

// ===== DAILY MISSIONS =====
const ALL_MISSIONS = [
  { id:'open_lesson',   desc:'Open a lesson',               target:1,  xp:15,  icon:'📖' },
  { id:'open3lessons',  desc:'Open 3 lessons',              target:3,  xp:40,  icon:'📚' },
  { id:'quiz_correct',  desc:'Answer a quiz question correctly', target:1, xp:20, icon:'✅' },
  { id:'quiz3correct',  desc:'Answer 3 quiz questions correctly', target:3, xp:50, icon:'🧠' },
  { id:'login',         desc:'Log in today',                target:1,  xp:10,  icon:'👋' },
  { id:'streak3',       desc:'Reach a 3-day streak',        target:3,  xp:30,  icon:'🔥' },
  { id:'open_stock',    desc:'Open a stocks lesson',        target:1,  xp:15,  icon:'📈' },
  { id:'open_drop',     desc:'Open a dropshipping lesson',  target:1,  xp:15,  icon:'🛒' },
  { id:'quiz_finish',   desc:'Finish the full quiz',        target:1,  xp:60,  icon:'🏁' },
  { id:'earn50xp',      desc:'Earn 50 XP today',            target:50, xp:25,  icon:'⚡' },
];

function getMissions() {
  const today = new Date().toISOString().slice(0,10);
  const key = 'kb_missions_' + currentUserEmail;
  try {
    const d = JSON.parse(localStorage.getItem(key) || '{}');
    if (d.date === today) return d;
  } catch(e) {}
  // Pick 4 random missions for today using date as seed
  const seed = today.replace(/-/g,'');
  const shuffled = [...ALL_MISSIONS].sort((a,b) => (parseInt(seed+a.id.length) % 7) - (parseInt(seed+b.id.length) % 7));
  const picked = shuffled.slice(0,4);
  const d = { date: today, missions: picked.map(m => ({...m, progress:0, claimed:false})) };
  localStorage.setItem(key, JSON.stringify(d));
  return d;
}
function saveMissions(d) {
  localStorage.setItem('kb_missions_' + currentUserEmail, JSON.stringify(d));
}
function progressMission(type, amount) {
  if (!isLoggedIn) return;
  const d = getMissions();
  let changed = false;
  d.missions.forEach(m => {
    if (m.id === type && !m.claimed) {
      m.progress = Math.min(m.target, (m.progress||0) + (amount||1));
      changed = true;
    }
    // earn50xp tracks XP earned today
    if (m.id === 'earn50xp' && !m.claimed && type === '_xp') {
      m.progress = Math.min(m.target, (m.progress||0) + (amount||0));
      changed = true;
    }
  });
  if (changed) {
    saveMissions(d);
    // Show bell pulse if any mission complete and unclaimed
    const any = d.missions.some(m => m.progress >= m.target && !m.claimed);
    const btn = document.getElementById('nav-missions-btn');
    if (btn) btn.classList.toggle('missions-ready', any);
  }
}
function claimMission(idx) {
  const d = getMissions();
  const m = d.missions[idx];
  if (!m || m.claimed || m.progress < m.target) return;
  m.claimed = true;
  saveMissions(d);
  addXP(m.xp, 'Mission: ' + m.desc);
  renderMissions();
}
function openMissions() {
  if (!isLoggedIn) return;
  renderMissions();
  document.getElementById('missions-modal').classList.add('open');
}
function closeMissions(e) {
  if (!e || e.target === document.getElementById('missions-modal'))
    document.getElementById('missions-modal').classList.remove('open');
}
function renderMissions() {
  const d = getMissions();
  const today = new Date().toISOString().slice(0,10);
  document.getElementById('missions-date').textContent = '📅 ' + today;
  const list = document.getElementById('missions-list');
  list.innerHTML = d.missions.map((m, i) => {
    const pct = Math.min(100, Math.round((m.progress / m.target) * 100));
    const done = m.progress >= m.target;
    return '<div class="mission-item' + (m.claimed ? ' mission-claimed' : done ? ' mission-done' : '') + '">'
      + '<div class="mission-icon">' + m.icon + '</div>'
      + '<div class="mission-info">'
        + '<div class="mission-desc">' + m.desc + '</div>'
        + '<div class="mission-bar-wrap"><div class="mission-bar" style="width:' + pct + '%"></div></div>'
        + '<div class="mission-progress">' + m.progress + ' / ' + m.target + '</div>'
      + '</div>'
      + '<div class="mission-reward">+' + m.xp + ' XP</div>'
      + (done && !m.claimed
        ? '<button class="mission-claim-btn" onclick="claimMission(' + i + ')">Claim!</button>'
        : m.claimed ? '<span class="mission-claimed-badge">✓</span>' : '')
      + '</div>';
  }).join('');
  // Bell state
  const any = d.missions.some(m => m.progress >= m.target && !m.claimed);
  const btn = document.getElementById('nav-missions-btn');
  if (btn) btn.classList.toggle('missions-ready', any);
}

function openLeaderboard() {
  const d = getGD();
  const validEmails = new Set([
    ADMIN_EMAIL,
    ...PRESET_USERS.map(u => u.email),
    ...getUsers().map(u => u.email)
  ]);
  const rows = Object.entries(d)
    .filter(([email]) => validEmails.has(email))
    .map(([email, ud]) => ({ email, name: getNameForEmail(email), xp: ud.xp||0, streak: ud.streak||0, badges: (ud.badges||[]).length }))
    .sort((a,b) => b.xp - a.xp)
    .slice(0, 10);
  const medals = ['🥇','🥈','🥉'];
  document.getElementById('leaderboard-list').innerHTML = rows.length ? rows.map((r,i) => `
    <div class="lb-row ${r.email===currentUserEmail?'lb-me':''}">
      <span class="lb-rank">${medals[i]||'#'+(i+1)}</span>
      <span class="lb-avatar">${getAvatar(r.email)}</span>
      <span class="lb-name">${r.name}</span>
      <span class="lb-xp">⚡ ${r.xp} XP</span>
      <span class="lb-streak">🔥 ${r.streak}</span>
      <span class="lb-badges">🏅 ${r.badges}</span>
      ${r.email !== currentUserEmail ? `<button class="lb-report-btn" onclick="reportUser('${r.email}')" title="Report">🚩</button>` : ''}
    </div>`).join('') : '<div style="text-align:center;color:#888;padding:2rem">No data yet</div>';
  document.getElementById('leaderboard-modal').classList.add('open');
}
function closeLeaderboard() { document.getElementById('leaderboard-modal').classList.remove('open'); }

// ===== MATCHMAKING & 1v1-5v5 =====
// TODO: Replace localStorage matchmaking with WebSocket server calls
// Server events needed: join_queue, match_found, score_update, chat_msg, match_end

const BOT_NAMES = ['TraderX','StockWolf','BullRider','MarketAce','CryptoFox','DayTrader','HedgePro','WallStreet','BearKing','TechGrowth','MoonShot','ValuePro'];
const BOT_SKINS = ['🤖','🦊','🦁','🐺','🦅','🐯','🦈','🧙','🥷','👾','🎩','🤵'];
const BOT_CHAT_STOCKS = ['📈 Let\'s go!','Buying the dip!','HODL 💎','Moon soon 🚀','Bulls win!','Chart looks bullish 📊','Easy win','GG'];
const BOT_CHAT_DROP = ['🛒 Scaling ads!','Product found 🔥','Sales incoming!','Winning product!','Easy profit','Let\'s get it 💰','GG'];

let gm = {
  mode: 'stocks',   // 'stocks' | 'drop'
  teamSize: 1,      // 1–5
  myTeam: [],       // [{name, avatar, score, isMe}]
  enemyTeam: [],    // [{name, avatar, score}]
  timer: 60,
  botTimer: 60,
  matchInterval: null,
  searchInterval: null,
  botChatInterval: null,
  status: 'idle'    // idle | searching | playing | finished
};

function openFindGame() {
  if (!isLoggedIn) { requireLogin(openFindGame); return; }
  showGmScreen('lobby');
  document.getElementById('game-modal').classList.add('open');
}
function leaveMatch() {
  if (!confirm('Leave the match? You will forfeit and lose.')) return;
  if (gm.matchInterval) { clearInterval(gm.matchInterval); gm.matchInterval = null; }
  if (gm.botChatInterval) { clearInterval(gm.botChatInterval); gm.botChatInterval = null; }
  gm.status = 'idle';
  document.getElementById('game-modal').classList.remove('open');
}
function closeGameModal(e) {
  if (e && e.target !== document.getElementById('game-modal')) return;
  if (gm.status === 'playing') { leaveMatch(); return; }
  cancelSearch();
  if (gm.matchInterval) { clearInterval(gm.matchInterval); gm.matchInterval = null; }
  if (gm.botChatInterval) { clearInterval(gm.botChatInterval); gm.botChatInterval = null; }
  gm.status = 'idle';
  document.getElementById('game-modal').classList.remove('open');
}
function showGmScreen(name) {
  ['lobby','searching','match','results'].forEach(s => {
    document.getElementById('gm-'+s).style.display = s === name ? 'block' : 'none';
  });
}
function selectGameMode(mode, btn) {
  gm.mode = mode;
  document.querySelectorAll('.gm-mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function selectTeamSize(size, btn) {
  gm.teamSize = size;
  document.querySelectorAll('.gm-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function startSearching() {
  gm.status = 'searching';
  gm.botTimer = 60;
  showGmScreen('searching');
  const total = gm.teamSize * 2;
  document.getElementById('gm-need-players').textContent = total;

  // ── REPLACE WITH SERVER: emit('join_queue', {mode, teamSize, email}) ──
  let found = 1; // we are 1
  document.getElementById('gm-search-status').innerHTML = found + ' / ' + total + ' players found';
  document.getElementById('gm-bot-timer').textContent = gm.botTimer;

  gm.searchInterval = setInterval(() => {
    gm.botTimer--;
    document.getElementById('gm-bot-timer').textContent = gm.botTimer;

    // Simulate finding a real player occasionally
    if (found < total && Math.random() < 0.08) {
      found++;
      document.getElementById('gm-search-status').innerHTML = found + ' / ' + total + ' players found';
    }
    if (found >= total || gm.botTimer <= 0) {
      clearInterval(gm.searchInterval);
      gm.searchInterval = null;
      buildMatch(found < total); // true = fill rest with bots
      startMatch();
    }
  }, 1000);
}
function cancelSearch() {
  if (gm.searchInterval) { clearInterval(gm.searchInterval); gm.searchInterval = null; }
  gm.status = 'idle';
}

function buildMatch(_useBots) {
  const ud = getUD(currentUserEmail);
  const mySkill = 15 + Math.floor(ud.xp / 80);

  // My team
  gm.myTeam = [{ name: currentUserName || currentUserEmail, avatar: getAvatar(currentUserEmail), score: 0, isMe: true, skill: mySkill }];
  for (let i = 1; i < gm.teamSize; i++) {
    // ── REPLACE WITH SERVER: real teammate data ──
    const bi = Math.floor(Math.random() * BOT_NAMES.length);
    gm.myTeam.push({ name: BOT_NAMES[bi], avatar: BOT_SKINS[bi % BOT_SKINS.length], score: 0, isBot: true, skill: 10 + Math.floor(Math.random() * 20) });
  }
  // Enemy team
  gm.enemyTeam = [];
  for (let i = 0; i < gm.teamSize; i++) {
    // ── REPLACE WITH SERVER: real enemy data ──
    const bi = Math.floor(Math.random() * BOT_NAMES.length);
    gm.enemyTeam.push({ name: BOT_NAMES[bi], avatar: BOT_SKINS[bi % BOT_SKINS.length], score: 0, isBot: true, skill: 10 + Math.floor(Math.random() * 22) });
  }
}

// ── Match Simulator (separate from main sg) ──────────────────────────
const matchSg = { balance: 500, holdings: {}, prices: {} };

function initMatchSim() {
  matchSg.balance = 500;
  matchSg.holdings = {};
  // Share live prices with main simulator (same market)
  allStocks50.forEach(s => { matchSg.prices[s.sym] = sg.prices[s.sym] || s.price; });
}

function syncMatchPrices() {
  allStocks50.forEach(s => { matchSg.prices[s.sym] = sg.prices[s.sym] || matchSg.prices[s.sym]; });
}

function getMyMatchValue() {
  const portVal = Object.keys(matchSg.holdings).reduce((sum, sym) =>
    sum + (matchSg.prices[sym] || 0) * matchSg.holdings[sym].qty, 0);
  return matchSg.balance + portVal;
}

function matchBuy(sym) {
  const price = matchSg.prices[sym];
  if (matchSg.balance < price) return;
  matchSg.balance -= price;
  if (!matchSg.holdings[sym]) matchSg.holdings[sym] = { qty: 0, avgPrice: 0 };
  const h = matchSg.holdings[sym];
  h.avgPrice = (h.avgPrice * h.qty + price) / (h.qty + 1);
  h.qty++;
  renderMatchSim();
}

function matchSell(sym) {
  if (!matchSg.holdings[sym] || matchSg.holdings[sym].qty <= 0) return;
  matchSg.balance += matchSg.prices[sym];
  matchSg.holdings[sym].qty--;
  if (matchSg.holdings[sym].qty === 0) delete matchSg.holdings[sym];
  renderMatchSim();
}

function renderMatchSim() {
  const portVal = Object.keys(matchSg.holdings).reduce((sum, sym) =>
    sum + (matchSg.prices[sym] || 0) * matchSg.holdings[sym].qty, 0);
  const total = matchSg.balance + portVal;
  const pnl = total - 500;
  const hdr = document.getElementById('msim-header');
  if (hdr) hdr.innerHTML =
    '<span>💵 Cash: <b>$' + matchSg.balance.toFixed(2) + '</b></span>' +
    '<span>📊 Total: <b>$' + total.toFixed(2) + '</b></span>' +
    '<span style="color:' + (pnl >= 0 ? '#00e096' : '#e74c3c') + '">' +
    (pnl >= 0 ? '▲' : '▼') + ' $' + Math.abs(pnl).toFixed(2) + '</span>';

  const list = document.getElementById('msim-list');
  if (!list) return;
  const search = (document.getElementById('msim-search')?.value || '').toLowerCase();
  const filtered = allStocks50.filter(s => !search || s.sym.toLowerCase().includes(search) || s.name.toLowerCase().includes(search));
  list.innerHTML = filtered.slice(0, 25).map(s => {
    const price = matchSg.prices[s.sym] || s.price;
    const held = (matchSg.holdings[s.sym]?.qty || 0);
    const change = ((price - s.price) / s.price * 100).toFixed(1);
    const col = change >= 0 ? '#00e096' : '#e74c3c';
    return '<div class="msim-row">'
      + '<div class="msim-sym">' + s.sym + (held ? ' <span class="msim-held">×' + held + '</span>' : '') + '</div>'
      + '<div class="msim-price" style="color:' + col + '">$' + price.toFixed(2) + ' <small>(' + (change >= 0 ? '+' : '') + change + '%)</small></div>'
      + '<div class="msim-btns">'
      + '<button class="msim-buy" onclick="matchBuy(\'' + s.sym + '\')">Buy</button>'
      + (held ? '<button class="msim-sell" onclick="matchSell(\'' + s.sym + '\')">Sell</button>' : '')
      + '</div></div>';
  }).join('');
}

function startMatch() {
  gm.status = 'playing';
  gm.timer = 300;
  showGmScreen('match');
  document.getElementById('gm-match-mode-label').textContent = '📈 Stocks';
  document.getElementById('gm-match-size-label').textContent = gm.teamSize + 'v' + gm.teamSize;
  document.getElementById('gm-chat-messages').innerHTML = '';

  // Make sure main sg prices exist
  if (!sg.started) {
    sg.started = true;
    allStocks50.forEach(s => { sg.prices[s.sym] = s.price; sg.initialPrices[s.sym] = s.price; });
    if (sg.interval) clearInterval(sg.interval);
    sg.interval = setInterval(sgTick, 2000);
  }

  // Init match simulator ($500, separate state)
  initMatchSim();
  renderMatchSim();

  // Init bots with $500
  [...gm.myTeam, ...gm.enemyTeam].forEach(p => { if (!p.isMe) { p.botBalance = 500; p.score = 500; } });

  renderMatchPlayers();
  appendMatchChat('🏁 Match', 'Match started! You have $100 — trade stocks to beat the enemy team!', false);

  gm.matchInterval = setInterval(() => {
    gm.timer--;
    const mm = Math.floor(gm.timer / 60), ss = gm.timer % 60;
    document.getElementById('gm-match-timer').textContent = mm + ':' + (ss < 10 ? '0' : '') + ss;

    // Sync match simulator prices with live market
    syncMatchPrices();
    renderMatchSim();

    // Update my score from match simulator
    gm.myTeam.forEach(p => { if (p.isMe) p.score = getMyMatchValue(); });

    // Simulate bot trading
    [...gm.myTeam, ...gm.enemyTeam].forEach(p => {
      if (!p.isBot) return;
      const rnd = (Math.random() - 0.47) * p.skill * 0.018;
      p.botBalance = Math.max(1, p.botBalance * (1 + rnd));
      p.score = parseFloat(p.botBalance.toFixed(2));
    });

    // ── REPLACE WITH SERVER: emit('score_update', getMyMatchValue()) ──
    renderMatchPlayers();
    if (gm.timer <= 0) { clearInterval(gm.matchInterval); gm.matchInterval = null; endMatch(); }
  }, 1000);

  // Bot chat
  gm.botChatInterval = setInterval(() => {
    if (gm.status !== 'playing') return;
    const pool = BOT_CHAT_STOCKS;
    const allBots = [...gm.myTeam, ...gm.enemyTeam].filter(p => p.isBot);
    if (!allBots.length) return;
    const bot = allBots[Math.floor(Math.random() * allBots.length)];
    appendMatchChat(bot.avatar + ' ' + bot.name, pool[Math.floor(Math.random() * pool.length)], false);
  }, 5000 + Math.random() * 5000);
}

function renderMatchPlayers() {
  const render = (players, containerId, totalId) => {
    document.getElementById(containerId).innerHTML = players.map(p =>
      '<div class="gm-player' + (p.isMe ? ' gm-me' : '') + '">'
      + '<span class="gm-p-avatar">' + p.avatar + '</span>'
      + '<span class="gm-p-name">' + p.name + (p.isMe ? ' 👤' : '') + '</span>'
      + '<span class="gm-p-score ' + (p.score >= 100 ? 'score-up' : 'score-down') + '">$' + p.score.toFixed(2) + '</span>'
      + '</div>'
    ).join('');
    const total = players.reduce((s,p) => s + p.score, 0);
    document.getElementById(totalId).textContent = '$' + total.toFixed(2);
  };
  render(gm.myTeam, 'gm-my-players', 'gm-my-total');
  render(gm.enemyTeam, 'gm-enemy-players', 'gm-enemy-total');
}

function endMatch() {
  if (gm.botChatInterval) { clearInterval(gm.botChatInterval); gm.botChatInterval = null; }
  gm.status = 'finished';
  // ── REPLACE WITH SERVER: server calculates winner ──
  const myTotal = gm.myTeam.reduce((s,p) => s+p.score, 0);
  const enemyTotal = gm.enemyTeam.reduce((s,p) => s+p.score, 0);
  const won = myTotal >= enemyTotal;
  const xpReward = won ? 25 : 10;

  showGmScreen('results');
  document.getElementById('gm-result-banner').textContent = won ? '🏆 VICTORY!' : '💀 DEFEAT';
  document.getElementById('gm-result-banner').className = 'gm-result-banner ' + (won ? 'victory' : 'defeat');
  document.getElementById('gm-result-my-score').textContent = '$' + myTotal.toFixed(2);
  document.getElementById('gm-result-enemy-score').textContent = '$' + enemyTotal.toFixed(2);
  document.getElementById('gm-result-xp').textContent = '+' + xpReward + ' XP ' + (won ? '(Win bonus!)' : '(Participation)');
  addXP(xpReward, won ? 'Match victory' : 'Match participation');
}

function sendMatchChat() {
  const inp = document.getElementById('gm-chat-input');
  let msg = (inp.value || '').trim();
  if (!msg) return;
  inp.value = '';
  msg = cleanText(msg);
  appendMatchChat(getAvatar(currentUserEmail) + ' ' + (currentUserName || 'You'), msg, true);
  // ── REPLACE WITH SERVER: emit('chat_msg', {msg}) ──
}
function appendMatchChat(sender, msg, isMe) {
  const box = document.getElementById('gm-chat-messages');
  if (!box) return;
  const div = document.createElement('div');
  div.className = 'gm-chat-msg' + (isMe ? ' gm-chat-me' : '');
  div.innerHTML = '<span class="gm-chat-sender">' + sender + ':</span> ' + msg;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function rematch() {
  if (gm.matchInterval) { clearInterval(gm.matchInterval); gm.matchInterval = null; }
  gm.status = 'idle';
  showGmScreen('lobby');
}

// ===== BATTLE PASS =====
const BP_CURRENT_SEASON = 1;
const BP_SEASONS = {
  1: {
    name: 'Season 1: The Investor',
    free: [
      { tier:1, xp:0,    skin:'🧑',   name:'Rookie'     },
      { tier:2, xp:200,  skin:'📈',   name:'Bullish'    },
      { tier:3, xp:500,  skin:'💼',   name:'Businessman'},
      { tier:4, xp:900,  skin:'🎩',   name:'Gentleman'  },
      { tier:5, xp:1400, skin:'🦈',   name:'Shark'      },
      { tier:6, xp:2000, skin:'🤵',   name:'Executive'  },
      { tier:7, xp:2700, skin:'👨‍🚀', name:'Moonshot'   },
      { tier:8, xp:3500, skin:'👑',   name:'King'       },
    ],
    plus: [
      { tier:1, xp:0,    skin:'👧',   name:'Girl Rookie',  bonus_xp:200 },
      { tier:2, xp:200,  skin:'💃',   name:'Trendy'        },
      { tier:3, xp:500,  skin:'🧝',   name:'Elven Trader'  },
      { tier:4, xp:900,  skin:'🧛',   name:'Night Analyst' },
      { tier:5, xp:1400, skin:'🧜',   name:'Wave Rider'    },
      { tier:6, xp:2000, skin:'🧚',   name:'Market Fairy'  },
      { tier:7, xp:2700, skin:'🐉',   name:'Dragon'        },
    ]
  }
};

function getBPU(email) {
  try {
    const d = JSON.parse(localStorage.getItem('kb_bp')||'{}');
    const u = d[email] || {has_plus:false, equipped:null, seasons:{}};
    if (email === ADMIN_EMAIL) u.has_plus = true; // admin always has plus
    return u;
  } catch(e) { return {has_plus:false, equipped:null, seasons:{}}; }
}
function adminGrantPlus(email) {
  const d = JSON.parse(localStorage.getItem('kb_bp')||'{}');
  if (!d[email]) d[email] = {has_plus:false, equipped:null, seasons:{}};
  d[email].has_plus = true;
  localStorage.setItem('kb_bp', JSON.stringify(d));
  renderAdminUsers();
  alert('Battle Pass Plus granted to ' + email);
}
function saveBPU(email, data) {
  const d = JSON.parse(localStorage.getItem('kb_bp')||'{}');
  d[email] = data; localStorage.setItem('kb_bp', JSON.stringify(d));
}
function getEquippedSkin(email) {
  const bpu = getBPU(email);
  return bpu.equipped || '🧑';
}

function openBattlePass() {
  if (!isLoggedIn) { requireLogin(()=>openBattlePass()); return; }
  renderBattlePass();
  document.getElementById('bp-modal').classList.add('open');
}
function closeBattlePass(e) {
  if (!e || e.target===document.getElementById('bp-modal'))
    document.getElementById('bp-modal').classList.remove('open');
}
function renderBattlePass() {
  const season = BP_SEASONS[BP_CURRENT_SEASON];
  const ud = getUD(currentUserEmail);
  const bpu = getBPU(currentUserEmail);
  const xp = ud.xp;
  document.getElementById('bp-season-name').textContent = season.name;
  document.getElementById('bp-xp-display').textContent = xp + ' XP';
  const plusBtnWrap = document.getElementById('bp-plus-btn-wrap');
  if (plusBtnWrap) plusBtnWrap.style.display = bpu.has_plus ? 'none' : 'block';
  const plusLabel = document.getElementById('bp-plus-label');
  if (plusLabel) plusLabel.style.display = bpu.has_plus ? 'inline-flex' : 'none';

  // Build tiers
  const track = document.getElementById('bp-track');
  const hasPlus = bpu.has_plus;
  let html = '';
  for (let i = 0; i < season.free.length; i++) {
    const f = season.free[i];
    const p = season.plus[i] || null;
    const fUnlocked = xp >= f.xp;
    const pUnlocked = hasPlus && p && xp >= p.xp;
    const fEquipped = bpu.equipped === f.skin;
    const pEquipped = p && bpu.equipped === p.skin;

    const fClick = fUnlocked ? 'equipBPSkin(' + i + ',false)' : '';
    const pClick = pUnlocked ? 'equipBPSkin(' + i + ',true)' : '';
    const lockIcon = hasPlus ? '🔒' : '⭐';

    html += '<div class="bp-tier">'
      + '<div class="bp-tier-num">T' + f.tier + '</div>'
      + '<div class="bp-tier-xp">' + (f.xp === 0 ? 'Free' : f.xp + ' XP') + '</div>'
      + '<div class="bp-reward ' + (fUnlocked ? 'unlocked' : 'locked') + (fEquipped ? ' equipped' : '') + '" onclick="' + fClick + '">'
        + '<div class="bp-skin">' + f.skin + '</div>'
        + '<div class="bp-skin-name">' + f.name + '</div>'
        + (fEquipped ? '<div class="bp-eq-dot"></div>' : '')
        + (!fUnlocked ? '<div class="bp-lock">🔒</div>' : '')
      + '</div>'
      + (p
        ? '<div class="bp-reward plus ' + (pUnlocked ? 'unlocked' : 'locked') + (pEquipped ? ' equipped' : '') + '" onclick="' + pClick + '">'
          + '<div class="bp-plus-tag">PLUS</div>'
          + '<div class="bp-skin">' + p.skin + '</div>'
          + '<div class="bp-skin-name">' + p.name + (p.bonus_xp ? '<span class="bp-bonus">+' + p.bonus_xp + ' XP</span>' : '') + '</div>'
          + (pEquipped ? '<div class="bp-eq-dot"></div>' : '')
          + (!pUnlocked ? '<div class="bp-lock">' + lockIcon + '</div>' : '')
        + '</div>'
        : '')
      + '</div>';
  }
  track.innerHTML = html;
}
function equipBPSkin(idx, isPlus) {
  const season = BP_SEASONS[BP_CURRENT_SEASON];
  const skin = isPlus ? season.plus[idx].skin : season.free[idx].skin;
  const bpu = getBPU(currentUserEmail);
  bpu.equipped = skin;
  saveBPU(currentUserEmail, bpu);
  saveAvatar(currentUserEmail, skin);
  updateNavAvatar();
  renderBattlePass();
}
function buyBattlePassPlus() {
  document.getElementById('bp-payment-modal').classList.add('open');
}
function closeBPPayment(e) {
  if (e && e.target !== document.getElementById('bp-payment-modal')) return;
  document.getElementById('bp-payment-modal').classList.remove('open');
}
function confirmBPPayment() {
  const card = document.getElementById('bpp-card').value.replace(/\s/g,'');
  const expiry = document.getElementById('bpp-expiry').value;
  const cvv = document.getElementById('bpp-cvv').value;
  const name = document.getElementById('bpp-name').value.trim();
  if (!card || card.length < 12 || !expiry || !cvv || !name) {
    document.getElementById('bpp-error').textContent = 'Please fill in all fields correctly.';
    return;
  }
  document.getElementById('bpp-error').textContent = '';
  // Simulate payment processing
  const btn = document.getElementById('bpp-pay-btn');
  btn.textContent = '⏳ Processing...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('bp-payment-modal').classList.remove('open');
    btn.textContent = '💳 Pay ₪20';
    btn.disabled = false;
    document.getElementById('bpp-card').value = '';
    document.getElementById('bpp-expiry').value = '';
    document.getElementById('bpp-cvv').value = '';
    document.getElementById('bpp-name').value = '';
    // Grant Plus
    const bpu = getBPU(currentUserEmail);
    bpu.has_plus = true;
    saveBPU(currentUserEmail, bpu);
    addXP(200, 'Battle Pass Plus bonus');
    renderBattlePass();
    showXPToast('⭐ Battle Pass Plus activated! +200 XP bonus');
  }, 1800);
}

// ===== AVATARS =====
const AVATARS = ['🧑‍💼','👨‍💻','👩‍💻','🧑‍🎓','👨‍🚀','👩‍🚀','🦊','🐺','🦁','🐯','🦅','🐲','🤖','👾','🎭','🧙','🥷','👑','🎩','🦸'];

function getAvatar(email) {
  // BP equipped skin takes priority
  const bpu = getBPU(email);
  if (bpu.equipped) return bpu.equipped;
  const d = JSON.parse(localStorage.getItem('kb_avatars') || '{}');
  return d[email] || '🧑';
}
function saveAvatar(email, av) {
  const d = JSON.parse(localStorage.getItem('kb_avatars') || '{}');
  d[email] = av;
  localStorage.setItem('kb_avatars', JSON.stringify(d));
}
function toggleAvatarPicker() {
  const p = document.getElementById('avatar-picker');
  if (!p) return;
  const open = p.style.display === 'none';
  p.style.display = open ? 'block' : 'none';
  if (open) renderAvatarGrid();
}
function renderAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  if (!grid) return;
  const season = BP_SEASONS[BP_CURRENT_SEASON];
  const ud = getUD(currentUserEmail);
  const bpu = getBPU(currentUserEmail);
  const cur = getAvatar(currentUserEmail);
  const xp = ud.xp;

  // Collect all skins: free tiers + plus tiers
  let html = '';
  season.free.forEach((f, i) => {
    const unlocked = xp >= f.xp;
    const equipped = cur === f.skin;
    html += '<div class="avatar-option'
      + (unlocked ? ' av-unlocked' : ' av-locked')
      + (equipped ? ' selected' : '')
      + '" onclick="' + (unlocked ? 'selectAvatar(' + i + ',false)' : 'showBPLockedMsg(' + f.xp + ')') + '">'
      + f.skin
      + (!unlocked ? '<div class="av-lock-overlay">🔒<span>' + (f.xp === 0 ? 'Free' : f.xp + ' XP') + '</span></div>' : '')
      + '</div>';
  });
  season.plus.forEach((p, i) => {
    const unlocked = bpu.has_plus && xp >= p.xp;
    const equipped = cur === p.skin;
    html += '<div class="avatar-option'
      + (unlocked ? ' av-unlocked' : ' av-locked')
      + (equipped ? ' selected' : '')
      + '" onclick="' + (unlocked ? 'selectAvatar(' + i + ',true)' : (bpu.has_plus ? 'showBPLockedMsg(' + p.xp + ')' : 'showBPLockedMsg(-1)')) + '">'
      + p.skin
      + (!unlocked ? '<div class="av-lock-overlay">' + (bpu.has_plus ? '🔒' : '⭐') + '<span>' + (bpu.has_plus ? p.xp + ' XP' : 'PLUS') + '</span></div>' : '')
      + '</div>';
  });
  grid.innerHTML = html;
}
function selectAvatar(idx, isPlus) {
  const season = BP_SEASONS[BP_CURRENT_SEASON];
  const av = isPlus ? season.plus[idx].skin : season.free[idx].skin;
  saveAvatar(currentUserEmail, av);
  const bpu = getBPU(currentUserEmail);
  bpu.equipped = av;
  saveBPU(currentUserEmail, bpu);
  const disp = document.getElementById('profile-avatar-display');
  if (disp) disp.textContent = av;
  renderAvatarGrid();
  updateNavAvatar();
}
function showBPLockedMsg(xp) {
  if (xp === -1) { alert('This skin requires Battle Pass Plus! Open the Battle Pass (🎖️) to upgrade.'); }
  else { alert('Locked! Earn ' + xp + ' XP to unlock this skin. Open the Battle Pass (🎖️) to see your progress.'); }
}
function updateNavAvatar() {
  const btn = document.getElementById('nav-auth-btn');
  if (btn && isLoggedIn) {
    const av = getAvatar(currentUserEmail);
    btn.textContent = av + ' ' + (currentUserName || currentUserEmail);
  }
}

function openProfile() {
  if (!isLoggedIn) return;
  const ud = getUD(currentUserEmail);
  document.getElementById('profile-name').textContent = currentUserName || currentUserEmail;
  document.getElementById('profile-xp').textContent = ud.xp + ' XP';
  document.getElementById('profile-streak').textContent = ud.streak + ' days';
  document.getElementById('profile-lessons').textContent = ud.lessons.length + ' / ' + (stocksLessons.length+dropLessons.length);
  const disp = document.getElementById('profile-avatar-display');
  if (disp) disp.textContent = getAvatar(currentUserEmail);
  const picker = document.getElementById('avatar-picker');
  if (picker) picker.style.display = 'none';
  const badgesEl = document.getElementById('profile-badges');
  badgesEl.innerHTML = BADGES.map(b => `
    <div class="badge-item ${ud.badges.includes(b.id)?'earned':'locked'}" title="${b.desc}">
      <span>${b.icon}</span><span style="font-size:0.65rem">${b.name}</span>
    </div>`).join('');
  document.getElementById('profile-modal').classList.add('open');
}
function closeProfile(e) {
  if (!e || e.target===document.getElementById('profile-modal'))
    document.getElementById('profile-modal').classList.remove('open');
}

// ===== COMMENTS & REACTIONS =====
function getCR() { try { return JSON.parse(localStorage.getItem('kb_cr') || '{}'); } catch(e) { return {}; } }
function saveCR(d) { localStorage.setItem('kb_cr', JSON.stringify(d)); }
function getLessonCR(lid) { const d=getCR(); if(!d[lid]) d[lid]={likes:[],dislikes:[],comments:[]}; return d[lid]; }

function toggleLessonReaction(lid, type) {
  if (!isLoggedIn) return;
  const d = getCR();
  if (!d[lid]) d[lid] = {likes:[],dislikes:[],comments:[]};
  const other = type==='likes'?'dislikes':'likes';
  const arr = d[lid][type];
  const idx = arr.indexOf(currentUserEmail);
  if (idx>-1) arr.splice(idx,1);
  else { arr.push(currentUserEmail); d[lid][other]=d[lid][other].filter(e=>e!==currentUserEmail); }
  saveCR(d);
  renderLessonReactions(lid);
}

function renderLessonReactions(lid) {
  const cr = getLessonCR(lid);
  const lBtn = document.getElementById('rxn-like-'+lid);
  const dBtn = document.getElementById('rxn-dis-'+lid);
  if (lBtn) { lBtn.textContent='👍 '+cr.likes.length; lBtn.classList.toggle('rxn-active', cr.likes.includes(currentUserEmail)); }
  if (dBtn) { dBtn.textContent='👎 '+cr.dislikes.length; dBtn.classList.toggle('rxn-active-red', cr.dislikes.includes(currentUserEmail)); }
}

function submitComment(lid) {
  if (!isLoggedIn) return;
  const input = document.getElementById('comment-input-'+lid);
  let text = input.value.trim();
  if (!text) return;
  if (hasBadWords(text)) { text = cleanText(text); }
  const d = getCR();
  if (!d[lid]) d[lid]={likes:[],dislikes:[],comments:[]};
  const now = new Date();
  d[lid].comments.push({ id:Date.now(), email:currentUserEmail, name:currentUserName||currentUserEmail, text, time: now.toLocaleDateString('en-GB')+' '+now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}), likes:[], dislikes:[] });
  saveCR(d);
  input.value='';
  renderComments(lid);
}

function toggleCommentReaction(lid, cid, type) {
  if (!isLoggedIn) return;
  const d = getCR();
  const c = d[lid]?.comments?.find(x=>x.id===cid);
  if (!c) return;
  const other = type==='likes'?'dislikes':'likes';
  const idx = c[type].indexOf(currentUserEmail);
  if (idx>-1) c[type].splice(idx,1);
  else { c[type].push(currentUserEmail); c[other]=c[other].filter(e=>e!==currentUserEmail); }
  saveCR(d);
  renderComments(lid);
}

function deleteComment(lid, cid) {
  const d = getCR();
  if (!d[lid]) return;
  d[lid].comments = d[lid].comments.filter(c=>c.id!==cid);
  saveCR(d);
  renderComments(lid);
}

function renderComments(lid) {
  const cr = getLessonCR(lid);
  const el = document.getElementById('comments-list-'+lid);
  if (!el) return;
  if (!cr.comments.length) { el.innerHTML='<div class="comment-empty">No comments yet. Be the first!</div>'; return; }
  el.innerHTML = cr.comments.slice().reverse().map(c => {
    const isMe = c.email===currentUserEmail;
    const isAdmin = currentUserEmail===ADMIN_EMAIL;
    return `<div class="comment-item">
      <div class="comment-header">
        <span class="comment-author">👤 ${c.name}</span>
        <span class="comment-time">${c.time}</span>
        ${isMe||isAdmin?`<button class="comment-del" onclick="deleteComment('${lid}',${c.id})">🗑</button>`:''}
      </div>
      <div class="comment-text">${c.text.replace(/</g,'&lt;')}</div>
      <div class="comment-reactions">
        <button class="comment-rxn ${c.likes.includes(currentUserEmail)?'rxn-active':''}" onclick="toggleCommentReaction('${lid}',${c.id},'likes')">👍 ${c.likes.length||''}</button>
        <button class="comment-rxn ${c.dislikes.includes(currentUserEmail)?'rxn-active-red':''}" onclick="toggleCommentReaction('${lid}',${c.id},'dislikes')">👎 ${c.dislikes.length||''}</button>
      </div>
    </div>`;
  }).join('');
}

function buildCommentsSection(lid) {
  const cr = getLessonCR(lid);
  return `
  <div class="lesson-reactions">
    <button id="rxn-like-${lid}" class="rxn-btn" onclick="toggleLessonReaction('${lid}','likes')">👍 ${cr.likes.length}</button>
    <button id="rxn-dis-${lid}" class="rxn-btn" onclick="toggleLessonReaction('${lid}','dislikes')">👎 ${cr.dislikes.length}</button>
    <span class="rxn-label">${cr.comments.length} comment${cr.comments.length!==1?'s':''}</span>
  </div>
  <div class="comments-section">
    <div class="comments-title">💬 Comments</div>
    <div class="comment-input-row">
      <input id="comment-input-${lid}" type="text" placeholder="Write a comment..." onkeydown="if(event.key==='Enter')submitComment('${lid}')"
        style="flex:1;background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:0.5rem 0.75rem;border-radius:8px;font-size:0.85rem;font-family:'Heebo',sans-serif">
      <button class="admin-send-btn" onclick="submitComment('${lid}')">Post</button>
    </div>
    <div id="comments-list-${lid}"></div>
  </div>`;
}

// ===== FRIENDS SYSTEM =====
function getFD() { try { return JSON.parse(localStorage.getItem('kb_friends') || '{}'); } catch(e) { return {}; } }
function saveFD(d) { localStorage.setItem('kb_friends', JSON.stringify(d)); }
function getFU(email) {
  const d = getFD();
  if (!d[email]) d[email] = { friends:[], sent:[], received:[] };
  return d[email];
}
function saveFU(email, fu) { const d=getFD(); d[email]=fu; saveFD(d); }

function sendFriendRequest() {
  const input = document.getElementById('friend-search-input');
  const target = input.value.trim().toLowerCase();
  input.value = '';
  if (!target) return;
  if (target === currentUserEmail) return showFriendMsg('❌ That\'s you!', 'red');

  // Check target exists
  const allEmails = [TEST_USER.email, ...PRESET_USERS.map(u=>u.email), ...getUsers().map(u=>u.email)];
  if (!allEmails.includes(target)) return showFriendMsg('❌ User not found', 'red');

  const myFU = getFU(currentUserEmail);
  if (myFU.friends.includes(target)) return showFriendMsg('✅ Already friends!', 'green');
  if (myFU.sent.includes(target)) return showFriendMsg('⏳ Request already sent', 'orange');

  // Send request
  myFU.sent.push(target);
  saveFU(currentUserEmail, myFU);
  const theirFU = getFU(target);
  if (!theirFU.received.includes(currentUserEmail)) theirFU.received.push(currentUserEmail);
  saveFU(target, theirFU);
  showFriendMsg('✅ Friend request sent!', 'green');
  renderFriendsModal();
  updateFriendBell();
}

function acceptFriend(from) {
  const myFU = getFU(currentUserEmail);
  myFU.received = myFU.received.filter(e=>e!==from);
  if (!myFU.friends.includes(from)) myFU.friends.push(from);
  saveFU(currentUserEmail, myFU);
  const theirFU = getFU(from);
  theirFU.sent = theirFU.sent.filter(e=>e!==currentUserEmail);
  if (!theirFU.friends.includes(currentUserEmail)) theirFU.friends.push(currentUserEmail);
  saveFU(from, theirFU);
  renderFriendsModal();
  updateFriendBell();
}

function declineFriend(from) {
  const myFU = getFU(currentUserEmail);
  myFU.received = myFU.received.filter(e=>e!==from);
  saveFU(currentUserEmail, myFU);
  const theirFU = getFU(from);
  theirFU.sent = theirFU.sent.filter(e=>e!==currentUserEmail);
  saveFU(from, theirFU);
  renderFriendsModal();
  updateFriendBell();
}

function removeFriend(email) {
  const myFU = getFU(currentUserEmail);
  myFU.friends = myFU.friends.filter(e=>e!==email);
  saveFU(currentUserEmail, myFU);
  const theirFU = getFU(email);
  theirFU.friends = theirFU.friends.filter(e=>e!==currentUserEmail);
  saveFU(email, theirFU);
  renderFriendsModal();
}

function updateFriendBell() {
  if (!isLoggedIn) return;
  const fu = getFU(currentUserEmail);
  const bell = document.getElementById('friend-bell');
  if (!bell) return;
  const count = fu.received.length;
  bell.textContent = count > 0 ? '🔔 ' + count : '👥';
  bell.style.color = count > 0 ? '#f39c12' : '';
}

function openFriends() {
  renderFriendsModal();
  document.getElementById('friends-modal').classList.add('open');
}
function closeFriends(e) {
  if (!e || e.target===document.getElementById('friends-modal'))
    document.getElementById('friends-modal').classList.remove('open');
}

function renderFriendsModal() {
  if (!isLoggedIn) return;
  const fu = getFU(currentUserEmail);

  // Pending requests
  const reqEl = document.getElementById('friends-requests');
  if (fu.received.length) {
    reqEl.style.display = 'block';
    reqEl.innerHTML = '<div class="friends-section-title">📬 Friend Requests</div>' +
      fu.received.map(e => `
        <div class="friend-row">
          <div class="friend-info"><span class="friend-name">👤 ${getNameForEmail(e)}</span><span class="friend-email">${e}</span></div>
          <div style="display:flex;gap:0.4rem">
            <button class="friend-accept-btn" onclick="acceptFriend('${e}')">✓ Accept</button>
            <button class="friend-decline-btn" onclick="declineFriend('${e}')">✕</button>
          </div>
        </div>`).join('');
  } else { reqEl.style.display = 'none'; }

  // Friends list
  const listEl = document.getElementById('friends-list');
  if (fu.friends.length) {
    listEl.innerHTML = '<div class="friends-section-title">👥 Friends (' + fu.friends.length + ')</div>' +
      fu.friends.map(e => {
        const ud = getUD(e);
        return `<div class="friend-row">
          <div class="friend-info">
            <span class="friend-name">👤 ${getNameForEmail(e)}</span>
            <span class="friend-email">⚡ ${ud.xp||0} XP · 🔥 ${ud.streak||0} streak · 🏅 ${(ud.badges||[]).length} badges</span>
          </div>
          <button class="friend-decline-btn" onclick="removeFriend('${e}')" title="Remove">✕</button>
        </div>`;
      }).join('');
  } else {
    listEl.innerHTML = '<div style="text-align:center;color:var(--muted);padding:1.5rem;font-size:0.85rem">No friends yet. Search by email above!</div>';
  }

  // Sent requests
  const sentEl = document.getElementById('friends-sent');
  if (fu.sent.length) {
    sentEl.style.display = 'block';
    sentEl.innerHTML = '<div class="friends-section-title" style="color:var(--muted)">⏳ Pending (' + fu.sent.length + ')</div>' +
      fu.sent.map(e => `<div style="font-size:0.8rem;color:var(--muted);padding:0.3rem 0">${getNameForEmail(e)} (${e})</div>`).join('');
  } else { sentEl.style.display = 'none'; }
}

function showFriendMsg(msg, color) {
  const el = document.getElementById('friend-msg');
  if (!el) return;
  el.textContent = msg;
  el.style.color = color === 'red' ? 'var(--red)' : color === 'green' ? 'var(--green)' : '#f39c12';
  el.style.opacity = '1';
  clearTimeout(el._t);
  el._t = setTimeout(() => el.style.opacity = '0', 2500);
}

// ===== CHATBOTS =====
let geminiApiKey = localStorage.getItem('gemini_key') || '';
function saveGeminiKey(v) { geminiApiKey = v; localStorage.setItem('gemini_key', v); }

// Show admin button after login
function initChatWidgets() {
  const adminBtn = document.getElementById('admin-nav-btn');
  if (!adminBtn) return;
  adminBtn.style.display = (isLoggedIn && currentUserEmail === ADMIN_EMAIL) ? 'inline-flex' : 'none';
}

function openAdminPanel() {
  document.getElementById('admin-panel-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  const ki = document.getElementById('gemini-key-input');
  if (ki && geminiApiKey) ki.value = geminiApiKey;
  const li = document.getElementById('ai-lang');
  if (li) li.textContent = currentLang.toUpperCase();
  if (!document.getElementById('admin-chat-messages').children.length) {
    addChatMsg('bot', '🛠️ Admin AI ready!\n\nI know your full MoneyMind codebase (app.js, index.html, style.css).\n\nAsk me to:\n• Fix a bug\n• Add a feature\n• Explain any code\n• Improve design', 'admin-chat-messages');
  }
}
function closeAdminPanel() {
  document.getElementById('admin-panel-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function switchAdminTab(tab, btn) {
  document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('admin-tab-' + tab).style.display = 'flex';
  if (btn) btn.classList.add('active');
  if (tab === 'users') renderAdminUsers();
  if (tab === 'notify') renderAdminNotifs();
  if (tab === 'stats') renderAdminStats();
}
function getAllUsersForAdmin() {
  const stored = getUsers();
  const presetEmails = stored.map(u => u.email);
  const presetMerged = PRESET_USERS.filter(u => !presetEmails.includes(u.email))
    .map(u => ({ ...u, preset: true, joinedAt: 'Built-in' }));
  return [...presetMerged, ...stored];
}
// ===== NOTIFICATIONS =====
function getNotifs() {
  try { return JSON.parse(localStorage.getItem('kb_notifs') || '[]'); } catch(e) { return []; }
}
function saveNotifs(arr) { localStorage.setItem('kb_notifs', JSON.stringify(arr)); }

function sendNotification() {
  const text = document.getElementById('notif-input').value.trim();
  if (!text) return;
  const notifs = getNotifs();
  const now = new Date();
  const time = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-GB', {hour:'2-digit',minute:'2-digit'});
  notifs.unshift({ text, id: Date.now(), time });
  saveNotifs(notifs);
  document.getElementById('notif-input').value = '';
  renderAdminNotifs();
  showNotifBanners();
}
function deleteNotif(id) {
  const notifs = getNotifs().filter(n => n.id !== id);
  saveNotifs(notifs);
  renderAdminNotifs();
  showNotifBanners();
}
function renderAdminNotifs() {
  const notifs = getNotifs();
  const list = document.getElementById('notif-list');
  const count = document.getElementById('notif-count');
  if (count) count.textContent = notifs.length + ' active';
  if (!list) return;
  if (notifs.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:#555;padding:2rem;font-size:0.85rem">No active notifications.</div>';
    return;
  }
  list.innerHTML = notifs.map(n => `
    <div class="admin-user-row">
      <div class="admin-user-info">
        <span class="admin-user-name">${n.text}</span>
        <span class="admin-user-date">📅 ${n.time}</span>
      </div>
      <button class="admin-user-delete" onclick="deleteNotif(${n.id})">🗑</button>
    </div>
  `).join('');
}
function showNotifBanners() {
  const notifs = getNotifs();
  const dismissed = JSON.parse(localStorage.getItem('kb_notifs_dismissed') || '[]');
  const active = notifs.find(n => !dismissed.includes(n.id));
  const banner = document.getElementById('notif-banner');
  if (active) {
    document.getElementById('notif-banner-text').textContent = active.text;
    banner.style.display = 'flex';
    banner._currentId = active.id;
  } else {
    banner.style.display = 'none';
  }
}
function dismissNotification() {
  const banner = document.getElementById('notif-banner');
  const id = banner._currentId;
  if (id) {
    const dismissed = JSON.parse(localStorage.getItem('kb_notifs_dismissed') || '[]');
    dismissed.push(id);
    localStorage.setItem('kb_notifs_dismissed', JSON.stringify(dismissed));
  }
  showNotifBanners();
}
// showNotifBanners() called in initApp()

function openMobilePreview() {
  const base = window.location.href.split('?')[0];
  window.open(base + '?preview=1', 'mobile_preview', 'width=390,height=844,resizable=yes,scrollbars=yes');
}

function renderAdminStats() {
  const allUsers = getAllUsersForAdmin();
  const gd = getGD();
  const cr = getCR();
  const allLessons = [...stocksLessons, ...dropLessons];

  // --- Stats cards ---
  const validSet = new Set([ADMIN_EMAIL, ...PRESET_USERS.map(u=>u.email), ...getUsers().map(u=>u.email)]);
  const totalComments = Object.values(cr).reduce((s,l)=>s+(l.comments?.length||0),0);
  const totalXP = Object.entries(gd).filter(([e])=>validSet.has(e)).reduce((s,[,u])=>s+(u.xp||0),0);
  const totalLessonsDone = Object.entries(gd).filter(([e])=>validSet.has(e)).reduce((s,[,u])=>s+(u.lessons?.length||0),0);
  document.getElementById('stats-cards').innerHTML = `
    <div class="stats-card"><div class="stats-num">${allUsers.length}</div><div class="stats-label">👥 Users</div></div>
    <div class="stats-card"><div class="stats-num">${totalXP}</div><div class="stats-label">⚡ Total XP</div></div>
    <div class="stats-card"><div class="stats-num">${totalLessonsDone}</div><div class="stats-label">📖 Lessons Done</div></div>
    <div class="stats-card"><div class="stats-num">${totalComments}</div><div class="stats-label">💬 Comments</div></div>`;

  // --- Popular lessons ---
  const lessonStats = allLessons.map(l => {
    const lcr = cr[l.id] || {};
    return { id:l.id, title:getLF(l,'title'), icon:l.icon, likes:(lcr.likes||[]).length, comments:(lcr.comments||[]).length };
  }).sort((a,b)=>(b.likes+b.comments)-(a.likes+a.comments)).slice(0,5);
  document.getElementById('stats-lessons').innerHTML = lessonStats.length ?
    lessonStats.map(l=>`
      <div class="stats-row">
        <span>${l.icon} ${l.title}</span>
        <span style="display:flex;gap:0.75rem;font-size:0.8rem;color:var(--muted)">
          <span>👍 ${l.likes}</span><span>💬 ${l.comments}</span>
        </span>
      </div>`).join('') : '<div class="stats-empty">No lesson activity yet</div>';

  // --- Most active users (only existing users) ---
  const validEmails = new Set([ADMIN_EMAIL, ...PRESET_USERS.map(u=>u.email), ...getUsers().map(u=>u.email)]);
  const userStats = Object.entries(gd)
    .filter(([email])=>validEmails.has(email))
    .map(([email,u])=>({email, name:getNameForEmail(email), xp:u.xp||0, lessons:(u.lessons||[]).length, streak:u.streak||0}))
    .sort((a,b)=>b.xp-a.xp).slice(0,5);
  document.getElementById('stats-users').innerHTML = userStats.length ?
    userStats.map(u=>`
      <div class="stats-row">
        <span>👤 ${u.name}</span>
        <span style="display:flex;gap:0.75rem;font-size:0.8rem;color:var(--muted)">
          <span>⚡${u.xp}</span><span>📖${u.lessons}</span><span>🔥${u.streak}</span>
        </span>
      </div>`).join('') : '<div class="stats-empty">No user activity yet</div>';

  // --- Recent comments ---
  const allComments = [];
  Object.entries(cr).forEach(([lid,data])=>{
    const lesson = allLessons.find(l=>l.id===lid);
    (data.comments||[]).forEach(c=>allComments.push({...c, lessonTitle: lesson?getLF(lesson,'title'):lid}));
  });
  allComments.sort((a,b)=>b.id-a.id);
  document.getElementById('stats-comments').innerHTML = allComments.length ?
    allComments.slice(0,8).map(c=>`
      <div class="stats-row" style="flex-direction:column;align-items:flex-start;gap:0.2rem">
        <div style="display:flex;justify-content:space-between;width:100%">
          <span style="font-weight:600;font-size:0.82rem">👤 ${c.name}</span>
          <span style="font-size:0.72rem;color:var(--muted)">${c.lessonTitle} · ${c.time}</span>
        </div>
        <div style="font-size:0.83rem;color:var(--muted)">${c.text.slice(0,80)}${c.text.length>80?'...':''}</div>
      </div>`).join('') : '<div class="stats-empty">No comments yet</div>';
}

function renderAdminUsers() {
  const users = getAllUsersForAdmin();
  const list = document.getElementById('admin-users-list');
  const count = document.getElementById('admin-user-count');
  if (count) count.textContent = users.length + ' user' + (users.length !== 1 ? 's' : '');
  if (!list) return;
  if (users.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:#555;padding:2rem;font-size:0.85rem">No registered users yet.</div>';
    return;
  }
  list.innerHTML = users.map((u, i) => {
    const bpd = JSON.parse(localStorage.getItem('kb_bp')||'{}');
    const hasPlus = u.email === ADMIN_EMAIL || (bpd[u.email] && bpd[u.email].has_plus);
    const reports = getReportCount(u.email);
    const reportBadge = reports > 0
      ? `<span class="admin-report-badge" onclick="adminViewReports('${u.email}')" title="Click to view reports">🚨 ${reports} report${reports>1?'s':''}</span>`
      : '';
    return `<div class="admin-user-row">
      <div class="admin-user-info">
        <span class="admin-user-name">👤 ${u.name || u.email} ${hasPlus ? '<span class="bp-plus-mini">⭐ PLUS</span>' : ''} ${reportBadge}</span>
        <span class="admin-user-email">${u.email}</span>
        <span class="admin-user-date">📅 ${u.joinedAt || 'Registered user'}</span>
      </div>
      <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap">
        ${!hasPlus ? `<button class="admin-grant-plus-btn" onclick="adminGrantPlus('${u.email}')">⭐ Plus</button>` : ''}
        ${u.preset ? '<span style="font-size:0.7rem;color:#666;padding:0.2rem 0.5rem;border:1px solid #333;border-radius:4px">built-in</span>' : `<button class="admin-user-delete" onclick="deleteUser(${i})">🗑</button>`}
      </div>
    </div>`;
  }).join('');
}
function adminCreateUser() {
  const name = document.getElementById('cu-name').value.trim();
  const email = document.getElementById('cu-email').value.trim();
  const pass = document.getElementById('cu-pass').value.trim();
  if (!name || !email || !pass) { alert('Fill in all fields'); return; }
  if (getUsers().find(u => u.email === email)) { alert('User already exists'); return; }
  saveUser(email, pass, name);
  document.getElementById('cu-name').value = '';
  document.getElementById('cu-email').value = '';
  document.getElementById('cu-pass').value = '';
  renderAdminUsers();
}
// ── Reports system ──────────────────────────────────────────────────
function getReports() {
  try { return JSON.parse(localStorage.getItem('kb_reports') || '{}'); } catch(e) { return {}; }
}
function saveReports(r) { localStorage.setItem('kb_reports', JSON.stringify(r)); }
function reportUser(targetEmail) {
  if (!isLoggedIn) return;
  if (targetEmail === currentUserEmail) { alert('You cannot report yourself.'); return; }
  const reason = prompt('Why are you reporting ' + targetEmail + '?\n(e.g. spam, harassment, cheating)');
  if (!reason) return;
  const r = getReports();
  if (!r[targetEmail]) r[targetEmail] = { count: 0, reports: [] };
  r[targetEmail].count++;
  r[targetEmail].reports.push({ by: currentUserEmail, reason, time: new Date().toLocaleString() });
  saveReports(r);
  alert('Report submitted. Thank you.');
}
function getReportCount(email) {
  const r = getReports();
  return (r[email] && r[email].count) || 0;
}

// ── Profanity filter ─────────────────────────────────────────────────
const BAD_WORDS = ['fuck','shit','bitch','ass','cunt','dick','pussy','bastard','whore','nigger','faggot',
  'כוס','זין','שרמוטה','מניאק','חרא','בן זונה','מזדיין','נזדיין','בת זונה'];
function cleanText(text) {
  let t = text;
  BAD_WORDS.forEach(w => {
    const re = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'gi');
    t = t.replace(re, '*'.repeat(w.length));
  });
  return t;
}
function hasBadWords(text) {
  return BAD_WORDS.some(w => new RegExp(w,'gi').test(text));
}

function deleteUser(index) {
  const users = getAllUsersForAdmin();
  const u = users[index];
  if (u.preset) return;
  if (!confirm('Delete user ' + (u.name || u.email) + '?')) return;
  const stored = getUsers();
  const si = stored.findIndex(s => s.email === u.email);
  if (si !== -1) stored.splice(si, 1);
  localStorage.setItem('kb_users', JSON.stringify(stored));
  renderAdminUsers();
}
function adminViewReports(email) {
  const r = getReports();
  const data = r[email];
  if (!data || !data.reports.length) { alert('No reports for ' + email); return; }
  const list = data.reports.map(x => '• ' + x.by + ': "' + x.reason + '" (' + x.time + ')').join('\n');
  if (confirm('🚨 ' + data.count + ' report(s) for ' + email + ':\n\n' + list + '\n\nClick OK to clear all reports.')) {
    delete r[email];
    saveReports(r);
    renderAdminUsers();
  }
}
function toggleAdminChat() { openAdminPanel(); }

function addChatMsg(role, text, containerId) {
  const el = document.createElement('div');
  el.className = 'chat-msg ' + role;
  el.textContent = text;
  const container = document.getElementById(containerId);
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
  return el;
}

// Admin chat uses Gemini API
async function callGemini(messages, apiKey) {
  const key = apiKey || geminiApiKey;
  if (!key) return '🔑 Paste your Gemini API key above first.\n\nGet a FREE key at: aistudio.google.com/apikey\n(No credit card needed!)';
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const body = { contents: messages.filter(m=>m.role!=='system').map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })) };
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const data = await res.json();
    if (data.error) return '❌ Error: ' + data.error.message + '\n\nCheck your API key is valid.';
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
  } catch(e) { return '❌ Connection error. Check your API key and try again.'; }
}

const adminHistory = [
  { role: 'user', content: `You are an expert web developer AI assistant for the MoneyMind financial education platform. The app is a pure HTML/CSS/JS single-page app with:
- app.js: all JavaScript logic (~2500 lines)
- index.html: the HTML structure
- style.css: all styling
Key features: i18n system with t(key), 6 languages (en/he/es/fr/ar/ru), lesson cards with getLF(), stock/dropshipping games, quiz, calculator, auth system, payment modal, two chatbots.
When the admin asks for changes, provide the EXACT code snippet to change with clear instructions. Be specific about which file, what to find, and what to replace. Keep answers concise and actionable.` },
  { role: 'assistant', content: 'Admin AI ready.' }
];

async function sendAdminChat() {
  const input = document.getElementById('admin-chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addChatMsg('user', text, 'admin-chat-messages');
  const typing = addChatMsg('bot typing', '⏳ Thinking...', 'admin-chat-messages');
  adminHistory.push({ role: 'user', content: text });
  const reply = await callGemini(adminHistory);
  adminHistory.push({ role: 'assistant', content: reply });
  typing.remove();
  addChatMsg('bot', reply, 'admin-chat-messages');
}

// ===== CONFETTI =====
function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;z-index:99990;pointer-events:none';
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const pieces = Array.from({length:120}, () => ({
    x: Math.random()*canvas.width, y: -10,
    w: 8+Math.random()*8, h: 5+Math.random()*5,
    color: ['#a78bfa','#f39c12','#00e096','#e74c3c','#3498db','#f1c40f'][Math.floor(Math.random()*6)],
    vx: (Math.random()-0.5)*4, vy: 2+Math.random()*4,
    rot: Math.random()*360, rotV: (Math.random()-0.5)*8
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotV; p.vy+=0.05;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    if (++frame < 160) requestAnimationFrame(draw);
    else canvas.remove();
  }
  draw();
}

// ===== SOUND EFFECTS =====
let _sfxOn = localStorage.getItem('kb_sfx') !== 'off';
let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return _audioCtx;
}
function playTone(freq, type='sine', dur=0.15, vol=0.15) {
  if (!_sfxOn) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type; osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+dur);
    osc.start(); osc.stop(ctx.currentTime+dur);
  } catch(e){}
}
function sfxXP()      { playTone(880,'sine',0.12,0.1); setTimeout(()=>playTone(1100,'sine',0.12,0.1),100); }
function sfxBadge()   { [500,700,900,1200].forEach((f,i)=>setTimeout(()=>playTone(f,'sine',0.18,0.12),i*80)); }
function sfxCorrect() { playTone(660,'sine',0.1,0.12); setTimeout(()=>playTone(880,'sine',0.15,0.12),100); }
function sfxWrong()   { playTone(220,'sawtooth',0.2,0.18); }
function sfxClick()   { playTone(440,'sine',0.06,0.08); }
function toggleSFX() {
  _sfxOn = !_sfxOn;
  localStorage.setItem('kb_sfx', _sfxOn ? 'on' : 'off');
  const btn = document.getElementById('sfx-toggle');
  if (btn) btn.textContent = _sfxOn ? 'ON' : 'OFF';
  if (_sfxOn) sfxClick();
}

// ===== BACKGROUND MUSIC =====
let _musicOn = false;
let _musicNodes = null;
function startMusic() {
  try {
    const ctx = getAudioCtx();
    const master = ctx.createGain(); master.gain.value = 0.06;
    master.connect(ctx.destination);
    const notes = [261.6, 293.7, 329.6, 349.2, 392, 440, 493.9];
    const nodes = [];
    function scheduleNote(t) {
      const freq = notes[Math.floor(Math.random()*notes.length)] * (Math.random()>0.7?2:1);
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.connect(g); g.connect(master);
      osc.type = 'sine'; osc.frequency.value = freq;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.3, t+0.3);
      g.gain.linearRampToValueAtTime(0, t+1.2);
      osc.start(t); osc.stop(t+1.5);
      nodes.push(osc);
    }
    let t = ctx.currentTime;
    for (let i=0; i<60; i++) { scheduleNote(t); t += 0.6+Math.random()*1.2; }
    _musicNodes = { master, ctx };
    _musicNodes._restart = setTimeout(startMusic, 60000);
  } catch(e){}
}
function stopMusic() {
  if (_musicNodes) {
    try { _musicNodes.master.gain.setValueAtTime(0, _musicNodes.ctx.currentTime); } catch(e){}
    clearTimeout(_musicNodes._restart);
    _musicNodes = null;
  }
}
function toggleMusic() {
  _musicOn = !_musicOn;
  localStorage.setItem('kb_music', _musicOn ? 'on' : 'off');
  const navBtn = document.getElementById('music-nav-btn');
  const modalBtn = document.getElementById('music-toggle');
  const volRow = document.getElementById('music-vol-row');
  if (navBtn) navBtn.style.opacity = _musicOn ? '1' : '0.5';
  if (modalBtn) modalBtn.textContent = _musicOn ? 'ON' : 'OFF';
  if (volRow) volRow.style.display = _musicOn ? 'flex' : 'none';
  if (_musicOn) startMusic(); else stopMusic();
}
function setMusicVolume(val) {
  localStorage.setItem('kb_music_vol', val);
  if (_musicNodes && _musicNodes.master) {
    _musicNodes.master.gain.value = val / 100 * 0.2;
  }
}

// ===== XP ANIMATION =====
function animateXP(el, from, to) {
  if (!el) return;
  const dur = 600, start = performance.now();
  function step(now) {
    const p = Math.min((now-start)/dur, 1);
    el.textContent = Math.round(from + (to-from)*p);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ===== USER SETTINGS =====
function changePassword() {
  const oldPw = document.getElementById('old-pw').value;
  const newPw = document.getElementById('new-pw').value;
  const msg = document.getElementById('pw-msg');
  if (!oldPw || !newPw) { msg.style.color='#e74c3c'; msg.textContent='Fill in both fields'; return; }
  if (!checkCredentials(currentUserEmail, oldPw)) { msg.style.color='#e74c3c'; msg.textContent='Wrong current password'; return; }
  if (newPw.length < 4) { msg.style.color='#e74c3c'; msg.textContent='Password too short (min 4)'; return; }
  const users = getUsers();
  const u = users.find(u => u.email === currentUserEmail);
  if (u) { u.password = newPw; localStorage.setItem('kb_users', JSON.stringify(users)); }
  if (localStorage.getItem('kb_saved_email') === currentUserEmail) localStorage.setItem('kb_saved_pw', newPw);
  msg.style.color='#00e096'; msg.textContent='Password changed!';
  document.getElementById('old-pw').value = '';
  document.getElementById('new-pw').value = '';
  sfxCorrect();
}

function deleteOwnAccount() {
  if (!confirm('Delete your account? This cannot be undone.')) return;
  const users = getUsers().filter(u => u.email !== currentUserEmail);
  localStorage.setItem('kb_users', JSON.stringify(users));
  localStorage.removeItem('kb_saved_email'); localStorage.removeItem('kb_saved_pw');
  closeProfile();
  handleLogout();
}

// ===== CUSTOM CURSOR =====
let _customCursorOn = localStorage.getItem('kb_cursor') !== 'off';

function toggleCursor() {
  _customCursorOn = !_customCursorOn;
  localStorage.setItem('kb_cursor', _customCursorOn ? 'on' : 'off');
  document.body.classList.toggle('custom-cursor-active', _customCursorOn);
  const btn = document.getElementById('cursor-toggle-btn');
  if (btn) btn.textContent = _customCursorOn ? '🖱️' : '➜';
}

(function() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mx = -200, my = -200;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mouseover', e => {
    if (e.target.matches('a,button,input,select,textarea,[onclick]')) ring.classList.add('expand');
    else ring.classList.remove('expand');
  });
  function animCursor() {
    if (_customCursorOn) {
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
      ring.style.left = mx + 'px'; ring.style.top = my + 'px';
      dot.style.opacity = '1'; ring.style.opacity = '1';
    } else {
      dot.style.opacity = '0'; ring.style.opacity = '0';
    }
    requestAnimationFrame(animCursor);
  }
  if (_customCursorOn) document.body.classList.add('custom-cursor-active');
  animCursor();
})();

// ===== APP INIT (must be last — all const/let declarations must exist first) =====
function initApp() {
  renderQuiz();
  setLanguage(currentLang);
  showNotifBanners();
  // Apply saved cursor button icon
  const _cursorBtn = document.getElementById('cursor-toggle-btn');
  if (_cursorBtn) _cursorBtn.textContent = _customCursorOn ? '🖱️' : '➜';
  // SFX toggle state
  const sfxBtn = document.getElementById('sfx-toggle');
  if (sfxBtn) sfxBtn.textContent = _sfxOn ? 'ON' : 'OFF';
  // Music button opacity
  const musicNavBtn = document.getElementById('music-nav-btn');
  if (musicNavBtn) musicNavBtn.style.opacity = '0.5';
  if (localStorage.getItem('kb_music') === 'on') {
    _musicOn = true; startMusic();
    if (musicNavBtn) musicNavBtn.style.opacity='1';
    const volRow = document.getElementById('music-vol-row');
    const volEl = document.getElementById('music-vol');
    const savedVol = localStorage.getItem('kb_music_vol') || '30';
    if (volEl) volEl.value = savedVol;
    if (volRow) volRow.style.display = 'flex';
    const modalBtn = document.getElementById('music-toggle');
    if (modalBtn) modalBtn.textContent = 'ON';
  }
  // Apply theme icon
  const _themeBtn = document.getElementById('theme-btn');
  if (_themeBtn) _themeBtn.textContent = localStorage.getItem('theme') === 'light' ? '☀️' : '🌙';
  if (isLoggedIn) {
    updateNavForLoggedIn();
    const lastSection = localStorage.getItem('active_section') || 'stocks';
    const secEl = document.getElementById('section-' + lastSection);
    if (secEl) secEl.style.display = 'block';
    const lastNavId = lastSection === 'calculator' ? 'nav-calc' : 'nav-' + lastSection;
    const lastNavEl = document.getElementById(lastNavId);
    if (lastNavEl) lastNavEl.classList.add('nav-active');
    setTimeout(initChatWidgets, 100);
  }
}
initApp();

// ===== LOADING SCREEN =====
setTimeout(() => {
  const ls = document.getElementById('loading-screen');
  if (ls) ls.classList.add('hide');
}, 1800);

// ===== PARTICLES =====
(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 55; i++) particles.push({
    x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
    r: Math.random() * 1.8 + 0.4, vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
    a: Math.random()
  });
  function draw() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(167,139,250,${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ===== SCROLL ANIMATIONS =====
(function() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  function observeCards() {
    document.querySelectorAll('.lesson-card:not(.reveal), .stat:not(.reveal)').forEach(el => {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
  observeCards();
  // Re-observe after section switch
  const sectionObserver = new MutationObserver(observeCards);
  document.querySelectorAll('section').forEach(s => sectionObserver.observe(s, { childList: true, subtree: true }));
})();


// ===== ONBOARDING =====
window.obStep = 0;
function startOnboarding() {
  if (localStorage.getItem('mm_onboarded')) return;
  const el = document.getElementById('onboarding-overlay');
  if (el) el.style.display = 'flex';
  window.obStep = 0;
  updateObStep();
}
function updateObStep() {
  for (var i = 0; i < 4; i++) {
    var s = document.getElementById('ob-step-'+i);
    var d = document.getElementById('od-'+i);
    if (s) s.style.display = i === window.obStep ? 'block' : 'none';
    if (d) { d.classList.remove('active'); if (i === window.obStep) d.classList.add('active'); }
  }
  var btn = document.getElementById('ob-next-btn');
  if (btn) btn.textContent = window.obStep === 3 ? 'Get Started 🚀' : 'Next →';
}
function nextOnboarding() {
  if (window.obStep < 3) { window.obStep++; updateObStep(); }
  else closeOnboarding();
}
function closeOnboarding() {
  localStorage.setItem('mm_onboarded', '1');
  var el = document.getElementById('onboarding-overlay');
  if (el) el.style.display = 'none';
}
