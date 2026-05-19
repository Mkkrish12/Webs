import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      colors: {
        surface: {
          DEFAULT: "#0a0a0a",
          card: "#111111",
          hover: "#1a1a1a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
