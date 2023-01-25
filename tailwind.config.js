/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      'text' : ['Outfit']
    },
    extend: {
      colors : {
        softblue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        white: '#ffffff',
        darkblue1: 'hsl(217, 54%, 11%)',
        darkblue2: 'hsl(216, 50%, 16%)',
        darkblue3: 'hsl(215, 32%, 27%)',
      }
    },
  },
  plugins: [],
}