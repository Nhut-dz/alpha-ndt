// ============================================================
// Hero Section - Image Slideshow Banner (Clean)
// ============================================================
import { useState, useEffect, useCallback } from "react";

const bannerSlides = [
  { src: "/banner-1.jpg", text: "Give us a chance and we will prove our efficiency!" },
  { src: "/banner-2.jpg", text: "Powerful and effective cooperation\nlasting for years..." },
];

const SLIDE_DURATION = 3000; // 3s per slide
const FADE_DURATION = 800; // 0.8s transition

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Image Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {bannerSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Banner Text Overlay */}
      <div className="relative z-10 text-left px-8 md:px-16 lg:px-24">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className="whitespace-pre-line"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
              position: index === 0 ? "relative" : "absolute",
              inset: index === 0 ? undefined : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {index === 0 ? (
              <div className="text-white drop-shadow-lg" style={{ fontFamily: "'Arial Unicode MS', Arial, sans-serif" }}>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold italic mb-2" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}><span className="text-orange-400">Give us</span></p>
                <p className="text-xl md:text-3xl lg:text-4xl">a chance and we will prove our efficiency!</p>
              </div>
            ) : (
              <div className="text-white drop-shadow-lg" style={{ fontFamily: "'Arial Unicode MS', Arial, sans-serif" }}>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold italic mb-2" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}><span className="text-orange-400">Powerful</span></p>
                <p className="text-xl md:text-3xl lg:text-4xl">and effective cooperation lasting for years...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
