import { useEffect, useState } from 'react';

function getSystemScheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('gekko-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return getSystemScheme();
  });

  useEffect(() => {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      const saved = localStorage.getItem('gekko-theme');
      if (meta) {
        meta.content = saved || 'light dark';
      }
    } catch {}
  }, [theme]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'gekko-theme') {
        const next = e.newValue || getSystemScheme();
        setTheme(next);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const sysScheme = getSystemScheme();
    const meta = document.querySelector('meta[name="color-scheme"]');
    try {
      if (nextTheme === sysScheme) {
        localStorage.removeItem('gekko-theme');
        if (meta) meta.content = 'light dark';
      } else {
        localStorage.setItem('gekko-theme', nextTheme);
        if (meta) meta.content = nextTheme;
      }
    } catch {}
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Cambiar a modo cálido' : 'Cambiar a modo oscuro'}
    >
      <svg className="theme-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg className="theme-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}