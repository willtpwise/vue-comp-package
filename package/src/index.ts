import { PluginObject } from 'vue'
import MyButton from './my-button.vue'

const MyPlugin: PluginObject<never> = {
  install: (Vue) => {

    Vue.component('my-button', MyButton)

  },
}

export default MyPlugin
