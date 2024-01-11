<template>
  <m-choose-time
    :startOptions="startOptions"
    :endOptions="endOptions"
    @startChange="handleStartChange"
    @endChange="handleEndChange"
  >
  </m-choose-time>

  <br />
  <br />

  <m-choose-date
    :disableToday="false"
    :startDateOptions="startDateOptions"
    :endDateOptions="endDateOptions"
    @startChange="handleStartDateChange"
    @endChange="handleEndDateChange"
  >
  </m-choose-date>
</template>

<script setup lang="ts">
interface endValType {
  startTime: string
  endTime: string
}

const handleStartChange = (val: string) => {
  console.log(val)
}

const handleEndChange = (time: endValType) => {
  console.log(time)
}

const startOptions = {
  size: 'large',
  // 没有清空按钮图标
  clearable: false
}

const endOptions = {
  size: 'large'
}

// =================== 日期选择器 ==============================
interface endDateValType {
  startDate: Date
  endDate: Date
}

const handleStartDateChange = (val: Date) => {
  console.log(val)
}

const handleEndDateChange = (val: endDateValType) => {
  console.log(val)
}

const startDateOptions = {
  size: 'large'
  // 没有清空按钮图标
  // clearable: false
}

const endDateOptions = {
  size: 'large'
}
</script>

<style lang="scss" scoped></style>
