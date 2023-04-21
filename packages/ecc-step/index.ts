import { App } from 'vue';
import step from './src/index.vue';

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('ecc-step', step);
  },
};
// https://wocwin.github.io/t-ui-plus/components/TStepWizard/base.html
