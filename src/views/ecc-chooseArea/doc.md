# 省市区选择

通过下拉框实现省市区三级联动

## 按需引入

```js
// main.ts
import chooseArea from 'elementplus-components-celerity/lib/ecc-chooseArea';

app.use(chooseArea);
```

## 代码示例

```html
<ecc-choose-area @change="changeArea"></ecc-choose-area>
```

详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-chooseArea/index.vue)

## Api

| 事件名 | 说明                     | 回调参数                 |
| :----- | ------------------------ | ------------------------ |
| change | 选择了省市区三级之后触发 | val: AreaInfo,省市区数据 |

## AreaInfo 数据格式

| key      | 说明       | 类型       |
| :------- | ---------- | ---------- |
| province | 省份的数据 | val: Value |
| city     | 城市的数据 | val: Value |
| area     | 区域的数据 | val: Value |

## Value 数据格式

| key  | 说明 | 类型   |
| :--- | ---- | ------ |
| name | 名字 | string |
| code | 编码 | number |
