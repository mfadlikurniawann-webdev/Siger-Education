/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1E205E',
          light: '#F15A29',
        },
        accent: {
          purple: '#752E7D',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #F15A29 0%, #752E7D 50%, #1E205E 100%)',
      }
    },
  },
  plugins: [],
}
