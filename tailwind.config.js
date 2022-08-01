/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts}"],
  important: "#root",
  darkMode: ['class'],

  theme: {
    extend: {
      colors: {
        darkModeColor: "#050A30",
        lightModeColor: "#D4F1F4",
        buttonColorLightMode: "#000C66",
        buttonColorDarkMode: "#189AB4"

      }
    },
  },
  plugins: [],
}
