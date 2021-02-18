module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dp-green': '#33A6B9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
