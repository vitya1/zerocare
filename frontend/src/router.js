import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import AddGroup from '@/components/AddGroup.vue'
import Login from '@/components/Login.vue'
import View from '@/components/View.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add-group',
      component: AddGroup
    },
    {
      path: '/view/:id',
      name: 'group-view',
      component: View
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
