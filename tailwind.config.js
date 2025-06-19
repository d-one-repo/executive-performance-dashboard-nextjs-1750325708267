/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0055A5',
        accent: '#00B388',
        background: '#F8FAFC'
      }
    },
  },
  plugins: [],
}