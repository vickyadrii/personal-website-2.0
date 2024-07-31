import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": {
          400: "#9C9595",
          500: "#A1A1AA",
          600: "#4D4D4D",
          700: "#1E1E1F",
          800: "#202020",
          850: "#0B0B0B",
          900: "#161616",
          950: "#0A0A0A",
        },
        "primary-blue": {
          500: "#8DDBE0",
        },
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
