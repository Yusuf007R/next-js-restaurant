module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      colors: {
        purple: 'var(--color-purple)',
        orange: 'var(--color-orange)',
        yellow: 'var(--color-yellow)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
