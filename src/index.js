import * as configManager from './config-manager'

const install = (Vue, options) => {
  Vue.prototype.$config = Vue.$config = configManager.create(Vue, options)
}

export default {
  install
}
