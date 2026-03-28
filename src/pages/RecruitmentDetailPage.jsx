import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { recruitmentAPI, storageUrl } from "../services/api";
import Breadcrumb from "../components/Breadcrumb";

export default function RecruitmentDetailPage() {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    recruitmentAPI.getBySlug(slug)
      .then((res) => {
        if (res.data?.success) setJob(res.data.data);
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-28 pb-20 bg-white min-h-screen flex justify-center items-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Tin tuyển dụng không tồn tại</h1>
          <p className="text-slate-600 mb-8">Tin tuyển dụng bạn tìm kiếm không tồn tại hoặc đã hết hạn.</p>
          <Link to="/careers" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            ← Quay lại tuyển dụng
          </Link>
        </div>
      </div>
    );
  }

  const typeLabel = { 'full-time': 'Full-time', 'part-time': 'Part-time', 'contract': 'Contract', 'intern': 'Intern' };
  const featuredImage = job.img_url || null;

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
        <Breadcrumb items={[
          { label: "Tuyển dụng", to: "/careers" },
          { label: job.title }
        ]} />

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {job.employment_type && (
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              {typeLabel[job.employment_type] || job.employment_type}
            </span>
          )}
          {job.department && (
            <span className="text-slate-500 text-sm flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {job.department}
            </span>
          )}
          {job.location && (
            <span className="text-slate-500 text-sm flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 mb-4 leading-tight">
          {job.title}
        </h1>

        {/* Quick Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-slate-50 rounded-2xl p-5 border border-slate-200">
          {job.salary_range && (
            <div>
              <p className="text-slate-500 text-xs uppercase font-medium mb-1">Mức lương</p>
              <p className="text-slate-800 font-semibold">{job.salary_range}</p>
            </div>
          )}
          {job.quantity && (
            <div>
              <p className="text-slate-500 text-xs uppercase font-medium mb-1">Số lượng</p>
              <p className="text-slate-800 font-semibold">{job.quantity} người</p>
            </div>
          )}
          {job.deadline && (
            <div>
              <p className="text-slate-500 text-xs uppercase font-medium mb-1">Hạn nộp</p>
              <p className="text-slate-800 font-semibold">{new Date(job.deadline).toLocaleDateString("vi-VN")}</p>
            </div>
          )}
          {job.contact_email && (
            <div>
              <p className="text-slate-500 text-xs uppercase font-medium mb-1">Email</p>
              <a href={`mailto:${job.contact_email}`} className="text-blue-600 font-semibold text-sm hover:underline">{job.contact_email}</a>
            </div>
          )}
        </div>

        {featuredImage && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img src={featuredImage} alt={job.title} className="w-full h-auto object-cover max-h-[400px]" />
          </div>
        )}

        <div className="border-t border-slate-200 mb-8" />

        {/* Description */}
        {job.description && (
          <div className="mb-8">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">Mô tả công việc</h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{job.description}</p>
          </div>
        )}

        {/* Requirements */}
        {job.requirements && (
          <div className="mb-8 border-t border-slate-200 pt-6">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">Yêu cầu</h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{job.requirements}</p>
          </div>
        )}

        {/* Benefits */}
        {job.benefits && (
          <div className="mb-8 border-t border-slate-200 pt-6">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">Quyền lợi</h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">{job.benefits}</p>
          </div>
        )}

        {/* HTML Content */}
        {job.content && (
          <div className="mb-8 border-t border-slate-200 pt-6">
            <h2 className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4">Chi tiết</h2>
            <div
              className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-blue-600"
              dangerouslySetInnerHTML={{ __html: job.content }}
            />
          </div>
        )}

        {/* Apply CTA */}
        <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl p-8 border border-orange-500/20 text-center">
          <h3 className="text-slate-800 font-bold text-xl mb-3">Ứng tuyển ngay!</h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Gửi CV và thư xin việc cho chúng tôi qua email hoặc liên hệ trực tiếp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {job.contact_email && (
              <a href={`mailto:${job.contact_email}?subject=Ứng tuyển: ${job.title}`}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
                Gửi CV qua Email
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Liên hệ
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
