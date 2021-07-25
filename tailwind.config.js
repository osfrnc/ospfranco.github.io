module.exports = {
  purge: [
    './src/**.html'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...require('tailwindcss/colors')
    },
    extend: {
      borderRadius: {
        xl: '2rem'
      },
      width: {
        600: '600px',
        768: '768px',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}