<template>
  <!-- https://cn.vuejs.org/api/component-instance.html#attrs -->
  <!-- $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) -->
  <!-- v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 -->
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :router="router"
    v-bind="$attrs"
  >
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
        <el-icon>
          <component v-if="item[icon]" :is="item[icon]"></component>
        </el-icon>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu v-if="item[children] && item[children].length" :index="item[index]">
        <!-- 设置 sub-memu 的标题的插槽 -->
        <template #title>
          <el-icon>
            <component v-if="item[icon]" :is="item[icon]"></component>
          </el-icon>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item v-for="(item1, index1) in item[children]" :key="index1" :index="item1[index]">
          <el-icon>
            <component v-if="item1[icon]" :is="item1[icon]"></component>
          </el-icon>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
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
})

// console.log(props.data)
</script>

<style lang="scss" scoped>
// 设置菜单没有折叠时的宽度
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
} */
</style>
