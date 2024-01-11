<template>
  <m-table
    ref="tableRef"
    stripe
    :data="tableData"
    :options="options"
    elementLoadingText="正在拼命加载中 ..."
    element-loading-background="rgba(0, 0, 0, .9)"
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    @confirm="handleConfirmClick"
    @cancel="handleCancelClick"
    editIcon="Edit"
    isEditRow
    pagination
    :total="total"
    v-model:editRowIndex="editRowIndex"
    paginationAlign="center"
    @size-change="handleSizeChange"
    @current-change="handleCurrentPageChange"
  >
    <template #date="{ scope }">
      <el-icon><Timer /></el-icon>
      <!-- scope.row 保存的是该行数据 -->
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>name: {{ scope.row.name }}</div>
          <div>address: {{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>
    <template #action="{ scope }">
      <el-button size="small" type="primary" @click="handleEdit(scope)">编辑</el-button>
      <el-button size="small" type="danger" @click="handleDelete(scope)">删除</el-button>
    </template>
    <template #editRow="{ scope }">
      <el-button size="small" type="primary">确定</el-button>
      <el-button size="small" type="danger" @click="cancleClick(scope)">取消</el-button>
    </template>
    <!-- <template #editCell="{ scope }">
      <el-button type="primary" size="small">确定</el-button>
      <el-button size="small">取消</el-button>
    </template> -->
  </m-table>
</template>

<script setup lang="ts">
import type { ITableOptions } from '../../components/table/src/types'
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface TableDataType {
  date: string
  name: string
  address: string
}

// 表格实例
const tableRef = ref<any>()

const svg = `
              <path class="path" d="
                M 30 15
                L 28 17
                M 25.61 25.61
                A 15 15, 0, 0, 1, 15 30
                A 15 15, 0, 1, 1, 27.99 7.5
                L 15 15
              " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
            `

// 表格数据
const tableData = ref<TableDataType[]>([])
// 表格行是否可编辑的标识
const editRowIndex = ref<string>('')

// 分页相关变量
// 当前显示的页码
const currentPage = ref<number>(1)
// 每页显示的数据条数
const pageSize = ref<number>(10)
// 总数据条数
const total = ref<number>(0)

const getData = () => {
  axios
    .post('/api/list', {
      current: currentPage.value,
      pageSize: pageSize.value
    })
    .then((res: any) => {
      tableData.value = res.data.data.rows
      total.value = res.data.data.total
    })
}

onMounted(() => {
  getData()
})

// setTimeout(() => {
//   tableData.value = [
//     {
//       date: '2016-05-03',
//       name: 'Tom',
//       address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//       date: '2016-05-02',
//       name: 'Zhangsan',
//       address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//       date: '2016-05-04',
//       name: 'Lisi',
//       address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//       date: '2016-05-01',
//       name: 'Wangwu',
//       address: 'No. 189, Grove St, Los Angeles',
//     },
//   ]
// }, 3000)

// 表格配置
const options: ITableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    // 自定义列模板名称
    slot: 'date',
    align: 'center',
    // 是否为可编辑
    editable: true
    // 是否可排序
    // sortable: true
    // width: 180
  },
  {
    label: '姓名',
    prop: 'name',
    // 自定义列模板名称
    slot: 'name',
    align: 'center',
    // 是否为可编辑
    editable: true
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center'
  },
  {
    label: '操作',
    prop: 'operation',
    align: 'center',
    action: true
  }
]

// 编辑
const handleEdit = (scope: any) => {
  editRowIndex.value = 'edit'
  console.log(scope)
}

// 删除
const handleDelete = (scope: any) => {
  console.log(scope)
}

// 点击 √
const handleConfirmClick = (scope: any) => {
  console.log('confirm', scope)
}

// 点击 ×
const handleCancelClick = (scope: any) => {
  console.log('cancel', scope)
}

// 分页相关方法
const handleSizeChange = (size: number) => {
  pageSize.value = size
  getData()
  // console.log(size)
}
const handleCurrentPageChange = (current: number) => {
  currentPage.value = current
  getData()
  // console.log(current)
}

const cancleClick = (scope: any) => {
  tableRef.value?.cancelClick(scope)
}
</script>

<style lang="scss" scoped></style>
