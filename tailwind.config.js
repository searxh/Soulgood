/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      '2xs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      fontFamily:{
        "mitr":"Mitr"
      },
      keyframes:{
        bob:{
          '0%, 100%': { transform: ['rotate(-3deg)','translateY(-5%)'] },
          '50%': { transform: ['rotate(3deg)','translateY(5%)]'] },
        }
      },
      animation: {
        bob: 'bob 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
