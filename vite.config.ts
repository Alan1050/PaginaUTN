import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80, 
        compressionLevel: 9, 
      },
      jpg: {
        quality: 70, 
        mozjpeg: true,
      },
      webp: {
        quality: 75, 
      },
    }),
  ],
  base: '/', // Se modifica segun la ubicacion de la carpeta
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8787',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined 
      }
    }
  }
})
