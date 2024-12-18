/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors:{
      primary:  '#26baa6',
      secondary:  '#616eb4',
      darkGrayishBlue:  '#4d545e',
      grayishBlue:  '#a0acb3',
      white:  '#fff'
    },
    extend: {
      fontFamily:{
        sans: ['Bai Jamjuree', 'sans']
      }
    },
  },
  plugins: [],
}

