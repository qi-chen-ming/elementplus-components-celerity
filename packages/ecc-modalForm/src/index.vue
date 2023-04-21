<template>
  <div :class="{ 'ecc-choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <ecc-form
          ref="form"
          :options="options"
          label-width="100px"
          @on-change="onChange"
          @before-upload="beforeUpload"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @before-remove="beforeRemove"
          @on-success="onSuccess"
          @on-exceed="onExceed"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </ecc-form>
      </template>
      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from 'vue';
import { FormOptions } from '../../ecc-form/src/types/types';
import eccForm from '../../ecc-form/src/index.vue';
let props = defineProps({
  // 是否只在可视区域内滚动
  isScroll: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  onChange: {
    type: Function as any,
  },
  beforeUpload: {
    type: Function as any,
  },
  onPreview: {
    type: Function as any,
  },
  onRemove: {
    type: Function as any,
  },
  beforeRemove: {
    type: Function as any,
  },
  onSuccess: {
    type: Function as any,
  },
  onExceed: {
    type: Function as any,
  },
});
let emits = defineEmits(['update:visible']);

// 表单实例
let form = ref();

// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible);

watch(
  () => props.visible,
  val => {
    dialogVisible.value = val;
  }
);
watch(
  () => dialogVisible.value,
  val => {
    emits('update:visible', val);
  }
);
</script>

<style lang="scss" scoped></style>
