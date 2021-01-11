import Vue from 'vue'
import VueRouter from 'vue-router'
import vHome from '../components/v-home.vue'
import vStates from '../components/states&purpouses/v-state.vue'
import vPurpouses from '../components/states&purpouses/v-purpouses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome
  },
  {
    path: '/states',
    name: 'states',
    component: vStates
  },
  {
    path: '/purpouses',
    name: 'purpouses',
    component: vPurpouses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
