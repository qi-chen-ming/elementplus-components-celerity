/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'lodash/cloneDeep';
declare module '*/lib/index.js' {
  declare const _default: {
    install(app: App): void;
  };
  // declare const FormOptions: any;
  export default _default;
}

declare module '@kangc/v-md-editor/lib/preview';
declare module '@kangc/v-md-editor/lib/theme/github';
