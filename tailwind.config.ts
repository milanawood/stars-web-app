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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
