import{d as m,c as s,a as n,b as e,u as c,F as l,r as t,o as u}from"./index-86a24d6b.js";const _=`# 导航菜单\r
\r
侧边栏菜单,支持无限层级\r
\r
## 按需引入\r
\r
\`\`\`js\r
import menu from 'elementplus-components-celerity/ecc-menu';\r
\r
app.use(menu);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<ecc-menu\r
  :data="data1"\r
  defaultActive="1"\r
  name="a"\r
  index="b"\r
  icon="c"\r
  children="d"\r
></ecc-menu>\r
\`\`\`\r
\r
\`\`\`html\r
<ecc-infinite-menu\r
  :data="data2"\r
  defaultActive="2"\r
  name="a"\r
  index="b"\r
  icon="c"\r
  children="d"\r
>\r
</ecc-infinite-menu>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-menu/index.vue)\r
\r
## Props\r
\r
| 属性          | 说明                    | 类型    | 可选值     | 默认值   |\r
| :------------ | ----------------------- | ------- | ---------- | -------- |\r
| data          | 导航菜单的数据          | any[]   | 必填       | -        |\r
| defaultActive | 默认选中菜单的 index 值 | string  | -          | -        |\r
| router        | 是否是路由模式          | boolean | true/false | false    |\r
| name          | 菜单标题的键名          | string  | -          | name     |\r
| index         | 菜单标识的键名          | string  | -          | index    |\r
| icon          | 菜单图标的键名          | string  | -          | icon     |\r
| children      | 菜单子菜单的键名        | string  | -          | children |\r
\r
继承\`element-plus\` \`menu\`组件的所有属性\r
`,p={class:"ecc-components-show"},b=n("h1",{class:"ecc-h1"},"组件示例",-1),f={style:{display:"flex"}},h={style:{flex:"1"}},v={style:{flex:"1"}},A=m({__name:"index",setup(x){let r=[{a:"导航1",b:"1",c:"Document"},{a:"导航2",b:"2",c:"Document"},{a:"导航3",b:"3",c:"Document",d:[{a:"导航3-1",b:"3-1",c:"Document"}]}],a=[{a:"导航1",b:"1",c:"Document"},{a:"导航2",b:"2",c:"Document"},{a:"导航3",b:"3",c:"Document",d:[{a:"导航3-1",b:"3-1",c:"Document",d:[{a:"导航3-1-1",b:"3-1-1",c:"Document",d:[{a:"导航3-1-1-1",b:"3-1-1-1",c:"Document",d:[{a:"导航3-1-1-1-1",b:"3-1-1-1-1",c:"Document"}]}]}]}]}];return(D,g)=>{const o=t("ecc-menu"),i=t("ecc-infinite-menu"),d=t("v-md-preview");return u(),s(l,null,[n("div",p,[b,n("div",f,[n("div",h,[e(o,{data:c(r),defaultActive:"1",name:"a",index:"b",icon:"c",children:"d"},null,8,["data"])]),n("div",v,[e(i,{data:c(a),defaultActive:"2",name:"a",index:"b",icon:"c",children:"d"},null,8,["data"])])])]),e(d,{text:c(_)},null,8,["text"])],64)}}});export{A as default};
