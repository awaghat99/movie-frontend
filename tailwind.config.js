/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        navy: "#05151E",
        green: "#38A935",
        "semi-gray": "#243145c2",
      },
    },
  },
  plugins: [],
};
