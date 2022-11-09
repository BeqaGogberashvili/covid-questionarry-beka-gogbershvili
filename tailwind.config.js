/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anonymous: ["Anonymous Pro B", "sans-serif"],
        helvetica: ["Helvetica Neue Lt Geo", "sans-serif"],
        tbc: ["TBC Contractica CAPS Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
