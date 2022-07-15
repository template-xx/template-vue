import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './app.vue'
import store from './store'
import routes from './routes/all'
import i18n from './plugins/i18n'
import './styles/tailwind.css'
import './styles/index.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')

document.getElementById('app-spin').classList.add('hidden')
