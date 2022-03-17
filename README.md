# vite-plugin-global-api

`vite` 面向组件库的全局 `api` 的插件

<br />

## Features 🦖

### naive-ui

- [dialog](https://www.naiveui.com/zh-CN/os-theme/components/dialog)
- [message](https://www.naiveui.com/zh-CN/os-theme/components/message)
- [notification](https://www.naiveui.com/zh-CN/os-theme/components/notification)

<br />

## Usage 🦕


1. 安装

```shell
npm i vite-plugin-global-api -D
```

2. 配置

```ts
// vite.config.js 或者 vite.config.js
import { defineConfig } from "vite"
import GlobalApi from "vite-plugin-global-api"

export default defineConfig({
    plugins: [GlobalApi()]
})
```

```ts
// main.js or main.ts
import App from './App.vue'
import { createApp } from 'vue'
import { useGlobalApi } from 'virtual:global-api'

const app = createApp(App)

useGlobalApi(app) // 获取 api

app.mount('#app')
```

3. 使用

```shell
npm i naive-ui
```

```ts
import { n } from 'virtual:global-api'

// n 为 naive-ui 的全局 api 实例
n.dialog.info({ title: 'Dialog' })

n.message.info('message')

n.notification.create({
    title: 'Notification'
})
```

注意 `naive-ui` 的全局 `api` 使用，必须在 `App.vue` 挂载之后。

<br />

### Type 🐃

如果你是 `ts` 项目，可以在 `tsconfig.json` 中添加如下配置以得到虚拟模块的类型声明

```json
{
    "compilerOptions": {
        "types": ["vite-plugin-global-api/client"]
    }
}
```




<br />
<br />

## License

Made with markthree

Published under [MIT License](./LICENSE).

<br />