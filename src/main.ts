import { createApp } from 'vue';
// import App from './App-1.vue';
import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

// 全量引入
// import ecc from '../lib/index.js';
// import '../lib/style.css';

// 按需引入
// import eccModalForm from '../lib/ecc-modalForm';

// 本地引入
import ecc from '../packages';

import { toLine } from '../packages/utils';
import './mock';

// 文档编写组件注册
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component);
}
app.use(router);
app.use(ElementPlus);
app.use(ecc);
// app.use(eccModalForm);
app.use(VMdPreview);
app.mount('#app');
