/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0D1B1E',
        'air-superiority-blue': '#7798AB',
        'tea-green': '#C3DBC5',
        'dutch-white': '#E8DCB9',
        'hover-blue': '#A4D3EE',
        'hover-green': '#D1F5D4'
      },
      maxWidth: {
        '63': '63rem'
      }
    },
  },
  plugins: [],
}

