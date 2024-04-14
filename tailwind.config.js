/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white: 'hsl(0, 0%, 100%)',
        offWhite:'hsl(0, 0%, 94%)',
        lightGrey: 'hsl(0, 0%, 86%)',
        smokeyGrey: 'hsl(0, 1%, 44%)',
        offBlack: 'hsl(0, 0%, 8%)',
        purple: 'hsl(259, 100%, 65%)',
        lightRed: 'hsl(0, 100%, 67%)',
      },
      fontFamily:{
        poppins: 'Poppins, sans-serif',
      },
      fontWeight:{
        400: '400',
        700: '700',
        800: '800',
      },
    },
  },
  plugins: [],
}

