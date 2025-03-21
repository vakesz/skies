import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import NotFound from '@/views/NotFoundView.vue'
import DetailedPostView from '@/views/DetailedPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/post',
      name: 'PostView',
      component: DetailedPostView,
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
