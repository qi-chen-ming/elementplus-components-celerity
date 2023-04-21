# 时间选择

提供开始时间和结束时间选择联动

## 按需引入

```js
import chooseDate from 'elementplus-components-celerity/lib/ecc-chooseDate';
import chooseTime from 'elementplus-components-celerity/lib/ecc-chooseTime';

app.use(chooseDate);
app.use(chooseTime);
```

## 示例代码

```html
<ecc-choose-date
  :disableToday="false"
  @startChange="dateStartChange"
  @endChange="dateEndChange"
></ecc-choose-date>

<ecc-choose-time
  @startChange="startChange"
  @endChange="endChange"
></ecc-choose-time>
```

详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-chooseDateAndTime/index.vue)

## chooseDate

### Props

| 属性             | 说明                       | 类型    | 可选值     | 默认值         |
| :--------------- | -------------------------- | ------- | ---------- | -------------- |
| startPlaceholder | 开始日期的占位符           | string  | -          | 请选择开始日期 |
| endPlaceholder   | 结束日期的占位符           | string  | -          | 请选择结束日期 |
| disableToday     | 是否禁用选择今天之前的日期 | boolean | true/false | true           |

## chooseTime

### Props

| 属性             | 说明               | 类型   | 可选值 | 默认值         |
| :--------------- | ------------------ | ------ | ------ | -------------- |
| startPlaceholder | 开始时间的占位符   | string | -      | 请选择开始时间 |
| endPlaceholder   | 结束时间的占位符   | string | -      | 请选择结束时间 |
| startTimeStart   | 开始时间的开始选择 | string | -      | 08:00          |
| startStep        | 开始时间的步进     | string | -      | 00:30          |
| startTimeEnd     | 开始时间的结束选择 | string | -      | 24:00          |
| ensTimeStart     | 结束时间的开始选择 | string | -      | 08:00          |
| endStep          | 结束时间的步进     | string | -      | 00:30          |
| endTimeEnd       | 结束时间的结束选择 | string | -      | 24:00          |

### 事件

| 事件名      | 说明                   | 参数                 |
| :---------- | ---------------------- | -------------------- |
| startChange | 开始时间变化时触发     | val: string,开始时间 |
| endChange   | 结束时间发生变化时触发 | val: Value,结束时间  |

### Value 数据格式

| key       | 说明           | 类型   |
| :-------- | -------------- | ------ |
| startTime | 趋势显示的文字 | string |
| endTime   | 结束时间       | string |
