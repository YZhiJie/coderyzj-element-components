<template>
  <el-popover v-model:visible="visible" placement="bottom-start" :width="430" trigger="click">
    <template #reference>
      <div class="choose-city">
        <div>{{ result }}</div>
        <div class="icon" :class="{ rotate: visible }">
          <el-icon><ArrowDown /></el-icon>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <!-- v-model 变量获取到的是子元素的 label 属性值 -->
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select
            v-model="selectValue"
            placeholder="请搜索城市"
            size="small"
            filterable
            :filter-method="filterMethod"
            @change="handleSelectChange"
          >
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <!-- v-for 遍历数组时，参数1为 item, 参数2为 index -->
          <!-- v-for 遍历对象时，参数1为 value, 参数2为 key -->
          <!-- <div v-for="(value, key) in cities">{{key}}</div> -->
          <!-- 字母区域 -->
          <div
            class="city-item"
            @click="clickChat(item)"
            v-for="item in Object.keys(cities)"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">{{ key }}: </el-col>
              <el-col class="city-name" :span="22">
                <div
                  @click="clickItem(item)"
                  class="city-name-item"
                  v-for="item in value"
                  :key="item.id"
                >
                  {{ item.name }}
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            @click="clickChat(item)"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(item, index) in Object.values(provinces)" :key="index">
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px" :id="item1.id">
                <el-col :span="3">{{ item1.name }}: </el-col>
                <el-col class="province-name" :span="21">
                  <div
                    @click="clickProvince(item2)"
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                  >
                    {{ item2 }}
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import city from '../lib/city'
import province from '../lib/province.json'
import type { City } from './types'

// 分发事件
const emits = defineEmits(['changeCity', 'changeProvince'])

// 最终选择的结果
const result = ref<string>('请选择')
// 控制弹出层的显示
const visible = ref<boolean>(false)
// 单选框的值：按城市/按省份
const radioValue = ref<string>('按城市')
// 搜索下拉框的值
const selectValue = ref<string>('')
// 搜索下拉框显示的城市数据

const options = ref<City[]>([])
// 所有的城市数据
const cities = ref(city.cities)
// 所有省份的数据
const provinces = ref(province)
// 所有的城市数据
const allCity = ref<City[]>([])

// 点击每个城市
const clickItem = (item: City) => {
  // 给结果赋值
  result.value = item.name
  // 关闭弹出层
  visible.value = false
  // 分发事件
  emits('changeCity', item)
}

const clickProvince = (item: string) => {
  // 给结果赋值
  result.value = item
  // 关闭弹出层
  visible.value = false
  // 分发事件
  emits('changeProvince', item)
}

// 点击字母区域
const clickChat = (item: string) => {
  const targetEl = document.getElementById(item)
  if (targetEl) {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
    targetEl.scrollIntoView()
  }
}

// 自定义搜索过滤
// val 是当前搜索框输入的值
const filterMethod = (val: string) => {
  const values = Object.values(cities.value).flat(Infinity) as City[]
  if (val === '') {
    // 如果没有输入任何搜索内容
    options.value = values
  } else {
    // 如果输入了搜索内容
    if (radioValue.value === '按城市') {
      // 中文和拼音一起过滤（城市数据字段中有拼音字段）
      options.value = values.filter((item) => {
        return item.name.includes(val) || item.spell.includes(val)
      })
    } else {
      // 中文过滤（省份数据中没有拼音字段）
      options.value = values.filter((item) => {
        return item.name.includes(val)
      })
    }
  }
}

// 下拉框选择
const handleSelectChange = (val: number) => {
  const targetCity = allCity.value.find((item: City) => {
    return item.id === val
  })!
  result.value = targetCity.name

  // 根据不同分类的数据结构返回不同的值
  if (radioValue.value === '按城市') {
    emits('changeCity', targetCity)
  } else {
    emits('changeProvince', targetCity.name)
  }

  // 关闭弹出层：使用鼠标选择后默认会自动关闭，但是如果通过上下箭头选择，那么不会关闭弹出层
  visible.value = false
}

onMounted(() => {
  // 获取下拉框的城市数据
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
  // 使用 flat(Infinity) 将子数组中的所有元素添加到一个新的数组中，然后将该数组返回
  const values = Object.values(cities.value).flat(Infinity) as City[]
  options.value = values
  allCity.value = values
})
</script>

<style lang="scss" scoped>
.choose-city {
  display: flex;
  align-items: center;
  // 设置宽度为内容的宽度
  width: fit-content;
  cursor: pointer;

  .rotate {
    transform: rotate(180deg);
  }

  .icon {
    position: relative;
    top: 2px;
    margin-left: 4px;
    transition: all 0.25s linear;
  }
}

.container {
  padding: 15px;
}

.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
  }

  &-name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &-item {
      margin-right: 6px;
      margin-bottom: 6px;
      cursor: pointer;
    }
  }
}
</style>
