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
      'sm': '576px',
      // => @media (min-width: 960px) { ... }

      'xs': '320px',
      // => @media (min-width: 960px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
    
  },
  plugins: [],
}

