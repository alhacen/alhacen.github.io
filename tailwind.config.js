const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        yellow: {
          dark: '#f7e004',
          default: '#fee608',
          light: '#feec4d',
        },
        redCall: {
          default: 'red',
          dark: '#e60000',
        },
        greenCall: {
          default: '#27AE60',
          dark: '#219150',
        },
      },
      ring: ['hover', 'active'],
      borderWidth: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
