# 通知菜单

显示通知菜单列表,支持多种自定义

## 按需引入

```js
import notifiction from 'elementplus-components-celerity/ecc-notifiction';
import 'elementplus-components-celerity/ecc-notifiction/style.css';

app.use(notifiction);
```

## 示例代码

```html
<ecc-notification :value="50">
  <template #default>
    <ecc-list
      @clickItem="clickItem"
      @clickAction="clickAction"
      :list="list"
      :actions="actions"
    ></ecc-list>
  </template>
</ecc-notification>
```

详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-notification/index.vue)

## Props

| 属性  | 说明           | 类型          | 可选值     | 默认值 |
| :---- | -------------- | ------------- | ---------- | ------ |
| icon  | 显示的图标     | string        | -          | Bell   |
| value | 通知数量       | string/number | -          | -      |
| max   | 最大值         | number        | -          | -      |
| isDot | 是否显示小圆点 | boolean       | true/false | false  |

## slots 插槽

| 名称    | 说明                   |
| :------ | ---------------------- |
| default | 点击图标之后显示的内容 |
