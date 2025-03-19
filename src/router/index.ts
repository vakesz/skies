import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import NotFound from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'UserView',
      component: UserView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: NotFound,
    }
  ],
})

export default router
