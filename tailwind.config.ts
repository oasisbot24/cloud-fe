import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#__next",
  theme: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
