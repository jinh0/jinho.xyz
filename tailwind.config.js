/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      bg0: '#f4f5f8',
      bg1: '#ECEFF4',
      bg2: '#E5E9F0',
      bg3: '#D8DEE9',
      fg4: '#4C566A',

      blue2: "#88C0D0",
      
      primary: '#5E81AC',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}
