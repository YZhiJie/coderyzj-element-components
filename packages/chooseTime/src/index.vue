<template>
  <div style="display: flex">
    <!-- https://cn.vuejs.org/api/component-instance.html#attrs -->
    <!-- $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) -->
    <!-- v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 -->
    <div style="margin-right: 20px">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="startOptions"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间的开始选择
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: '00:30'
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 结束时间的开始选择
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: '00:30'
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: '24:00'
  },
  startOptions: {
    type: Object
  },
  endOptions: {
    type: Object
  }
})

const emits = defineEmits(['startChange', 'endChange'])

// 开始时间
const startTime = ref('')
// 结束时间
const endTime = ref('')
// 是否禁用结束时间
const endTimeDisabled = ref<boolean>(true)

// 监听开始时间的变化
watch(
  () => startTime.value,
  (val) => {
    // 如果开始时间为空，那么结束时间也为空
    if (val === '') {
      endTime.value = ''
      endTimeDisabled.value = true
    } else {
      // 选择了开始时间
      endTimeDisabled.value = false
      // 给父组件分发事件
      emits('startChange', val)
    }
  }
)

// 监听结束时间的变化
watch(
  () => endTime.value,
  (val) => {
    if (val !== '') {
      emits('endChange', {
        startTime: startTime.value,
        endTime: val
      })
    }
  }
)
</script>

<style lang="scss" scoped></style>
