// 可配置的表单
import type { CSSProperties } from 'vue'
import type { RuleItem } from './rule'
import type { IEditorConfig } from '@wangeditor/editor'

// 表单每一项的配置选项
// 只有 type 和 value 属性是必传的
export interface FormOptions {
  // 表单项显示的元素
  type:
    | 'autocomplete'
    | 'cascader'
    | 'checkbox'
    | 'checkbox-group'
    | 'checkbox-button'
    | 'color-picker'
    | 'date-picker'
    | 'input'
    | 'input-number'
    | 'radio'
    | 'radio-group'
    | 'radio-button'
    | 'rate'
    | 'select'
    | 'option'
    | 'slider'
    | 'switch'
    | 'time-picker'
    | 'time-select'
    | 'transfer'
    | 'upload'
    | 'editor'
  // 表单项的值
  value?: any
  // 表单label
  label?: string
  // 表单的标识(用于表单验证)
  prop?: string
  // 表单项的验证规则
  rules?: RuleItem[]
  // 表单项的占位符
  placeholder?: string
  // 表单元素特有的属性（可以直接将官方文档中提及的属性都添加进来，或者在实际开发中根据项目需求手动添加 ）
  attrs?: {
    // 是否可清空
    clearable?: boolean
    // 是否为密码输入框
    showPassword?: boolean
    // 是否为禁用状态
    disabled?: boolean
    // css 样式
    style?: CSSProperties
  }
  // 表单项的子元素
  children?: FormOptions[]
  // 处理上传组件的属性
  uploadAttrs?: {
    action: string
    headers?: object
    // method?: 'post' | 'put' | 'patch',
    method?: string
    multiple?: boolean
    data?: any
    name?: string
    withCredentials?: boolean
    showFileList?: boolean
    drag?: boolean
    accept?: string
    // thumbnailMode?: boolean,
    fileList?: any[]
    listType?: 'text' | 'picture' | 'picture-card'
    autoUpload?: boolean
    disabled?: boolean
    limit?: number
  }
  editorConfig?: Partial<IEditorConfig>
}
