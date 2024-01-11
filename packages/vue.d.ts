// 手动添加声明模块，默认情况下，没有添加类型声明，引入vue文件时会报错
// 如果安装了插件 TypeScript Vue Plugin (Volar) ，那么没有类型声明，也不会报错
// 声明 .vue 文件的类型
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}
