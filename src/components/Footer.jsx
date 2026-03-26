// ============================================================
// Footer Component
// ============================================================
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

const services = [
  "Ultrasonic Testing (UT)",
  "Radiographic Testing (RT)",
  "Magnetic Particle Testing (MT)",
  "Penetrant Testing (PT)",
  "Phased Array UT (PAUT)",
  "Eddy Current Testing (ECT)",
  "Wind Energy Service (WES)",
];

const certBadges = ["ISO 9001", "ISO/IEC 17025", "PCN", "CSWIP", "ASNT"];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLang();

  const quickLinks = [
    { label: t(lang, "nav.home"), href: "#home" },
    { label: t(lang, "nav.about"), href: "#about" },
    { label: t(lang, "nav.services"), href: "#services" },
    { label: t(lang, "nav.portfolio"), href: "#portfolio" },
    { label: t(lang, "nav.news"), href: "#news" },
    { label: t(lang, "nav.careers"), href: "#careers" },
    { label: t(lang, "nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="flex items-center gap-3 mb-6 group"
            >
              <div>
               <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
            aria-label="Alpha NDT - Trang chủ"
          >
            <img
              src="/logo.png"
              alt="Alpha NDT"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </a>
                <p className="text-slate-500 text-xs">Inspection Services</p>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t(lang, "footer.desc")}
            </p>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {certBadges.map((cert) => (
                <span key={cert} className="bg-slate-700 border border-slate-700 text-slate-400 text-xs px-2.5 py-1 rounded-lg">
                  {cert}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100063655170473", path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                { name: "LinkedIn", href: "#", path: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /> },
                { name: "YouTube", href: "#", path: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" /></> },
              ].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 bg-slate-700 border border-slate-700 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 ${s.name === "YouTube" ? "hover:bg-orange-500 hover:border-orange-500" : "hover:bg-blue-600 hover:border-blue-600"}`}
                  aria-label={s.name}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{s.path}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t(lang, "footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <svg className="w-3 h-3 text-blue-500 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M0 0l8 4-8 4V0z" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t(lang, "footer.servicesTitle")}</h4>
            <ul className="space-y-3">
              {services.map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo("#services"); }}
                    className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <svg className="w-3 h-3 text-orange-500 group-hover:translate-x-0.5 transition-transform flex-none" fill="currentColor" viewBox="0 0 8 8">
                      <path d="M0 0l8 4-8 4V0z" />
                    </svg>
                    <span className="line-clamp-1">{srv}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t(lang, "footer.contactTitle")}</h4>
            <ul className="space-y-4">
              {[
                { icon: "📍", text: "37/7 Đường C18, Phường Bảy Hiền, TP. HCM" },
                { icon: "📞", text: "+84 28 3815 6789", href: "tel:+842838156789" },
                { icon: "✉️", text: "info@alpha-ndt.com", href: "mailto:info@alpha-ndt.com" },
                { icon: "🌐", text: "www.alpha-ndt.com", href: "http://www.alpha-ndt.com" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">{item.text}</a>
                  ) : (
                    <span className="text-slate-400 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Emergency contact */}
            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
              <p className="text-orange-400 font-semibold text-xs uppercase tracking-wider mb-1">{t(lang, "footer.hotline")}</p>
              <a href="tel:+84901234567" className="text-white font-black text-lg hover:text-orange-300 transition-colors">
                +84 90 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {currentYear} <span className="text-orange-400 font-semibold">Alpha NDT</span>. {t(lang, "footer.copyright")}
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-300 transition-colors">{t(lang, "footer.privacy")}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t(lang, "footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
