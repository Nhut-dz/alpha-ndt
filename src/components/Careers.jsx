// ============================================================
// Careers Section - Job Openings + CTA
// ============================================================
import { useEffect, useRef, useState } from "react";
import { jobOpenings } from "../data";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

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
  const { lang } = useLang();

  
}
