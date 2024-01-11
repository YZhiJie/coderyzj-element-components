import type { App } from 'vue'

// 引入注册所有图标的函数
// import registerIcons from './global/register-icons'
// 引入封装好的组件
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import editor from './myEditor'
import modalForm from './modalForm'
import table from './table'
import calendar from './calendar'

// 完整引入element-plus
// https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 引入样式文件
import './styles/ui.scss'
import './styles/base.scss'

const components = [
  // registerIcons,
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  editor,
  modalForm,
  table,
  calendar
]

export default {
  install(app: App) {
    // use() 方法可以传入一个函数或者一个对象
    // 如果传入一个函数，那么会自动向该函数传入一个实参 app
    // 如果传入一个对象，那么会自动向该对象的 install 方法传入一个实参 app

    // ! 注意：只有添加这一步，才可以正常使用表单校验功能
    // app.use(ElementPlus)

    // 循环注册所有组件
    for (const component of components) {
      app.use(component)
    }
  }
}
