/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B5897",
        secondary: "#DAA625",
        tertiary: "#28941E",
      },
      fontFamily: {
        Raleway: "raleway",
      },
    },
  },
  plugins: [],
};

