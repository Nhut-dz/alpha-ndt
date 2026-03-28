// ============================================================
// NewsDetailPage - Chi tiết bài viết
// Layout tham khảo: pvcfc.com.vn article detail
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
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    Promise.all([
      postAPI.getBySlug(slug),
      postAPI.list(),
    ])
      .then(([articleRes, postsRes]) => {
        if (articleRes.data?.success) {
          setArticle(articleRes.data.data);
          // Lấy bài viết liên quan (cùng category, loại bỏ bài hiện tại)
          const allPosts = postsRes.data?.data || [];
          const related = allPosts
            .filter((p) => p.slug !== slug)
            .slice(0, 4);
          setRelatedPosts(related);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-28 pb-20 bg-white min-h-screen flex justify-center items-center">
        <svg className="w-10 h-10 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Bài viết không tồn tại</h1>
          <p className="text-slate-600 mb-8">Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-slate-800 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Quay lại tin tức
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = article.img_url || null;

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl px-4 sm:px-8 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-slate-800 transition-colors">Trang chủ</Link>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to="/news" className="hover:text-slate-800 transition-colors">Tin tức</Link>
          {article.category?.name && (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-orange-400">{article.category.name}</span>
            </>
          )}
        </nav>

        {/* Meta: Date + Views */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-slate-600 text-sm flex items-center gap-1.5">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(article.created_at)}
          </span>
          {article.view > 0 && (
            <span className="text-slate-600 text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {article.view} lượt xem
            </span>
          )}
          {article.admin?.name && (
            <span className="text-slate-600 text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {article.admin.name}
            </span>
          )}
        </div>

        {/* Category badge */}
        {article.category?.name && (
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/20 mb-5">
            {article.category.name}
          </span>
        )}

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Featured Image - within content area, not full bleed */}
        {featuredImage && (
          <div className="mb-8 overflow-hidden">
            <img
              src={featuredImage}
              alt={article.title}
              className="w-full h-auto object-cover max-h-[420px]"
            />
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-slate-200 mb-8" />

        {/* Article content */}
        <div
          className="prose prose-invert prose-slate max-w-none
            prose-headings:text-slate-800 prose-headings:font-bold
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-base
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:border prose-img:border-slate-200 prose-img:my-6
            prose-strong:text-slate-800
            prose-ul:text-slate-700 prose-ol:text-slate-700
            prose-blockquote:border-orange-500 prose-blockquote:text-slate-600
            prose-li:marker:text-orange-400"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

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
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-slate-800 font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Liên hệ ngay
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h2 className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-6">
              Bài viết liên quan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/news/${post.slug}`}
                  className="group flex gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-orange-500/30 transition-all hover:-translate-y-0.5"
                >
                  {/* Thumbnail */}
                  {post.img_url && (
                    <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.img_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-slate-500 text-xs mb-1.5 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(post.created_at)}
                      {post.category?.name && (
                        <span className="ml-2 text-orange-400">{post.category.name}</span>
                      )}
                    </span>
                    <h4 className="text-slate-800 text-sm font-semibold group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
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
