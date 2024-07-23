/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "krona one": ["Krona One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    plugins: [],
  },
};
