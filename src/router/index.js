import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/favories',
    name: 'Favories',
    component: () => import('../views/Favories.vue')
  },
  {
    path:'/downloand/:id',
    name:'Downloand',
    component: () => import('../views/Downloand.vue')
  },
  {
    path:'/player',
    name:'Player',
    component: () => import('../components/Player.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
