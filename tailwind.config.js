/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oldenburg: "Oldenburg",
        poppins: "Poppins"
      },
      colors: {
        primary: "#3e6985",
        secondary: "#c6494c",
        textPrimary: "#0d2730"
      },
      backgroundImage: {
        bg: "url(../src/assets/bg.svg)"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}