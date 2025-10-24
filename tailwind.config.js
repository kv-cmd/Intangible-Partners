/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,md}'],
  theme: {
    extend: {
      colors: {
        void: '#0b0f17',
        glass: 'rgba(255,255,255,0.06)',
        accent: '#00E0FF',
        pulse: '#FF4D8D',
        prism: '#8A2EFF',
        mint: '#22FFCC'
      },
      boxShadow: {
        glow: '0 0 60px rgba(0, 224, 255, 0.25)',
        card: '0 8px 40px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'stage': 'linear-gradient(180deg, rgba(138,46,255,0.15), rgba(0,0,0,0))'
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
