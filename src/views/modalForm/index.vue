<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <m-modal-form
      isScroll
      title="编辑用户"
      width="50%"
      v-model:visible="visible"
      :options="options"
      label-width="80px"
      :onChange="handleChange"
      :onSuccess="handleSuccess"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px">jpg/png files with a size less than 500KB.</div>
      </template>
      <template #footer="{ formRef }">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleConfirm(formRef)">确认</el-button>
      </template>
    </m-modal-form>
    <!-- 上面的 v-model:visible="visible" 相当于下面的代码 -->
    <!-- <m-modal-form :visible="visible" @update:visible="(val: boolean) => visible = val"></m-modal-form> -->
  </div>
</template>

<script setup lang="ts">
import type { FormOptions } from '../../components/form/src/types/types'
import type { UploadProps } from 'element-plus'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const visible = ref(false)
const open = () => {
  visible.value = true
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

// 点击确认
const handleConfirm = (form: any) => {
  const validate = form.validate()
  const model = form.getFormData()

  // 表单验证
  validate((valid: boolean) => {
    if (valid) {
      console.log(model)
      ElMessage.success('验证成功')
    } else {
      ElMessage.error('验证失败')
    }
  })
}

/**
 * 点击取消
 * @param form Form 实例
 */
// const handleCancel = (form: FormInstance) => {
const handleCancel = () => {
  visible.value = false
}

const handleChange: UploadProps['onChange'] = (val: any) => {
  console.log('onChange', val)
}

const handleSuccess: UploadProps['onSuccess'] = (val: any) => {
  console.log('handleSuccess')
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
