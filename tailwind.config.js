/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === NEW PALETTE ===
        'bg-dark': '#102A26',         // Dark Emerald background
        'bg-darker': '#0E1F1B',       // Deeper version for contrast
        'bg-lighter': '#1C3A34',      // Slightly lighter emerald variant
        'gold': '#F5EBDD',            // Warm Beige (used for backgrounds or soft text)
        'text-gray': '#E7D7C6',       // Muted beige for secondary text
        'border-gray': '#254C44',     // Emerald-tinted border
        'shadow-black': '#0A1B18',    // Very dark emerald for shadow
        'dark': '#0A1F1A',            // Deep rich greenish-black
        'darker': '#061411',          // Near black with green tone
        'batman': '#05110F',          // Deep emerald noir
        'accent': '#F87171',          // Coral main accent
        'accent-hover': '#EF4444',    // Hover coral (deeper red tone)
        'secondary': '#F5EBDD',       // Reuse beige for secondary areas
        'light-gray': '#19332D',      // Slightly muted background
        'text-light': '#F5EBDD',      // Warm beige for light text
        'text-dark': '#102A26',       // Base text darkened
        'text-muted': '#C7B9AC',      // Muted warm beige
        'border-dark': 'rgba(245, 235, 221, 0.2)', // Subtle beige border

        // You can add one more if you want a pop-color or call-to-action contrast later
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
        'accent': '0 0 15px rgba(248, 113, 113, 0.15)', // coral glow
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
