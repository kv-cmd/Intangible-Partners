/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1320',
        surface: '#101e33',
        border: 'rgba(255,255,255,0.08)',
        text: '#eaf1ff',
        muted: '#a8b3c7',
        teal: '#3dd6d0',
        blue: '#4fa3ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(79,163,255,0.25)',
        card: '0 8px 40px rgba(0,0,0,0.35)',
        neon: '0 0 25px rgba(61,214,208,0.5)',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
