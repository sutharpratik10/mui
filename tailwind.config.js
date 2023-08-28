/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode:'class',

  theme: {
    container: {
      center: true,
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 960px) { ... }

      'sm': '576px',
      // => @media (min-width: 960px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary:'#1D5B79',
        primaryhover:'#15455c',
        secondary:'#468B97',
        secondaryhover:'',
        darkprimary:'#09a6f3',
        darkprimaryhover:'#07c8f9',
        darksecondary:'',
        darksecondaryhover:'',
      },
    },
  },
  plugins: [
    
  ],
}

