/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        main: "#006d77",
        hover: "#7ab0b5",
        background: "#f4f4f4",
        "second-background": "#d9d9d9",
      },
      fontFamily: {
        cairo: "Cairo, sans-serif",
      },
    },
  },
  plugins: [],
};
