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
        'GrayishViolet': 'hsl(257, 7%, 63%)',
        'Gray': 'hsl(0, 0%, 75%)',
        'VeryDarkViolet': 'hsl(260, 8%, 14%)',
        'DarkViolet': 'hsl(257, 27%, 26%)',
      },
    }
  },
  plugins: [],
}
