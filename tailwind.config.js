/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '768px',
        xl: '768px',
        '2xl': '768px'
      }
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
      mono: ['monospace']
    }
  },
  plugins: [],
  darkMode: "class",
}
