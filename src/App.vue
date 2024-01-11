<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
// 专门用户修改Element-plus组件样式的文件
// 可以省略文件后缀名 .scss
@import './styles/ui';
// 基础样式的配置文件
@import './styles/base.scss';

// 设置 el-menu 组件的高度为 视口的高度
// 它的祖先元素也会被撑高到 视口的高度
</style>
