import{d as m,c as p,a as o,b as n,w as d,u as t,F as u,r as c,o as g}from"./index-c2d5b797.js";const v=`# 通知菜单\r
\r
显示通知菜单列表,支持多种自定义\r
\r
## 按需引入\r
\r
\`\`\`js\r
import notifiction from 'elementplus-components-celerity/lib/ecc-notifiction';\r
import 'elementplus-components-celerity/lib/ecc-notifiction/style.css';\r
\r
app.use(notifiction);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<ecc-notification :value="50">\r
  <template #default>\r
    <ecc-list\r
      @clickItem="clickItem"\r
      @clickAction="clickAction"\r
      :list="list"\r
      :actions="actions"\r
    ></ecc-list>\r
  </template>\r
</ecc-notification>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-notification/index.vue)\r
\r
## Props\r
\r
| 属性  | 说明           | 类型          | 可选值     | 默认值 |\r
| :---- | -------------- | ------------- | ---------- | ------ |\r
| icon  | 显示的图标     | string        | -          | Bell   |\r
| value | 通知数量       | string/number | -          | -      |\r
| max   | 最大值         | number        | -          | -      |\r
| isDot | 是否显示小圆点 | boolean       | true/false | false  |\r
\r
## slots 插槽\r
\r
| 名称    | 说明                   |\r
| :------ | ---------------------- |\r
| default | 点击图标之后显示的内容 |\r
`,f=[{title:"通知",content:[{title:"蒂姆·库克回复了你的邮件",time:"2019-05-08 14:33:18",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"},{title:"乔纳森·伊夫邀请你参加会议",time:"2019-05-08 14:33:18",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"},{title:"斯蒂夫·沃兹尼亚克已批准了你的休假申请",time:"2019-05-08 14:33:18",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"}]},{title:"关注",content:[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",desc:"描述信息描述信息描述信息",time:"3小时前"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",desc:"描述信息描述信息描述信息",time:"3小时前"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",desc:"描述信息描述信息描述信息",time:"3小时前"}]},{title:"代办",content:[{title:"任务名称",desc:"任务需要在 2017-01-12 20:00 前启动",tag:"未开始",tagType:""},{title:"第三方紧急代码变更",desc:"冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",tag:"马上到期",tagType:"danger"},{title:"信息安全考试",desc:"指派竹尔于 2017-01-09 前完成更新并发布",tag:"已耗时8天",tagType:"warning"}]}],h=[{text:"清空代办",icon:"delete"},{text:"查看更多",icon:"edit"}],_={class:"ecc-components-show"},b=o("h1",{class:"ecc-h1"},"组件示例",-1),j=m({__name:"index",setup(k){let i=e=>{console.log(e)},s=e=>{console.log(e)};return(e,w)=>{const r=c("ecc-list"),l=c("ecc-notification"),a=c("v-md-preview");return g(),p(u,null,[o("div",_,[b,o("div",null,[n(l,{value:50},{default:d(()=>[n(r,{onClickItem:t(i),onClickAction:t(s),list:t(f),actions:t(h)},null,8,["onClickItem","onClickAction","list","actions"])]),_:1})])]),n(a,{text:t(v)},null,8,["text"])],64)}}});export{j as default};
