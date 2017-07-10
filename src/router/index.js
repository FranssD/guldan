import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/indexPage'
import travel from '@/components/travelPage'
import game from '@/components/gamePage'
import detail from '@/components/detailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/travelPage',
      name: 'travel',
      component: travel
    },
    {
      path: '/gamePage',
      name: 'game',
      component: game
    },
    {
      path: '/detailPage',
      name: 'detail',
      component: detail
    }
  ]
})
