// ============================================================
// Portfolio Section - Notable Projects
// ============================================================
import { useEffect, useRef, useState } from "react";
import { projects } from "../data";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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

const filtersEN = [...new Set(projects.map((p) => p.tag))];

export default function Portfolio() {
  const { ref: sectionRef, visible } = useFadeIn();
  const { lang } = useLang();
  const allLabel = t(lang, "portfolio.all");
  const filters = [allLabel, ...filtersEN];
  const [activeFilter, setActiveFilter] = useState(allLabel);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    setActiveFilter(t(lang, "portfolio.all"));
  }, [lang]);

  const filtered = activeFilter === allLabel
    ? projects
    : projects.filter((p) => p.tag === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-12 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-orange-400 font-bold text-3xl md:text-4xl tracking-widest uppercase mb-3">
            {t(lang, "portfolio.label")}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            {t(lang, "portfolio.heading1")}{" "}
            <span className="text-orange-400">
              {t(lang, "portfolio.headingHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t(lang, "portfolio.description")}
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
          {paginatedProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
              onClick={setSelected}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={`flex justify-center items-center gap-2 mt-10 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                  currentPage === page
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ›
            </button>
          </div>
        )}

        {/* View more CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button className="inline-flex items-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:bg-slate-700">
            {t(lang, "portfolio.viewAll")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
