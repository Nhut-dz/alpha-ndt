// ============================================================
// Header Component - Sticky Navigation
// ============================================================
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function Header() {
  const { lang } = useLang();
  const location = useLocation();

  const navItems = [
    { label: t(lang, "nav.home"), href: "/" },
    { label: t(lang, "nav.about"), href: "/about" },
    { label: t(lang, "nav.services"), href: "/services" },
    { label: t(lang, "nav.portfolio"), href: "/portfolio" },
    { label: t(lang, "nav.news"), href: "/news" },
    { label: "Tuyển dụng", href: "/careers" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-1"
          : "bg-white py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Alpha NDT - Trang chủ">
            <img src="/logo-light.png" alt="Alpha NDT" className="h-20 sm:h-24 w-auto object-contain -my-4" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold tracking-wide uppercase rounded-md transition-all duration-200 text-slate-700 hover:text-orange-500 hover:bg-blue-50"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide uppercase rounded-md transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-orange-500 bg-blue-50 border-b-2 border-blue-500"
                      : "text-slate-700 hover:text-orange-500 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t(lang, "nav.contactNow")}
            </Link>

            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors"
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
          <nav className="flex flex-col gap-1 pb-4 border-t border-slate-200 pt-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="mt-2 inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              {t(lang, "nav.contactNow")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
