<script lang="ts" setup>
// 引入Element-plus所有的图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useCopy } from '../../hooks/useCopy'

interface IProps {
  // 弹出框的标题
  title: string
  // 设置弹出框的显示与隐藏
  visible: boolean
}

// 设置默认值
withDefaults(defineProps<IProps>(), {
  title: '我是默认标题',
  visible: false
})

// 因为接收到的prop是只读的, 所以子组件不能使用v-model直接绑定接收到的prop
// 如果想要使用v-model绑定数据的话, 那么需要额外定义一个ref变量, 复制传递过来的值,
// 然后监听定义的 ref 变量, 当数据发生变化时, 发送自定义事件, 更新父组件中的visible变量值
// const visible = ref<boolean>(props.visible)

const emits = defineEmits(['update:visible'])
const handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', true)
}

const onClose = () => {
  emits('update:visible', false)
}

// 监听visible的变化
// https://cn.vuejs.org/api/reactivity-core.html#watch

// 点击图标的回调函数
const clickItem = (iconName: string) => {
  let text = `<el-icon><${iconName}/></el-icon>`

  // 执行复制文本操作
  useCopy(text)

  // 复制文本后, 关闭弹出框
  emits('update:visible', false)
}
</script>

<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>

  <!-- https://element-plus.gitee.io/zh-CN/component/dialog.html -->
  <!-- 
    model-value 表示单项数据绑定, 只传递过去数据, 不需要接收返回数据
    v-model 表示双向数据绑定(传递与接收)
   -->
  <div class="m-choose-icon-dialog-body-height">
    <!-- Element-plus 滚动条组件 -->
    <el-dialog :title="title" :model-value="visible" @close="onClose">
      <div class="container">
        <el-scrollbar height="500px">
          <!-- Object.keys(ElementPlusIconsVue) 获取所有的key(图标组件名) -->
          <div
            class="item"
            v-for="(iconName, index) in Object.keys(ElementPlusIconsVue)"
            :key="index"
            @click="clickItem(iconName)"
          >
            <div class="m-b-15">
              <el-icon :size="30">
                <!-- 动态组件: is属性接收一个组件名, 根据传入的组件名, 生成对应的组件 -->
                <component :is="iconName" />
              </el-icon>
            </div>
            <div>{{ iconName }}</div>
          </div>
        </el-scrollbar>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding: 20px 10px;
    box-sizing: border-box;

    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: var(--el-color-primary-light-9);
    }
  }

  .m-b-15 {
    margin-bottom: 15px;
  }

  :deep(.el-scrollbar__view) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  :deep(.el-dialog__body) {
    height: 500px;
    overflow-y: auto;
  }
}
</style>
