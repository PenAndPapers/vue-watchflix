import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './tailwind/style.css'

import elements from '@elements'

Vue.config.productionTip = false
elements()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
