import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offblack: '#333',
        offwhite: '#f5f5f5',
        eggshell: '#f0ead6',
      },
      fontFamily: {
        termina: ['"Termina"', 'sans-serif'],
        //nobell: ['"AnotherCustomFont"', 'sans-serif'], // Replace with your Adobe font name
      },
      backgroundImage: {
        "hero-pattern": "url('/images/background-transparent.png')",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rock: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        rock: 'rock 1s infinite',
        shake: 'shake 0.5s infinite',
        spin: 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;