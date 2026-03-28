// ============================================================
// ProjectCard - Individual project card component
// ============================================================

const tagColors = {
  "Oil & Gas": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Marine": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Offshore": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Wind Energy": "bg-green-500/10 text-green-400 border-green-500/20",
  "Pipeline": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Plant": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Industrial": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Subsea": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Refinery": "bg-red-500/10 text-red-400 border-red-500/20",
  "Power": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Bridge": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Gas": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Renewable Energy": "bg-green-500/10 text-green-400 border-green-500/20",
};

export { tagColors };

export default function ProjectCard({ project, index, visible, onClick }) {
  return (
    <article
      key={project.id}
      onClick={() => onClick(project)}
      className={`group relative bg-slate-700 border border-slate-700 rounded-2xl overflow-hidden cursor-pointer
        hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
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
            e.target.onerror = () => {
              e.target.src =
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=300&fit=crop";
            };
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Industry badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${
              tagColors[project.tag] ||
              "bg-slate-500/10 text-slate-400 border-slate-500/20"
            }`}
          >
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
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            See details
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
  );
}
