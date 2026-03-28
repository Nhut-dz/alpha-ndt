// ============================================================
// NewsDetailPage - Chi tiết bài viết
// ============================================================
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { postAPI } from "../services/api";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function NewsDetailPage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    postAPI.getBySlug(slug)
      .then((res) => {
        if (res.data?.success) {
          setArticle(res.data.data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-28 pb-20 bg-slate-800 min-h-screen flex justify-center items-center">
        <svg className="w-10 h-10 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="pt-28 pb-20 bg-slate-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Bài viết không tồn tại</h1>
          <p className="text-slate-400 mb-8">Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Quay lại tin tức
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = article.img_url || null;

  return (
    <div className="bg-slate-800 min-h-screen">
      {/* Hero Banner */}
      {heroImage && (
        <div className="relative h-[340px] md:h-[420px] overflow-hidden">
          <img
            src={heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/60 to-slate-800/20" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          to="/news"
          className="inline-flex items-center gap-1 text-slate-400 hover:text-white text-sm font-medium mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Quay lại tin tức
        </Link>

        {/* Category + Date */}
        <div className="flex items-center gap-3 mb-4">
          {article.category?.name && (
            <span className="bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/20">
              {article.category.name}
            </span>
          )}
          <span className="text-slate-500 text-sm flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(article.created_at)}
          </span>
          {article.view > 0 && (
            <span className="text-slate-500 text-sm flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {article.view} lượt xem
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Author */}
        {article.admin?.name && (
          <p className="text-slate-500 text-sm mb-8">
            Tác giả: <span className="text-slate-300">{article.admin.name}</span>
          </p>
        )}

        {/* Article content */}
        <div
          className="prose prose-invert prose-slate max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:border prose-img:border-slate-700
            prose-strong:text-white
            prose-ul:text-slate-300 prose-ol:text-slate-300
            prose-blockquote:border-orange-500 prose-blockquote:text-slate-400"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl p-8 border border-orange-500/20 text-center">
          <h3 className="text-white font-bold text-xl mb-3">
            Bạn cần tư vấn thêm?
          </h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
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
      </div>
    </div>
  );
}
