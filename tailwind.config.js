/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors:{
        background: "#191923",
        mainColor: "#d400ff",
        dropShadow1: "#8b00a7",
        dropShadow2:" #a700c9",
      }
    },
  },
  plugins: [],
};
