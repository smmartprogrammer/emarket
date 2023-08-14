/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
     screens: {
      xs:'150px',
      sm: '650px',
      md: '1000px',
      lg: '1210px',
      xl: '1290px',
    },
    },
  }
