/* ============================================================
   AG Beacon — Download Page
   Localization (Urdu RTL primary / English LTR) + Theme toggle
   ============================================================ */

const I18N = {
  ur: {
    title: 'اے جی بیکن — ونڈوز کے لیے ڈاؤن لوڈ',
    nav: { features: 'خصوصیات', requirements: 'تقاضے', download: 'ڈاؤن لوڈ' },
    badge: 'v0.0.1 · ونڈوز ریلیز',
    hero: {
      title: 'اپنے نیٹ ورک کے ہر ڈیوائس کو دریافت کریں۔',
      sub: 'اے جی بیکن ایک طاقتور PyQt6 ڈیسک ٹاپ ٹول ہے جو آپ کے لوکل نیٹ ورک پر موجود ڈیوائسز کو اسکین، مانیٹر اور مینیج کرتا ہے — مکمل اردو اور انگریزی سپورٹ کے ساتھ۔',
      download: 'انسٹالر ڈاؤن لوڈ کریں (.exe)',
      meta: { os: 'ونڈوز 10 / 11 (64-بٹ)', type: 'انسٹالر', version: 'v0.0.1' }
    },
    notice: {
      strong: 'فی الحال صرف ونڈوز کے لیے۔',
      text: 'لینکس اور میک او ایس بلڈز ابھی دستیاب نہیں — مستقبل کی ریلیز کے لیے منتظر رہیں۔'
    },
    preview: {
      windowTitle: 'اے جی بیکن — ڈیش بورڈ',
      langName: 'اردو',
      themeName: { dark: 'ڈارک تھیم', light: 'لائٹ تھیم' }
    },
    features: {
      title: 'اپنے نیٹ ورک کو دیکھنے کے لیے ہر ضروری چیز',
      sub: 'دریافت سے لے کر فائر وال رولز تک — اے جی بیکن آپ کو مکمل تصویر دیتا ہے کہ آپ کے LAN پر کون ہے۔',
      items: [
        { title: 'ڈیوائس ڈسکوری', desc: 'اپنے لوکل سب نیٹ کو اسکین کریں اور فوری طور پر ڈیوائسز تلاش کریں — آئی پی، ہوسٹ نیم، لائیو اسٹیٹس اور لیٹینسی کے ساتھ۔' },
        { title: 'سروس ڈیٹیکشن', desc: 'دریافت شدہ ڈیوائسز پر چلنے والی سروسز (HTTP، SSH، SMB اور مزید) کو خودکار طریقے سے ڈیٹیکٹ کریں۔' },
        { title: 'قابل اعتماد ڈیوائسز اور لیبلز', desc: 'ڈیوائسز کو قابل اعتماد نشان زد کریں، دوستانہ لیبل تفویض کریں، اور نامعلوم نئے آنے والوں پر نظر رکھیں۔' },
        { title: 'نیٹ ورک ایونٹس لاگ', desc: 'حالیہ سرگرمی — آمد، روانگی اور اسٹیٹس تبدیلیاں — ایک نظر میں دیکھیں۔' },
        { title: 'روٹر کنٹرول (SSH)', desc: 'اپنے روٹر کو ری اسٹارٹ کریں، فیکٹری ری سیٹ کریں، اور سونے کے وقت نیٹ ورک بلاکنگ شیڈول کریں — سب SSH کے ذریعے۔' },
        { title: 'فائر وال اور بینڈوڈتھ', desc: 'فائر وال رولز اور بینڈوڈتھ حدود کنفیگر کریں جہاں آپ کا ہوسٹ یا روٹر مطلوبہ ٹولز کو سپورٹ کرتا ہو۔' },
        { title: 'اردو اور انگریزی انٹرفیس', desc: 'مکمل دو لسانی انٹرفیس — کسی بھی وقت اردو اور انگریزی کے درمیان سوئچ کریں، ری اسٹارٹ کی ضرورت نہیں۔' },
        { title: 'ڈارک اور لائٹ تھیمز', desc: 'وہ لُک منتخب کریں جو آپ کے ورک اسپیس کے مطابق ہو۔ تمام سیٹنگز، اسکینز اور سب نیٹس لوکل طور پر محفوظ ہوتے ہیں۔' }
      ]
    },
    requirements: {
      title: 'سسٹم کی ضروریات',
      sub: 'انسٹال کرنے سے پہلے یقینی بنائیں کہ آپ کی مشین کم از کم تقاضے پوری کرتی ہے۔',
      groups: [
        { title: 'آپریٹنگ سسٹم', items: ['ونڈوز 10 (بلڈ 1809+)', 'ونڈوز 11', 'صرف 64-بٹ'] },
        { title: 'ہارڈ ویئر', items: ['ڈوئل کور CPU', '4 GB ریم (8 GB تجویز کردہ)', '200 MB خالی ڈسک اسپیس'] },
        { title: 'نیٹ ورک', items: ['فعال LAN / Wi-Fi کنکشن', 'روٹر تک SSH رسائی (اختیاری)', 'فائر وال رولز کے لیے ایڈمن حقوق (اختیاری)'] },
        { title: 'دیگر', items: ['پائتھون انسٹالیشن کی ضرورت نہیں', 'بلڈ شدہ PyQt6 رن ٹائم', 'انٹرنیٹ صرف اپڈیٹس کے لیے'] }
      ]
    },
    footer: {
      download: 'ڈاؤن لوڈ',
      features: 'خصوصیات',
      requirements: 'تقاضے',
      support: 'سپورٹ',
      copyright: '© 2025 اے جی بیکن · v0.0.1 · ونڈوز کے لیے بنایا گیا۔ جملہ حقوق محفوظ ہیں۔'
    }
  },

  en: {
    title: 'AG Beacon — Download for Windows',
    nav: { features: 'Features', requirements: 'Requirements', download: 'Download' },
    badge: 'v0.0.1 · Windows Release',
    hero: {
      title: 'Discover every device on your network.',
      sub: 'AG Beacon is a powerful PyQt6 desktop tool for Windows that scans, monitors, and manages devices on your local network — with full English & Urdu support.',
      download: 'Download Installer (.exe)',
      meta: { os: 'Windows 10 / 11 (64-bit)', type: 'Installer', version: 'v0.0.1' }
    },
    notice: {
      strong: 'Currently Windows-only.',
      text: 'Linux & macOS builds are not available yet — stay tuned for future releases.'
    },
    preview: {
      windowTitle: 'AG Beacon — Dashboard',
      langName: 'English',
      themeName: { dark: 'Dark Theme', light: 'Light Theme' }
    },
    features: {
      title: 'Everything you need to see your network',
      sub: "From discovery to firewall rules — AG Beacon gives you a complete picture of who's on your LAN.",
      items: [
        { title: 'Device Discovery', desc: 'Scan your local subnet to instantly find devices with IP, hostname, live status, and round-trip latency.' },
        { title: 'Service Detection', desc: 'Automatically detect running services (HTTP, SSH, SMB, and more) on discovered devices.' },
        { title: 'Trusted Devices & Labels', desc: 'Mark devices as trusted, assign friendly labels, and keep an eye on unknown newcomers.' },
        { title: 'Network Events Log', desc: 'Review recent activity — arrivals, departures, and status changes — at a glance.' },
        { title: 'Router Control (SSH)', desc: 'Restart your router, perform factory resets, and schedule bedtime network blocking — all over SSH.' },
        { title: 'Firewall & Bandwidth', desc: 'Configure firewall rules and bandwidth limits where your host or router supports the required tools.' },
        { title: 'English & Urdu UI', desc: 'Full bilingual interface — switch between English and Urdu any time, no restart required.' },
        { title: 'Dark & Light Themes', desc: 'Choose the look that fits your workspace. All settings, scans, and subnets are saved locally.' }
      ]
    },
    requirements: {
      title: 'System Requirements',
      sub: 'Make sure your machine meets the minimum before installing.',
      groups: [
        { title: 'OS', items: ['Windows 10 (build 1809+)', 'Windows 11', '64-bit only'] },
        { title: 'Hardware', items: ['Dual-core CPU', '4 GB RAM (8 GB recommended)', '200 MB free disk space'] },
        { title: 'Network', items: ['Active LAN / Wi-Fi connection', 'SSH access to router (optional)', 'Admin rights for firewall rules (optional)'] },
        { title: 'Other', items: ['No Python installation needed', 'Bundled PyQt6 runtime', 'Internet only for updates'] }
      ]
    },
    footer: {
      download: 'Download',
      features: 'Features',
      requirements: 'Requirements',
      support: 'Support',
      copyright: '© 2025 AG Beacon · v0.0.1 · Built for Windows. All rights reserved.'
    }
  }
};

