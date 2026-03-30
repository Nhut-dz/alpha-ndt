// ============================================================
// AboutPage - Comprehensive Company Profile Page
// ============================================================
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const VietnamMap = lazy(() => import("../components/VietnamMap"));

function useFadeIn(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ---- DATA ----
const quickStats = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Founded",
    value: "2002",
    desc: "Over 20 years of experience",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Industries",
    value: "5+",
    desc: "Oil & Gas, Marine, Energy, Construction, Wind",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Technology",
    value: "PAUT, TOFD, AUT",
    desc: "Advanced & Conventional NDT methods",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Certifications",
    value: "ISO 9001 & 17025",
    desc: "PCN, CSWIP, ASNT, ISO 9712",
  },
];

const coreValues = [
  {
    title: "Pioneer",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description:
      "Always at the forefront of adopting new NDT technologies and inspection methodologies. We invest in R&D and continuously upgrade our equipment and capabilities to deliver cutting-edge solutions ahead of industry trends.",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Responsibility",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description:
      "Every inspection report we deliver carries the weight of safety for people and assets. We take full accountability for our work quality, ensuring accuracy, transparency, and compliance with the highest international standards.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Care",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description:
      "We treat every client relationship with dedication and attentiveness. From initial consultation to project completion, our team provides personalized support, proactive communication, and genuine commitment to client satisfaction.",
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Harmony",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    description:
      "We believe in balanced growth — harmonizing business performance with employee well-being, environmental responsibility, and community contribution. Our success is built on sustainable partnerships and mutual respect.",
    color: "from-emerald-500 to-teal-500",
  },
];

const milestones = [
  {
    year: "2025",
    title: "Chevron & Statfjord Projects",
    image: "/about-timeline-9.jpg",
    items: [
      "Delivered NDT services for Chevron Phase 67 offshore platform installation campaign.",
      "Provided PWHT services for Statfjord C oil & gas project.",
      "Expanded Block B Gas Project scope with PWHT heat treatment furnace system.",
      "Continued growth in renewable energy with offshore wind farm inspection contracts.",
    ],
  },
  {
    year: "2024",
    title: "AUT Technology & Block B Gas",
    image: "/about-timeline-8.jpg",
    items: [
      "Developed proprietary AE MAX AUT® Scanner System for 406km pipeline inspection.",
      "Won major NDT contract for Vietnam Block B Gas Project (PQPOC).",
      "Performed NDT for Fengmiao Phase 1 Offshore Wind Farm with real-time digital reporting.",
    ],
  },
  {
    year: "2023",
    title: "Major Project Milestones",
    image: "/about-timeline-7.jpg",
    items: [
      "Completed PAUT inspection for LPG Tanks at Dinh Vu Project.",
      "Delivered baseline corrosion survey for STTFFD jacket/deck legs.",
      "Expanded PWHT services for Vietnam Block B Gas Project.",
    ],
  },
  {
    year: "2021",
    title: "Wind Energy & Renewable Sector",
    image: "/about-timeline-6.jpg",
    items: [
      "Launched Wind Energy Service (WES) division for wind turbine inspection.",
      "Introduced GOES system for wind turbine gear oil exchange.",
      "Entered the renewable energy market with onshore and offshore wind farm services.",
    ],
  },
  {
    year: "2018",
    title: "International Expansion",
    image: "/about-timeline-5.jpg",
    items: [
      "Expanded to international markets: Ghana (OCTP), Cambodia, Thailand, India.",
      "Provided NDT for Saipem pipeline fabrication in Thailand.",
      "Strengthened partnerships with Schlumberger, ONGC, and Doosan.",
    ],
  },
  {
    year: "2014",
    title: "ISO/IEC 17025 & Growth",
    image: "/about-timeline-4.jpg",
    items: [
      "Achieved ISO/IEC 17025 testing laboratory accreditation.",
      "Completed SRU2 Sulfur Recovery Unit project at Dung Quat Refinery.",
      "Delivered baseline corrosion survey for Su Tu Nau & Su Tu Vang fields.",
    ],
  },
  {
    year: "2012",
    title: "10th Anniversary",
    image: "/about-gallery-6.jpg",
    items: [
      "Celebrated 10th anniversary with over 200 employees.",
      "Completed Thang Long – Dong Do PLEM & PLET subsea fabrication project.",
      "Delivered NDT for Hai Su Trang – Hai Su Den field development.",
      "Expanded services to Cambodia (Phnom Penh Sugar Plant).",
    ],
  },
  {
    year: "2008",
    title: "Offshore Oil & Gas Expansion",
    image: "/about-timeline-3.jpg",
    items: [
      "Expanded into offshore oil & gas sector with major EPCI contractors.",
      "Began partnership with PTSC M&C and Vietsovpetro for platform fabrication.",
      "Provided NDT for Su Tu Vang Subsea Template (Block 15-1).",
    ],
  },
  {
    year: "2005",
    title: "ISO 9001 Certification",
    image: "/about-timeline-2.jpg",
    items: [
      "Achieved ISO 9001 Quality Management System certification.",
      "Obtained supplier approvals from ABS, Bureau Veritas, and DNV.",
      "Expanded conventional NDT team to 50+ certified technicians.",
    ],
  },
  {
    year: "2002",
    title: "Company Founded",
    image: "/about-timeline-1.jpg",
    items: [
      "Alpha NDT established in Ho Chi Minh City (Enterprise Reg. No. 0306455519).",
      "Started with conventional NDT services: RT, UT, MT, PT.",
      "First projects for local shipbuilding and mechanical construction industries.",
    ],
  },
];

