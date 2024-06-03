/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Itim', 'sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
