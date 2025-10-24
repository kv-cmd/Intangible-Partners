import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'vite-plugin-node-polyfills'

// ✅ This config works perfectly for GitHub Pages + Node-based Markdown loading
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()
  ],
  base: '/Intangible-Partners/',
  define: {
    'process.env': {}, // Prevents "process not defined" errors in browser builds
  },
  optimizeDeps: {
    include: ['gray-matter', 'marked'], // ensures markdown parsing libs are bundled correctly
  },
})
