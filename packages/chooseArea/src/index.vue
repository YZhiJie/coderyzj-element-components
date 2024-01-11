<script lang="ts" setup>
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'

export interface IAreaItem {
  name: string
  code: string
  children?: IAreaItem[]
}

export interface IData {
  code: string
  name: string
}

// 下拉框选择省份的code值
const province = ref<string>('')
// 下拉框选择城市的code值
const city = ref<string>('')
// 下拉框选择区域的code值
const area = ref<string>('')

// 所有的省市区数据(响应式)
const areas = ref(allAreas)

// 城市下拉框的所有的值: 根据选择的省份的code值进行过滤
const selectCity = ref<IAreaItem[]>([])

// 城市下拉框的所有的值: 根据选择的城市的code值进行过滤
// https://cn.vuejs.org/api/reactivity-core.html#computed
const selectArea = ref<IAreaItem[]>([])

// 分发事件给父组件, 传递用户选择的省市区数据
const emits = defineEmits(['change'])

// 监听选择省份
watch(
  () => province.value,
  (newVal) => {
    if (newVal) {
      const cities = areas.value.find((item) => item.code === province.value)!.children
      selectCity.value = cities
    }

    // 重置操作, 配合select组件的clearable属性
    city.value = ''
    area.value = ''
  }
)

// 监听选择城市
watch(
  () => city.value,
  (newVal) => {
    if (newVal) {
      // ! 是非空断言, 表示左侧变量一定是有值的
      const regions = selectCity.value.find((item) => item.code === city.value)!.children!
      selectArea.value = regions
    }

    // 重置操作, 配合select组件的clearable属性
    area.value = ''
  }
)

// 监听选择区域
watch(
  () => area.value,
  (newVal) => {
    // 选择区域后(省市区都选好了), 才会执行的操作
    if (newVal) {
      const provinceData: IData = {
        code: province.value,
        // && 与运算符: 当左侧表达式的值为true(有值)时, 才会执行右侧表达式
        // 使用 && 后，就可以确保后面表达式的name属性一定是有值的( 对应知识点: typescript的类型缩小 )
        name: province.value && areas.value.find((item) => item.code === province.value)!.name
      }

      const cityData: IData = {
        code: city.value,
        name: city.value && selectCity.value.find((item) => item.code === city.value)!.name
      }

      const areaData: IData = {
        code: newVal,
        name: newVal && selectArea.value.find((item) => item.code === newVal)!.name
      }

      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData
      })
    }
  }
)
</script>

<template>
  <div class="choose-area">
    <el-select placeholder="请选择省份" v-model="province" clearable>
      <template v-for="province in areas" :key="province.code">
        <el-option :value="province.code" :label="province.name" />
      </template>
    </el-select>
    <el-select
      style="margin: 0 10px"
      placeholder="请选择城市"
      v-model="city"
      :disabled="!province"
      clearable
    >
      <template v-for="city in selectCity" :key="city.code">
        <el-option :value="city.code" :label="city.name" />
      </template>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area" :disabled="!province || !city" clearable>
      <template v-for="area in selectArea" :key="area.code">
        <el-option :value="area.code" :label="area.name" />
      </template>
    </el-select>
  </div>
</template>

<style lang="scss" scoped>
.choose-area {
  display: flex;
}
</style>
