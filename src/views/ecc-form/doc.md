# 表单

可配置型表单,支持多种自定义

## 按需引入

```js
import form from 'elementplus-components-celerity/ecc-form';

app.use(form);
```

## 示例代码

```html
<ecc-form
  ref="form"
  label-width="100px"
  :options="options"
  @on-change="handleChange"
  @before-upload="handleBeforeUpload"
  @on-preview="handlePreview"
  @on-remove="handleRemove"
  @before-remove="beforeRemove"
  @on-success="handleSuccess"
  @on-exceed="handleExceed"
>
  <template #uploadArea>
    <el-button size="small" type="primary">Click to upload</el-button>
  </template>
  <template #uploadTip>
    <div style="color: #ccc; font-size: 12px">
      jpg/png files with a size less than 500kb
    </div>
  </template>
  <template #action="scope">
    <el-button type="primary" @click="submitForm(scope)">提交</el-button>
    <el-button @click="resetForm">重置</el-button>
  </template>
</ecc-form>
```

详细代码请查看[这里](https://github.com/qi-chen-ming/elementplus-components-celerity/blob/main/src/views/ecc-form/index.vue)

## Props

| 属性        | 说明           | 类型          | 可选值 | 默认值 |
| :---------- | -------------- | ------------- | ------ | ------ |
| options     | 表单配置项     | FormOptions[] | 必填   | -      |
| httpRequest | 上传自定义方法 | function      | -      | -      |

## FormOptions 数据格式

| 属性        | 说明                     | 类型                                   |
| :---------- | ------------------------ | -------------------------------------- |
| type        | 表单项显示的元素         | string                                 |
| value       | 表单项的值               | any                                    |
| label       | 表单项 label             | string                                 |
| prop        | 表单项的标识             | string                                 |
| rules       | 表单项的验证规则         | 同`element-plus`表单验证规则一致       |
| placeholder | 表单项的占位符           | string                                 |
| attrs       | 表单元素特有的属性       | 同`element-plus`表单组件属性一致       |
| children    | 表单项的子元素           | FormOptions[]                          |
| uploadAttrs | 处理上传组件的属性和方法 | 同`element-plus`的'upload'组件属性一致 |

## 事件

| 事件名        | 说明                                                                                                     | 参数                                    |
| :------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| on-preview    | 点击文件列表中已上传的文件时的钩子                                                                       | file: File                              |
| on-remove     | 文件列表移除文件时的钩子                                                                                 | file: File,fileList:fileList            |
| on-success    | 文件上传成功时的钩子                                                                                     | response:any, file: File                |
| on-error      | 文件上传失败时的钩子                                                                                     | err:any, file: File , fileList:fileList |
| on-progress   | 文件上传时的钩子                                                                                         | file: File,fileList:fileList            |
| on-change     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                           | file: File,fileList:fileList            |
| before-upload | 上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传。           | file: File                              |
| before-remove | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | file: File                              |
| on-exceed     | 当超出限制时，执行的钩子函数                                                                             | file: File,fileList:fileList            |

## slots 插槽

| 名称       | 说明                                              |
| :--------- | ------------------------------------------------- |
| uploadArea | 上传组件的占位符                                  |
| uploadTip  | 上传组件的提示信息                                |
| action     | 表单按钮的作用域插槽,form:表单实例,model:表单数据 |
