/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'workSans':['"Work Sans", sans-serif'],
      'cursive':['"Dancing Script", cursive']

    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fixed-nav': 'fixedNav 0.6s',
        'fade-in-up': 'fade-in-up 0.4s cubic-bezier(0.5, 0.84, 0, 1.23) both',
        'marquee-h': 'marqueeHorizontal 20s linear infinite',
      },
      keyframes: {
    
        fixedNav: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-60px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
        },
      

        'fade-in-up': {
          '0%': {
            opacity: 0,
            filter: 'blur(40px)',
            transform: 'translateY(200px) scale(2)',
          },
          '100%': {
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'translateY(0) scale(1)',
          },
        },
        marqueeHorizontal: {
          '0%': { 
            transform: 'translateZ(0)',
            visibility: 'visible',
          },
          '100%': { 
            transform: 'translate3d(-100%,0,0)'
          },
        },
      }
    },
  },
  plugins: [],
};
