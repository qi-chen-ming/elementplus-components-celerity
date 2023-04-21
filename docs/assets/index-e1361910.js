import{d as t,c as s,a as r,b as e,u as i,F as m,r as n,o as a}from"./index-cb92fd23.js";const l=`# 城市选择\r
\r
提供按城市和省份选择中国所有的城市,支持搜索和跳转\r
\r
\`\`\`js\r
import chooseCity from 'elementplus-components-celerity/ecc-chooseCity';\r
import 'elementplus-components-celerity/ecc-chooseCity/style.css';\r
\r
app.use(chooseCity);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<m-choose-city></m-choose-city>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-chooseCity/index.vue)\r
\r
## Props\r
\r
| 属性           | 说明             | 参数                 |\r
| :------------- | ---------------- | -------------------- |\r
| changeCity     | 按城市选择时触发 | val: City,城市信息   |\r
| changeProvince | 按省份选择时触发 | val: string,城市名字 |\r
\r
## City 数据格式\r
\r
| key   | 说明     | 类型   |\r
| :---- | -------- | ------ |\r
| id    | 城市编码 | number |\r
| spell | 城市拼音 | string |\r
| name  | 城市名称 | string |\r
`,p={class:"ecc-components-show"},h=r("h1",{class:"ecc-h1"},"组件示例",-1),v=t({__name:"index",setup(_){return(y,u)=>{const c=n("ecc-choose-city"),o=n("v-md-preview");return a(),s(m,null,[r("div",p,[h,e(c)]),e(o,{text:i(l)},null,8,["text"])],64)}}});export{v as default};
