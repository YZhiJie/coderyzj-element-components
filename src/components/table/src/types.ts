export interface ITableOptions {
  // 表头标题
  label: string
  // 字段名称
  prop: string
  // 列宽度
  width?: string | number
  // 对齐方式
  align?: 'left' | 'center' | 'right'
  // 自定义列表模板名称
  slot?: string
  // 是否代表操作项
  action?: boolean
  // 是否为可编辑
  editable?: boolean
  // 是否可排序
  sortable?: boolean | 'custom' | string
  // 是否显示多选框列
  selection?: boolean
}
