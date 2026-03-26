// ============================================================
// News / Blog Section
// ============================================================
import { useEffect, useRef, useState } from "react";
import { news } from "../data";
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

const categoryColors = {
  "Công nghệ": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Dịch vụ": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Chất lượng": "bg-green-500/10 text-green-400 border-green-500/20",
};

export default function News() {
  const { ref, visible } = useFadeIn();
  const { lang } = useLang();

  return (
    <section id="news" className="py-12 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <span className="inline-block text-orange-400 font-bold text-3xl md:text-4xl tracking-widest uppercase mb-3">
              {t(lang, "news.label")}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              {t(lang, "news.heading1")}{" "}
              <span className="text-orange-400">
                {t(lang, "news.headingHighlight")}
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="flex-none inline-flex items-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-400 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            Xem tất cả
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((article, i) => (
            <article
              key={article.id}
              className={`group bg-slate-700 border border-slate-700 rounded-2xl overflow-hidden
                hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1
                transition-all duration-300 cursor-pointer
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent" />

                {/* Category */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${categoryColors[article.category] || "bg-slate-500/10 text-slate-400 border-slate-500/20"}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-orange-400 text-xs mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {article.date}
                </div>

                <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                  {t(lang, "news.readMore")}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
