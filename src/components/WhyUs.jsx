// ============================================================
// Why Choose Us Section
// ============================================================
import { useEffect, useRef, useState } from "react";
import { whyChooseUs } from "../data";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const iconMap = {
  "🎯": (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <path d="M16 2v4M16 26v4M2 16h4M26 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "🏆": (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <path d="M16 20 L22 8 H10 L16 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 8 H6 C6 14 10 16 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 8 H26 C26 14 22 16 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 24 H20 M16 20 V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 26 H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  "⚙️": (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.76 7.76l2.12 2.12M22.12 22.12l2.12 2.12M7.76 24.24l2.12-2.12M22.12 9.88l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "🤝": (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
      <path d="M4 18 L12 26 L28 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 10 L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

export default function WhyUs() {
  const { ref, visible } = useFadeIn();
  const { lang } = useLang();

  return (
    <section id="why-us" className="py-24 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">
            {t(lang, "whyUs.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t(lang, "whyUs.heading1")}{" "}
            <span className="text-orange-400">
              {t(lang, "whyUs.headingHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t(lang, "whyUs.description")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700
                rounded-2xl p-6 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10
                transition-all duration-300 hover:-translate-y-2 text-center
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto mb-5 group-hover:bg-orange-500/20 transition-colors duration-300 group-hover:scale-110 transform">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
            </div>
          ))}
        </div>

        {/* Wide banner strip */}
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-slate-700" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
