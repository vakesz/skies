import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserSettings from '@/views/UserSettings.vue'
import ErrorPage from '@/views/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: UserSettings,
    },
    {
      path: "/:pathMatch(.*)*",
      name: '404',
      component: ErrorPage,
    }
  ],
})

export default router
