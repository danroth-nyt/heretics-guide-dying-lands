/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pirata': ['"Pirata One"', 'cursive'],
        'elite': ['"Special Elite"', 'monospace'],
      },
      colors: {
        'mork-yellow': '#fde047',
        'mork-black': '#000000',
        'mork-pink': '#ec4899',
      },
    },
  },
  plugins: [],
}

