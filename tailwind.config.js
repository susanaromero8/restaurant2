/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
       transformOrigin: {
         '0-128': '0 128px',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
}

