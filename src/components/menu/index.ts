import type { App } from 'vue'
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

export default {
  install(app: App) {
    // 注册全局组件
    app.component('m-menu', menu)
    app.component('m-infinite-menu', infiniteMenu)
  }
}
