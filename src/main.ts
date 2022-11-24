import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { VueQueryPlugin as query } from '@tanstack/vue-query'
import App from './app.vue'
import i18n from './helpers/i18n'
import routes from './routes/all'
import './styles/tailwind.css'
import './styles/index.css'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(i18n)
app.use(pinia)
app.use(query)
app.use(router)
app.mount('#app')

document.getElementById('app-spin').classList.add('hidden')
