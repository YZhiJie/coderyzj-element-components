// 因为是使用 Node 进行打包构建的，所以一般遵循 CommonJS 规范
const fs = require('fs')
const path = require('path')
const fsExtra = require('fs-extra')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 打包入口文件夹
const entryDir = path.resolve(__dirname, '../packages')

// 出口文件夹：打包文件输出文件夹
const outputDir = path.resolve(__dirname, '../lib')

// vite 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// vite 底层是基于 rollup 进行打包构建的
// rollup 配置
const rollupOptions = {
  // 排除不需要打包的第三方库
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      // 配置全局对象名称: 相当于设置别名，然后在组件中使用 vue 时，不会报错
      // vue 库暴露出来的全局对象是 Vue
      vue: 'Vue'
    }
  }
}

/**
 * 1. 全量打包构建（只能整体导入）
 */
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        // 配置打包的入口文件
        entry: path.resolve(entryDir, 'index.ts'),
        // 打包和发布的包名称
        // The name of the exposed global variable.
        // Required when the formats option includes umd or iife
        name: 'm-element-components',
        // 输出文件名
        fileName: 'index',
        // 要输出的格式: umd 表示通用的模块化环境( commonjs/amd/browser )
        formats: ['es', 'umd']
      },
      outDir: outputDir
    },
    keep: ['lib/README.md', 'lib/**/index.d.ts', 'lib/package.json']
  })
}

/**
 * 2. 单组件打包构建（可以按需导入）
 * @param {*} name 当前打包组件的名称（name）
 */
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        // 入口文件：如果为目录，则实际引入的是该目录下的 index 脚本文件（.js/jsx/ts/tsx）
        entry: path.resolve(entryDir, name),
        // 打包和发布的包名称
        name: 'index',
        // 输出文件名
        fileName: 'index',
        formats: ['es', 'umd']
      },
      // 打包后的文件的输出目录
      outDir: path.resolve(outputDir, name)
    }
  })
}

/**
 * 每个组件生成自己的 package.json
 * @param {String} name 组件名称
 */
// const createPackageJson = (name) => {
//   // ESModule 规范导入时，入口文件为 module 字段指向的文件
//   // CommonJS 等其他规范导入文件时，入口文件为 main 字段指向的文件
//   const fileStr = `{
//   "name": "${require('kebab-case')(name)}",
//   "main": "index.umd.js",
//   "module": "index.js",
//   "style": "style.css"
// }
//   `
//   // 输出文件: 输出文件路径，文件内容，使用的编码字符集
//   // name 需要符合 package.json 中的 name 字段的命名规范
//   // 即，全部英文字母小写，以 - 分隔（kebab-case库的作用）
//   fsExtra.outputFile(path.resolve(outputDir, `${name}/package.json`), fileStr, 'utf-8')
// }

/**
 * 每个组件生成自己的 文件
 * @param {String} componentDirName 组件目录名
 * @param {String} fileName 要创建的文件名
 * @param {String} fileContent 写入 fileName 文件的内容
 */
const createFileInComponentDir = (componentDirName, fileName, fileContent) => {
  // 输出文件: 输出文件路径，文件内容，使用的编码字符集
  // name 需要符合 package.json 中的 name 字段的命名规范
  // 即，全部英文字母小写，以 - 分隔（kebab-case库的作用）
  fsExtra.outputFile(
    path.resolve(outputDir, `${componentDirName}/${fileName}`),
    fileContent,
    'utf-8'
  )
}

/**
 * 为组件创建 package.json
 * @param {String} componentDirName 组件目录名
 */
const createPackageJsonFile = (componentDirName) => {
  // ESModule 规范导入时，入口文件为 module 字段指向的文件
  // CommonJS 等其他规范导入文件时，入口文件为 main 字段指向的文件
  const fileName = 'package.json'
  const fileContent = `{
  "name": "${require('kebab-case')(componentDirName).replace(/^-/, '')}",
  "main": "index.umd.js",
  "module": "index.js",
  "style": "style.css"
}`
  createFileInComponentDir(componentDirName, fileName, fileContent)
}