/* ---------- State ---------- */
const state = {
  lang: localStorage.getItem('agbeacon-lang') || 'ur',   // ur = default
  theme: localStorage.getItem('agbeacon-theme') || 'dark' // dark = default
};

/* ---------- Helpers ---------- */
function t(path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), I18N[state.lang]);
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el && value != null) el.textContent = value;
}

function setAllI18n() {
  const dict = I18N[state.lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), dict);
    if (val != null) el.textContent = val;
  });

  document.title = dict.title;
}

/* ---------- Apply Theme ---------- */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

/* ---------- Apply Language ---------- */
function applyLang() {
  const r = document.documentElement;
  r.setAttribute('lang', state.lang);
  r.setAttribute('dir', state.lang === 'ur' ? 'rtl' : 'ltr');
}

/* ---------- Preview Image ---------- */
function updatePreview() {
  const langName = state.lang === 'ur' ? 'Urdu' : 'English';
  const themeName = state.theme === 'dark' ? 'Dark theme' : 'Light theme';
  const path = `assets/Dashboard/${langName} + ${themeName}.png`;

  const img = document.getElementById('previewImg');
  if (img) {
    img.style.opacity = '0';
    const next = new Image();
    next.onload = () => {
      img.src = path;
      img.onload = () => { img.style.opacity = '1'; };
    };
    next.onerror = () => {
      img.src = path;
      img.style.opacity = '1';
    };
    next.src = path;
  }

  // Caption
  const cap = document.getElementById('previewCaption');
  if (cap) {
    const dict = I18N[state.lang];
    cap.textContent = `${dict.preview.langName} · ${dict.preview.themeName[state.theme]}`;
  }
}

