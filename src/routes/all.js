import indexPage from '../pages/index.vue'
import notFoundPage from '../pages/not-found.vue'

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
