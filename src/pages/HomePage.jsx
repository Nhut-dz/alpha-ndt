import { lazy, Suspense } from "react";
import Hero from "../components/Hero";

const About = lazy(() => import("../components/About"));
const Services = lazy(() => import("../components/Services"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Partners = lazy(() => import("../components/Partners"));
const WhyUs = lazy(() => import("../components/WhyUs"));
const News = lazy(() => import("../components/News"));
const Careers = lazy(() => import("../components/Careers"));
const Contact = lazy(() => import("../components/Contact"));

const SectionLoader = () => (
  <div className="py-24 flex justify-center bg-slate-800">
    <div className="flex gap-2">
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionLoader />}><About /></Suspense>
      <Suspense fallback={<SectionLoader />}><Services /></Suspense>
      <Suspense fallback={<SectionLoader />}><Portfolio /></Suspense>
      <Suspense fallback={<SectionLoader />}><Partners /></Suspense>
      <Suspense fallback={<SectionLoader />}><WhyUs /></Suspense>
      <Suspense fallback={<SectionLoader />}><News /></Suspense>
      <Suspense fallback={<SectionLoader />}><Careers /></Suspense>
      <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
    </>
  );
}
