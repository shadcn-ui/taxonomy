module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-color-mod-function': {
      importFrom: ['./src/design-system/themes/sona-palette.css'],
    },
  },
};
