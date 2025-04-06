/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1A2525',      // Deep midnight teal-blue
        'bg-darker': '#2B1A1F',    // Dark muted burgundy
        'bg-lighter': '#3A3538',   // Charcoal with reddish-blue tint
        'gold': '#FFD700',         // Gold accent
        'text-gray': '#A3A8B0',    // Cool steely gray
        'border-gray': '#3C2F36',  // Dark reddish-blue border
        'shadow-black': '#1A0F13', // Very dark reddish-black
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
        'opensans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': '48px',
        'h1-mobile': '32px',
        'h2-desktop': '32px',
        'h2-mobile': '24px',
      },
      boxShadow: {
        'accent': '0 0 15px rgba(198, 169, 98, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 