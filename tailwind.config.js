/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'rgba(0,65,61 ,70%)',
        'info':'rgba(0,65,61 ,100%)',
        'hots':'rgba(229,116,93,100%)',
        "ten":'rgba(255,255,255,10%)'
         
      },
      fontFamily: {
        ff : ['Vollkorn', 'serif'],
      },
     
    },
  },
  plugins: [],
}