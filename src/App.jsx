// ============================================================
// App.jsx - Main Application Entry
// Alpha NDT Website - React + Tailwind CSS
// ============================================================
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy load below-fold sections for performance
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Partners = lazy(() => import("./components/Partners"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const News = lazy(() => import("./components/News"));
const Careers = lazy(() => import("./components/Careers"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Section skeleton loader
const SectionLoader = () => (
  <div className="py-24 flex justify-center bg-slate-800">
    <div className="flex gap-2">
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  </div>
);

// Back to top button component
function BackToTop() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
      aria-label="Về đầu trang"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

// Floating phone CTA
function FloatingCTA() {
  return (
    <a
      href="tel:+842838156789"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
      aria-label="Gọi ngay"
    >
      <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="hidden sm:block">Gọi ngay</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-800 font-sans antialiased">
      {/* Sticky Header - always loaded */}
      <Header />

      {/* Hero - always loaded (above fold) */}
      <Hero />

      {/* Below-fold sections - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Partners />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyUs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <News />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Careers />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div className="bg-slate-900 h-32" />}>
        <Footer />
      </Suspense>

      {/* Floating UI elements */}
      <BackToTop />
      <FloatingCTA />
    </div>
  );
}
