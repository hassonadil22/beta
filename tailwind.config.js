/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3e8ff',
          100: '#e5d0ff',
          200: '#caa6fe',
          300: '#b17dfc',
          400: '#9a55f9',
          500: '#8a2be2', // Main primary color
          600: '#7722c9',
          700: '#641caa',
          800: '#53188c',
          900: '#44166e',
        },
        secondary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4169e1', // Main secondary color
          600: '#3a58c3',
          700: '#3148a0',
          800: '#283872',
          900: '#1e2a4c',
        },
        accent: {
          50: '#e6fcff',
          100: '#d0f8fd',
          200: '#a2f1fa',
          300: '#70e9f6',
          400: '#43dff0',
          500: '#20b2aa', // Main accent color
          600: '#1b8f89',
          700: '#166c68',
          800: '#124948',
          900: '#0d2b2a',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};