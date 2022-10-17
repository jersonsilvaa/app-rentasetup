import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: Home
    },
    {
      path: '/ubicaciones',
      name: 'ubicaciones',
      component: Home
    },
    {
      path: '/mensajes',
      name: 'mensajes',
      component: Home
    }
    
  ]
})

export default router