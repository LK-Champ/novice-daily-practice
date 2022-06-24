import {
  createRouter,
  createWebHashHistory
} from "vue-router"

import Login from "../pages/page-login.vue"
import Home from "../pages/page-home.vue"
import About from "../pages/page-about.vue"

const routes = [
  { 
    path: '/login', 
    component: Login, 
    hidden: true, 
  },
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

