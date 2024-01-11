import type { PropType } from 'vue'
import { defineComponent, useAttrs } from 'vue'
import * as Icons from '@element-plus/icons-vue'

// 使用 Options API
export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      // 这里使用 any 的原因：让用户可以传递任意类型的数据
      type: Array as PropType<any[]>,
      required: true
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false
    },
    // 键名
    // 菜单标题的键名
    name: {
      type: String,
      default: 'name'
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: 'index'
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: 'icon'
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: 'children'
    }
  },
  // https://cn.vuejs.org/api/composition-api-setup.html#composition-api-setup
  setup(props) {
    // 结构赋值
    const { name, index, icon, children } = props

    // 封装一个渲染无限层级菜单的方法
    // 函数会返回一段 jsx 的代码
    const renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // 处理 sub-menu 的插槽
        item.i = (Icons as any)[item[icon]!]
        const slots = {
          title: () => {
            return (
              <>
                <el-icon>
                  <item.i />
                </el-icon>
                <span>{item[name]}</span>
              </>
            )
          }
        }

        // 有 children，则递归渲染 children
        if (item[children] && item[children].length) {
          return (
            <el-sub-menu index={item[index]} v-slots={slots}>
              {renderMenu(item[children])}
            </el-sub-menu>
          )
        }

        // 没有 children，正常渲染普通的菜单
        return (
          <el-menu-item index={item[index]}>
            <el-icon>
              <item.i />
            </el-icon>
            <span>{item[name]}</span>
          </el-menu-item>
        )
      })
    }

    // https://cn.vuejs.org/api/component-instance.html#attrs
    // $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性)
    // v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性
    const attrs = useAttrs()

    // console.log(attrs)

    // 返回一个函数，该函数的返回值为 jsx 语法编写的内容
    return () => {
      return (
        <el-menu default-active={props.defaultActive} router={props.router} {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})
