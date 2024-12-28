import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero.vue'
import DailyQuote from './components/DailyQuote.vue'
import Install from './components/Install.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: Hero,
      meta: {
        title: '哈喽单词(Hello Word) - AI驱动的智能单词学习工具'
      }
    },
    {
      path: '/daily-quote',
      component: DailyQuote,
      meta: {
        title: '每日佳句 - 哈喽单词(Hello Word)'
      }
    },
    {
      path: '/install',
      component: Install,
      meta: {
        title: '下载安装 - 哈喽单词(Hello Word)'
      }
    }
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '哈喽单词(Hello Word)'
  next()
})

export default router 