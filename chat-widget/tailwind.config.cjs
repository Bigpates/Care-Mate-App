module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-gradient-start': '#89f7fe',
        'primary-gradient-end': '#66a6ff'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
