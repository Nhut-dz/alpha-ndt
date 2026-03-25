// ============================================================
// Hero Section - Video Banner with CTA
// ============================================================
import { useState, useEffect } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          {/* Replace src with actual NDT video in production */}
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-layer overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 via-slate-800/60 to-slate-800/90" />
        <div className="absolute inset-0 bg-blue-950/30" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Thành lập năm 2002 • ISO 9001:2015 Certified
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Giải pháp kiểm định{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              không phá hủy
            </span>
            <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-500/20 -skew-x-3" />
          </span>
          <br />
          hàng đầu Việt Nam
        </h1>

        {/* Sub heading */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-4 max-w-3xl mx-auto">
          Đảm bảo chất lượng –{" "}
          <span className="text-blue-400 font-medium">An toàn</span> –{" "}
          <span className="text-blue-400 font-medium">Chính xác</span>
        </p>
        <p className="text-slate-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Phục vụ ngành dầu khí, đóng tàu, năng lượng và xây dựng cơ khí với công nghệ
          NDT tiên tiến nhất
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("#services")}
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Xem dịch vụ
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center gap-3 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Liên hệ tư vấn
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "20+", label: "Năm kinh nghiệm" },
            { value: "500+", label: "Dự án hoàn thành" },
            { value: "100+", label: "Chuyên gia NDT" },
            { value: "50+", label: "Đối tác quốc tế" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
