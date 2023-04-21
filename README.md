# 介绍

这是一个 vue3+vite+ts 创建的基于 element-plus 的二次封装组件库。

组件库包含了侧边栏容器、省市区选择、城市选择、时间选择、表单、导航菜单、弹出框表单、通知菜单、步骤、表格组件的封装。

详细的文档请点击[这里](https://qi-chen-ming.github.io/elementplus-components-celerity/)

# 安装

```
npm install elementplus-components-celerity
```

# 快速开始

## 全量引用

```javascript
//main.js
import { createApp } from 'vue';
import App from './App.vue';

import ecc from 'elementplus-components-celerity';
import 'elementplus-components-celerity/style.css';

import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component);
}

app.use(ElementPlus);
app.use(ecc);
app.mount('#app');
```

## 按需引用

```javascript
import eccChooseCity from 'elementplus-components-celerity/ecc-chooseCity';
import 'elementplus-components-celerity/ecc-chooseCity/style.css';

app.use(eccChooseCity);
```

# 安装依赖

```
pnpm install
```
