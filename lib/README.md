# Vite 的库模式

https://cn.vitejs.dev/guide/build#library-mode

# package.json 中的字段说明

- 项目入口文件
  - `main`: 使用非 `ESModule` 规范（比如 `CommonJS`）导入时，实际导入的文件
  - `module`: 使用 `ESModule` 规范导入时，实际导入的文件
- `types`: typescript 类型说明文件
- `"exports"`：配置不同规范和导入路径下的入口文件
  - 使用 `require('当前库根目录')` 时，实际导入的是下面配置的 `require` 字段对应的文件
  - 同理，`import xxx from "当前库根目录"`，实际导入的是下面配置的 `import` 对应的文件
  ```json
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.umd.cjs"
    }
  }
  ```
- `author.name`：当前库作者
- `keywords`：在 [npm 仓库](https://www.npmjs.com/) 中可以搜索到当前库的关键字
  