<template>
  <el-table
    :data="tableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    @row-click="rowClick"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in tableOption" :key="index">
      <!-- 非操作行处理 -->
      <el-table-column
        v-if="item.prop && !item.action"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :align="item.align"
      >
        <template #default="scope">
          <!-- 普通展示列 整行编辑状态-->
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
          </template>
          <template v-else>
            <!-- 普通展示列 单列单行编辑状态-->
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex">
                <el-input
                  size="small"
                  v-model="scope.row[item.prop!]"
                ></el-input>
                <div>
                  <slot
                    name="cellEdit"
                    v-if="$slots.cellEdit"
                    :scope="scope"
                  ></slot>
                  <div class="action-icon" v-else>
                    <el-icon-check
                      class="check"
                      @click.stop="check(scope.row)"
                    ></el-icon-check>
                    <el-icon-close
                      class="close"
                      @click.stop="close(scope.row, item.prop)"
                    ></el-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <!-- 普通展示列 默认状态-->
            <template v-else>
              <!-- 日期和姓名列 -->
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <!-- 地址列 -->
              <!-- <span v-else>{{ scope.row[item.prop!]}}</span> -->
              <!-- <span>{{scope.row.isKeep}}</span> -->
              <span
                v-else-if="scope.row.isKeep&&scope.row[item.prop!] !==keepAddress"
                >{{ (scope.row[item.prop!] = keepAddress) }}</span
              >
              <span v-else>{{ scope.row[item.prop!] }}</span>
              <!-- 可编辑单元格 小图标 -->
              <component
                :is="`el-icon-${toLine(editIcon)}`"
                class="edit"
                v-if="item.editable"
                @click.stop="clickEditIcon(scope, scope.row[item.prop!])"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>

    <!-- 可操作列 编辑状态是确认和取消 默认状态是编辑和删除-->
    <el-table-column
      :label="actionOption!.label"
      :width="actionOption!.width"
      :align="actionOption!.align"
    >
      <template #default="scope">
        <slot name="editRow" :scope="scope" v-if="scope.row.rowEdit"></slot>
        <slot name="action" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分页器 -->
  <div
    v-if="pagination && !isLoading"
    class="pagination"
    :style="{ justifyContent }"
  >
    <el-pagination
      v-model:currentPage="currentP"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed,
  ref,
  watch,
  onMounted,
  useSlots,
  nextTick,
} from 'vue';
import { TableOptions } from './types';
import { toLine } from '../../utils';
import cloneDeep from 'lodash/cloneDeep';

let props = defineProps({
  // 表格配置选项
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String,
  },
  // 加载图标是svg
  elementLoadingSvg: {
    type: String,
  },
  // 加载团是svg的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 编辑显示的图标
  editIcon: {
    type: String,
    default: 'Edit',
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: '',
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false,
  },
  // 显示分页的对齐方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  // 当前是第几页
  currentPage: {
    type: Number,
    default: 1,
  },
  // 当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 显示分页数据多少条的选项
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40],
  },
  // 数据总条数
  total: {
    type: Number,
    default: 0,
  },
});

let emits = defineEmits([
  'confirm',
  'close',
  'update:editRowIndex',
  'size-change',
  'current-change',
]);
let currentP = ref(1);
watch(
  () => props.currentPage,
  cur => {
    currentP.value = cur;
  }
);

// 分页的每一页数据变化
let handleSizeChange = (val: number) => {
  emits('size-change', val);
};
// 分页页数改变
let handleCurrentChange = (val: number) => {
  emits('current-change', val);
  // console.log(val)
};

// 当前被点击的单元格的标识
let currentEdit = ref<string>('');

// 拷贝一份表格的数据
let tableData = ref<any[]>(cloneDeep(props.data));

// // 拷贝一份按钮的标识
// let cloneEditRowIndex = ref<string>(props.editRowIndex)

// 监听的标识
// let watchData = ref<boolean>(false);

// 如果data的数据变了 要重新给tableData赋值
// 只需要监听一次就可以了
let stopWatchData = watch(
  () => props.data,
  val => {
    // if (watchData.value) stopWatchData();

    tableData.value = val;

    // console.log('tableData改变了!', val);

    // tableData.value.map(item => {
    //   item.rowEdit = false;
    //   item.isKeep = false;
    // });

    // watchData.value = true;
  },
  { deep: true }
);

// 监听
// watch(() => props.editRowIndex, val => {
//   if (val) cloneEditRowIndex.value = val
// })

// onMounted(() => {
//   tableData.value.map(item => {
//     item.rowEdit = false
//     item.isKeep = false
//   })
// })

// 过滤操作项之后的配置
let tableOption = computed(() => props.options.filter(item => !item.action));
// 操作项
let actionOption = computed(() => props.options.find(item => item.action));

// 是否在加载中
// let isLoading = computed(() => !props.data || !props.data.length);
let isLoading = computed(() => !props.data);

// 表格分页的排列方式
let justifyContent = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start';
  else if (props.paginationAlign === 'right') return 'flex-end';
  else return 'center';
});

// 点击编辑图标
let keepAddress = ref<string>('');
// let computedAddress = computed((inputValue: string) => {
//   return inputValue
// })
let clickEditIcon = (scope: any, inputOrigin: string) => {
  // 会做一个判断 判断是否当前单元格被点击了
  // 拼接$index和column的id
  // console.log(scope);

  // 保存输入框的原始值
  keepAddress.value = inputOrigin;
  currentEdit.value = scope.$index + scope.column.id;
  // console.log(currentEdit.value);
};

// 点击确认
let check = (row: any) => {
  emits('confirm', row);
  row.isKeep = false;
  currentEdit.value = '';
  console.log('点击对钩图标');
};

// 点击叉子图标
let close = (row: any, prop: any) => {
  emits('close', row);
  // console.log('row', row);
  // console.log('prop', prop);
  // console.log('keepAddress.value', keepAddress.value);
  row[prop] = keepAddress.value;
  currentEdit.value = '';

  nextTick(() => {
    // row.isKeep = true;
  });
  console.log('点击叉子图标');
};

// 点击行的事件
let rowClick = (row: any, column: any) => {
  // console.log('行信息', row);
  // console.log('列信息', column);
  // console.log('actionOption', actionOption);
  // 判断是否是点击的操作项
  // if (column.label === actionOption.value!.label) {
  // 点击的是操作项 想让他变成可编辑的状态
  // if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
  // 是行编辑并且点击了编辑按钮
  if (props.isEditRow && props.editRowIndex === 'edit') {
    // // 编辑行的操作
    // console.log('row.rowEdit', row.rowEdit);
    // console.log('tableData', tableData.value);
    row.rowEdit = !row.rowEdit;
    // // 重置其他数据的rowEdit 只能同时编辑一样的数据
    tableData.value.map(item => {
      if (item !== row) item.rowEdit = false;
    });
    // 重置按钮的标识
    // if (!row.rowEdit) emits('update:editRowIndex', '');
    if (row.rowEdit) emits('update:editRowIndex', '');
  }
  // }
};
</script>

<style lang="scss" scoped>
.edit {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  left: 12px;
  cursor: pointer;
}

.action-icon {
  display: flex;

  svg {
    width: 1em;
    height: 1em;
    margin-left: 8px;
    position: relative;
    top: 8px;
    cursor: pointer;
  }

  .check {
    color: green;
  }

  .close {
    color: red;
  }
}

.pagination {
  margin-top: 16px;
  display: flex;
}
</style>
