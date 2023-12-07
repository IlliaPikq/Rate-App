/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors: {
        backgroundClr: '#232324',
        accentClr: {
          lighter: '#881A1A',
          darker: '#800000'
        },
        cardClr: '#121212',  
      },
    },
  },
  plugins: [],
}
