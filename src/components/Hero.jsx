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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 text-center px-4">
        {bannerSlides.map((slide, index) => (
          <p
            key={index}
            className="text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg whitespace-pre-line"
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
            {slide.text}
          </p>
        ))}
      </div>
    </section>
  );
}
