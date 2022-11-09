import indexPage from '../pages/index.vue'
import notFoundPage from '../pages/404.vue'

export default [
  {
    path: '/',
    component: indexPage
  },
  {
    path: '/:slug(.*)*',
    component: notFoundPage
  }
]
