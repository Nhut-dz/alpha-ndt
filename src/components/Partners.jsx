// ============================================================
// Partners / Clients Logo Slider Section
// ============================================================
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

// BƯỚC 1: Thêm thuộc tính 'logo' chứa đường dẫn ảnh
// Bạn cần lưu các file ảnh logo riêng lẻ (đuôi .png có nền trong suốt là tốt nhất) 
// vào thư mục public/logos/ của dự án React.
const partnersList = [
  { name: "Schlumberger", abbr: "SLB", logo: "http://www.alpha-ndt.com/Upload/Clients/sao.png" },
  { name: "PETRONAS", abbr: "PTN", logo: "http://www.alpha-ndt.com/Upload/Clients/petronas.png" },
  { name: "Vietsovpetro", abbr: "VSP", logo: "http://www.alpha-ndt.com/Upload/Clients/petronas.png" },
  { name: "PTSC", abbr: "PTSC", logo: "/logos/ptsc.png" },
  { name: "PetroVietnam", abbr: "PVN", logo: "/logos/petrovietnam.png" },
  { name: "DNV", abbr: "DNV", logo: "/logos/dnv.png" },
  { name: "Bureau Veritas", abbr: "BV", logo: "/logos/bureau-veritas.png" },
  { name: "ABS", abbr: "ABS", logo: "/logos/abs.png" },
  { name: "ClassNK", abbr: "NK", logo: "/logos/classnk.png" },
  { name: "JVPC", abbr: "JVPC", logo: "/logos/jvpc.png" },
  { name: "Dung Quat", abbr: "DQR", logo: "/logos/dung-quat.png" },
  { name: "EVN", abbr: "EVN", logo: "/logos/evn.png" },
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
  const { lang } = useLang();

  return (
    <section id="partners" className="py-20 bg-slate-800 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-orange-400 font-semibold text-sm tracking-widest uppercase mb-3">
            {t(lang, "partners.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {t(lang, "partners.heading1")}{" "}
            <span className="text-orange-400">
              {t(lang, "partners.headingHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Proud to serve the world's leading oil and gas, energy, and shipbuilding corporations.
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
              className="flex gap-4 animate-marquee hover:pause-animation"
              style={{
                width: "max-content" // Đảm bảo width bao trọn list
              }}
            >
              {doubled.map((partner, i) => (
                <div
                  key={i}
                  className="flex-none flex items-center justify-center w-40 h-20 bg-slate-700 border border-slate-700 rounded-xl hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-200 group p-3 bg-white" 
                  // Ghi chú: Tôi đã đổi nền ô (bg) sang màu trắng (bg-white) để các logo hiển thị rõ nhất. Nếu muốn giữ nền tối, bạn dùng logo có chữ trắng/trong suốt.
                >
                  {/* BƯỚC 2: Render hình ảnh thay cho chữ */}
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  ) : (
                    // Fallback hiển thị text nếu bạn chưa kịp chuẩn bị ảnh cho đối tác đó
                    <div className="text-center">
                      <div className="text-slate-800 font-black text-lg group-hover:text-blue-500 transition-colors">
                        {partner.abbr}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip (Giữ nguyên) */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* ... */}
        </div>
      </div>

      {/* Marquee keyframes via style tag */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}