const leaders = [
  { name: "Nguyễn Hữu Thời", role: "Chủ tịch / Chairman", image: "/leader-1.jpg" },
  { name: "Trần Quốc Dũng", role: "Giám Đốc / Director", image: "/leader-2.jpg" },
  { name: "Nguyễn Giang Nam", role: "Phó Giám Đốc / Deputy Director", image: "/leader-3.jpg" },
];

const businessSectors = [
  {
    title: "Oil & Gas",
    desc: "Upstream, midstream, and downstream inspection for platforms, pipelines, refineries, and processing plants.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: "Marine & Shipbuilding",
    desc: "Hull inspection, vessel fabrication NDT, and classification society survey support.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h1l2-4h12l2 4h1M5 17l-2 4h18l-2-4M12 3v6m-4-2l4 4 4-4" />
      </svg>
    ),
  },
  {
    title: "Power & Energy",
    desc: "Boiler, turbine, and piping inspection for thermal and gas power plants.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Wind Energy",
    desc: "Blade inspection, tower NDT, gearbox maintenance, and rope access services for wind farms.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12l-8-4.5M12 12v9m0-9l8-4.5M4 7.5l8 4.5M20 7.5l-8 4.5M4 7.5v9l8 4.5M20 7.5v9l-8 4.5" />
      </svg>
    ),
  },
  {
    title: "Infrastructure",
    desc: "Bridge, airport, and civil construction inspection with certified welding inspectors.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Petrochemical",
    desc: "Refinery equipment, storage tanks, and process piping inspection during turnarounds.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

// ---- COUNTER HOOK ----
function useCountUp(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);
  return count;
}

// ---- COMPONENTS ----

function SectionTitle({ label, heading, highlight, children, center = false }) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      <span className="inline-block text-orange-400 font-bold text-2xl md:text-3xl tracking-widest uppercase mb-3">
        {label}
      </span>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
        {heading} <span className="text-orange-400">{highlight}</span>
      </h2>
      {children && <p className={`text-slate-600 text-lg max-w-2xl ${center ? "mx-auto" : ""}`}>{children}</p>}
    </div>
  );
}

