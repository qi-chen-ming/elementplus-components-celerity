# 弹出框表单

dialog 弹出框集成表单组件

## 按需引入

```js
import modalForm from 'elementplus-components-celerity/ecc-modalForm';

app.use(modalForm);
```

## 示例代码

```html
<div>
  <el-button type="primary" @click="open">open</el-button>
  <ecc-modal-form
    isScroll
    :options="options"
    title="编辑用户"
    width="50%"
    v-model:visible="visible"
    :on-change="handleChange"
    :on-success="handleSuccess"
  >
    <template #footer="scope">
      <el-button @click="cancel(scope.form)">取消</el-button>
      <el-button type="primary" @click="confirm(scope.form)">确认</el-button>
    </template>
    <template #uploadArea>
      <el-button size="small" type="primary">Click to upload</el-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc; font-size: 12px">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </ecc-modal-form>
</div>
```

详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-modalForm/index.vue)

## Props

| 属性         | 说明                                                                                                     | 类型                                    | 可选值     | 默认值 |
| :----------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------- | ------ |
| isScroll     | 是否只在可视区域内滚动                                                                                   | boolean                                 | true/false | false  |
| visible      | 控制弹框显示与隐藏                                                                                       | boolean                                 | true/false | false  |
| options      | 表单配置项                                                                                               | FormOptions[],参考表单用法              | 必填       | -      |
| onPreview    | 点击文件列表中已上传的文件时的钩子                                                                       | file: File                              |
| onRemove     | 文件列表移除文件时的钩子                                                                                 | file: File,fileList:fileList            |
| onSuccess    | 文件上传成功时的钩子                                                                                     | response:any, file: File                |
| onError      | 文件上传失败时的钩子                                                                                     | err:any, file: File , fileList:fileList |
| onProgress   | 文件上传时的钩子                                                                                         | file: File,fileList:fileList            |
| onChange     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                           | file: File,fileList:fileList            |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传。           | file: File                              |
| beforeRemove | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | file: File                              |
| onExceed     | 当超出限制时，执行的钩子函数                                                                             | file: File,fileList:fileList            |

## slots 插槽

| 名称       | 说明                                               |
| :--------- | -------------------------------------------------- |
| uploadArea | 上传组件的占位符                                   |
| uploadTip  | 上传组件的提示信息                                 |
| footer     | dialog 底部作用域插槽,form:表单实例,model:表单数据 |
