/** @type {import('tailwindcss').Config} */
// ============================================================
// Tailwind CSS Configuration - Alpha NDT
// ============================================================
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Brand Colors ──────────────────────────────────────
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",  // Primary blue
          600: "#2563eb",  // Primary dark
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },

      // ─── Typography ────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },

      // ─── Spacing ───────────────────────────────────────────
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        "section": "6rem",
      },

      // ─── Border Radius ─────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // ─── Box Shadows ───────────────────────────────────────
      boxShadow: {
        "card": "0 4px 24px -2px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 12px 40px -4px rgba(59, 130, 246, 0.15)",
        "blue-glow": "0 0 40px -10px rgba(59, 130, 246, 0.5)",
      },

      // ─── Animations ────────────────────────────────────────
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "marquee": "marquee 30s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      // ─── Backdrop Blur ─────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },

      // ─── Background Image ──────────────────────────────────
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },

      // ─── Screens ───────────────────────────────────────────
      screens: {
        "xs": "375px",
      },
    },
  },
  plugins: [
    // Optional: Add @tailwindcss/forms for better form styling
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
