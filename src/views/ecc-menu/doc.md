# 导航菜单

侧边栏菜单,支持无限层级

## 按需引入

```js
import menu from 'elementplus-components-celerity/lib/ecc-menu';

app.use(menu);
```

## 示例代码

```html
<ecc-menu
  :data="data1"
  defaultActive="1"
  name="a"
  index="b"
  icon="c"
  children="d"
></ecc-menu>
```

```html
<ecc-infinite-menu
  :data="data2"
  defaultActive="2"
  name="a"
  index="b"
  icon="c"
  children="d"
>
</ecc-infinite-menu>
```

详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-menu/index.vue)

## Props

| 属性          | 说明                    | 类型    | 可选值     | 默认值   |
| :------------ | ----------------------- | ------- | ---------- | -------- |
| data          | 导航菜单的数据          | any[]   | 必填       | -        |
| defaultActive | 默认选中菜单的 index 值 | string  | -          | -        |
| router        | 是否是路由模式          | boolean | true/false | false    |
| name          | 菜单标题的键名          | string  | -          | name     |
| index         | 菜单标识的键名          | string  | -          | index    |
| icon          | 菜单图标的键名          | string  | -          | icon     |
| children      | 菜单子菜单的键名        | string  | -          | children |

继承`element-plus` `menu`组件的所有属性
