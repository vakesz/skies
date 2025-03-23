import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import NotFound from '@/views/NotFoundView.vue'
import DetailedPostView from '@/views/DetailedPostView.vue'
import SettingsView from '@/views/SettingsView.vue'

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
      name: 'DetailedPostView',
      component: DetailedPostView,
      props: route => ({
        eventKey: route.query.eventKey
      })
    },
    {
      path: '/user',
      name: 'UserView',
      component: UserView,
    },
    {
      path: '/settings',
      name: 'SettingsView',
      component: SettingsView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: NotFound,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
