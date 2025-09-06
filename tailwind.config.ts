import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)", // solid color
      },
      backgroundImage: {
        "primary-gradient": "var(--primary-gradient)", // gradient
      },
    },
  },
  plugins: [],
};
export default config;
