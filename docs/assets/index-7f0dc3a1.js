import{d as l,c as m,a as c,b as n,u as r,F as h,r as o,o as i}from"./index-86a24d6b.js";const p=`# 省市区选择\r
\r
通过下拉框实现省市区三级联动\r
\r
## 按需引入\r
\r
\`\`\`js\r
// main.ts\r
import chooseArea from 'elementplus-components-celerity/ecc-chooseArea';\r
\r
app.use(chooseArea);\r
\`\`\`\r
\r
## 代码示例\r
\r
\`\`\`html\r
<ecc-choose-area @change="changeArea"></ecc-choose-area>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-chooseArea/index.vue)\r
\r
## Api\r
\r
| 事件名 | 说明                     | 回调参数                 |\r
| :----- | ------------------------ | ------------------------ |\r
| change | 选择了省市区三级之后触发 | val: AreaInfo,省市区数据 |\r
\r
## AreaInfo 数据格式\r
\r
| key      | 说明       | 类型       |\r
| :------- | ---------- | ---------- |\r
| province | 省份的数据 | val: Value |\r
| city     | 城市的数据 | val: Value |\r
| area     | 区域的数据 | val: Value |\r
\r
## Value 数据格式\r
\r
| key  | 说明 | 类型   |\r
| :--- | ---- | ------ |\r
| name | 名字 | string |\r
| code | 编码 | number |\r
`,_={class:"ecc-components-show"},u=c("h1",{class:"ecc-h1"},"组件示例",-1),A=l({__name:"index",setup(d){let a=e=>{console.log(e)};return(e,v)=>{const s=o("ecc-choose-area"),t=o("v-md-preview");return i(),m(h,null,[c("div",_,[u,n(s,{onChange:r(a)},null,8,["onChange"])]),n(t,{text:r(p)},null,8,["text"])],64)}}});export{A as default};
