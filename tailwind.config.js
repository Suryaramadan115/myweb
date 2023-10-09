/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gloria: ["Gloria Hallelujah", "cursive"],
        unbounded: ["Unbounded", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
      animation: {
        gerak: "gerak 2s ease-in-out infinite",
      },
      keyframes: {
        gerak: {
          "0%": { transform: "scaleX(0%)" },

          "100%": { transform: "scaleX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
