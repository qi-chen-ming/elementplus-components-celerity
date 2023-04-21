# 表格

可配置型表格,支持更多自定义

## 按需引入

```js
import table from 'elementplus-components-celerity/ecc-table';

app.use(table);
```

## 示例代码

```html
<ecc-table
  :options="options"
  :data="tableData"
  elementLoadingText="加载中..."
  elementLoadingBackground="rgba(0,0,0,.8)"
  :element-loading-svg="svg"
  element-loading-svg-view-box="-10, -10, 50, 50"
  isEditRow
  pagination
  stripe
  border
  :total="total"
  :currentPage="current"
  :pageSize="pageSize"
  v-model:editRowIndex="editRowIndex"
  @confirm="confirm"
  @close="close"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
>
  <!-- 可编辑单元-data数据的模板 -->
  <template #date="{ scope }">
    <el-icon-timer></el-icon-timer>
    <span style="margin-left: 10px">{{ scope.row.date }}</span>
  </template>
  <!-- 可编辑单元-name名字的模板 -->
  <template #name="{ scope }">
    <el-popover effect="light" trigger="hover" placement="top">
      <template #default>
        <p>姓名: {{ scope.row.name }}</p>
        <p>住址: {{ scope.row.address }}</p>
      </template>
      <template #reference>
        <div class="name-wrapper">
          <el-tag size="default">{{ scope.row.name }}</el-tag>
        </div>
      </template>
    </el-popover>
  </template>
  <template #editRow="scope">
    <el-button size="small" type="primary" @click="sure(scope.scope)"
      >确认</el-button
    >
    <el-button size="small" type="danger" @click="cancel(scope.scope)"
      >取消</el-button
    >
  </template>
  <template #action="scope">
    <el-button size="small" type="primary" @click="edit(scope.scope)"
      >编辑</el-button
    >
    <el-button size="small" type="danger" @click="remove(scope.scope)"
      >删除</el-button
    >
  </template>
</ecc-table>
```

详细代码请查看[这里]()

## Props

| 属性                     | 说明                     | 类型           | 可选值            | 默认值        |
| :----------------------- | ------------------------ | -------------- | ----------------- | ------------- |
| options                  | 表格的配置               | TableOptions[] | 必填              | -             |
| data                     | 表格数据                 | any[]          | 必填              | -             |
| elementLoadingText       | 加载文案                 | string         | -                 | -             |
| elementLoadingSpinner    | 加载图标名               | string         | -                 | -             |
| elementLoadingBackground | 加载背景颜色             | string         | -                 | -             |
| elementLoadingSvg        | 加载图标是 svg           | string         | -                 | -             |
| elementLoadingSvgViewBox | 加载图是 svg 的配置      | string         | -                 | -             |
| editIcon                 | 加载图是 svg 的配置      | string         | -                 | Edit          |
| elementLoadingSvgViewBox | 加载图是 svg 的配置      | string         | -                 | -             |
| isEditRow                | 是否可以编辑行           | boolean        | true/false        | false         |
| pagination               | 是否显示分页             | boolean        | true/false        | false         |
| paginationAlign          | 显示分页的对齐方式       | string         | left/center/right | left          |
| currentPage              | 当前是第几页             | number         | -                 | 1             |
| pageSize                 | 当前一页多少条数据       | number         | -                 | 10            |
| pageSizes                | 显示分页数据多少条的选项 | number[]       | -                 | [10,20,30,40] |
| total                    | 数据总条数               | number         | -                 | 0             |

## TableOptions 数据格式

| key      | 说明                 | 类型              |
| :------- | -------------------- | ----------------- |
| prop     | 表格数据字段名       | string            |
| label    | 表格表头名称         | string            |
| width    | 表格单元格宽度       | string/number     |
| align    | 表格单元格对齐方式   | left/center/right |
| slot     | 自定义列模版的插槽名 | string            |
| action   | 是否是操作项         | boolean           |
| editable | 是否可以编辑         | boolean           |

## 事件

| 事件名         | 说明                           | 参数              |
| :------------- | ------------------------------ | ----------------- |
| comfirm        | 可编辑单元格确认事件           | scope: 当前行数据 |
| cancel         | 可编辑单元格取消事件           | scope: 当前行数据 |
| size-change    | 分页当前显示条数改变时触发事件 | val: 当前页条数   |
| current-change | 分页当前页改变时触发           | val: 当前页       |

## slots 插槽

| 名称     | 说明                   |
| :------- | ---------------------- |
| cellEdit | 自定义可编辑单元格内容 |
| editRow  | 自定义可编辑行按钮内容 |
| action   | 自定义编辑区域内容     |