function HistoryTimeline({ fadeRef }) {
  const [activeYear, setActiveYear] = useState(milestones[0].year);
  const timelineRef = useRef(null);

  // Get 3 milestones to show: active + next 2
  const activeIdx = milestones.findIndex((m) => m.year === activeYear);
  const visibleMilestones = milestones.slice(activeIdx, activeIdx + 3);
  // If less than 3, pad from the end
  while (visibleMilestones.length < 3 && visibleMilestones.length < milestones.length) {
    const nextIdx = (activeIdx + visibleMilestones.length) % milestones.length;
    if (!visibleMilestones.find((m) => m.year === milestones[nextIdx].year)) {
      visibleMilestones.push(milestones[nextIdx]);
    } else break;
  }

  return (
    <section className="py-16 bg-slate-50" ref={fadeRef.ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            fadeRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <SectionTitle label="OUR HISTORY" heading="Milestones &" highlight="Development" />
        </div>

        {/* Horizontal Year Timeline Bar */}
        <div
          className={`mb-10 transition-all duration-700 delay-100 ${
            fadeRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative overflow-x-auto pb-2" ref={timelineRef}>
            <div className="flex items-center min-w-max px-2">
              {milestones.map((ms, i) => (
                <div key={ms.year} className="flex items-center">
                  {/* Year button */}
                  <button
                    onClick={() => setActiveYear(ms.year)}
                    className={`relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                      activeYear === ms.year
                        ? "bg-orange-500 text-slate-800 shadow-lg shadow-orange-500/30 scale-110"
                        : "bg-slate-100 text-slate-600 border border-slate-200 hover:border-orange-500/50 hover:text-orange-400"
                    }`}
                  >
                    {ms.year}
                  </button>
                  {/* Dashed connector */}
                  {i < milestones.length - 1 && (
                    <div className="w-8 md:w-12 h-px border-t-2 border-dashed border-slate-300 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            fadeRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {visibleMilestones.map((ms) => (
            <div
              key={ms.year}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                ms.year === activeYear
                  ? "border-orange-500/50 shadow-lg shadow-orange-500/10"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={ms.image}
                  alt={ms.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=300&fit=crop";
                  }}
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <h3
                  className={`font-black text-2xl mb-3 ${
                    ms.year === activeYear ? "text-orange-400" : "text-slate-800"
                  }`}
                >
                  {ms.year}
                </h3>
                <ul className="space-y-2">
                  {ms.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-orange-400 mt-0.5 flex-shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const fade1 = useFadeIn();
  const fade2 = useFadeIn();
  const fade3 = useFadeIn();
  const fade4 = useFadeIn();
  const fade5 = useFadeIn();
  const fade6 = useFadeIn();
  const fade7 = useFadeIn();
  const fade8 = useFadeIn();
  const fade9 = useFadeIn();

  return (
    <div className="bg-white">
      {/* ===== BANNER ===== */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src="/about-banner.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ imageRendering: "auto", filter: "contrast(1.02)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-left px-8 md:px-16 lg:px-24 pb-24">
          <p className="text-xl md:text-3xl lg:text-4xl text-slate-200 max-w-4xl leading-relaxed drop-shadow-lg font-semibold" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
            A leading regional enterprise in the field of non-destructive testing (NDT), providing high-quality technical solutions and industrial services.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About" }]} />
      </div>

      {/* ===== 1. COMPANY OVERVIEW ===== */}
      <section className="py-16 bg-white" ref={fade1.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              fade1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionTitle label="OVERVIEW" heading="Your Trusted" highlight="Inspection Partner">
              Established in 2002, Alpha NDT is a leading company in Vietnam specializing in
              Non-Destructive Testing and Industrial Inspection services.
            </SectionTitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 delay-100 ${
                fade1.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                Established in 2002 &bull; Ho Chi Minh City, Vietnam
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 leading-tight">
                AlphaNDT &ndash; Over 20 years supporting Vietnam&apos;s industrial sector
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Alpha NDT (ALPHA TECHNICAL INSPECTION SERVICES AND TRADING JOINT STOCK COMPANY)
                was established in 2002 with Enterprise Registration No. 0306455519, issued by
                the Department of Planning and Investment of Ho Chi Minh City. We have been
                recognized as a leading NDT service provider in Vietnam and a reliable contractor
                for many domestic and international companies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                With over <strong className="text-slate-800">100+ certified NDT engineers</strong> and
                technicians, we provide professional inspection services across{" "}
                <strong className="text-orange-400">oil & gas, marine, shipbuilding, power generation,
                wind energy, and infrastructure</strong> industries. Our commitment to quality,
                safety, and accuracy has earned us the trust of leading global corporations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Certified with <strong className="text-slate-800">ISO 9001:2015</strong> and{" "}
                <strong className="text-slate-800">ISO/IEC 17025</strong>, and approved by
                classification societies including ABS, Bureau Veritas, ClassNK, DNV, KR, and VR.
              </p>
            </div>
            <div
              className={`relative transition-all duration-700 delay-200 ${
                fade1.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <img
                  src="/about.jpg"
                  alt="Alpha NDT Team"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop";
                  }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. QUICK STATS BUTTONS ===== */}
      <section className="py-12 bg-slate-50" ref={fade2.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className={`bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center
                  hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10
                  transition-all duration-500 hover:-translate-y-1
                  ${fade2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                  {stat.icon}
                </div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className="text-slate-800 font-bold text-lg mb-1">{stat.value}</p>
                <p className="text-slate-600 text-xs">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. COMPANY GALLERY ===== */}
      <section className="py-16 bg-white" ref={fade3.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              fade3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionTitle label="OUR COMPANY" heading="Inside" highlight="Alpha NDT" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Image 1 - Team photo */}
            <div
              className={`rounded-xl overflow-hidden transition-all duration-500
                ${fade3.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <img
                src="/about-gallery-1.jpg"
                alt="Alpha NDT Team"
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image 2 - Marathon event */}
            <div
              className={`rounded-xl overflow-hidden transition-all duration-500
                ${fade3.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "80ms" }}
            >
              <img
                src="/about-gallery-2.jpg"
                alt="Alpha NDT Community Event"
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image 3 - On-site engineers */}
            <div
              className={`rounded-xl overflow-hidden transition-all duration-500
                ${fade3.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "160ms" }}
            >
              <img
                src="/about-gallery-3.jpg"
                alt="Alpha NDT Engineers On-Site"
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image 4 - Project management office */}
            <div
              className={`rounded-xl overflow-hidden transition-all duration-500
                ${fade3.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "240ms" }}
            >
              <img
                src="/about-gallery-4.jpg"
                alt="Alpha NDT Project Management"
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image 5 - Team building beach */}
            <div
              className={`rounded-xl overflow-hidden transition-all duration-500
                ${fade3.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "320ms" }}
            >
              <img
                src="/about-gallery-5.jpg"
                alt="Alpha NDT Team Building"
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Image 6 - 10th Anniversary */}
            <div
              className={`rounded-xl overflow-hidden transition-all duration-500
                ${fade3.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <img
                src="/about-gallery-6.jpg"
                alt="Alpha NDT 10th Anniversary"
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. VISION & MISSION ===== */}
      <section className="relative py-16 overflow-hidden" ref={fade4.ref}>
        <img
          src="/vision-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div
              className={`transition-all duration-700 delay-100 ${
                fade4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-14 h-14 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-orange-400 font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-slate-200 leading-relaxed text-lg">
                To be the most trusted and technologically advanced NDT and inspection company
                in Southeast Asia, setting the benchmark for quality, innovation, and safety
                in industrial testing services. We envision a future where every critical
                infrastructure and industrial asset is safeguarded by world-class inspection
                standards.
              </p>
            </div>
            {/* Mission */}
            <div
              className={`transition-all duration-700 delay-200 ${
                fade4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm0 0h9" />
                </svg>
              </div>
              <h3 className="text-orange-400 font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-slate-200 leading-relaxed text-lg">
                To deliver reliable, efficient, and professional NDT and inspection services
                that exceed client expectations. We are committed to protecting lives and
                assets through precise testing, continuous innovation, and unwavering
                adherence to international quality standards. Our mission is to empower
                industries with the confidence that their critical equipment and structures
                are safe and compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. CORE VALUES ===== */}
      <section className="py-16 bg-white" ref={fade5.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              fade5.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionTitle label="CORE VALUES" heading="What" highlight="Drives Us" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className={`group bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center
                  hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2
                  ${fade5.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${val.color} rounded-2xl flex items-center justify-center mx-auto mb-5 text-slate-800 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {val.icon}
                </div>
                <h3 className="text-slate-800 font-bold text-lg mb-1">{val.title}</h3>
                <p className="text-orange-400 text-sm font-medium mb-3">{val.titleVi}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. HISTORY TIMELINE ===== */}
      <HistoryTimeline fadeRef={fade6} />

      {/* ===== 7. LEADERSHIP ===== */}
      <section className="py-16 bg-white" ref={fade7.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              fade7.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionTitle label="LEADERSHIP" heading="Our" highlight="Management Team" center />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leaders.map((person, i) => (
              <div
                key={i}
                className={`group bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden
                  hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1
                  ${fade7.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-80 overflow-hidden bg-slate-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&facepad=2";
                    }}
                  />
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-slate-800 font-bold text-base mb-1">{person.name}</h4>
                  <p className="text-orange-400 text-sm font-medium">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. BUSINESS SECTORS ===== */}
      <section className="py-16 bg-slate-50" ref={fade8.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              fade8.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionTitle label="BUSINESS SECTORS" heading="Industries" highlight="We Serve" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSectors.map((sector, i) => (
              <div
                key={i}
                className={`bg-white border border-slate-200 shadow-sm rounded-2xl p-6
                  hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1
                  ${fade8.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center mb-4 border border-orange-500/20">
                  {sector.icon}
                </div>
                <h4 className="text-slate-800 font-bold text-base mb-2">{sector.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. DISTRIBUTION NETWORK - VIETNAM MAP ===== */}
      <section className="py-20 bg-slate-50" ref={fade9.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              fade9.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block text-green-600 font-bold text-2xl md:text-3xl tracking-widest uppercase">
              DISTRIBUTION NETWORK
            </span>
          </div>
          <div
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700 ${
              fade9.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left: Text & Stats */}
            <div className="flex-1 order-2 lg:order-1">
              <p className="text-slate-700 text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                Hệ thống dự án trải dài từ Bắc vào Nam, mang dịch vụ kiểm tra chất lượng đến tận công trình.
              </p>

              {/* Big counter */}
              <div className="mb-4">
                <span className="text-7xl sm:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
                  {useCountUp(500, 2500, fade9.visible)}+
                </span>
              </div>
              <p className="text-slate-700 font-semibold text-xl mb-4">
                Mạng lưới dự án phủ sóng 34 tỉnh thành.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Alpha NDT tự hào là đơn vị NDT hàng đầu Việt Nam với mạng lưới dự án
                phủ sóng từ Bắc vào Nam, từ các nhà máy điện, lọc dầu, đóng tàu cho đến
                các giàn khoan ngoài khơi và trang trại điện gió.
              </p>
            </div>

            {/* Right: Vietnam Map (real provinces) */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <Suspense fallback={<div className="w-[280px] md:w-[360px] lg:w-[400px] h-[500px] bg-slate-100 rounded-xl animate-pulse" />}>
                <VietnamMap />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
