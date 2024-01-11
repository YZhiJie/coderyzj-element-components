import type { App } from 'vue'
import table from './src/index.vue'

export default {
  install(app: App) {
    // 注册全局组件
    app.component('m-table', table)
  }
}
