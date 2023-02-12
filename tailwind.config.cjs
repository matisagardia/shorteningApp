/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'cyan': 'hsl(180, 66%, 49%)',
      },
    }
  },
  plugins: [],
}
