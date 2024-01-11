<template>
  <!-- https://cn.vuejs.org/api/component-instance.html#attrs -->
  <!-- $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) -->
  <!-- v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 -->
  <el-progress :percentage="p" v-bind="$attrs"></el-progress>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  // 进度条进度
  percentage: {
    type: Number,
    required: true
  },
  // 进度条是否有动画效果
  isAnimation: {
    type: Boolean,
    default: false
  },
  // 动画时长(毫秒数)
  time: {
    type: Number,
    default: 3000
  }
})

const p = ref<number>(0)

onMounted(() => {
  // 如果设置了启用动画效果
  if (props.isAnimation) {
    // 规定时间内加载完成(t 为加载 1% 需要花费的毫秒数)
    const t = Math.ceil(props.time / props.percentage)
    const timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  } else {
    // 没有设置启用动画时，直接设置进度条的百分比即可
    p.value = props.percentage
  }
})
</script>

<style lang="scss" scoped></style>
