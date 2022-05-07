import notFoundPage from '../pages/not-found.vue'
import indexPage from '../pages/index.vue'

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
