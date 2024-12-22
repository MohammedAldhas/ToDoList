/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      mainColor: "#009688",
      deletColor: "#b91c1c",
      editColor: "#0891b2",
      white: "#f0f0f0",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {},
  },
  plugins: [daisyui],
};
