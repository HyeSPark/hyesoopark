/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        main_color: '#684AE2', // Replace with your desired color
        main_color_dark: '#BCACFF', // Replace with your desired color
        default_color: 'black', // Replace with your desired color
        default_color_dark: 'white', // Replace with your desired color
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
