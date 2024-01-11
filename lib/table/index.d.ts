// 告诉使用我们当前组件库的项目
// 我们这个组件库是一个 Vue 插件 —— 通过 app.use(当前库对象) 进行注册后，才能正常使用
import type { App } from 'vue'

declare const _default: {
  install(app: App): void
}

export default _default