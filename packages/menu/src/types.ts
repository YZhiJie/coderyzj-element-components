export interface MenuItem {
  // 导航的图标
  icon?: string
  i?: any
  // 导航的名字
  name: string
  // 导航的标识
  index: string
  // 导航的子菜单
  children?: MenuItem[]
}
