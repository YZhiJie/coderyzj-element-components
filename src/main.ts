import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 完整引入element-plus
// https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入normalize.css, 清除默认样式
import 'normalize.css'
// 专门用于修改Element-plus组件样式的文件
// import './styles/ui.scss'

// 引入注册图标的函数
import registerIcons from './global/register-icons'

// 1.引入全局注册所有封装的组件
import mUI from './components'
// 引入打包后的组件库
// import mUI from '../lib/index'
// import '../lib/style.css'
// 2.按需引入注册
// import chooseIcon from '../lib/chooseIcon'
// import '../lib/chooseIcon/style.css'
// import chooseArea from '../lib/chooseArea'

// 引入模拟数据
import './mock'

const app = createApp(App)

// use() 方法可以传入一个函数或者一个对象
// 如果传入一个函数，那么会自动向该函数传入一个实参 app
// 如果传入一个对象，那么会自动向该对象的 install 方法传入一个实参 app

// ! 使用打包好的组件库
// 1. 整体导入使用（全量打包）
app.use(router).use(ElementPlus).use(registerIcons).use(mUI)
// 2. 按需导入使用（单个打包）
// app.use(router).use(ElementPlus).use(registerIcons).use(chooseIcon).use(chooseArea)

app.mount('#app')
