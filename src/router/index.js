import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/about',
    name: 'admin-about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminUser.vue')
  },
  {
    path: '/admin/projects',
    name: 'admin-projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProjects.vue')
  },
  {
    path: '/admin/projects/:id',
    name: 'admin-project',
    component: () => import('../views/AdminProject.vue')
  },
  {
    path: '/admin/lives',
    name: 'admin-lives',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminLives.vue')
  },
  {
    path: '/admin/lives/:id',
    name: 'admin-live',
    component: () => import('../views/AdminLive.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
