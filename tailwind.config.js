/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      colors: {
        'brand-blue': '#3B82F6',
        'brand-gray': '#F3F4F6'
      }
    },
  },
  plugins: [],
}