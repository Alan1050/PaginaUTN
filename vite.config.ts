import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

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
    {
      name: 'copy-404-for-spa',
      closeBundle() {
        const distIndex = resolve(__dirname, 'dist/index.html');
        const dist404 = resolve(__dirname, 'dist/404.html');
        if (existsSync(distIndex)) {
          copyFileSync(distIndex, dist404);
        }
      }
    }
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
