/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{jsx, js}'
  ],
  theme: {
    extend: {
      colors: {
        backgroundClr: '#303030',
        accentClr: {
          lighter: '#881A1A',
          darker: '#800000'
        },
        cardClr: '#423F3F',  
      },
    },
  },
  plugins: [],
}

