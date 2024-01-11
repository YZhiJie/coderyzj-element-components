<template>
  <m-calendar
    displayEventEnd
    :events="events"
    @dateClick="handleDateClick"
    @eventClick="handleEventClick"
    :eventContent="eventContent"
  ></m-calendar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DateClickArg } from '@fullcalendar/interaction'
import type { EventClickArg, EventContentArg } from '@fullcalendar/core'
import type { EventItemType } from '../../components/calendar/src/types'

const events = ref<EventItemType[]>([
  {
    title: '购物',
    // start 和 end 可以为时间字符串，会在日历上的对应日期单元格中渲染该事件，相当于自定义备注
    start: '2023-06-13 08:00',
    end: '2023-06-13 12:00',
    // 该事件是否可拖拽
    editable: true
  },
  {
    title: '敲代码',
    start: '2023-06-14 10:00',
    end: '2023-06-30 16:00'
  }
])

const handleDateClick = (info: DateClickArg) => {
  events.value.push({
    title: '搞事情',
    start: info.dateStr + ' 12:00',
    end: info.dateStr + ' 18:00'
  })
}

const handleEventClick = (info: EventClickArg) => {
  console.log(info)
}

const eventContent = (arg: EventContentArg) => {
  const el = document.createElement('div')

  const timeTextArr = arg.timeText.split('-')
  const start = timeTextArr[0].replace('时', '')
  const end = timeTextArr[1].replace('时', '')

  el.innerHTML = `
          <img src="src/assets/vue.svg" style="width: 30px;">
          <div>开始时间: ${start}</div>
          <div>结束时间: ${end}</div>
          <div>标题:  ${arg.event._def.title}</div>
        `
  return {
    domNodes: [el]
  }
}
</script>

<style lang="scss" scoped></style>
