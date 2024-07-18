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
        stars: '#FF5858',
        starsred: '#d359c1',
        fontwhite: '#FFFFE6',
      },
      fontFamily: {
        termina: ['"Termina"', 'sans-serif'],
      },
      screens: {
        '800': '800px',
        '1000': '1000px',
      },
      height: {
        'js-height': '851px',
        'screen-800': '100vh',
        'mobile-screen': 'calc(100vh - 60px)',
      },
      minWidth: {
        'full': '100vw',
        '80vh': '80vh',
        '800px': '800px',
      },
      backgroundImage: {
        "hero-pattern": "url('/images/background-transparent.png')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        verticalMarquee: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
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
        verticalMarquee: 'verticalMarquee 30s linear infinite',
        marquee: 'marquee 30s linear infinite',
        rock: 'rock 1s infinite',
        shake: 'shake 0.5s infinite',
        spin: 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
