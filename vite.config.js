// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Fix ESM default export issue
export default defineConfig({
  plugins: [react()],
  base: "/Intangible-Partners/", // Required for GitHub Pages deployment
  build: {
    outDir: "dist",
  },
});
