<template>
  <!-- <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isFold">
    <el-menu-item index="1">
      <el-icon><Menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2" route="{ path: '/chooseIcon' }">
      <el-icon><Menu /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Menu /></el-icon>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu> -->

  <!-- :default-active 的值为 data 数据项中的 index 属性值 -->
  <m-menu :data="data" router :default-active="$route.path" :collapse="isFold"></m-menu>
</template>

<script lang="ts" setup>
interface IProps {
  isFold: boolean
}

// https://cn.vuejs.org/guide/typescript/composition-api.html
withDefaults(defineProps<IProps>(), {
  isFold: false
})

const data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'Progress',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Calendar',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

<style lang="scss" scoped></style>
