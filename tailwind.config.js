module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'chev-down': "url('./_icons/cheveron_down.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
