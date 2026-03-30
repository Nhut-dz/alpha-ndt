// ============================================================
// Header Component - Sticky Navigation
// ============================================================
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../data/translations";

export default function Header() {
  const { lang } = useLang();
  const { dark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { label: t(lang, "nav.home"), href: "/" },
    { label: t(lang, "nav.about"), href: "/about" },
    { label: t(lang, "nav.services"), href: "/services" },
    { label: t(lang, "nav.portfolio"), href: "/portfolio" },
    { label: t(lang, "nav.news"), href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: t(lang, "nav.contact"), href: "/contact" },
    { label: "Platform", href: "http://platform.alpha-ndt.com/Login?ReturnUrl=~/Default?st=", external: true },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/70 backdrop-blur-md shadow-lg dark:shadow-slate-900/50 py-1 border-slate-200 dark:border-white/10"
          : "bg-white dark:bg-transparent py-2 border-slate-200 dark:border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Alpha NDT - Trang chủ">
            <img src="/logo-light.png" alt="Alpha NDT" className="h-20 sm:h-24 w-auto object-contain -my-4 dark:hidden" />
            <img src="/logo.png" alt="Alpha NDT" className="h-20 sm:h-24 w-auto object-contain -my-4 hidden dark:block" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold tracking-wide uppercase rounded-md transition-all duration-200 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:bg-blue-50 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide uppercase rounded-md transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-orange-500 border-b-2 border-blue-500"
                      : "text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:bg-blue-50 dark:hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4 border-t border-slate-200 dark:border-slate-700 pt-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