/**
 * 为组件库创建 package.json
 * @param {String} componentDirName 组件目录名
 */
const createPackageJsonFileForComponentLib = (libName) => {
  // ESModule 规范导入时，入口文件为 module 字段指向的文件
  // CommonJS 等其他规范导入文件时，入口文件为 main 字段指向的文件
  const fileName = 'package.json'
  const fileContent = `{
  "name": "${require('kebab-case')(libName).replace(/^-/, '')}",
  "version": "1.0.4",
  "main": "index.umd.cjs",
  "module": "index.js",
  "types": "index.d.ts",
  "author": {
    "name": "coderyzj"
  },
  "keywords": [
    "element-plus",
    "typescript",
    "封装组件",
    "二次封装",
    "vue-components"
  ]
}`
  createFileInComponentDir('.', fileName, fileContent)
}

/**
 * 为组件创建 index.d.ts 类型声明文件
 * @param {String} componentDirName 组件目录名
 */
const createTSDeclarationFile = (componentDirName) => {
  // ESModule 规范导入时，入口文件为 module 字段指向的文件
  // CommonJS 等其他规范导入文件时，入口文件为 main 字段指向的文件
  const fileName = 'index.d.ts'
  const fileContent = `// 告诉使用我们当前组件库的项目
// 我们这个组件库是一个 Vue 插件 —— 通过 app.use(当前库对象) 进行注册后，才能正常使用
import type { App } from 'vue'

declare const _default: {
  install(app: App): void
}

export default _default`
  createFileInComponentDir(componentDirName, fileName, fileContent)
}

/**
 * 为组件库添加 README.md 自述文件
 */
const createREADMEFile = () => {
  // ESModule 规范导入时，入口文件为 module 字段指向的文件
  // CommonJS 等其他规范导入文件时，入口文件为 main 字段指向的文件
  const fileName = 'README.md'
  const fileContent = `# Vite 的库模式

https://cn.vitejs.dev/guide/build#library-mode

# package.json 中的字段说明

- 项目入口文件
  - \`main\`: 使用非 \`ESModule\` 规范（比如 \`CommonJS\`）导入时，实际导入的文件
  - \`module\`: 使用 \`ESModule\` 规范导入时，实际导入的文件
- \`types\`: typescript 类型说明文件
- \`"exports"\`：配置不同规范和导入路径下的入口文件
  - 使用 \`require('当前库根目录')\` 时，实际导入的是下面配置的 \`require\` 字段对应的文件
  - 同理，\`import xxx from "当前库根目录"\`，实际导入的是下面配置的 \`import\` 对应的文件
  \`\`\`json
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.umd.cjs"
    }
  }
  \`\`\`
- \`author.name\`：当前库作者
- \`keywords\`：在 [npm 仓库](https://www.npmjs.com/) 中可以搜索到当前库的关键字
  `
  createFileInComponentDir(outputDir, fileName, fileContent)
}

// 打包成库
const buildLib = async () => {
  // 1. 全量打包（只能整体导入）
  await buildAll()

  // 为组件库添加自述文件
  createREADMEFile()
  // 为组件库添加 index.d.ts 类型声明文件
  createTSDeclarationFile(outputDir)
  // 为组件库添加 package.json 文件
  createPackageJsonFileForComponentLib('coderyzj-element-components')

  // 2. 单独打包（可以按需导入）
  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter((name) => {
    // 获取当前 name 对应组件的打包路径
    const componentDir = path.resolve(entryDir, name)
    // 判断是否唯一个文件夹
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
  // 循环构建
  for (const name of components) {
    await buildSingle(name)
    // 为每个组件创建 package.json 文件
    createPackageJsonFile(name)
    // 为每个组件创建 index.d.ts 类型声明文件
    createTSDeclarationFile(name)
  }
}
buildLib()
