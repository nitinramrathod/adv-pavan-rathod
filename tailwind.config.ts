import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#F5F5F5",
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#E8EDF3",
          100: "#C5D0DE",
          200: "#9FB0C6",
          300: "#7990AE",
          400: "#5A749A",
          500: "#3A5885",
          600: "#2D4672",
          700: "#20345F",
          800: "#16254A",
          900: "#0B1F3A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E3",
          100: "#F6EBC0",
          200: "#EDDA8A",
          300: "#E4C855",
          400: "#D4AF37",
          500: "#B8961F",
          600: "#9A7C18",
          700: "#7B6212",
          800: "#5D490D",
          900: "#3F3109",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212,175,55,0)" },
        },
      },
      borderColor: {
        border: "hsl(var(--border))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #0B1F3A 0%, #162d52 50%, #0B1F3A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
