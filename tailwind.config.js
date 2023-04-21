const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './resources/views/**/*',
    './config/classify.php',
  ],
  safelist: [
    'bg-yellow',
    'bg-rose',
    'bg-red',
    'bg-green',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#16202C',
      'white': '#FFFFFF',
      'red': '#E10001',
      'pink': '#FFECEC',
      'grey': '#F6F6F6',
      'grey-medium': '#E6E6E6',
      'grey-dark': '#7D8289',
      'yellow': colors.amber['200'],
      'green': colors.green['300'],
      'rose': colors.rose['300']
    },
    screens: {
      '2xs': '400px',
      'xs': '480px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      brand: ['Poppins', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '0250': '0.20rem',
      '0500': '0.5rem',
      '0625': '0.625rem',
      '0750': '0.75rem',
      '0875': '0.875rem',
      '1000': '1.0rem',
      '1125': '1.125rem',
      '1250': '1.25rem',
      '1375': '1.375rem',
      '1500': '1.5rem',
      '1625': '1.625rem',
      '1750': '1.75rem',
      '1875': '1.875rem',
      '2000': '2.0rem',
      '2250': '2.25rem',
      '2500': '2.5rem',
      '2750': '2.75rem',
      '3000': '3.0rem',
      '3250': '3.25rem',
      '3500': '3.5rem',
      '3750': '3.75rem',
      '4000': '4.0rem',
      '4250': '4.25rem',
      '4500': '4.5rem',
      '4750': '4.75rem',
      '5000': '5.0rem',
      '5250': '5.25rem',
      '5500': '5.5rem',
      '5750': '5.75rem',
      '6000': '6.0rem',
      '6250': '6.25rem',
      '6500': '6.5rem',
      '6750': '6.75rem',
      '8000': '8.0rem',
    },
    extend: {
      lineHeight: {
        'busy': '0.84',
        'packed': '0.75'
      },
      spacing: {
        '1/10': '10%',
        '100': '28rem',
        '104': '32rem',
        '108': '36rem',
        '112': '40rem',
        '116': '44rem',
        '120': '48rem',
        '1/12': '8.333333%',
        'em-0250': '.25em',
        'em-0500': '.5em',
        'em-0750': '.75em',
        'em-1000': '1em',
        'em-1500': '1.5em',
        'em-2000': '2em',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
        '9999': '999999999px'
      },
      backgroundSize: {
        'full': '100%'
      },
      borderWidth: {
        '3': '3px',
      }
    }
  },
}