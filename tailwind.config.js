var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        desktop: '#008080',
        highlight: '#000080',
        window: {
          main: '#c0c0c0',
          light: '#dfdfdf',
          dark: '#808080',
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Adds support for different colors for 4 sides of borders
    ({ addUtilities, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors['default'];
      
      const colorMap = Object.keys(colors)
        .map(color => ({
          [`.border-t-${color}`]: {borderTopColor: colors[color]},
          [`.border-r-${color}`]: {borderRightColor: colors[color]},
          [`.border-b-${color}`]: {borderBottomColor: colors[color]},
          [`.border-l-${color}`]: {borderLeftColor: colors[color]},
        }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
}
