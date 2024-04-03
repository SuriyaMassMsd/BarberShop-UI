/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Logofont: [" Sacramento, cursive;"],
        font2: ["Cinzel, serif"],
        fontHome: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
