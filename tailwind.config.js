const { default: tailwindcss } = require('@tailwindcss/vite');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,astro,ts,jsx,tsx}', // analiza todos los archivos relevantes
  ],
  darkMode: 'class', // ← MOVIDO AQUÍ, fuera de theme
  theme: {
    extend: {
      colors:{
        // tus colores personalizados aquí
      }
    }, // puedes extender colores, fuentes, etc. aquí
  },
  plugins: [],
};