import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vuePlugin() // prettier-ignore
  ],
  build: {
    manifest: true
  }
})
