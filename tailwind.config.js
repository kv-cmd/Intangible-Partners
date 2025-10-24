/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode toggle using a class on <html>
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,md}', // ensures all React and MD files are scanned
  ],
  theme: {
    extend: {
      colors: {
        void: '#0b0f17',           // background base (dark mode)
        glass: 'rgba(255,255,255,0.06)', // glassmorphism overlay
        accent: '#00E0FF',         // electric blue highlight
        pulse: '#FF4D8D',          // pink accent for hover/focus
        prism: '#8A2EFF',          // purple glow
        mint: '#22FFCC',           // mint green for details
        surface: '#1a1f2e',        // neutral dark background
        light: '#f8fafc',          // light mode background
      },

      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        glow: '0 0 60px rgba(0, 224, 255, 0.25)',
        card: '0 8px 40px rgba(0,0,0,0.35)',
        neon: '0 0 25px rgba(138, 46, 255, 0.5)',
      },

      backgroundImage: {
        stage: 'linear-gradient(180deg, rgba(138,46,255,0.15), rgba(0,0,0,0))',
        hero: 'radial-gradient(circle at 20% 40%, #8A2EFF 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00E0FF 0%, transparent 40%)',
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 224, 255, 0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(0, 224, 255, 0.6)' },
        },
      },

      transitionProperty: {
        'colors-opacity-transform': 'background-color, color, opacity, transform',
      },

      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [],
};
