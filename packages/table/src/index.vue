<template>
  <!-- https://cn.vuejs.org/api/component-instance.html#attrs -->
  <!-- $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) -->
  <!-- v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 -->
  <el-table
    :data="tableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    @row-click="rowClick"
    v-bind="$attrs"
    highlightCurrentRow
    @current-change="handleCurrentRowChange"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" :width="55" />
    <template v-for="(item, index) in TableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
        :sortable="item.sortable"
      >
        <template #default="scope">
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <template v-else>
            <!-- 编辑状态 -->
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex">
                <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                <div class="edit-cell" @click.stop="clickEditCell(scope)">
                  <!-- 
                  $slots.slotName：如果父组件有向插槽名为 slotName 的插槽传入内容，那么 $slots.slotName 是有值的
                    反之，则 $slots 对象中没有随影 slotName 属性
                -->
                  <slot name="editCell" :scope="scope" v-if="$slots.editCell"></slot>
                  <div class="icons" v-else>
                    <el-icon class="icon check" @click="checkClick(scope)"><Check /></el-icon>
                    <el-icon class="icon close" @click="closeClick(scope)"><Close /></el-icon>
                  </div>
                </div>
              </div>
            </template>
            <!-- 原有状态 -->
            <template v-else>
              <!-- 需要自定义内容时 -->
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <!-- 不需要自定义内容时 -->
              <span v-else>{{ scope.row[item.prop] }}</span>
              <!-- @click.stop 停止点击事件的冒泡 -->
              <el-icon v-if="item.editable" class="edit" @click.stop="clickEdit(scope, item.prop)">
                <component :is="editIcon"></component>
              </el-icon>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions!.label"
      :align="actionOptions!.align"
      :width="actionOptions!.width"
    >
      <!-- el-table 自带的插槽 -->
      <template #default="scope">
        <slot name="editRow" :scope="scope" v-if="scope.row.rowEdit"></slot>
        <!-- 自定义的作用域插槽 -->
        <slot name="action" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>
  <div
    class="pagination"
    v-if="pagination && !isLoading"
    :style="{ justifyContent: paginationAlignJustify }"
  >
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ITableOptions } from './types'
import { ref, computed, watch, onMounted } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

const props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<ITableOptions[]>,
    requried: true
  },
  // 表格数据
  data: {
    type: Array,
    required: true
  },
  // 显示在加载图标下方的加载文案
  elementLoadingText: {
    type: String
  },
  // 自定义加载图标
  elementLoadingSpinner: {
    type: String
  },
  // 自定义 svg 加载图标 (与 element-loading-spinner 相同)
  elementLoadingSvg: {
    type: String
  },
  // 加载 svg 图标的配置
  elementLoadingSvgViewBox: {
    type: String
  },
  // 背景遮罩的颜色
  elementLoadingBackground: {
    type: String
  },
  // 可编辑单元格显示的图标
  editIcon: {
    type: String,
    default: 'Edit'
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: ''
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false
  },
  // 当前是第几页的数据
  currentPage: {
    type: Number,
    default: 1
  },
  // 每页数据条数的选择
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 30, 40, 50]
  },
  // 每页的数据条数
  pageSize: {
    type: Number,
    default: 10
  },
  // 总数据条数
  total: {
    type: Number
  },
  // 分页的排列方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  }
})

// 分发事件
const emits = defineEmits([
  'confirm',
  'cancel',
  'update:editRowIndex',
  'sizeChange',
  'currentChange'
])

// 当前点击的单元格
const currentEdit = ref<string>('')

// 拷贝一份表格的数据
const tableData = ref<any[]>(cloneDeep(props.data))

// 拷贝一份按钮的标识
const cloneEditRowIndex = ref<string>(props.editRowIndex)
// 监听的标识
let watchData = ref<boolean>(false)

// 监听父组件传递过来的数据
// 只需要监听一次就可以了
const stopWatchData = watch(
  () => props.data,
  (val) => {
    watchData.value = true
    tableData.value = val
    tableData.value.map((item) => {
      // 添加一个属性 rowEdit：代表当前是否是可编辑的状态
      item.rowEdit = false
    })
    if (watchData.value) stopWatchData()
  },
  { deep: true }
)

// 监听父组件传递过来的标识
watch(
  () => props.editRowIndex,
  (val) => {
    if (val) {
      cloneEditRowIndex.value = val
    }
  }
)

onMounted(() => {
  tableData.value.map((item) => {
    // 添加一个属性 rowEdit：代表当前是否是可编辑的状态
    item.rowEdit = false
  })
})

