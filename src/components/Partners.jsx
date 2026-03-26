// ============================================================
// Partners / Clients Logo Slider Section
// ============================================================
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

const partnersList = [
  { name: "Alstom", abbr: "Alstom", logo: "/logo-client/alstom.png" },
  { name: "Applus+", abbr: "Applus", logo: "/logo-client/applus.png" },
  { name: "Biển Đông POC", abbr: "Bien Dong", logo: "/logo-client/biendong.png" },
  { name: "BP", abbr: "BP", logo: "/logo-client/bp.png" },
  { name: "Bureau Veritas", abbr: "BV", logo: "/logo-client/bureau.png" },
  { name: "Chevron", abbr: "Chevron", logo: "/logo-client/chevron.png" },
  { name: "EVN (Điện lực)", abbr: "EVN", logo: "/logo-client/dienluc.png" },
  { name: "DNV", abbr: "DNV", logo: "/logo-client/dnv.png" },
  { name: "Doosan", abbr: "Doosan", logo: "/logo-client/doosan.png" },
  { name: "EG", abbr: "EG", logo: "/logo-client/eg.png" },
  { name: "Harbour Energy", abbr: "Harbour", logo: "/logo-client/harbour.png" },
  { name: "HD", abbr: "HD", logo: "/logo-client/hd.png" },
  { name: "Hilong", abbr: "Hilong", logo: "/logo-client/hilong.png" },
  { name: "JGC", abbr: "JGC", logo: "/logo-client/jgc.png" },
  { name: "JVPC", abbr: "JVPC", logo: "/logo-client/jvpc.png" },
  { name: "Lilama", abbr: "Lilama", logo: "/logo-client/lilama.png" },
  { name: "Lloyd's Register", abbr: "LR", logo: "/logo-client/lr.png" },
  { name: "LSP", abbr: "LSP", logo: "/logo-client/lsp.png" },
  { name: "Masan", abbr: "Masan", logo: "/logo-client/masan.png" },
  { name: "Mermaid", abbr: "Mermaid", logo: "/logo-client/mermaid.png" },
  { name: "Moody's", abbr: "Moody", logo: "/logo-client/moody.png" },
  { name: "Mushtari", abbr: "Mushtari", logo: "/logo-client/mushtari.png" },
  { name: "PetroVietnam", abbr: "PVN", logo: "/logo-client/petrovietnam.png" },
  { name: "Phân bón Cà Mau", abbr: "PVCFC", logo: "/logo-client/phanbocamau.jpg" },
  { name: "Phú Mỹ", abbr: "Phu My", logo: "/logo-client/phumi.png" },
  { name: "PTCS", abbr: "PTCS", logo: "/logo-client/PTCS.png" },
  { name: "PETRONAS", abbr: "PTN", logo: "/logo-client/PTN.png" },
  { name: "PTSC 1", abbr: "PTSC-1", logo: "/logo-client/ptsc-1.png" },
  { name: "PTSC", abbr: "PTSC", logo: "/logo-client/PTSC.png" },
  { name: "PV GAS", abbr: "PV GAS", logo: "/logo-client/pv-gas.png" },
  { name: "Qualitech", abbr: "Qualitech", logo: "/logo-client/qualitech.png" },
  { name: "Rosneft", abbr: "Rosneft", logo: "/logo-client/rosneft.png" },
  { name: "Siemens", abbr: "Siemens", logo: "/logo-client/siemens.png" },
  { name: "Schlumberger", abbr: "SLB", logo: "/logo-client/SLB.png" },
  { name: "Technip", abbr: "Technip", logo: "/logo-client/technip.png" },
  { name: "Vard", abbr: "Vard", logo: "/logo-client/vard.png" },
  { name: "Vestas", abbr: "Vestas", logo: "/logo-client/vestas.png" },
  { name: "Vina", abbr: "Vina", logo: "/logo-client/vina.png" },
  { name: "VN-Japan", abbr: "VN-Japan", logo: "/logo-client/vn-japan.jpg" },
  { name: "Vietsovpetro", abbr: "VSP", logo: "/logo-client/vsp.png" }
];

const doubled = [...partnersList, ...partnersList];

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { 
        setVisible(true); 
        obs.disconnect(); 
      } 
    }, { threshold: 0.1 });
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
              style={{ width: "max-content" }}
            >
              {doubled.map((partner, i) => (
                <div
                  key={i}
                  className="flex-none flex items-center justify-center w-40 h-24 bg-white border border-slate-700 rounded-xl hover:border-orange-400/50 transition-all duration-300 group p-4" 
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      // Đã xóa 'filter grayscale' để hiện màu gốc. Thêm hiệu ứng phóng nhẹ khi hover.
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-slate-800 font-black text-lg group-hover:text-orange-500 transition-colors">
                        {partner.abbr}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip - Bạn có thể giữ hoặc xóa tùy ý */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Nội dung stats của bạn ở đây... */}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Tăng từ 30s lên 40s để trôi mượt hơn với list dài */
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}