/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: "#FAFAFA",
        darkBg: "#18181B",
        mainTheme: '#0018b8',
        fadeMainTheme: '#33b8ff'

      },
      backgroundColor: {
        'opacity-30': 'rgba(255, 255, 255, 0.3)',
      },
      borderColor: {
        'opacity-10': 'rgba(0, 0, 0, 0.1)',
      },
      bodyScroll: {
        open: 'overflow-hidden',
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

