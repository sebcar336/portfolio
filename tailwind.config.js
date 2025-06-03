const { default: tailwindcss } = require('@tailwindcss/vite');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,astro,ts,jsx,tsx}', // analiza todos los archivos relevantes
  ],
  theme: {
    extend: {
      colors:{
        "color-icon":"hsl(255,0,255)",
        "color-icon-dark":"hsl(0,0,255)"
      }
    }, // puedes extender colores, fuentes, etc. aquí
  },
  plugins: [tailwindcss()],
};
