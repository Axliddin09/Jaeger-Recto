/** @type {import('tailwind').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-dark": "#1F1D2B",
        "base-form-bg": "#2D303E",
        "base-dark-line": "#393C49",
        "base-dark-bg": "#1F1D2B",
        "light": "#ABBBC2",
        "primary": "#EA7C69",
        "lighter": "#E0E6E9",
        "accents-red": "#FF7CA3",
        "accents-green": "#50D1AA",
        "accents-purple": "#9290FE",
        "accents-orange": "#FFB572",
        "accents-blue": "#65B0F6",
        "bg-bg-accents": "indigo-400 bg-opacity",
        "bg-accents-green": "#6BE2BE",
        "bg-primary" : "(234, 124, 105, 0.26"
      },
      
      boxShadow: { 
        "primary-shadow": "0px 8px 24px 0px rgba(234, 124, 105, 0.32)"
      },
      fontFamily: {
        barlow: "'Barlow', sans-serif;"
      }
    },
  },
  plugins: [],
}