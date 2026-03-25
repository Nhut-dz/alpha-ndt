// ============================================================
// Portfolio Section - Notable Projects
// ============================================================
import { useEffect, useRef, useState } from "react";
import { projects } from "../data";

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

const filters = ["Tất cả", "Oil & Gas", "Marine", "Offshore"];
const tagColors = {
  "Oil & Gas": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Marine": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Offshore": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Wind Energy": "bg-green-500/10 text-green-400 border-green-500/20",
};

export default function Portfolio() {
  const { ref: sectionRef, visible } = useFadeIn();
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === "Tất cả"
    ? projects
    : projects.filter((p) => p.tag === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Dự án
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Dự án{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              tiêu biểu
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hơn 500 dự án đã hoàn thành cho các tập đoàn dầu khí, đóng tàu và năng
            lượng hàng đầu trong và ngoài nước
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              onClick={() => setSelected(project)}
              className={`group relative bg-slate-700 border border-slate-700 rounded-2xl overflow-hidden cursor-pointer
                hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1
                transition-all duration-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-158109479${project.id}329-c8112a89af12?w=600&h=300&fit=crop`;
                    e.target.onerror = () => { e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=300&fit=crop"; };
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {/* Industry badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${tagColors[project.tag] || "bg-slate-500/10 text-slate-400 border-slate-500/20"}`}>
                    {project.tag}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute top-3 right-3 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {project.year}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800/40 backdrop-blur-sm">
                  <div className="bg-white text-slate-900 text-sm font-bold px-5 py-2.5 rounded-full flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Xem chi tiết
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {project.client}
                </p>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View more CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button className="inline-flex items-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:bg-slate-700">
            Xem tất cả dự án
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-800/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-slate-700 border border-slate-700 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.image} alt={selected.title} className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=300&fit=crop"; }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-slate-800/80 hover:bg-slate-800 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800 to-transparent" />
            </div>
            <div className="p-6 -mt-4 relative z-10">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tagColors[selected.tag] || ""} mb-4 inline-block`}>
                {selected.tag}
              </span>
              <h3 className="text-white font-black text-xl mb-2">{selected.title}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">Khách hàng: {selected.client}</p>
              <p className="text-slate-400 leading-relaxed">{selected.description}</p>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSelected(null)}
                  className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
