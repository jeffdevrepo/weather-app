/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*",
    "./src/*",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    colors: {
      'primary': '#635DFF',
      'danger': '#FB4B4E',
      'darker': '#272838',
      'dark': '#3B3C54',
      'light': '#CDE6F5',
      'white': '#FFFFFF'
    }
  },
  plugins: [],
}
