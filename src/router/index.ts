import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserSettings from '@/views/UserSettings.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'UserSettings',
      component: UserSettings,
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: NotFound,
    }
  ],
})

export default router
