<template>
  <m-form
    ref="formRef"
    :options="options"
    label-width="100px"
    @on-change="handleChange"
    @before-upload="handleBeforeUpload"
    @before-remove="handleBeforeRemove"
    @on-remove="handleRemove"
    @on-exceed="handleExceed"
    @on-preview="handlePreview"
    @on-success="handleSuccess"
  >
    <template #uploadArea>
      <el-button size="small" type="primary">Click to upload</el-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc; font-size: 12px">jpg/png files with a size less than 500KB.</div>
    </template>
    <template #action="scope">
      <el-button type="primary" @click="submitForm(scope)">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </template>
  </m-form>
</template>

<script setup lang="ts">
import type {
  FormInstance,
  UploadFile,
  UploadFiles,
  UploadProps,
  UploadRawFile
} from 'element-plus'
import type { FormOptions } from '../../components/form/src/types/types'
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

interface ScopeType {
  formRef: any
  model: any
}

const options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      }
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        // 单选框和多选框没有失去焦点的说法
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: 'football'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: 'basketball'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: 'volleyball'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        // 单选框和多选框没有失去焦点的说法
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'secret'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传文件',
    prop: 'pic',
    uploadAttrs: {
      // 将文件上传地址修改为真实的服务器地址，应该就可以成功上传文件，并触发 on-success 回调函数
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
      multiple: true,
      limit: 3,
      // 选择文件后，不自动上传文件到 action 地址
      // autoUpload: false,
      name: 'photos'
    },
    rules: [
      {
        required: true,
        message: '文件不能为空',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'editor',
    value: '',
    prop: 'desc',
    label: '描述',
    editorConfig: {
      placeholder: '请输入描述信息'
    },
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]

const formRef = ref<FormInstance | null>(null)

// 提交表单
const submitForm = (scope: ScopeType) => {
  scope.formRef.validate((valid: boolean) => {
    if (valid) {
      console.log(scope.model)
      // console.log(scope.formRef.getFormData())
    } else {
      ElMessage.error('表单填写有误, 请检查')
    }
  })
}

// 重置表单
const resetForm = () => {
  formRef.value!.resetFields()
}

const handleRemove: UploadProps['onRemove'] = (val: any) => {
  console.log('handleRemove')
  console.log(val)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile: UploadFile) => {
  console.log('handlePreview')
  console.log(uploadFile)
}

const handleBeforeRemove: UploadProps['beforeRemove'] = (val: any) => {
  console.log('handleBeforeRemove')
  return ElMessageBox.confirm(`Cancel the transfer of ${val.uploadFile.name} ?`).then(
    () => true,
    () => false
  )
}

const handleExceed: UploadProps['onExceed'] = (val: any) => {
  console.log('handleExceed')
  ElMessage.warning(
    `The limit is 3, you selected ${val.files.length} files this time, add up to ${
      val.files.length + val.uploadFiles.length
    } totally`
  )
}

const handleBeforeUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
  console.log('handleBeforeUpload')
  console.log(rawFile)
}

const handleChange: UploadProps['onChange'] = (
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log('onChange', uploadFile, uploadFiles)
}

const handleSuccess: UploadProps['onSuccess'] = (val: any) => {
  console.log('handleSuccess')
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
