/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        primary: ['ABC Diatype', ...fontFamily.sans],
        mono: ["'ABC Diatype Semi-Mono'", ...fontFamily.mono],
      },
      colors: {
        /*
          Foundation
         */
        'sona-foundation-white': 'var(--sona-color-foundation-white)',
        'sona-foundation-black': 'var(--sona-color-foundation-black)',
        'sona-foundation-accent1': 'var(--sona-color-foundation-accent1)',
        'sona-foundation-accent2': 'var(--sona-color-foundation-accent2)',
        'sona-foundation-negative': 'var(--sona-color-foundation-negative)',
        'sona-foundation-warning': 'var(--sona-color-foundation-warning)',
        'sona-foundation-positive': 'var(--sona-color-foundation-positive)',
        'sona-foundation-protocol': 'var(--sona-color-foundation-protocol)',

        /*
          Background
         */
        'sona-bg-primary': 'var(--sona-color-bg-primary)',

        'sona-bg-secondary': 'var(--sona-color-bg-secondary)',
        'sona-bg-secondary-protocol': 'var(--sona-color-bg-secondary-protocol)',
        'sona-bg-secondary-positive': 'var(--sona-color-bg-secondary-positive)',
        'sona-bg-secondary-negative': 'var(--sona-color-bg-secondary-negative)',
        'sona-bg-secondary-warning': 'var(--sona-color-bg-secondary-warning)',
        'sona-bg-secondary-link': 'var(--sona-color-bg-secondary-link)',

        'sona-bg-tertiary': 'var(--sona-color-bg-tertiary)',

        /*
          Border
         */
        'sona-border-primary': 'var(--sona-color-border-primary)',
        'sona-border-primary-protocol':
          'var(--sona-color-border-primary-protocol)',
        'sona-border-primary-positive':
          'var(--sona-color-border-primary-positive)',
        'sona-border-primary-negative':
          'var(--sona-color-border-primary-negative)',
        'sona-border-primary-warning':
          'var(--sona-color-border-primary-warning)',
        'sona-border-primary-link': 'var(--sona-color-border-primary-link)',

        'sona-border-secondary': 'var(--sona-color-border-secondary)',
        'sona-border-secondary-protocol':
          'var(--sona-color-border-secondary-protocol)',
        'sona-border-secondary-positive':
          'var(--sona-color-border-secondary-positive)',
        'sona-border-secondary-negative':
          'var(--sona-color-border-secondary-negative)',
        'sona-border-secondary-warning':
          'var(--sona-color-border-secondary-warning)',
        'sona-border-secondary-link':
          'var(--sona-color-border-link-secondary-link)',

        'sona-border-tertiary': 'var(--sona-color-border-tertiary)',
        'sona-border-tertiary-protocol':
          'var(--sona-color-border-tertiary-protocol)',
        'sona-border-tertiary-positive':
          'var(--sona-color-border-tertiary-positive)',
        'sona-border-tertiary-negative':
          'var(--sona-color-border-tertiary-negative)',
        'sona-border-tertiary-warning':
          'var(--sona-color-border-tertiary-warning)',
        'sona-border-tertiary-link': 'var(--sona-color-border-tertiary-link)',

        /*
          Text
         */
        'sona-text-primary': 'var(--sona-color-text-primary)',
        'sona-text-secondary': 'var(--sona-color-text-secondary)',
        'sona-text-tertiary': 'var(--sona-color-text-tertiary)',
        'sona-text-protocol': 'var(--sona-color-text-protocol)',
        'sona-text-positive': 'var(--sona-color-text-positive)',
        'sona-text-negative': 'var(--sona-color-text-negative)',
        'sona-text-link': 'var(--sona-color-text-link)',

        'sona-text-disabled': 'var(--sona-color-text-disabled)',

        primary: {
          // Customize it on globals.css :root
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          350: 'rgb(var(--tw-color-primary-350) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
        tertiary: '#ABB2FF',
        offwhite: {
          100: 'rgb(var(--tw-color-offwhite-100) / <alpha-value>)',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
