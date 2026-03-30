// ============================================================
// ProjectModal - Project detail modal component
// ============================================================
import { tagColors } from "./ProjectCard";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function ProjectModal({ project, onClose }) {
  const { lang } = useLang();

  if (!project) return null;

  const content = project.content;
  const isStringContent = typeof content === "string";
  const isObjectContent = content && typeof content === "object";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-shrink-0">
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
            className="absolute top-4 right-4 bg-white dark:bg-slate-900/80 hover:bg-white dark:bg-slate-900 text-slate-800 dark:text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow"
          >
            ✕
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="p-6 -mt-4 relative z-10 overflow-y-auto">
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
              tagColors[project.tag] || ""
            } mb-4 inline-block`}
          >
            {project.tag}
          </span>
          <h3 className="text-slate-800 dark:text-white font-black text-xl mb-2">
            {project.title}
          </h3>
          <p className="text-orange-400 text-sm font-semibold mb-2">
            {t(lang, "portfolio.client")}: {project.client}
          </p>

          {/* Year & Industry & Location */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <span className="text-slate-600 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400">Year:</span> {project.year}
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400">Industry:</span> {project.industry}
            </span>
            {project.location && (
              <span className="text-slate-600 dark:text-slate-300">
                <span className="text-slate-500 dark:text-slate-400">Location:</span> {project.location}
              </span>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* String content (user format) */}
          {isStringContent && (
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <h4 className="text-orange-400 font-semibold text-sm mb-2">
                Project Details
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                {content.trim()}
              </p>
            </div>
          )}

          {/* Highlights (user format) */}
          {project.highlights && project.highlights.length > 0 && (
            <div className={`${isStringContent ? "mt-4" : "border-t border-slate-200 dark:border-slate-700 pt-4"}`}>
              <h4 className="text-orange-400 font-semibold text-sm mb-2">
                Key Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((item, i) => (
                  <span
                    key={i}
                    className="bg-orange-500/10 text-orange-400 text-xs px-2.5 py-1 rounded-lg font-medium border border-orange-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Object content (structured format) */}
          {isObjectContent && (
            <div className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-4">
              {/* Scope of Work */}
              {content.scope && (
                <div>
                  <h4 className="text-orange-400 font-semibold text-sm mb-2">
                    Scope of Work
                  </h4>
                  <ul className="space-y-1">
                    {content.scope.map((item, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                        <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* NDT Methods */}
              {content.methods && (
                <div>
                  <h4 className="text-orange-400 font-semibold text-sm mb-2">
                    NDT Methods
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {content.methods.map((method, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-lg font-medium"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Standards */}
              {content.standards && (
                <div>
                  <h4 className="text-orange-400 font-semibold text-sm mb-2">
                    Applied Standards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {content.standards.map((std, i) => (
                      <span
                        key={i}
                        className="bg-orange-500/10 text-orange-400 text-xs px-2.5 py-1 rounded-lg font-medium border border-orange-500/20"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Location & Duration */}
              <div className="grid grid-cols-2 gap-4">
                {content.location && (
                  <div>
                    <h4 className="text-orange-400 font-semibold text-sm mb-1">
                      Location
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{content.location}</p>
                  </div>
                )}
                {content.duration && (
                  <div>
                    <h4 className="text-orange-400 font-semibold text-sm mb-1">
                      Duration
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{content.duration}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
            >
              {t(lang, "portfolio.close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
