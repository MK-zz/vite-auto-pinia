# vite-auto-pinia

`vite-auto-pinia` is a plugin designed specifically for the Vite build tool. It can automatically generate Pinia files for you while also supporting hot-reloading entry configuration. This plugin makes managing your Vue 3 state management effortless and enhances efficiency during development. With `vite-auto-pinia`, you can quickly create and maintain Pinia state management and enjoy continuous maintenance and support. It's easy to get started with and powerful in functionality, making your Vite projects smoother and more efficient.

[中文](/README.md)
## Key Features

- Automatically watches the store folder, eliminating the need for manual management of state files.
- Smart template generation: When creating new state files, it intelligently generates template files that adhere to the Pinia specifications, making it easier for you to start state management.
- You can customize templates according to your project's requirements, ensuring that state files meet your specific needs. Full customization is supported.

## Smart Templates
![Smart Templates](http://mk.sprites.top/npm/PiniaAuto1.gif)

## Usage
**Users not using `unplugin-auto-import` need to add `import {$useStore} from '@/store'`**

![使用效果](http://mk.sprites.top/npm/PiniaAuto2.gif)

## Installation

You can install the `vite-auto-pinia` plugin using npm or yarn:

```bash
npm install vite-auto-pinia--save-dev
# 或
yarn add vite-auto-pinia --dev
```

## Usage

To use the `vite-auto-pinia` plugin in your Vite project, follow these steps:

**Configure the plugin in**  `vite.config.ts`
``` typescript
import { defineConfig } from 'vite';
import PiniaAuto from 'vite-auto-pinia';

export default defineConfig({
  // ... Other Vite configuration options
  plugins: [
    // Default watches the store folder
    PiniaAuto(),
  ],
});
```

**Usage**
- Official method:
  ``` vue
  <script setup lang="ts">
    // Reactive continuation
    import { storeToRefs } from 'pinia';
    // Import the store library
    import user from '@/store/user'
    const { name } = storeToRefs(user())
  </script>
  ```
- Plugin method:
  ``` vue
  <script setup lang="ts">
    // Import the entry file, you can simplify this with the `unplugin-auto-import` plugin
    import {$useStore} from '@/store'
    // Call the specific Pinia file based on your needs
    const { name } = $useStore('user')
  </script>
  ```
**This plugin not only makes state management easier but also speeds up development and improves maintainability. With no manual intervention required, `vite-auto-pinia` handles state management in the background, allowing you to focus on building outstanding Vue 3 applications. Fast, intelligent, highly customizable, it will become an indispensable tool in your project development.**

## Configuration Options

| Name    | Type      | Status   | Default | Description|
| ------- | --------- | ------ | ------ | --------------------- |
| watcher | `boolean` | Optional | `true` | Listens to the `store` folder by default夹 |

  
## Template Ejs Explanation

| Name| Description|
| -------------------- | ------------------------------- |
| `name`| Placeholder, default is the filename|
| `template.pinia.ejs` | Default template under the `_vap_template` folder |

## Other Plugins
| 名称| 描述|
|--- | -- |
| [vite-auto-template](https://www.npmjs.com/package/vite-auto-template) | A plugin designed for Vite developers, it automatically generates templates to improve development efficiency and ensure project consistency.|

## Related Literature
[Had enough of manually using storeToRefs? Try this Vite plugin](https://juejin.cn/post/7097893752030625828)