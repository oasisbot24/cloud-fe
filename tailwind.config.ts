import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#__next",
  theme: {
    extend: {
      colors: {
        brand: "#223CE9",
        "sub-1": "#f5f5f5",
        "sub-2": "#2BB7F5",
        "sub-3": "#DE4B4B",
        "sub-4": "#6F6C99",
        "sub-5": "#FEBD38",
        "font-1": "#222222",
        "font-2": "#404040",
        "font-3": "#575757",
        "neutral-800": "#404040",
        "neutral-700": "#686868",
        "neutral-600": "#999999",
        "neutral-500": "#b8b8b8",
        "neutral-400": "#cdcdcd",
        "neutral-300": "#E9E9E9",
        "neutral-200": "#F6F6F6",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
