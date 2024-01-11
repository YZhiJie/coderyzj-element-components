<script lang="ts" setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  // 标签当前趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: 'up'
  },

  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },

  downIcon: {
    type: String,
    default: 'ArrowDown'
  },

  // 下降趋势显示的图标

  // 趋势显示的文字
  // 1.父组件传递过来的数据
  // 2.插槽
  text: {
    type: String,
    default: '默认文字'
  },

  // 文字大小
  textSize: {
    type: [Number, String],
    default: 14
  },

  // 如果传入同时传入reverseColor和自定义颜色，那么自定义颜色不生效，颜色反转生效
  // 如果不传reverseColor，则使用默认颜色或者自定义颜色
  // 就是将 up图标和down图标 的颜色交换
  reverseColor: {
    type: Boolean,
    default: false
  },

  // 上升趋势的图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },

  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },

  // 上升趋势的文字颜色
  upTextColor: {
    type: String,
    default: 'rgb(0, 0, 0)'
  },

  // 下降趋势的文字颜色
  downTextColor: {
    type: String,
    default: 'rgb(0, 0, 0)'
  }
})

// 当有传递插槽内容过来的时候，slots中会多出一个slotName(使用的插槽名称)的属性
// 如果是默认插槽，则有 slots.default
// 如果是具名插槽，则有 slots.slotName
// 可以通过判断 slots.slotName 是否为空，来进行一些条件渲染操作

// 获取插槽内容
const slots = useSlots()

// 文字颜色
const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor, fontSize: textSize + 'px' }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- <el-icon :style="{ color: !reverseColor ? upIconColor : '#52c41a' }" v-if="type === 'up'">
        <ArrowUp />
      </el-icon>
      <el-icon :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else>
        <ArrowDown />
      </el-icon> -->
      <el-icon>
        <!-- 动态组件 -->
        <component
          :is="upIcon"
          :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
          v-if="type === 'up'"
        />
        <component
          :is="downIcon"
          :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
          v-else
        />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

  // 设置图标的样式： <el-icon><ArrowDown /></el-icon>
  .el-icon {
    // 通过size设置图标的大小
    font-size: 0.8em;
  }
}
</style>
