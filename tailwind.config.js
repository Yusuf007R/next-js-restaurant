const opacityManager = ({opacityVariable, opacityValue}, cssVar) => {
  if (opacityValue !== undefined) {
    return `rgba(${cssVar}, ${opacityValue})`;
  }
  if (opacityVariable !== undefined) {
    return `rgba(${cssVar}, var(${opacityVariable}, 1))`;
  }
  return `rgb(${cssVar})`;
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
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
        purple: props => {
          return opacityManager(props, 'var(--color-purple)');
        },
        orange: props => {
          return opacityManager(props, 'var(--color-orange)');
        },
        yellow: props => {
          return opacityManager(props, 'var(--color-yellow)');
        },
      },
      maxWidth: {
        cart: '440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
