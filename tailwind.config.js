const { default: tailwindcss } = require('@tailwindcss/vite');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,astro,ts,jsx,tsx}', // analiza todos los archivos relevantes
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors:{
      }
    }, // puedes extender colores, fuentes, etc. aquí
  },
  plugins: [],
};
