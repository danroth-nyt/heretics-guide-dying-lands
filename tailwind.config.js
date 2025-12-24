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
        'mork-yellow': 'var(--mork-yellow)',
        'mork-black': 'var(--mork-black)',
        'mork-pink': 'var(--mork-pink)',
      },
      screens: {
        'md': '1200px',
      },
    },
  },
  plugins: [],
}
