/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bbc-bg': '#1e1e1e',
        'bbc-card': '#2b2b2b',
        'bbc-border': '#3a3a3a',
        'bbc-text': '#e4e4e4',
        'bbc-text-secondary': '#9b9b9b',
        'bbc-red': '#bb1919',
        'bbc-hover': '#373737',
      },
      fontFamily: {
        'bbc': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
