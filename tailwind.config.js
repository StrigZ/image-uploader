/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      notoSans: "'Noto Sans', sans-serif;",
    },
    boxShadow: {
      cardShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
