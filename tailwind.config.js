/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts}"],
  important: "#root",
  darkMode: ['class'],

  theme: {
    extend: {
      colors: {
        darkModeColor: "#050A30",
        lightModeColor: "#7EC8E3",
        buttonColorLightMode: "#000C66",
        buttonColorDarkMode: "##0000FF"

      }
    },
  },
  plugins: [],
}
