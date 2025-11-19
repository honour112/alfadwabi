import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('site-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    // default to system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const el = document.documentElement;
    if (theme === 'dark') {
      el.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('site-theme', 'dark'); } catch (e) {}
    } else {
      el.setAttribute('data-theme', 'light');
      try { localStorage.setItem('site-theme', 'light'); } catch (e) {}
    }
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    if (mq && mq.addEventListener) mq.addEventListener('change', handler);
    return () => { if (mq && mq.removeEventListener) mq.removeEventListener('change', handler); };
  }, []);

  const btnClass = `ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full shadow-lg transform transition-transform duration-200 ${theme === 'dark' ? 'bg-bright-yellow text-black' : 'bg-charcoal-gray text-bright-yellow'} hover:scale-105`;

  return (
    <button
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      className={btnClass}
    >
      {theme === 'dark' ? (
        // Sun icon (light mode)
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 3.5a.75.75 0 01.75.75V6a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5zM10 14a4 4 0 100-8 4 4 0 000 8zM3.22 4.22a.75.75 0 011.06 0L5.5 5.44a.75.75 0 11-1.06 1.06L3.22 5.28a.75.75 0 010-1.06zM14.5 14.94a.75.75 0 011.06 0l1.22 1.22a.75.75 0 11-1.06 1.06l-1.22-1.22a.75.75 0 010-1.06zM16 10a.75.75 0 01.75.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zM3.5 9.25H2a.75.75 0 010-1.5h1.5A.75.75 0 013.5 9.25zM14.78 5.22a.75.75 0 011.06 0l1.22 1.22a.75.75 0 11-1.06 1.06L14.78 6.28a.75.75 0 010-1.06zM5.22 14.78a.75.75 0 011.06 0l1.22 1.22a.75.75 0 11-1.06 1.06L5.22 15.84a.75.75 0 010-1.06z" />
        </svg>
      ) : (
        // Moon icon (dark mode)
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
