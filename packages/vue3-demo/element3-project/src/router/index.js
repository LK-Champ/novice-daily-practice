import {
  createRouter,
  createWebHashHistory
} from "vue-router"

import Home from "../pages/page-home.vue"
import About from "../pages/page-about.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

