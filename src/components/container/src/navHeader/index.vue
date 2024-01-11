<template>
  <div class="header">
    <el-icon :size="20" class="m-t-10" @click="toggleStatus">
      <!-- 动态组件 -->
      <component :is="isFold ? 'Fold' : 'Expand'" />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  isFold: boolean
}

// https://cn.vuejs.org/guide/typescript/composition-api.html
const props = withDefaults(defineProps<IProps>(), {
  isFold: false
})

// 设置 v-model:isFold="isFold" 的自定义处理事件
const emits = defineEmits(['update:isFold'])
const toggleStatus = () => {
  // 实现的关键: 父组件中定义的 isFold 是响应式数据(ref)
  // 通过自定义事件修改父组件的 isFold 的值后, 子组件中接收的 isFold 也会随之改变
  emits('update:isFold', !props.isFold)
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
}
</style>
