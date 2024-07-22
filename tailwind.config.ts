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
        '1200': '1200px',
        '1300': '1300px',
        '1400': '1400px',
        '1600': '1600px',
      },
      height: {
        'js-height': '853px',
        'screen-800': '100vh',
        'mobile-screen': 'calc(100vh - 60px)',
      },
      minWidth: {
        'full': '100vw',
        '80vh': '80vh',
        '800px': '800px',
        '100vh': '100vh',
        '25vh': '25vh',
        '300px': '300px',
        '46vh': '46vh',
        '500px': '500px',
        '50vh': '50vh',
        '600px': '600px',
        '64vh': '64vh',
        '66vh': '66vh',
        '900px': '900px',
        '90vh': '90vh',
      },
      maxWidth: {
        '1100px': '1100px',
        '1200px': '1200px',
        '380px': '380px',
        '46vh': '46vh',
        '64vh': '64vh',
        '66vh': '66vh',
        '700px': '700px',
        '800px': '800px',
        '90vh': '90vh',
      },
      backgroundImage: {
        "hero-pattern": "url('/images/background-transparent.png')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeL: {
          '0%': { transform: 'translateZ(0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        },
        marqyR: {
          '0%': { transform: 'translateZ(0)' },
          '100%': { transform: 'translate3d(100%, 0, 0)' },
        },
        floating: {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translate(0)' },
        },
        flashing: {
          '0%': { fill: '#000' },
          '14%': { fill: '#000' },
          '15%': { fill: 'transparent' },
          '60%': { fill: 'transparent' },
          '61%': { fill: '#000' },
          '74%': { fill: '#000' },
          '75%': { fill: 'transparent' },
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
        floating: 'floating 3s ease-in-out infinite',
        flashing: 'flashing 3s ease-in-out infinite',
        flashing1: 'flashing 3s ease-in-out infinite .2s',
        flashing2: 'flashing 3s ease-in-out infinite .4s',
      },
    },
  },
  plugins: [],
};

export default config;
