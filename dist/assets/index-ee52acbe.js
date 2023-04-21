import{d as m,c as p,a as r,b as t,u as e,F as _,r as o,o as C}from"./index-ae37e2ab.js";const u=`# 时间选择\r
\r
提供开始时间和结束时间选择联动\r
\r
## 按需引入\r
\r
\`\`\`js\r
import chooseDate from 'elementplus-components-celerity/ecc-chooseDate';\r
import chooseTime from 'elementplus-components-celerity/ecc-chooseTime';\r
\r
app.use(chooseDate);\r
app.use(chooseTime);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<ecc-choose-date\r
  :disableToday="false"\r
  @startChange="dateStartChange"\r
  @endChange="dateEndChange"\r
></ecc-choose-date>\r
\r
<ecc-choose-time\r
  @startChange="startChange"\r
  @endChange="endChange"\r
></ecc-choose-time>\r
\`\`\`\r
\r
详细代码请查看[这里]()\r
\r
## chooseDate\r
\r
### Props\r
\r
| 属性             | 说明                       | 类型    | 可选值     | 默认值         |\r
| :--------------- | -------------------------- | ------- | ---------- | -------------- |\r
| startPlaceholder | 开始日期的占位符           | string  | -          | 请选择开始日期 |\r
| endPlaceholder   | 结束日期的占位符           | string  | -          | 请选择结束日期 |\r
| disableToday     | 是否禁用选择今天之前的日期 | boolean | true/false | true           |\r
\r
## chooseTime\r
\r
### Props\r
\r
| 属性             | 说明               | 类型   | 可选值 | 默认值         |\r
| :--------------- | ------------------ | ------ | ------ | -------------- |\r
| startPlaceholder | 开始时间的占位符   | string | -      | 请选择开始时间 |\r
| endPlaceholder   | 结束时间的占位符   | string | -      | 请选择结束时间 |\r
| startTimeStart   | 开始时间的开始选择 | string | -      | 08:00          |\r
| startStep        | 开始时间的步进     | string | -      | 00:30          |\r
| startTimeEnd     | 开始时间的结束选择 | string | -      | 24:00          |\r
| ensTimeStart     | 结束时间的开始选择 | string | -      | 08:00          |\r
| endStep          | 结束时间的步进     | string | -      | 00:30          |\r
| endTimeEnd       | 结束时间的结束选择 | string | -      | 24:00          |\r
\r
### 事件\r
\r
| 事件名      | 说明                   | 参数                 |\r
| :---------- | ---------------------- | -------------------- |\r
| startChange | 开始时间变化时触发     | val: string,开始时间 |\r
| endChange   | 结束时间发生变化时触发 | val: Value,结束时间  |\r
\r
### Value 数据格式\r
\r
| key       | 说明           | 类型   |\r
| :-------- | -------------- | ------ |\r
| startTime | 趋势显示的文字 | string |\r
| endTime   | 结束时间       | string |\r
`,T={class:"ecc-components-show"},f=r("h1",{class:"ecc-h1"},"组件示例",-1),S=r("br",null,null,-1),E=r("br",null,null,-1),P=m({__name:"index",setup(v){let a=n=>{console.log("startChange",n)},c=n=>{console.log("endChange",n)},l=n=>{console.log(n)},h=n=>{console.log(n)},s={};return(n,b)=>{const d=o("ecc-choose-time"),i=o("ecc-choose-date"),g=o("v-md-preview");return C(),p(_,null,[r("div",T,[f,t(d,{startOptions:e(s),onStartChange:e(a),onEndChange:e(c)},null,8,["startOptions","onStartChange","onEndChange"]),S,E,t(i,{disableToday:!1,startOptions:e(s),onStartChange:e(l),onEndChange:e(h)},null,8,["startOptions","onStartChange","onEndChange"])]),t(g,{text:e(u)},null,8,["text"])],64)}}});export{P as default};
