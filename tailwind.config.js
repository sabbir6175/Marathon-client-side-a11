/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-green': 'spin-green 0.5s linear infinite',
      },
      keyframes: {
        'spin-green': {
          '0%': { borderColor: 'pink', },
          '25%': { borderColor: 'purple',  },
          '50%': { borderColor: 'green',  },
          '75%': { borderColor: 'orange',  },
          '100%': { borderColor: 'red', },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
