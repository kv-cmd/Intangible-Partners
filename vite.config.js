// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Intangible-Partners/", // important for GitHub Pages
  build: {
    outDir: "dist",
  },
});
