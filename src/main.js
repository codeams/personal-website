import Vue from 'vue'
import App from './components/App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#spa',
  router,
  render: h => h(App)
})
