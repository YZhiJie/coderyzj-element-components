import type { App } from 'vue'
import chooseDate from './src/index.vue'

export default {
  install(app: App) {
    // 注册全局组件
    app.component('m-choose-date', chooseDate)
  }
}
