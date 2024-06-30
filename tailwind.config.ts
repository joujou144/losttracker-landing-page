import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 5px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 12px 16px var(--tw-shadow-color)",
      },
      colors: {
        "primary-100": "#81a1c1",
        "primary-200": "#8fabc8",
        "primary-300": "#9db5cf",
        "primary-400": "#abbfd5",
        "primary-500": "#b9cadc",
        "primary-600": "#c7d4e3",
        "primary-700": "#eceff4",

        "dark-100": "#141414",
        "dark-200": "#292929",
        "dark-300": "#404040",
        "dark-400": "#585858",
        "dark-500": "#727272",
        "dark-600": "#8c8c8c",

        "surface-mixed-100": "#1e2023",
        "surface-mixed-200": "#333538",
        "surface-mixed-300": "#494b4d",
        "surface-mixed-400": "#606264",
        "surface-mixed-500": "#797a7c",
        "surface-mixed-600": "#929395",

        midnight: "#090911",
        highlight: "#3291ff",
        grapefruit: "#DA4453",
        amaranth: "#E52B50",

        "warm-gray": "#cfc6c1",
        gray: {
          10: "#EEEEEE",
          20: "#A3A3A3",
          30: "#7B7B7B",
          50: "#585858",
          70: "#222020",
          90: "#141414",
          200: "#121214",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
export default config;
