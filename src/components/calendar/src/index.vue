<template>
  <div id="calendar"></div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { EventItemType } from './types'
import type { EventClickArg } from '@fullcalendar/core'
import type { DateClickArg } from '@fullcalendar/interaction'
import { ref, watch, onMounted } from 'vue'
import { Calendar } from '@fullcalendar/core'
import daygrid from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'

// https://fullcalendar.io/docs/getting-started
const props = defineProps({
  // 语言
  local: {
    type: String,
    default: 'zh-cn' // 中文
  },
  // 视图模式
  initialView: {
    type: String,
    deault: 'dayGridMonth'
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => ({
      today: '今天',
      month: '月',
      week: '周',
      day: '日',
      prevYear: '上一年',
      nextYear: '下一年',
      prev: '上一月',
      next: '下一月'
    })
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => ({
      start: 'title',
      center: '',
      // 对应 buttonText 中的属性名称
      end: 'prevYear prev today next nextYear'
    })
  },
  // 底部工具栏
  footerToolbar: {
    type: Object,
    default: () => ({})
  },
  // 事件源
  events: {
    type: Array as PropType<EventItemType[]>,
    default: () => []
  },
  // 日历单元格中显示事件的结束时间（默认不显示）
  displayEventEnd: {
    type: Boolean,
    default: false
  },
  eventContent: {
    type: Function
  }
})

// 分发事件
const emits = defineEmits(['dateClick', 'eventClick'])

// 日历实例
const calendar = ref<Calendar>()

// 渲染日历的方法
const renderCalendar = () => {
  const el = document.getElementById('calendar')
  if (el) {
    // 参数1：渲染到的目标 DOM 元素
    // 参数2：日历配置对象
    calendar.value = new Calendar(el, {
      // 安装的日历插件（官方提供的）
      plugins: [daygrid, interaction],
      locale: props.local,
      initialView: props.initialView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      eventSources: [
        {
          // 渲染日历的事件
          events(e, callback) {
            // 父组件有传入非空的 events
            if (props.events.length) callback(props.events)
            // 没有传入 events 时，渲染的事件源为空数组
            else callback([])
          }
        }
      ],
      // 下面两个事件有处理事件冒泡，所以它们不会相互影响
      // 点击日历上的某一天
      dateClick(info: DateClickArg) {
        emits('dateClick', info)
      },
      // eventSources 中的事件被点击时的回调函数
      eventClick(info: EventClickArg) {
        emits('eventClick', info)
      },
      displayEventEnd: props.displayEventEnd,
      // 自定义事件的内容：该方法的返回值将作为事件的内容
      eventContent: props.eventContent
    })
    calendar.value.render()
  }
}

onMounted(() => {
  renderCalendar()
})

// 监听父组件传递的事件源
watch(
  () => props.events,
  () => {
    renderCalendar()
  },
  { deep: true }
)
</script>

<style lang="scss" scoped></style>
