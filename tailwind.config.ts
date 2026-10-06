import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: { DEFAULT: "#0F172A", 950: "#0A0F1E" },
        brand: {
          deep: "#1E3A8A",
          blue: "#2563EB",
          cyan: "#00C2FF",
          violet: "#8B5CF6",
        },
        ink: { DEFAULT: "#1E293B", muted: "#475569" },
        slate: { 50: "#F8FAFC" },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.06)",
        "card-hover": "0 4px 8px rgba(15,23,42,0.06), 0 16px 40px rgba(37,99,235,0.14)",
        glow: "0 8px 30px rgba(37,99,235,0.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #00C2FF 0%, #2563EB 55%, #8B5CF6 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
