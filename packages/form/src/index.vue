<template>
  <!-- :validate-on-rule-change="false" => 首次进入该组件时不进行表单规则验证 -->
  <el-form
    v-if="model"
    ref="formRef"
    :validate-on-rule-change="false"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <!-- item 没有 children 或者 children 为空数组时才渲染该组件 -->
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholde="item.placeholder"
          v-bind="item.attrs"
        />
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :on-exceed="onExceed"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
        >
          <!-- 显示的内容 -->
          <slot name="uploadArea"></slot>
          <!-- 给用户的提示信息 -->
          <template #tip>
            <slot name="uploadTip"></slot>
          </template>
        </el-upload>
        <!-- 富文本编辑器 -->
        <m-editor
          v-if="item.type === 'editor'"
          :editorConfig="editorConfig"
          :value="editorContent"
          @onChange="handleChange"
          @getEditor="getEditor"
        />
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
          v-bind="item.attrs"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :value="child.value"
            :label="child.label"
          >
          </component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :formRef="formRef" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
  UploadRawFile,
  UploadUserFile,
  FormInstance
} from 'element-plus'
import type { FormOptions } from './types/types'
import type { IDomEditor, IEditorConfig } from '@wangeditor/editor'
import { ref, watch, onMounted } from 'vue'
// npm i lodash @types/lodash
import cloneDeep from 'lodash/cloneDeep'

const emits = defineEmits([
  'on-preview',
  'on-remove',
  'on-success',
  'on-error',
  'on-progress',
  'on-change',
  'on-exceed',
  'before-upload',
  'before-remove'
])

const props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // 用户自定义上传方法：会覆盖默认的 Xhr 行为，允许自行实现上传文件的请求
  httpRequest: {
    type: Function
  }
})

// 表单的表单项的值
const model = ref<any>(null)
// 表单的表单项的验证规则
const rules = ref<any>(null)
// 表单对象的 ref
// InstanceType<typeof ElForm> 获取 ElForm 类构造函数创建出来的实例对象的类型
// 可以使用 FormInstance 或者 InstanceType<typeof ElForm>
const formRef = ref<FormInstance | null>()

// 富文本编辑器的配置信息
const editorConfig = ref<Partial<IEditorConfig>>({})
// 富文本编辑器的内容
const editorContent = ref<string>('')
// 编辑器配置信息的 prop 属性
const editorProp = ref<string>('')
// 编辑器内容发生变化时的回调
const handleChange = (content: string) => {
  model.value[editorProp.value] = content
}
// 富文本编辑器对象实例
const editorRef = ref<IDomEditor>()
const getEditor = (editor: IDomEditor) => {
  editorRef.value = editor
}

// 初始化表单
const initForm = () => {
  // 当 options 有值时才进行渲染
  if (props.options && props.options.length) {
    const m: any = {}
    const r: any = {}

    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      if (item.type === 'editor') {
        editorProp.value = item.prop!

        // https://www.wangeditor.com/v5/content.html#设置内容
        // 设置富文本编辑器的配置
        editorConfig.value = item.editorConfig!
        // 设置编辑器的内容
        editorContent.value = item.value
      }
    })

    // lodash 的 cloneDeep 方法可以实现对对象的深度克隆
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

// 重置表单
const resetFields = () => {
  // 重置 element-plus 的表单
  formRef.value?.resetFields()

  // 重置富文本编辑器的内容
  // 获取到富文本编辑器的配置项
  if (props.options && props.options.length) {
    const editorItem = props.options.find((item) => item.type === 'editor')
    // 将富文本编辑器的内容重置为传入的配置项的内容
    editorRef.value!.setHtml(editorItem?.value)
  }

  console.log('resetFields', model.value)
}

// 表单验证
const validate = () => {
  // 返回 ElForm 组件对象的 validate 表单验证方法
  return formRef.value?.validate
}

// 获取表单数据
const getFormData = () => {
  return model.value
}

// 分发方法：只有通过 defineExpose 暴露的方法才可以通过组件的 ref 引用对象进行访问
defineExpose({
  resetFields,
  validate,
  getFormData
})

onMounted(() => {
  initForm()
})

// 监听父组件传递进来的 options
watch(
  () => props.options,
  () => {
    initForm()
  },
  { deep: true }
)

// 上传组件的所有方法
// uploadFile  保存的是上传的最后一个文件
// uploadFiles 保存的是上传的所有文件
const onPreview = (uploadFile: UploadFile) => {
  emits('on-preview', uploadFile)
}

const onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-remove', { uploadFile, uploadFiles })
}

const onSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // 上传图片成功，给对应的表单项赋值
  const uploadItem = props.options.find((item) => item.type === 'upload')!
  model.value[uploadItem.prop!] = { response, uploadFile, uploadFiles }
  emits('on-success', { response, uploadFile, uploadFiles })
}

const onError = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-error', { error, uploadFile, uploadFiles })
}

const onProgress = (
  event: UploadProgressEvent,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits('on-progress', { event, uploadFile, uploadFiles })
}

const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-change', { uploadFile, uploadFiles })
}

const onExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  emits('on-exceed', { files, uploadFiles })
}

const beforeUpload = (rawFile: UploadRawFile) => {
  emits('before-upload', rawFile)
}

const beforeRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('before-remove', { uploadFile, uploadFiles })
}
</script>

<style lang="scss" scoped></style>
