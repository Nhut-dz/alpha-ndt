// ============================================================
// Partners / Clients Logo Slider Section
// ============================================================
import { useEffect, useRef, useState } from "react";

const partnersList = [
  { name: "Schlumberger", abbr: "SLB" },
  { name: "PETRONAS", abbr: "PTN" },
  { name: "Vietsovpetro", abbr: "VSP" },
  { name: "PTSC", abbr: "PTSC" },
  { name: "PetroVietnam", abbr: "PVN" },
  { name: "DNV", abbr: "DNV" },
  { name: "Bureau Veritas", abbr: "BV" },
  { name: "ABS", abbr: "ABS" },
  { name: "ClassNK", abbr: "NK" },
  { name: "JVPC", abbr: "JVPC" },
  { name: "Dung Quat", abbr: "DQR" },
  { name: "EVN", abbr: "EVN" },
];

// Duplicate for infinite scroll effect
const doubled = [...partnersList, ...partnersList];

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

export default function Partners() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="partners" className="py-20 bg-slate-800 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Đối tác
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Khách hàng &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Đối tác tin cậy
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tự hào phục vụ các tập đoàn dầu khí, năng lượng và đóng tàu hàng đầu thế giới
          </p>
        </div>

        {/* Infinite scrolling strip */}
        <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-800 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-800 to-transparent pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-4 overflow-hidden">
            <div
              className="flex gap-4 animate-marquee"
              style={{
                animation: "marquee 30s linear infinite",
              }}
            >
              {doubled.map((partner, i) => (
                <div
                  key={i}
                  className="flex-none flex items-center justify-center w-40 h-20 bg-slate-700 border border-slate-700 rounded-xl hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-200 group"
                >
                  <div className="text-center">
                    <div className="text-slate-300 font-black text-lg group-hover:text-blue-400 transition-colors">
                      {partner.abbr}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[
            { value: "500+", label: "Dự án", sub: "đã hoàn thành" },
            { value: "20+", label: "Năm kinh nghiệm", sub: "kể từ 2002" },
            { value: "50+", label: "Đối tác", sub: "trong & ngoài nước" },
            { value: "100%", label: "Đạt chuẩn", sub: "tiêu chuẩn quốc tế" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-slate-700 border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors"
            >
              <div className="text-3xl font-black text-blue-400 mb-1">{s.value}</div>
              <div className="text-white font-semibold text-sm">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee keyframes via style tag */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