/* ---------- Update toggle labels ---------- */
function updateToggles() {
  // Language button shows the OTHER language
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = state.lang === 'ur' ? 'English' : 'اردو';
  }

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.setAttribute('aria-label',
      state.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
    themeBtn.title = state.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  }
}

/* ---------- Master render ---------- */
function render() {
  applyTheme();
  applyLang();
  setAllI18n();
  updateToggles();
  updatePreview();
}

/* ---------- Event handlers ---------- */
function setupToggles() {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('agbeacon-theme', state.theme);
      render();
    });
  }

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      state.lang = state.lang === 'ur' ? 'en' : 'ur';
      localStorage.setItem('agbeacon-lang', state.lang);
      render();
    });
  }
}

/* ---------- Smooth scroll for hash links ---------- */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/* ---------- Fade-in on scroll ---------- */
function setupReveal() {
  const items = document.querySelectorAll('.card, .req');
  if (!('IntersectionObserver' in window)) {
    items.forEach((i) => i.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((i) => io.observe(i));

  // Safety fallback
  setTimeout(() => {
    items.forEach((i) => i.classList.add('visible'));
  }, 3000);
}

/* ---------- Preload preview images ---------- */
function preloadPreviews() {
  [
    'Urdu + Dark theme.png',
    'Urdu + Light theme.png',
    'English + Dark theme.png',
    'English + Light theme.png'
  ].forEach((name) => {
    const i = new Image();
    i.src = `assets/Dashboard/${name}`;
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupToggles();
  setupSmoothScroll();
  setupReveal();
  preloadPreviews();
});