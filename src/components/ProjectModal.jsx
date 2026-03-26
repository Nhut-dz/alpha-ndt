// ============================================================
// ProjectModal - Project detail modal component
// ============================================================
import { tagColors } from "./ProjectCard";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function ProjectModal({ project, onClose }) {
  const { lang } = useLang();

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-800/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-700 border border-slate-700 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=300&fit=crop";
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-800/80 hover:bg-slate-800 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-800 to-transparent" />
        </div>
        <div className="p-6 -mt-4 relative z-10">
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
              tagColors[project.tag] || ""
            } mb-4 inline-block`}
          >
            {project.tag}
          </span>
          <h3 className="text-white font-black text-xl mb-2">
            {project.title}
          </h3>
          <p className="text-orange-400 text-sm font-semibold mb-4">
            {t(lang, "portfolio.client")}: {project.client}
          </p>
          <p className="text-slate-400 leading-relaxed">
            {project.description}
          </p>
          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
            >
              {t(lang, "portfolio.close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
