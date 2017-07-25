import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/indexPage'
import travel from '@/components/travelPage'
import works from '@/components/worksPage'
import detail from '@/components/detailPage'
import ContactUs from '@/components/ContactUsPage'
import svgRoll from '@/components/works/svgRoll'
import LooKatYou from '@/components/works/LooKatYou'
import PointAndLine from '@/components/works/PointAndLine'
import wave from '@/components/works/wave'


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
      path: '/worksPage',
      name: 'works',
      component: works
    },
    {
      path: '/svgRoll',
      name: 'svgRoll',
      component: svgRoll
    },
    {
      path: '/LooKatYou',
      name: 'LooKatYou',
      component: LooKatYou
    },
    {
      path: '/PointAndLine',
      name: 'PointAndLine',
      component: PointAndLine
    },
    {
      path: '/wave',
      name: 'wave',
      component: wave
    },
    {
      path: '/detailPage',
      name: 'detail',
      component: detail
    },
    {
      path: '/ContactUsPage',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
