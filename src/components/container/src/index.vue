<template>
  <el-container>
    <!-- 折叠菜单时, 设置width: auto, 表示使用el-menu组件折叠时的默认宽度 -->
    <el-aside width="auto">
      <!-- 
        <nav-aside v-model:isFold="isFold" /> 
        相当于
        <nav-aside :isFold="isFold" @update:isFold="isFold = $event" />
       -->
      <nav-aside :isFold="isFold" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:isFold="isFold" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavHeader from './navHeader/index.vue'
import NavAside from './navAside/index.vue'

import { ref } from 'vue'
import { watch } from 'vue'

const isFold = ref<boolean>(false)

watch(isFold, () => {
  // console.log(val)
})
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
