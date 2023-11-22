/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['OpenSauceOne', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
      },
      colors: {
        neutral: {
          white: '#FFFFFF',
          surface: '#F9FAFB',
          light: '#F0F2F5',
          outline: '#E4E7EB',
          inline: '#D1D5DC',
          icon: '#9AA2B1',
          secondary: '#687083',
          black: '#000000',
        },
        base: {
          100: '#C7D0E2',
          //* Background
          200: '#B5C0D9',
          300: '#A2B0CF',
          //* Complement
          400: '#94A2BF',
          500: '#8793AF',
          //* Default
          600: '#79859F',
          //* Hovered
          700: '#6B768F',
          //* Active
          800: '#505A70',
          900: '#343D50',
          1000: '#192030',
        },
        primary: {
          100: '#FFFAE2',
          //* Background
          200: '#FFF8D3',
          300: '#FFF5C5',
          //* Complement
          400: '#FFF0A7',
          500: '#FFEB8A',
          //* Default
          600: '#FFE66D',
          //* Hovered
          700: '#DAC357',
          //* Active
          800: '#B4A141',
          900: '#8F7E2C',
          1000: '#7C6D21',
        },
        danger: {
          100: '#F7DBDB',
          //* Background
          200: '#F2C3C4',
          300: '#EBA4A6',
          //* Complement
          400: '#E58688',
          500: '#DE686B',
          //* Default
          600: '#D84A4D',
          //* Hovered
          700: '#B43E40',
          //* Active
          800: '#903133',
          900: '#6C2527',
          1000: '#48191A',
        },
        warning: {
          100: '#FFEFCC',
          //* Background
          200: '#FFE5AA',
          300: '#FED880',
          //* Complement
          400: '#FECB55',
          500: '#FEBE2B',
          //* Default
          600: '#FEB100',
          //* Hovered
          700: '#D49300',
          //* Active
          800: '#A97600',
          900: '#7F5900',
          1000: '#553B00',
        },
        success: {
          100: '#E8F0E0',
          //* Background
          200: '#D8E6CB',
          300: '#C4D9B1',
          //* Complement
          400: '#B1CC98',
          500: '#9DBF7D',
          //* Default
          600: '#8AB364',
          //* Hovered
          700: '#739553',
          //* Active
          800: '#5C7743',
          900: '#455A32',
          1000: '#2E3C21',
        },
        typo: {
          DEFAULT: '#1F1F1F',
          secondary: '#707070',
          tertiary: '#999CA0',
          icons: '#999CA0',
          divider: '#EBEBEB',
          outline: '#D9D9D9',
        },
        dark: '#222222',
        light: '#F5F5F5',
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
  ],
};
