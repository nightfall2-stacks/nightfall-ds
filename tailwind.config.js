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
        "dark-card": "#141414",
        "dark-border": "#1E1E1E",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "ui-monospace", "monospace"],
      },
      spacing: {
        "section-gap": "clamp(4rem, 8vw, 6rem)",
        "hero-padding": "120px",
      },
      animation: {
        "scroll-tape": "scroll-tape 20s linear infinite",
      },
      keyframes: {
        "scroll-tape": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "subtle": "0 1px 2px 0 rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
