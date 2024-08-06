/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#0850A4',
        customGrey: '#5F5F5F',
        customBlue2: '#0850A4'
      }
    },
  },
  plugins: [],
}

