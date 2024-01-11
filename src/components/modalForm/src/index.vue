<template>
  <!-- 通过 .el-dialog__body 动态设置 dialog 内容区域的高度 -->
  <div :class="{ 'm-choose-icon-dialog-body-height': isScroll }">
    <!-- https://cn.vuejs.org/api/component-instance.html#attrs -->
    <!-- $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) -->
    <!-- v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 -->
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <m-form
          ref="formRef"
          :options="options"
          :label-width="labelWidth"
          @on-change="onChange"
          @before-upload="beforeUpload"
          @before-remove="beforeRemove"
          @on-remove="onRemove"
          @on-exceed="onExceed"
          @on-preview="onPreview"
          @on-success="onSuccess"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </m-form>
      </template>
      <template #footer>
        <slot name="footer" :formRef="formRef"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormInstance } from 'element-plus'
import type { FormOptions } from '../../form/src/types/types'
import type { FuncType } from './types'
import { ref, watch } from 'vue'

const props = defineProps({
  // 是否显示弹出框
  visible: {
    type: Boolean,
    default: false
  },
  // 表单的配置项数据
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 表单项中 label 的宽度
  labelWidth: {
    type: String,
    default: ''
  },
  // 只在屏幕区域内滚动
  isScroll: {
    type: Boolean,
    default: false
  },
  // 下面全是处理上传的事件
  onChange: {
    type: Function as PropType<FuncType>
  },
  beforeUpload: {
    type: Function as PropType<FuncType>
  },
  beforeRemove: {
    type: Function as PropType<FuncType>
  },
  onRemove: {
    type: Function as PropType<FuncType>
  },
  onExceed: {
    type: Function as PropType<FuncType>
  },
  onPreview: {
    type: Function as PropType<FuncType>
  },
  onSuccess: {
    type: Function as PropType<FuncType>
  }
})

const emits = defineEmits(['update:visible'])

// 表单实例
const formRef = ref<FormInstance | null>()

// 弹出框的显示/隐藏
const dialogVisible = ref<boolean>(props.visible)

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  }
)

watch(
  () => dialogVisible.value,
  (val) => {
    // 分发事件
    emits('update:visible', val)
  }
)
</script>

<style lang="scss" scoped></style>
