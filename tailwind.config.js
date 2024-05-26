/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rgb-0-33-65': 'rgb(0, 33, 65)',
        'rgb-39-83-127':'rgb(39, 83, 127)'
      },
    },
  },
  plugins: [],

}