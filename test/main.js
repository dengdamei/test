import Vue from 'vue'
import App from './App.vue'
import McUI from '../packages'

Vue.config.productionTip = false

Vue.use(McUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
