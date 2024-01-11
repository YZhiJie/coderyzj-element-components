<template>
  <div style="display: flex">
    <!-- https://cn.vuejs.org/api/component-instance.html#attrs -->
    <!-- $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) -->
    <!-- v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 -->
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledDate"
        v-bind="startDateOptions"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDisabledDate"
        v-bind="endDateOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  // 开始日期的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始日期'
  },
  // 结束日期的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁止选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: true
  },
  startDateOptions: {
    type: Object
  },
  endDateOptions: {
    type: Object
  }
})

const emits = defineEmits(['startChange', 'endChange'])

// 开始日期
const startDate = ref<Date | null>()
// 结束日期
const endDate = ref<Date | null>()
// 控制结束日期的禁用状态
const endDateDisabled = ref<boolean>(true)

// 禁用开始日期的函数
// disabled-date 属性值函数的返回值为 true，则禁止选择该日期
const startDisabledDate = (time: Date) => {
  if (props.disableToday) {
    // getTime 和 now 方法获取的都是时间戳（毫秒数）
    // 下面条件的作用是只能当前往后的时间，不能选择往前的时间
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
  }
}

// 禁用结束日期的函数
// disabled-date 属性值函数的返回值为 true，则禁止选择该日期
const endDisabledDate = (time: Date) => {
  // getTime 和 now 方法获取的都是时间戳（毫秒数）
  // 下面条件的作用是只能从开始日期往后一天开始的日期
  if (startDate.value) {
    // 开始日期和结束日期不能是同一天
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24

    // 开始日期和结束日期可以为同一天
    // return time.getTime() < startDate.value.getTime()
  }
}

// 监听开始的日期变化
watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      // 没有选择开始日期
      endDate.value = null
      endDateDisabled.value = true
    } else {
      // 选择了开始日期
      emits('startChange', val)
      endDateDisabled.value = false
      // 如果开始日期大于结束日期，则清空结束日期
      const startTime = startDate.value as Date
      const endTime = endDate.value as Date
      // +Date 表示获取 Date 对象对应时间戳
      // if (+startTime > +endTime) { // 开始日期和结束日期可以为同一天
      if (+startTime >= +endTime) {
        // 开始日期和结束日期不能是同一天
        endDate.value = null
      }
    }
  }
)

// 监听结束日期的时间变化
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits('endChange', {
        startDate: startDate.value,
        endDate: val
      })
    }
  }
)
</script>

<style lang="scss" scoped></style>
