// ============================================================
// Services Section - NDT Services Grid
// ============================================================
import { useEffect, useRef, useState } from "react";
import { services } from "../data";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

function useFadeIn(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// No filter needed - each service is its own category

// SVG icons for each service (more professional than emoji in production)
const ServiceIcon = ({ code }) => {
  const icons = {
    UT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M8 20 Q14 10 20 20 Q26 30 32 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
    RT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M20 2v5M20 33v5M2 20h5M33 20h5M6.34 6.34l3.54 3.54M30.12 30.12l3.54 3.54M6.34 33.66l3.54-3.54M30.12 9.88l3.54-3.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    MT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="8" y="16" width="24" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="10" r="2" fill="currentColor" />
        <circle cx="26" cy="10" r="2" fill="currentColor" />
        <path d="M14 28l-4 6M26 28l4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    PT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M20 6l3 8h8l-6.5 4.7 2.5 7.7L20 22l-7 4.4 2.5-7.7L9 14h8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="20" cy="32" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    ECT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M6 20 Q10 10 16 20 Q22 30 28 20 Q34 10 38 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
    PAUT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="12" y="18" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 18V14M17 18V12M20 18V10M23 18V12M26 18V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 28 Q20 36 32 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    VT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M4 20 Q20 8 36 20 Q20 32 4 20z" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
    WES: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M20 6 L20 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 10 L32 16 L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 10 L8 16 L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="30" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    IS: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14h12M14 20h12M14 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="30" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M28 30l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    ANDT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="10" y="16" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 16V12M18 16V10M22 16V10M26 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 28 Q20 38 34 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    CNDT: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
        <path d="M10 20 Q15 12 20 20 Q25 28 30 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    GOES: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 4v6M20 30v6M4 20h6M30 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12l3 3M25 25l3 3M12 28l3-3M25 15l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[code] || <span className="text-2xl">🔬</span>;
};

export default function Services() {
  const { ref: sectionRef, visible } = useFadeIn();
  const { lang } = useLang();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="py-12 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-orange-400 font-bold text-3xl md:text-4xl tracking-widest uppercase mb-3">
            {t(lang, "services.label")}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            {t(lang, "services.heading1")}{" "}
            <span className="text-orange-400">
              {t(lang, "services.headingHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t(lang, "services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative bg-slate-700 border border-slate-700 rounded-2xl p-6 cursor-pointer
                transition-all duration-300 overflow-hidden
                hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {service.category}
                </span>
                <span className="bg-orange-500/10 text-orange-400 text-xs font-black px-2.5 py-1 rounded-lg border border-orange-500/20">
                  {service.code}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-5 text-orange-400 group-hover:scale-110 transition-transform duration-300`}
                style={{ background: "rgba(249,115,22,0.08)" }}
              >
                <ServiceIcon code={service.code} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-blue-300 transition-colors">
                {lang === "en" ? service.title : service.titleVi}
              </h3>
              <p className="text-slate-500 text-xs font-medium mb-3">{lang === "en" ? service.titleVi : service.title}</p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                {service.description}
              </p>

              {/* Learn more link */}
              <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                {t(lang, "about.learnMore")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Bottom border accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
           Consultation on suitable services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
