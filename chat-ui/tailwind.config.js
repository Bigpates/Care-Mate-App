module.exports = {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-start': '#3B82F6',
        'primary-end': '#7C3AED',
        'accent-start': '#F59E0B',
        'accent-end': '#EF4444',
      },
      backdropBlur: {
        lg: '20px',
      },
      boxShadow: {
        card: '0 10px 15px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
