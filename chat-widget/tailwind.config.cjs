module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-gradient-start': '#0ea5e9',
        'primary-gradient-end': '#6366f1',
        'dark-gradient-start': '#0f172a',
        'dark-gradient-end': '#020617',
        'user-gradient-start': '#40c9ff',
        'user-gradient-end': '#e81cff',
        'ai-gradient-start': '#8e2de2',
        'ai-gradient-end': '#4a00e0',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      backdropBlur: {
        xs: '2px',
        xl: '20px',
      },
    },
  },
  plugins: [],
};
