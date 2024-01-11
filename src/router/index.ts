import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Container from '../components/container/src/index.vue'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea',
        component: () => import('../views/chooseArea/index.vue')
      },
      {
        path: '/trend',
        component: () => import('../views/trend/index.vue')
      },
      {
        path: '/notification',
        component: () => import('../views/notification/index.vue')
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue')
      },
      {
        path: '/progress',
        component: () => import('../views/progress/index.vue')
      },
      {
        path: '/chooseTime',
        component: () => import('../views/chooseTime/index.vue')
      },
      {
        path: '/chooseCity',
        component: () => import('../views/chooseCity/index.vue')
      },
      {
        path: '/form',
        component: () => import('../views/form/index.vue')
      },
      {
        path: '/modalForm',
        component: () => import('../views/modalForm/index.vue')
      },
      {
        path: '/table',
        component: () => import('../views/table/index.vue')
      },
      {
        path: '/calendar',
        component: () => import('../views/calendar/index.vue')
      }
    ]
  }
]

const router = createRouter({
  // 修改为 hash 模式（才能正确访问静态资源）
  history: createWebHashHistory(),
  routes
})

export default router