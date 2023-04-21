# 城市选择

提供按城市和省份选择中国所有的城市,支持搜索和跳转

```js
import chooseCity from 'elementplus-components-celerity/ecc-chooseCity';
import 'elementplus-components-celerity/ecc-chooseCity/style.css';

app.use(chooseCity);
```

## 示例代码

```html
<m-choose-city></m-choose-city>
```

详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-chooseCity/index.vue)

## Props

| 属性           | 说明             | 参数                 |
| :------------- | ---------------- | -------------------- |
| changeCity     | 按城市选择时触发 | val: City,城市信息   |
| changeProvince | 按省份选择时触发 | val: string,城市名字 |

## City 数据格式

| key   | 说明     | 类型   |
| :---- | -------- | ------ |
| id    | 城市编码 | number |
| spell | 城市拼音 | string |
| name  | 城市名称 | string |
