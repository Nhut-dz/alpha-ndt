import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { recruitmentAPI } from "../services/api";
import Breadcrumb from "../components/Breadcrumb";

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

export default function CareersPage() {
  const { ref, visible } = useFadeIn();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recruitmentAPI.list().then((res) => {
      setJobs(res.data?.data || []);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const typeLabel = (type) => {
    const map = { 'full-time': 'Full-time', 'part-time': 'Part-time', 'contract': 'Contract', 'intern': 'Intern' };
    return map[type] || type || 'Full-time';
  };

  return (
    <div className="pt-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Tuyển dụng" }]} />
      </div>

      <section className="py-12 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="inline-block text-orange-500 font-bold text-2xl md:text-3xl tracking-widest uppercase mb-3">
              CAREERS
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Cơ hội nghề nghiệp tại <span className="text-orange-500">Alpha NDT</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Tham gia đội ngũ chuyên gia hàng đầu trong lĩnh vực kiểm tra không phá hủy (NDT)
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
            </div>
          )}

          {/* Empty */}
          {!loading && jobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">Hiện tại chưa có vị trí tuyển dụng nào.</p>
              <p className="text-slate-400 mt-2">Vui lòng quay lại sau hoặc gửi CV cho chúng tôi.</p>
            </div>
          )}

          {/* Job Listings */}
          {!loading && jobs.length > 0 && (
            <div className="grid gap-6">
              {jobs.map((job, i) => (
                <Link
                  key={job.id}
                  to={`/careers/${job.slug}`}
                  className={`group block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                        {job.description || job.position}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        {job.department && (
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {job.department}
                          </span>
                        )}
                        {job.location && (
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                        )}
                        <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium text-xs">
                          {typeLabel(job.employment_type)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      {job.salary_range && (
                        <span className="text-orange-500 font-semibold text-sm">{job.salary_range}</span>
                      )}
                      {job.deadline && (
                        <span className="text-slate-400 text-xs">
                          Hạn: {new Date(job.deadline).toLocaleDateString("vi-VN")}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:text-orange-500 transition-colors">
                        Xem chi tiết
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className={`mt-16 text-center bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl p-10 border border-orange-500/20 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h3 className="text-slate-800 font-bold text-xl mb-3">Không tìm thấy vị trí phù hợp?</h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              Gửi CV của bạn cho chúng tôi. Chúng tôi luôn tìm kiếm những nhân tài xuất sắc.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Liên hệ ngay
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
