// ============================================================
// Careers Section - Job Openings + CTA
// ============================================================
import { useEffect, useRef, useState } from "react";
import { jobOpenings } from "../data";

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

export default function Careers() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="careers" className="py-24 bg-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Tuyển dụng
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Gia nhập{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Alpha NDT
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Chúng tôi tìm kiếm những kỹ sư tài năng, đam mê kỹ thuật và sẵn sàng
            phát triển cùng đội ngũ chuyên gia NDT hàng đầu
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Job list */}
          <div className={`space-y-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-slate-300 font-semibold mb-6">
              Vị trí đang tuyển dụng:
            </p>
            {jobOpenings.map((job, i) => (
              <div
                key={job.id}
                className="group flex items-start gap-4 bg-slate-700 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 hover:bg-slate-750 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-none group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-blue-300 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="flex items-center gap-1 text-slate-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {job.department}
                    </span>
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors flex-none self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}

            <div className="pt-2">
              <a
                href="mailto:info@alpha-ndt.com"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Gửi CV: hr@alpha-ndt.com
              </a>
            </div>
          </div>

          {/* Right: CTA Banner */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="text-white font-black text-2xl mb-3">
                  Phát triển sự nghiệp cùng chúng tôi
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  AlphaNDT tạo môi trường làm việc năng động, chuyên nghiệp với
                  cơ hội học hỏi và phát triển không giới hạn trong ngành NDT.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Đào tạo chứng chỉ quốc tế (PCN, CSWIP, ASNT)",
                    "Cơ hội làm việc ở dự án offshore",
                    "Môi trường quốc tế, team chuyên nghiệp",
                    "Lương thưởng cạnh tranh",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <svg className="w-5 h-5 text-blue-400 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hr@alpha-ndt.com"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Nộp hồ sơ ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
