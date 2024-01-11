<template>
  <div>
    <!-- <m-notification :value="50" :max="30" iconSize="30" />
    <m-notification class="n2" :value="50" icon="ChatRound" iconSize="40" />
    <m-notification class="n2" isDot icon="ChatRound" iconSize="40" />
    <m-notification class="n2" :value="50" icon="ChatRound" iconSize="40" /> -->

    <el-divider>正常状态</el-divider>
    <m-notification :value="50">
      <template #default>
        <m-list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="list"
          :actions="actions"
        ></m-list>
      </template>
    </m-notification>

    <el-divider>禁用状态</el-divider>
    <!-- 通过 disabled 属性给通知菜单设置禁用状态 -->
    <m-notification :value="50" disabled>
      <template #default>
        <m-list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="list"
          :actions="actions"
        ></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from './data'

const clickItem = (val: any) => {
  // 接收的是点击的列表项的信息
  // val = { item, index }
  console.log(val)
}

const clickAction = (val: any) => {
  // 接收的是点击的操作的信息
  // val = { item, index }
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
