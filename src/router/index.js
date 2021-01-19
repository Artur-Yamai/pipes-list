import Vue from 'vue'
import VueRouter from 'vue-router'
import vHome from '../components/v-home.vue'
import vDetails from '../components/v-details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: vHome
  },
  {
    path: '/states',
    name: 'states',
    component: vDetails,
    meta: {value: 'getStates'}
  },
  {
    path: '/purpouses',
    name: 'purpouses',
    component: vDetails,
    meta: {value: 'getPurpouses'}
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
