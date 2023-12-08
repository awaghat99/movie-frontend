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
      },
      backgroundImage: {
        hero: "url('./src/assets/images/placeHolderPoster.jpg')",
      },
    },
  },
  plugins: [],
};
