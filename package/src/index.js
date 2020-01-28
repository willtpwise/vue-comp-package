import MyButton from './my-button.vue'

const MyPlugin = {
  install: (Vue) => {

    Vue.component('my-button', MyButton)

  },
}

export { MyButton }
export default MyPlugin
