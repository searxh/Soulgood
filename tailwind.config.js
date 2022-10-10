/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        bob:{
          '0%, 100%': { transform: ['rotate(-3deg)','translateY(-5%)'] },
          '50%': { transform: ['rotate(3deg)','translateY(5%)]'] },
        }
      },
      animation: {
        bob: 'bob 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
