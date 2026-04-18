/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#d9ebe2',
          200: '#b5d7c7',
          300: '#89bda6',
          400: '#5f9f83',
          500: '#3f8268',
          600: '#2e6853',
          700: '#265344',
          800: '#1f4337',
          900: '#1a382e',
          950: '#0d1f1a',
        },
        earth: {
          50: '#faf6f2',
          100: '#f3ebe1',
          200: '#e6d4c2',
          300: '#d5b89c',
          400: '#c39674',
          500: '#b67d58',
          600: '#a9694c',
          700: '#8c5440',
          800: '#724639',
          900: '#5d3b31',
          950: '#321d18',
        },
        bark: {
          50: '#f6f5f4',
          100: '#e8e6e3',
          200: '#d3cfc9',
          300: '#b8b1a8',
          400: '#9c9285',
          500: '#877b6d',
          600: '#74685c',
          700: '#5f554c',
          800: '#514943',
          900: '#47403b',
          950: '#262220',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
