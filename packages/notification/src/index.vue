<template>
  <div class="notification">
    <!-- https://element-plus.gitee.io/zh-CN/component/popover.html -->
    <!-- 也可以通过 popper-class 给 el-popper 组件添加类样式 -->
    <el-popover
      popper-style="padding: 0;"
      :disabled="disabled"
      placement="bottom"
      :width="300"
      trigger="click"
    >
      <!-- 匿名插槽 -->
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge :value="value" :max="max" :isDot="isDot">
          <el-icon :style="{ fontSize: iconSize + 'px' }">
            <component :is="icon" />
          </el-icon>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell'
  },

  // 设置图标的大小
  iconSize: {
    type: [Number, String],
    default: 16
  },

  // 通知数量
  value: {
    type: [Number, String],
    default: ''
  },

  // 最大值
  max: {
    type: Number,
    default: 99
  },

  //是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  },

  // 是否禁用通知菜单
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.notification {
  display: inline-block;
}
</style>
