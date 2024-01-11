import type { App } from 'vue'
// 安装: npm install @element-plus/icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 获取 app 的类型
/*
  1.按下ctrl键，然后鼠标左键点击 createApp()
  2.按下ctrl键，然后鼠标左键点击 CreateAppFunction，查看该函数的返回值类型，
  可得 app 的类型为 App
*/
function registerIcons(app: App) {
  // Object.entries(ElementPlusIconsVue) 表示获取ElementPlusIconsVue对象的所有属性键值对
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 注册全局组件
    app.component(key, component)
  }
}

export default registerIcons
