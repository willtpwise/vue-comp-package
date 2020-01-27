
import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
import App from './App.vue'
import Package from '../../package/dist'

Vue.config.productionTip = false

Vue.use(CompositionApi)
Vue.use(Package)

new Vue({
  render: h => h(App),
}).$mount('#app')