// 保存被点击的单元格所在列使用的配置属性
const editCellProp = ref<string>('')
// 保存被点击的单元格所在行的数据
const editRowInitialValue = ref<any>({})
// 点击编辑图标
const clickEdit = (scope: any, prop: string) => {
  // 拼接得到单元格的唯一标识
  currentEdit.value = scope.$index + scope.column.id

  // 点击编辑图标进入编辑状态时，先保存之前的值(使用 lodash 深度克隆)
  editRowInitialValue.value = cloneDeep(scope.row)
  editCellProp.value = prop

  // console.log(scope, prop)
}

// 利用事件委托给编辑状态下的操作元素绑定点击事件
const clickEditCell = (scope: any) => {
  // 关闭输入框，显示数据
  currentEdit.value = ''

  console.log(scope, editRowInitialValue.value)
}

// 点击 √
const checkClick = (scope: any) => {
  // 关闭输入框，显示数据
  // currentEdit.value = ''
  emits('confirm', scope)
}

// 点击 ×
const closeClick = (scope: any) => {
  // 关闭输入框，显示数据
  // currentEdit.value = ''

  // 将数据还原
  const cellProp = editCellProp.value
  scope.row[cellProp] = editRowInitialValue.value[cellProp]

  emits('cancel', scope)
}

// 点击每一行的事件
/**
 * 获取点击坐标位置对应的行数据和列数据
 * @param row 光标所在行的数据
 * @param column 光标所在列的数据
 */
const rowClick = (row: any, column: any) => {
  // 判断当前点击的是否是操作项表格列的内容
  if (column?.label === actionOptions.value!.label) {
    // 编辑行的操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      // 点击的按钮是做可编辑操作的
      row.rowEdit = !row.rowEdit

      // 点击编辑图标进入编辑状态时，先保存之前的值(使用 lodash 深度克隆)
      editRowInitialValue.value = cloneDeep(row)
      // console.log("rowClick", editRowInitialValue.value)

      // 重置其他数据的 isEditRow
      tableData.value.map((item) => {
        if (item !== row) {
          item.rowEdit = false
        }
      })

      // 重置按钮的标识
      if (!row.rowEdit) emits('update:editRowIndex', '')
    }
  }
}

// 分页数据
const currentPage = ref<number>(props.currentPage)
const pageSize = ref<number>(props.pageSize)

// 分页显示的数据条数改变
const handleSizeChange = (pageSize: number) => {
  emits('sizeChange', pageSize)
}

// 分页的页数改变
const handleCurrentChange = (currentPage: number) => {
  emits('currentChange', currentPage)
}

// 过滤操作选项之后的配置( action 属性为 false )
const TableOptions = computed(() => props.options!.filter((item) => !item.action))

// 找出操作项的配置( action 属性为 true )
const actionOptions = computed(() => props.options?.find((item) => item.action))

// 表格是否正在加载中
// 当没有传递 data 或者传递的 data 为一个空数组的时候，表格处于加载状态
const isLoading = computed(() => !props.data || !props.data.length)

// 和 flex 布局结合的排列方式
const paginationAlignJustify = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'center') return 'center'
  else return 'flex-end'
})

// 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性
/**
 * 表格的当前行发生变化的时候会触发该事件
 * @param currentRow 当前选中行的数据
 * @param oldCurrentRow 前一个选中行的数据
 */
const handleCurrentRowChange = (currentRow: any, oldCurrentRow: any) => {
  console.log(currentRow, oldCurrentRow)
}

/**
 * 当选择项发生变化时会触发该事件
 * @param selection 接受的是选中的行数据
 */
const handleSelectionChange = (selection: any) => {
  console.log(selection)
}

// 还原行编辑数据
const cancelClick = (scope: any) => {
  // 不起作用
  // scope.row = editRowInitialValue.value

  // 逐个赋值就生效
  for (const key in scope.row) {
    scope.row[key] = editRowInitialValue.value[key]
  }

  console.log('cancelClick', scope.row)
}

defineExpose({
  cancelClick
})
</script>

<style lang="scss" scoped>
.edit {
  position: relative;
  top: 2px;
  left: 5px;
  cursor: pointer;
}

.icons {
  display: flex;
  align-items: center;
  .icon {
    margin-left: 6px;
    cursor: pointer;
  }
  .check {
    color: red;
  }
  .close {
    color: green;
  }
}

.edit-cell {
  display: flex;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
}

.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>
