import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: 'coderyzj-element-components-web',
  build: {
    // 有大于 1M 的包才报警告信息，默认值为 500（单位kb）
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        // 独立分包
        manualChunks: {
          // chunkName：npm package module
          elementPlus: ['element-plus'],
          axios: ['axios'],
          mockjs: ['mockjs'],
          // 注意：不能抽离 icons，否则会导致报错，项目无法运行
          // 'element-plus-icons-vue': ['@element-plus/icons-vue'],
          'lodash-cloneDeep': ['lodash/cloneDeep'],
          'fullcalendar-core': ['@fullcalendar/core'],
          'fullcalendar-daygrid': ['@fullcalendar/daygrid'],
          'fullcalendar-interaction': ['@fullcalendar/interaction'],
          'wangeditor-editor': ['@wangeditor/editor'],
          'wangeditor-editor-for-vue': ['@wangeditor/editor-for-vue']
        }
      }
    }
  }
})
