<template>
  <div class="list-tabs__item">
    <el-tabs>
      <!-- 如果只是展示数据，可以使用 index 作为 key 值，但是最好传递一个唯一标识 -->
      <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
        <el-scrollbar max-height="300px">
          <div
            class="container"
            @click="clickItem(item1, index1)"
            v-for="(item1, index1) in item.content"
            :key="index1"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{ item1.tag }}</el-tag>
              </div>
              <div v-if="item1.desc" class="time">{{ item1.desc }}</div>
              <div v-if="item1.time" class="time">{{ item1.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions">
          <!-- <div class="actions" v-if="item.title === '代办'"> -->
          <div
            class="a-item"
            :class="{ border: i !== actions.length - 1 }"
            v-for="(action, i) in actions"
            :key="i"
            @click="clickAction(action, i)"
          >
            <div class="a-icon" v-if="action.icon">
              <el-icon>
                <!-- 动态组件 -->
                <component :is="action.icon"></component>
              </el-icon>
            </div>
            <div class="a-text" v-if="action.text">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ListItem, ListOptions, ActionOptions } from './types'
defineProps({
  // 列表的内容
  list: {
    // https://cn.vuejs.org/api/utility-types.html#proptype-t
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

const emits = defineEmits(['clickItem', 'clickAction'])

const clickItem = (item: ListItem, index: number) => {
  emits('clickItem', { item, index })
}
const clickAction = (item: ActionOptions, index: number) => {
  emits('clickAction', { item, index })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background-color: #e6f6ff;
  }

  .avatar {
    flex: 1;
  }

  .content {
    flex: 3;

    .title {
      display: flex;
      justify-content: space-between;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin: 4px;
    }
  }
}

.actions {
  display: flex;
  bottom: 0;
  height: 50px;
  border-top: 1px solid #eee;

  .a-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    cursor: pointer;

    .a-icon {
      margin-right: 4px;
      // 微调位置时使用相对定位
      position: relative;
      top: 2px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>
