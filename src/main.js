// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import jquery from 'jquery'
import swiper from 'swiper'
import iView from 'iview'

import 'iview/dist/styles/iview.css';
import 'swiper/dist/css/swiper.min.css';
import './assets/styles/styles.css'
window.axios = axios
window.$ = jquery
window.swiper = swiper

Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
