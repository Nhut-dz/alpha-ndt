// ============================================================
// Header Component - Sticky Navigation
// ============================================================
import { useState, useEffect } from "react";

const navItems = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Dự án", href: "#portfolio" },
  { label: "Tin tức", href: "#news" },
  { label: "Tuyển dụng", href: "#careers" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll + close menu
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(href.replace("#", ""));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-800/98 backdrop-blur-md shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
            aria-label="Alpha NDT - Trang chủ"
          >
            <img
              src="/logo.png"
              alt="Alpha NDT"
              className="h-24 sm:h-28 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Liên hệ ngay
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4 border-t border-slate-700 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              Liên hệ ngay
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
