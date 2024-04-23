import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tw-elements/plugin.cjs"),
  ],
};
export default config;
