import{d as k,e as x,c as F,a as i,b as t,w as r,u as l,i as w,F as C,r as p,o as L,f as a,E as u}from"./index-cb92fd23.js";const q=`# 弹出框表单\r
\r
dialog 弹出框集成表单组件\r
\r
## 按需引入\r
\r
\`\`\`js\r
import modalForm from 'elementplus-components-celerity/ecc-modalForm';\r
\r
app.use(modalForm);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<div>\r
  <el-button type="primary" @click="open">open</el-button>\r
  <ecc-modal-form\r
    isScroll\r
    :options="options"\r
    title="编辑用户"\r
    width="50%"\r
    v-model:visible="visible"\r
    :on-change="handleChange"\r
    :on-success="handleSuccess"\r
  >\r
    <template #footer="scope">\r
      <el-button @click="cancel(scope.form)">取消</el-button>\r
      <el-button type="primary" @click="confirm(scope.form)">确认</el-button>\r
    </template>\r
    <template #uploadArea>\r
      <el-button size="small" type="primary">Click to upload</el-button>\r
    </template>\r
    <template #uploadTip>\r
      <div style="color: #ccc; font-size: 12px">\r
        jpg/png files with a size less than 500kb\r
      </div>\r
    </template>\r
  </ecc-modal-form>\r
</div>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-modalForm/index.vue)\r
\r
## Props\r
\r
| 属性         | 说明                                                                                                     | 类型                                    | 可选值     | 默认值 |\r
| :----------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------- | ------ |\r
| isScroll     | 是否只在可视区域内滚动                                                                                   | boolean                                 | true/false | false  |\r
| visible      | 控制弹框显示与隐藏                                                                                       | boolean                                 | true/false | false  |\r
| options      | 表单配置项                                                                                               | FormOptions[],参考表单用法              | 必填       | -      |\r
| onPreview    | 点击文件列表中已上传的文件时的钩子                                                                       | file: File                              |\r
| onRemove     | 文件列表移除文件时的钩子                                                                                 | file: File,fileList:fileList            |\r
| onSuccess    | 文件上传成功时的钩子                                                                                     | response:any, file: File                |\r
| onError      | 文件上传失败时的钩子                                                                                     | err:any, file: File , fileList:fileList |\r
| onProgress   | 文件上传时的钩子                                                                                         | file: File,fileList:fileList            |\r
| onChange     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                           | file: File,fileList:fileList            |\r
| beforeUpload | 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传。           | file: File                              |\r
| beforeRemove | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | file: File                              |\r
| onExceed     | 当超出限制时，执行的钩子函数                                                                             | file: File,fileList:fileList            |\r
\r
## slots 插槽\r
\r
| 名称       | 说明                                               |\r
| :--------- | -------------------------------------------------- |\r
| uploadArea | 上传组件的占位符                                   |\r
| uploadTip  | 上传组件的提示信息                                 |\r
| footer     | dialog 底部作用域插槽,form:表单实例,model:表单数据 |\r
`,j={class:"ecc-components-show"},z=i("h1",{class:"ecc-h1"},"组件示例",-1),P=a("open"),S=a("取消"),E=a("确认"),A=a("Click to upload"),T=i("div",{style:{color:"#ccc","font-size":"12px"}}," jpg/png files with a size less than 500kb ",-1),R=k({__name:"index",setup(B){let n=x(!1),d=()=>{n.value=!0},m=[{type:"input",value:"",label:"用户名",prop:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",placeholder:"请输入密码",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"not"}]},{type:"upload",label:"上传",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3},rules:[{required:!0,message:"图片不能为空",trigger:"blur"}]},{type:"editor",value:"",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}],f=e=>{e.validate()(o=>{o?(console.log(e.getFormData),u.success("验证成功")):u.error("表单填写有误,请检查")})},g=e=>{},b=e=>{console.log("success"),console.log(e)},h=e=>{console.log("change"),console.log(e)};return(e,c)=>{const o=p("el-button"),v=p("ecc-modal-form"),y=p("v-md-preview");return L(),F(C,null,[i("div",j,[z,i("div",null,[t(o,{type:"primary",onClick:l(d)},{default:r(()=>[P]),_:1},8,["onClick"]),t(v,{isScroll:"",options:l(m),title:"编辑用户",width:"50%",visible:l(n),"onUpdate:visible":c[0]||(c[0]=s=>w(n)?n.value=s:n=s),"on-change":l(h),"on-success":l(b)},{footer:r(s=>[t(o,{onClick:_=>l(g)(s.form)},{default:r(()=>[S]),_:2},1032,["onClick"]),t(o,{type:"primary",onClick:_=>l(f)(s.form)},{default:r(()=>[E]),_:2},1032,["onClick"])]),uploadArea:r(()=>[t(o,{size:"small",type:"primary"},{default:r(()=>[A]),_:1})]),uploadTip:r(()=>[T]),_:1},8,["options","visible","on-change","on-success"])])]),t(y,{text:l(q)},null,8,["text"])],64)}}});export{R as default};
