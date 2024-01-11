// hooks文件夹/文件的命名一般都是以 use 开头的

import { ElMessage } from 'element-plus'

// 复制文本
export const useCopy = (text: string) => {
  // 1.创建一个input元素
  const inputEl = document.createElement('input')

  // 2.给input元素的value赋值
  inputEl.value = text

  // 3.将intput元素追加到body元素中
  document.body.appendChild(inputEl)

  // 4.选中输入框文本
  // inputEl.select()

  // 5.复制选中的文本: 方式1
  // document.execCommand('copy') // 已弃用的API, 不推荐使用, 但是部分浏览器任然支持

  // 5.复制选中的文本: 方式2
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/clipboard
  navigator.clipboard.writeText(inputEl.value)

  // 方式3: 使用 clipboardjs 库
  // https://clipboardjs.com/

  // 6.复制文本后, 移除追加的input元素
  document.body.removeChild(inputEl)

  // 7.提示用户: 复制成功
  ElMessage({
    type: 'success',
    message: '复制成功~'
  })
}
