/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    fontFamily: {
      display: ['Merriweather', 'serif'],
    },
    extend: {
      animation: {
        bg: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            'background-position': '92% 0%',
          },
          '50%': {
            'background-position': '9% 100%',
          },
        },
      },
    },
  },
  plugins: [],
}
