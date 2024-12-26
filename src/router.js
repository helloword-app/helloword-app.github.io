import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero.vue'
import DailyQuote from './components/DailyQuote.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Hero
    },
    {
      path: '/daily-quote',
      component: DailyQuote
    }
  ]
})

export default router 