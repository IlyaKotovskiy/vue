import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/users',
      component: UsersView
    },
    {
      path: '/profile',
      component: ProfileView
    },
    {
      path: '/login',
      component: LoginView
    }
  ]
})

const tokenExists = () => localStorage.getItem('token')

router.beforeEach((to, from, next) => {
  if (to.path === '/profile' && !tokenExists()) {
    next('/login')
  } else {
    next()
  }
})

export default router
