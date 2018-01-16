import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Promo from '@/views/Promo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/promo',
      name: 'Promo',
      component: Promo
    }
  ]
})
