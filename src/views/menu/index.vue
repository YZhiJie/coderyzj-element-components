<template>
  <div style="display: flex">
    <div style="flex: 1">
      <m-menu :data="data1" default-active="1" name="a" index="a" icon="c" children="d"></m-menu>
    </div>
    <div style="flex: 1">
      <!-- infinite-menu 组件会递归渲染 children 属性 -->
      <!-- default-active 选中父级菜单时，父级菜单文字不会高亮显示，只会最后一级子菜单才会高亮显示 -->
      <m-infinite-menu
        :data="data2"
        default-active="1"
        name="a"
        index="a"
        icon="c"
        children="d"
      ></m-infinite-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
// 一共有两级菜单
const data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document'
      }
    ]
  }
]

// 一共有五级菜单
const data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'Document'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style lang="less" scoped></style>
