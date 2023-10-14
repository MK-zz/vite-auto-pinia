# vite-auto-pinia

`vite-auto-pinia` 是一个专为 Vite 构建工具设计的插件，它可以自动为你生成 Pinia 文件，同时支持热更新入口配置。轻松地管理你的 Vue3 状态管理，并在开发过程中提高效率。通过 `vite-auto-pinia`，你可以快速创建和维护 Pinia 状态管理，同时享受到持续的维护和支持。上手容易，功能强大。让你的 Vite 项目更加流畅和高效。

[English](/README.en.md)
## 功能特点

- 自动监听 `store` 文件夹，无需手动管理状态文件。
- 智能模板生成,创建新的状态文件时，它会智能生成符合 `Pinia` 规范的模板文件，让你更轻松地开始状态管理。
- 你可以根据项目需求自定义模板，使状态文件满足你的特定需求。完全支持自定义。

## 智能模板

![智能模板](https://gitee.com/xiaotaibai123/vite-auto-pinia/raw/master/public/PiniaAuto1.gif)
## 使用效果
**非使用 `unplugin-auto-import`用户需要 加入`import {$useStore} from '@/store'`**
![使用效果](https://gitee.com/xiaotaibai123/vite-auto-pinia/raw/master/public/PiniaAuto2.gif)
## 安装

您可以使用 npm 或 yarn 安装 `vite-auto-pinia` 插件：

```bash
npm install vite-auto-pinia--save-dev
# 或
yarn add vite-auto-pinia --dev
```

## 使用方法

要在您的 Vite 项目中使用 `vite-auto-pinia` 插件，请按照以下步骤操作：

**配置插件**  `vite.config.ts`
``` typescript
import { defineConfig } from 'vite';
import AutoPinia from 'vite-auto-pinia';

export default defineConfig({
  // ... 其他 Vite 配置选项
  plugins: [
    // 默认监听store文件夹
    AutoPinia(),
  ],
});
```

**使用方法**
- 官方写法
  ``` vue
  <script setup lang="ts">
    //延续响应式
    import { storeToRefs } from 'pinia';
    //store 库
    import user from '@/store/user'
    const { name } = storeToRefs(user())
  </script>
  ```
- 插件写法
  ``` vue
  <script setup lang="ts">
    //入口文件 可以通过 unplugin-auto-import 插件简化
    import {$useStore} from '@/store'
    //根据需求调用指定pinia文件
    const { name,onMK } = $useStore('user')
  </script>
  ```
**这个插件不仅让状态管理变得更容易，还能提高开发速度和可维护性。无需手动干预，`vite-auto-pinia` 会在后台为你处理状态管理，让你专注于构建出色的 Vue 3 应用。快速、智能、高度可定制化，它将成为你的项目开发中不可或缺的助手。**

## 配置选项

| 名称    | 类型      | 状态   | 默认值 | 描述                  |
| ------- | --------- | ------ | ------ | --------------------- |
| watcher | `boolean` | 非必填 | `true` | 默认监听`store`文件夹 |

  
## 模板`Ejs`说明

| 名称                 | 描述                            |
| -------------------- | ------------------------------- |
| `name`               | 占位符，默认`文件名`            |
| `template.pinia.ejs` | `_vap_template`文件夹下默认模板 |

## 其他插件
| 名称                                                                   | 描述                                                                     |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [vite-auto-template](https://www.npmjs.com/package/vite-auto-template) | 为 Vite 开发者设计的插件，它自动生成模板，提高开发效率并确保项目一致性。 

## 相关文献
[受够了手动storeToRefs？来试试这个vite插件吧](https://juejin.cn/post/7097893752030625828)