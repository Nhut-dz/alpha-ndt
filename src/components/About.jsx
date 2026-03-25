// ============================================================
// About Us Section - Company Introduction
// ============================================================
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

const certifications = [
  { code: "ISO 9001", name: "Quality Management" },
  { code: "ISO/IEC 17025", name: "Testing Laboratory" },
  { code: "PCN", name: "Personnel Cert" },
  { code: "CSWIP", name: "Welding Inspection" },
  { code: "ASNT", name: "NDT Standard" },
  { code: "ISO 9712", name: "NDT Personnel" },
];

const classifications = ["ABS", "Bureau Veritas", "ClassNK", "DNV", "KR", "VR"];

const highlights = [
  { icon: "👥", text: "Đội ngũ chuyên gia được chứng nhận quốc tế" },
  { icon: "🔬", text: "Công nghệ NDT hiện đại nhất" },
  { icon: "🏅", text: "Tiêu chuẩn quốc tế ISO 9001 & 17025" },
  { icon: "🌏", text: "Phục vụ khách hàng dầu khí, tàu biển, năng lượng" },
];

// Reusable fade-in hook
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
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
    <section id="about" className="py-24 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">
            {t(lang, "about.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t(lang, "about.heading1")}{" "}
            <span className="text-orange-400">
              {t(lang, "about.headingHighlight")}
            </span>
          </h2>
        </div>

        {/* Main 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              Thành lập 2002 • Trụ sở TP. HCM
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
              AlphaNDT – Hơn 20 năm đồng hành cùng ngành công nghiệp Việt Nam
            </h3>

            <p className="text-slate-400 text-base leading-relaxed mb-6">
              {t(lang, "about.description")}{" "}
              <strong className="text-orange-400">{t(lang, "about.industries")}</strong>{" "}
              {t(lang, "about.descEnd")}
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Được chứng nhận <strong className="text-white">ISO 9001:2015</strong> và{" "}
              <strong className="text-white">ISO/IEC 17025</strong>, với đội ngũ kỹ sư
              giữ chứng chỉ PCN, CSWIP, ASNT – chúng tôi cam kết mang lại kết quả
              kiểm định chính xác nhất theo tiêu chuẩn quốc tế.
            </p>

            {/* Highlight bullets */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
            >
              {t(lang, "about.learnMore")}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Image + Stats */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <img
                src="https://alpha-ndt.com/Upload/z6166850261694_22212ff1f30c47f21c5f60980ab00bf0.jpg"
                alt={t(lang, "about.teamAlt")}
                className="w-full h-80 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">🏆</div>
                  <div>
                    <div className="text-white font-bold text-sm">Đơn vị tiên phong</div>
                    <div className="text-slate-400 text-xs">NDT hàng đầu Việt Nam từ 2002</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="border-t border-slate-800 pt-16">
            <div className="text-center mb-10">
              <h4 className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-2">
                {t(lang, "about.certTitle")}
              </h4>
              <p className="text-white font-bold text-xl">
                {t(lang, "about.certDesc")}
              </p>
            </div>

            {/* Certs grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-10">
              {certifications.map((cert) => (
                <div
                  key={cert.code}
                  className="bg-slate-700 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-xl p-4 text-center transition-all duration-200 group"
                >
                  <div className="text-white font-black text-lg group-hover:text-orange-400 transition-colors">
                    {cert.code}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{cert.name}</div>
                </div>
              ))}
            </div>

            {/* Classification societies */}
            <div className="text-center">
              <p className="text-slate-500 text-sm mb-4">{t(lang, "about.certLabel")}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {classifications.map((cls) => (
                  <span
                    key={cls}
                    className="bg-slate-700 border border-slate-700 text-slate-300 text-sm font-semibold px-4 py-2 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                  >
                    {cls}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
