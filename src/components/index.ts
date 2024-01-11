import type { App } from 'vue'
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

const components = [
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

    // 循环注册所有组件
    for (const component of components) {
      app.use(component)
    }
  }
}
