// ============================================================
// ProjectDetailPage - Chi tiết dự án (trang riêng)
// ============================================================
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import { tagColors } from "../components/ProjectCard";
import Breadcrumb from "../components/Breadcrumb";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Dự án không tồn tại</h1>
          <p className="text-slate-600 mb-8">Dự án bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Quay lại dự án
          </Link>
        </div>
      </div>
    );
  }

  const content = project.content;
  const isStringContent = typeof content === "string";
  const isObjectContent = content && typeof content === "object";

  // Related projects (same tag, exclude current)
  const relatedProjects = projects
    .filter((p) => p.tag === project.tag && p.id !== project.id)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">

        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: "Dự án", to: "/portfolio" },
          { label: project.title }
        ]} />

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tagColors[project.tag] || "bg-slate-100 text-slate-500 border-slate-200"}`}>
            {project.tag}
          </span>
          <span className="text-slate-500 text-sm flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {project.year}
          </span>
          {project.industry && (
            <span className="text-slate-500 text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {project.industry}
            </span>
          )}
        </div>

        {/* Client */}
        <p className="text-orange-500 text-sm font-semibold mb-3">
          Client: {project.client}
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 mb-8 leading-tight">
          {project.title}
        </h1>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[480px]"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop";
            }}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mb-8" />

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">
            Mô tả dự án
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* String content */}
        {isStringContent && (
          <div className="border-t border-slate-200 pt-6 mb-8">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">
              Chi tiết dự án
            </h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {content.trim()}
            </p>
          </div>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="border-t border-slate-200 pt-6 mb-8">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">
              Điểm nổi bật
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((item, i) => (
                <span
                  key={i}
                  className="bg-orange-500/10 text-orange-600 text-sm px-3 py-1.5 rounded-lg font-medium border border-orange-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Object content (structured) */}
        {isObjectContent && (
          <div className="space-y-6 border-t border-slate-200 pt-6 mb-8">
            {content.scope && (
              <div>
                <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">
                  Phạm vi công việc
                </h2>
                <ul className="space-y-2">
                  {content.scope.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-start gap-2">
                      <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.methods && (
              <div>
                <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">
                  Phương pháp NDT
                </h2>
                <div className="flex flex-wrap gap-2">
                  {content.methods.map((method, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-lg font-medium">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {content.standards && (
              <div>
                <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">
                  Tiêu chuẩn áp dụng
                </h2>
                <div className="flex flex-wrap gap-2">
                  {content.standards.map((std, i) => (
                    <span key={i} className="bg-orange-500/10 text-orange-600 text-sm px-3 py-1.5 rounded-lg font-medium border border-orange-500/20">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              {content.location && (
                <div>
                  <h3 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">Địa điểm</h3>
                  <p className="text-slate-600">{content.location}</p>
                </div>
              )}
              {content.duration && (
                <div>
                  <h3 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">Thời gian</h3>
                  <p className="text-slate-600">{content.duration}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl p-8 border border-orange-500/20 text-center">
          <h3 className="text-slate-800 font-bold text-xl mb-3">
            Bạn cần tư vấn thêm?
          </h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ kiểm định và giám định chất lượng.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Liên hệ ngay
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-14">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-6">
              Dự án liên quan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/portfolio/${p.id}`}
                  className="group flex gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=150&fit=crop";
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-slate-500 text-xs mb-1.5 flex items-center gap-1">
                      {p.year}
                      <span className="ml-2 text-orange-500">{p.tag}</span>
                    </span>
                    <h4 className="text-slate-800 text-sm font-semibold group-hover:text-orange-500 transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
