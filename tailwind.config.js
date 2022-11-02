/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        main: "#006d77",
        hover: "#7ab0b5",
        background: "#f4f4f4",
        dark: "#040404",
        "second-background": "#d9d9d9",
        "dark-bg": "#1a1919",
      },
      fontFamily: {
        cairo: "Cairo, sans-serif",
      },
    },
  },
  plugins: [],
};
