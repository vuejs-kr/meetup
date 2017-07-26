import Vue from 'vue'

import plugins from '@/config/plugins'
import router from '@/config/router'

import App from './App'

plugins(Vue)

new Vue({ // eslint-disable-line no-new
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
