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
        customVoilet: '#59398F',
        customGrey: '#5F5F5F',
        customGrey2: '#D9D9D9',
        customGrey3: '#D9D9D9',
        customGrey4: '#AEA8A8',
        customGrey5: '#A4A4A6',
        customWhite: '#FBFAFA',
        customWhite2: '#F5F3F3',
        customWhite3: '#FFFAFA',
        customBlack: '#020202',

      },
      fontFamily:{
        Julius:"Julius Sans One"
      },
      backgroundImage:{
        'female':"url(assets/female.jpg)",
        'male':"url(assets/male.jpg)"
      }
    },
  },
  plugins: [],
}

