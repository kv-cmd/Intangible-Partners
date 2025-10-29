/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Allows dark mode toggle with a <html class="dark">
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,md}',
  ],
  theme: {
    extend: {
      colors: {
        // === Intangible Partners Core Palette ===
        navy: '#0a1320',     // main background
        surface: '#101e33',  // card background
        border: 'rgba(255,255,255,0.08)',
        text: '#eaf1ff',     // text white
        muted: '#a8b3c7',    // subtle gray
        teal: '#3dd6d0',     // primary accent
        blue: '#4fa3ff',     // secondary accent
        // === Optional legacy accents (for glows/hover) ===
        prism: '#4fa3ff',
        mint: '#3dd6d0',
        light: '#f8fafc',
      },

      fontFamily: {
        display: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        glow: '0 0 60px rgba(79, 163, 255, 0.25)',
        card: '0 8px 40px rgba(0,0,0,0.35)',
        neon: '0 0 25px rgba(61, 214, 208, 0.5)',
      },

      backgroundImage: {
        // Hero background gradient using new palette
        hero:
          'radial-gradient(circle at 20% 40%, rgba(79,163,255,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(61,214,208,0.15) 0%, transparent 40%)',
        stage:
          'linear-gradient(180deg, rgba(79,163,255,0.15), rgba(0,0,0,0))',
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
          '0%, 100%': { boxShadow: '0 0 15px rgba(79,163,255,0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(61,214,208,0.6)' },
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
