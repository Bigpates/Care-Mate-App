module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-gradient-start': '#8f5cff',
        'primary-gradient-end': '#3b82f6',
        'dark-gradient-start': '#1f2937',
        'dark-gradient-end': '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
