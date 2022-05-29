/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '700px',
      desktop: '1200px',
      max: '1920px',
    },
    extend: {
      maxWidth: {
        'wrap-xs': '400px',
        'wrap-lg': '1000px',
        'wrap-xl': '1200px',
        'wrap-2xl': '1920px',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        axia: ['Axia', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brown: {
          DEFAULT: '#a38035',
        },
        white: {
          DEFAULT: '#fff',
          dark: '#d9d9d6',
        },
        gray: { light: '#97999b', DEFAULT: '#80807e', dark: '#212322e6' },
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) =>
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen max': {
            maxWidth: '1920px',
          },
        },
      })
    ),
  ],
};
