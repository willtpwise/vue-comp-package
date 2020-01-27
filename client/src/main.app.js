import Vue from 'vue'
import App from './App.vue'
import Package from '../../package/dist'

Vue.config.productionTip = false

Vue.use(Package)

new Vue({
  render: h => h(App),
}).$mount('#app')
