/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#f3ecd2',
        'primary-orange': '#f97028',
        'secondary-orange': '#f3a20f',
        'primary-yellow': '#f0bb0d',
        'light-pink': '#f489a3',
      }
    },
  },
  plugins: [],
}