import{d as _,e as r,c as h,a as l,b as i,w as s,u as v,F as f,r as o,o as g,f as a}from"./index-c2d5b797.js";const T=`# 步骤\r
\r
用于展示工作流程的组件\r
\r
## 按需引入\r
\r
\`\`\`js\r
import table from 'elementplus-components-celerity/lib/ecc-step';\r
\r
app.use(table);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<ecc-step\r
  style="min-height: 100px"\r
  :stepData="stepData"\r
  :active="active"\r
  :successTitle="successTitle"\r
  @complete="complete"\r
>\r
  <template #first>第一步</template>\r
  <template #second>第二步骤</template>\r
  <template #third>第三步骤</template>\r
</ecc-step>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-step/index.vue)\r
\r
## Props 继承 element-plus el-steps/el-step 提供的属性\r
\r
| 参数              | 说明                                  | 类型          | 默认值 |\r
| :---------------- | :------------------------------------ | :------------ | :----- |\r
| stepData          | 步骤数据源                            | Array         | -      |\r
| ---id             | 步骤 ID 唯一                          | Number        | -      |\r
| ---title          | 步骤头文字展示                        | String        | -      |\r
| ---slotName       | 每个步骤的具名 slot                   | String        | -      |\r
| ---icon           | 步骤头 icon 展示（element 内置 icon） | String        | -      |\r
| ---description    | 步骤头描述                            | String        | -      |\r
| ---btnArr         | 每个步骤的按钮                        | Array         | -      |\r
| ----- btnTitle    | 按钮文字信息                          | String        | -      |\r
| ----- params      | 每个按钮传参信息（可以随意定义字段)   | String/Number | -      |\r
| ----- fn          | 按钮事件                              | function      | -      |\r
| isShowLastSuccess | 是否显示默认 icon 最后一步            | Boolean       | true   |\r
| active            | 设置当前激活步骤                      | Number        | 0      |\r
| ---lastBtnArr     | 最后一步按钮需要多个                  | Array         | -      |\r
| ----- btnTitle    | 按钮文字信息                          | String        | -      |\r
| ----- params      | 每个按钮传参信息（可以随意定义字段)   | String/Number | -      |\r
| ----- fn          | 按钮事件                              | function      | -      |\r
| lastBtnTitle      | 最后一步骤成功按钮文字                | String        | 完成   |\r
| successTitle      | 最后一步骤成功提示语                  | String        | -      |\r
\r
## events\r
\r
| 事件名   | 说明                 | 返回值     |\r
| :------- | :------------------- | :--------- |\r
| complete | 最后一步按钮点击事件 | 当前步骤值 |\r
`,S={class:"ecc-components-show"},x=l("h1",{class:"ecc-h1"},"组件示例",-1),N=a("第一步"),k=a("第二步骤"),w=a("第三步骤"),B=_({__name:"index",setup(A){const e=r(0),p=r("企业信息填写完成，等待提交认证资料，经*****平台审核通过后即可办理业务"),n=t=>{switch(t.params){case 1:e.value+=1;break;case 2:e.value+=1;break;case 3:e.value+=2;break;case 4:console.log(22222222222);break}},c=t=>{switch(t.params){case 2:e.value-=1;break;case 3:e.value-=1;break;case 4:console.log(111111111);break}},m=()=>{e.value=0},u=r([{id:1,title:"创建账户",slotName:"first",btnArr:[{btnTitle:"下一步",params:1,fn:n}]},{id:2,title:"填写基础信息",slotName:"second",btnArr:[{btnTitle:"上一步",params:2,fn:c},{btnTitle:"下一步",params:2,fn:n}]},{id:3,title:"填写用户信息",slotName:"third",btnArr:[{btnTitle:"上一步",params:3,fn:c},{btnTitle:"下一步",params:3,fn:n}]},{id:4,title:"注册成功"}]);return(t,D)=>{const b=o("ecc-step"),d=o("v-md-preview");return g(),h(f,null,[l("div",S,[x,i(b,{style:{"min-height":"100px"},stepData:u.value,active:e.value,successTitle:p.value,onComplete:m},{first:s(()=>[N]),second:s(()=>[k]),third:s(()=>[w]),_:1},8,["stepData","active","successTitle"])]),i(d,{text:v(T)},null,8,["text"])],64)}}});export{B as default};
