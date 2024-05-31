/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        'bg-custom-1':'#1A1A1A',
        'brand-color':'#FFB800',
    }
  }
  },
  plugins: [],
}