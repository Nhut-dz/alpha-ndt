// ============================================================
// About Us Section - Company Introduction
// ============================================================
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

const certifications = [
  { code: "ISO 9001", name: "Quality Management" },
  { code: "ISO/IEC 17025", name: "Testing Laboratory" },
  { code: "PCN", name: "Personnel Certification" },
  { code: "CSWIP", name: "Welding Inspection" },
  { code: "ASNT", name: "NDT Standards" },
  { code: "ISO 9712", name: "NDT Personnel Certification" },
];

const classifications = ["ABS", "Bureau Veritas", "ClassNK", "DNV", "KR", "VR"];

const highlights = [
  { icon: "👥", text: "Internationally certified expert team" },
  { icon: "🔬", text: "Advanced NDT technologies" },
  { icon: "🏅", text: "Compliant with ISO 9001 & 17025 standards" },
  { icon: "🌏", text: "Serving oil & gas, marine, and energy industries" },
];

// Reusable fade-in hook
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function About() {
  const { ref: sectionRef, visible } = useFadeIn();
  const { lang } = useLang();

  return (
    <section id="about" className="py-12 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-orange-400 font-bold text-2xl md:text-3xl tracking-widest uppercase mb-3">
            {t(lang, "about.label")}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            {t(lang, "about.heading1")}{" "}
            <span className="text-orange-400">
              {t(lang, "about.headingHighlight")}
            </span>
          </h2>
        </div>

        {/* Main 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-8">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              Established in 2002 • Headquarters in Ho Chi Minh City
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
              AlphaNDT – Over 20 years supporting Vietnam’s industrial sector
            </h3>

            <p className="text-slate-400 text-base leading-relaxed mb-6">
              {t(lang, "about.description")}{" "}
              <strong className="text-orange-400">
                {t(lang, "about.industries")}
              </strong>{" "}
              {t(lang, "about.descEnd")}
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Certified with{" "}
              <strong className="text-white">ISO 9001:2015</strong> and{" "}
              <strong className="text-white">ISO/IEC 17025</strong>, and supported
              by engineers holding PCN, CSWIP, and ASNT certifications – we are
              committed to delivering the most accurate inspection results in
              accordance with international standards.
            </p>

            {/* Highlight bullets */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
            >
              {t(lang, "about.learnMore")}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Right: Image + Stats */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <img
                src="/about.jpg"
                alt={t(lang, "about.teamAlt")}
                className="w-full h-[28rem] object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

            </div>

            {/* Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* Certifications */}
        <div
          className={`transition-all duration-700 delay-300 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border-t border-slate-800 pt-8">
            <div className="text-center mb-10">
              <h4 className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-2">
                {t(lang, "about.certTitle")}
              </h4>
              <p className="text-white font-bold text-xl">
                {t(lang, "about.certDesc")}
              </p>
            </div>

            {/* Certs grid */}
            {/* giữ nguyên */}
            
            {/* Classification societies */}
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-4">
                {t(lang, "about.certLabel")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}