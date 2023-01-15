/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: [
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
