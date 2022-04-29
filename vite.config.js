import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vuePlugin() // prettier-ignore
  ],
  build: {
    manifest: true
  },
  optimizeDeps: {
    include: []
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://tosslate.vercel.app',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true
      }
    }
  }
})
