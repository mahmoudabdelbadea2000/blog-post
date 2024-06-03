/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
        "source-serif": ["Source Serif", "serif"],
      },
      colors: {
        "main-color": "#4B6BFB",
        "secondary-color": "#97989F",
        "heading-color": "#181A2A",
        "text-color": "#3B3C4A",
        "bg-color": "#f6f8ff",
      },
    },
  },
  plugins: [],
};
