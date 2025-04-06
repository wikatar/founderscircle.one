/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#080808',
        'darker': '#030303',
        'batman': '#0F0F0F',
        'accent': '#C6A962',
        'accent-hover': '#D4B872',
        'secondary': '#4A235A',
        'light-gray': '#1A1A1A',
        'text-light': '#F8F8F8',
        'text-dark': '#080808',
        'text-muted': '#9CA3AF',
        'border-dark': 'rgba(198, 169, 98, 0.2)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': '48px',
        'h1-mobile': '32px',
        'h2-desktop': '32px',
        'h2-mobile': '24px',
      },
      boxShadow: {
        'accent': '0 0 15px rgba(198, 169, 98, 0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 