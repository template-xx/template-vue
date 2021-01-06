import vuePlugin from '@vitejs/plugin-vue'

export default {
  plugins: [
    vuePlugin()
  ],
  build: {
    manifest: true
  },
  optimizeDeps: {
    include: [
    ]
  }
}
