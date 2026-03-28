// ============================================================
// Vite Configuration
// ============================================================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting for optimal performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    // Enable minification
    minify: "esbuild",
    // Target modern browsers
    target: "es2020",
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/storage": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  // Path aliases for clean imports
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@data": "/src/data",
    },
  },
});
