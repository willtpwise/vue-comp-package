import VueCompositionApi from '@vue/composition-api'
import MyButton from './my-button.vue'

const MyPlugin = {
  install: (Vue) => {

    Vue.use(VueCompositionApi)

    Vue.component('my-button', MyButton)

  },
}

export { MyButton }
export default MyPlugin
