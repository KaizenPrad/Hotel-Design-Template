/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11100F",
        "ink-soft": "#171513",
        surface: "#211D19",
        espresso: "#30271F",
        cream: "#F5F0E8",
        sand: "#B8AEA0",
        gold: "#C6A267",
        champagne: "#D8BE8B",
        night: "#181513",
        line: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "Times New Roman", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        label: "0.32em",
        wide2: "0.22em",
      },
      maxWidth: {
        luxe: "1400px",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.35)" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(-100%)" },
          "60%, 100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.8s infinite",
        "soft-pulse": "soft-pulse 3.4s ease-in-out infinite",
        "scroll-cue": "scroll-cue 2.6s cubic-bezier(0.65,0,0.35,1) infinite",
      },
    },
  },
  plugins: [],
};
