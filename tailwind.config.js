/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins_300: ['Poppins_300',],
      Poppins_400: ['Poppins_400',],
      Poppins_400: ['Poppins_500',],
      Poppins_400: ['Poppins_600',],
      Poppins_400: ['Poppins_700',],
      Poppins_400: ['Poppins_800',],
    }
  },
  plugins: [],
};

