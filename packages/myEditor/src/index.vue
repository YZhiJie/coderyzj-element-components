<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 350px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { IDomEditor } from '@wangeditor/editor'
import { onBeforeUnmount, shallowRef, ref } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

const props = defineProps({
  // 内容
  value: {
    type: String,
    default: ''
  },
  // 工具栏配置
  toolbarConfig: {
    type: Object,
    default: () => {}
  },
  // 编辑器配置
  editorConfig: {
    type: Object,
    default: () => ({
      placeholder: '请输入内容'
    })
  },
  // 编辑器的模式
  mode: {
    type: String,
    default: 'default' // 或 'simple'
  }
})

const emits = defineEmits(['onChange', 'getEditor'])

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor>()
// 编辑器的内容
const valueHtml = ref<string>(props.value)

// 模拟 ajax 异步获取内容
// onMounted(() => {
//   setTimeout(() => {
//     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
//   }, 1500)
// })

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

// 编辑器配置：https://www.wangeditor.com/v5/editor-config.html

// 创建富文本编辑器的回调
const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！

  // 分发事件
  emits('getEditor', editor)
}

// 富文本编辑器内容发生改变的回调
const handleChange = (editor: IDomEditor) => {
  const content = editor.getHtml() === '<p><br></p>' ? '' : editor.getHtml()
  // onChange 回调函数在编辑器初始化赋值的时候就会自动调用一次
  emits('onChange', content)
  // emits('onChange', editor.children)
}
</script>
