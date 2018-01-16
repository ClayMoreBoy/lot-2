import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
<<<<<<< HEAD
import Promo from '@/views/Promo'
import Cqssc from '@/views/lottery/Cqssc'
=======
import Promo from '@/views/promo/Promo'
>>>>>>> cfcadd8fb3246699366a0b74399ad3f27774b8ce

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
    },
    {
      path: '/lottery/cqssc',
      name: 'Cqssc',
      component: Cqssc
    }
  ]
})
