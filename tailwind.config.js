/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      gray: "#A0A0A0",
      yellow: "#FFF200",
      blue: "#0000EE",
      white: "#FFF",
      black: "#000",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
  },
  plugins: [],
};
