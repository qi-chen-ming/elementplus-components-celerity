import{d as k,e as C,c as O,a as i,b as o,w as l,u as r,F as B,r as s,o as L,f as c,E as a,g as R}from"./index-cb92fd23.js";const q=`# 表单\r
\r
可配置型表单,支持多种自定义\r
\r
## 按需引入\r
\r
\`\`\`js\r
import form from 'elementplus-components-celerity/ecc-form';\r
\r
app.use(form);\r
\`\`\`\r
\r
## 示例代码\r
\r
\`\`\`html\r
<ecc-form\r
  ref="form"\r
  label-width="100px"\r
  :options="options"\r
  @on-change="handleChange"\r
  @before-upload="handleBeforeUpload"\r
  @on-preview="handlePreview"\r
  @on-remove="handleRemove"\r
  @before-remove="beforeRemove"\r
  @on-success="handleSuccess"\r
  @on-exceed="handleExceed"\r
>\r
  <template #uploadArea>\r
    <el-button size="small" type="primary">Click to upload</el-button>\r
  </template>\r
  <template #uploadTip>\r
    <div style="color: #ccc; font-size: 12px">\r
      jpg/png files with a size less than 500kb\r
    </div>\r
  </template>\r
  <template #action="scope">\r
    <el-button type="primary" @click="submitForm(scope)">提交</el-button>\r
    <el-button @click="resetForm">重置</el-button>\r
  </template>\r
</ecc-form>\r
\`\`\`\r
\r
详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-form/index.vue)\r
\r
## Props\r
\r
| 属性        | 说明           | 类型          | 可选值 | 默认值 |\r
| :---------- | -------------- | ------------- | ------ | ------ |\r
| options     | 表单配置项     | FormOptions[] | 必填   | -      |\r
| httpRequest | 上传自定义方法 | function      | -      | -      |\r
\r
## FormOptions 数据格式\r
\r
| 属性        | 说明                     | 类型                                   |\r
| :---------- | ------------------------ | -------------------------------------- |\r
| type        | 表单项显示的元素         | string                                 |\r
| value       | 表单项的值               | any                                    |\r
| label       | 表单项 label             | string                                 |\r
| prop        | 表单项的标识             | string                                 |\r
| rules       | 表单项的验证规则         | 同\`element-plus\`表单验证规则一致       |\r
| placeholder | 表单项的占位符           | string                                 |\r
| attrs       | 表单元素特有的属性       | 同\`element-plus\`表单组件属性一致       |\r
| children    | 表单项的子元素           | FormOptions[]                          |\r
| uploadAttrs | 处理上传组件的属性和方法 | 同\`element-plus\`的'upload'组件属性一致 |\r
\r
## 事件\r
\r
| 事件名        | 说明                                                                                                     | 参数                                    |\r
| :------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------- |\r
| on-preview    | 点击文件列表中已上传的文件时的钩子                                                                       | file: File                              |\r
| on-remove     | 文件列表移除文件时的钩子                                                                                 | file: File,fileList:fileList            |\r
| on-success    | 文件上传成功时的钩子                                                                                     | response:any, file: File                |\r
| on-error      | 文件上传失败时的钩子                                                                                     | err:any, file: File , fileList:fileList |\r
| on-progress   | 文件上传时的钩子                                                                                         | file: File,fileList:fileList            |\r
| on-change     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                           | file: File,fileList:fileList            |\r
| before-upload | 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传。           | file: File                              |\r
| before-remove | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | file: File                              |\r
| on-exceed     | 当超出限制时，执行的钩子函数                                                                             | file: File,fileList:fileList            |\r
\r
## slots 插槽\r
\r
| 名称       | 说明                                              |\r
| :--------- | ------------------------------------------------- |\r
| uploadArea | 上传组件的占位符                                  |\r
| uploadTip  | 上传组件的提示信息                                |\r
| action     | 表单按钮的作用域插槽,form:表单实例,model:表单数据 |\r
`,E={class:"ecc-components-show"},P=i("h1",{class:"ecc-h1"},"组件示例",-1),j=c("Click to upload"),z=i("div",{style:{color:"#ccc","font-size":"12px"}}," jpg/png files with a size less than 500kb ",-1),A=c("提交"),T=c("重置"),N=k({__name:"index",setup(U){let u=[{type:"input",value:"",label:"用户名",prop:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",placeholder:"请输入密码",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"not"}]},{type:"upload",label:"上传",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3},rules:[{required:!0,message:"图片不能为空",trigger:"blur"}]},{type:"editor",value:"这是一段文字......",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}],p=C(),d=e=>{e.form.validate(n=>{n?(console.log(e.model),a.success("提交成功")):a.error("表单填写有误,请检查")})},m=()=>{p.value.resetFields()},f=(e,n)=>{console.log("handleRemove"),console.log(e,n)},g=e=>{console.log("handlePreview"),console.log(e)},h=e=>(console.log("beforeRemove"),R.confirm(`Cancel the transfert of ${e.file.name} ?`)),b=e=>{console.log("handleExceed",e),a.warning(`The limit is 3, you selected ${e.files.length} files this time, add up to ${e.files.length+e.fileList.length} totally`)},v=e=>{console.log("success"),console.log(e)},y=e=>{console.log("change"),console.log(e)},_=e=>{console.log("handleBeforeUpload"),console.log(e)};return(e,n)=>{const t=s("el-button"),x=s("ecc-form"),w=s("v-md-preview");return L(),O(B,null,[i("div",E,[P,o(x,{ref_key:"form",ref:p,"label-width":"100px",options:r(u),onOnChange:r(y),onBeforeUpload:r(_),onOnPreview:r(g),onOnRemove:r(f),onBeforeRemove:r(h),onOnSuccess:r(v),onOnExceed:r(b)},{uploadArea:l(()=>[o(t,{size:"small",type:"primary"},{default:l(()=>[j]),_:1})]),uploadTip:l(()=>[z]),action:l(F=>[o(t,{type:"primary",onClick:S=>r(d)(F)},{default:l(()=>[A]),_:2},1032,["onClick"]),o(t,{onClick:r(m)},{default:l(()=>[T]),_:1},8,["onClick"])]),_:1},8,["options","onOnChange","onBeforeUpload","onOnPreview","onOnRemove","onBeforeRemove","onOnSuccess","onOnExceed"])]),o(w,{text:r(q)},null,8,["text"])],64)}}});export{N as default};
