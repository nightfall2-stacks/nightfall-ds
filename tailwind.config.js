/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0A0A0A",
        "dark-card": "#1A1A1A",
        "text-primary": "#FFFFFF",
        "text-secondary": "#EDEDED",
        "text-tertiary": "#888888",
        "accent-gold": "#D4AF37",
        "accent-copper": "#C17817",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      spacing: {
        "section-gap": "80px",
        "hero-padding": "120px",
      },
      animation: {
        "scroll-tape": "scroll-tape 20s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "scroll-tape": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        "glow": "0 0 40px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
