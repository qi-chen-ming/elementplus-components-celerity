<template>
  <div class="ecc-components-show">
    <h1 class="ecc-h1">组件示例</h1>
    <ecc-choose-time
      :startOptions="startOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></ecc-choose-time>
    <br />
    <br />
    <ecc-choose-date
      :disableToday="false"
      :startOptions="startOptions"
      @startChange="dateStartChange"
      @endChange="dateEndChange"
    ></ecc-choose-date>
  </div>
  <v-md-preview :text="mdDoc"></v-md-preview>
</template>

<script lang="ts" setup>
import mdDoc from './doc.md?raw';
interface endValue {
  startTime: string;
  endTime: string;
}
interface dateEndValue {
  startDate: Date;
  endDate: Date;
}
let startChange = (val: string) => {
  console.log('startChange', val);
};
let endChange = (val: endValue) => {
  console.log('endChange', val);
};
let dateStartChange = (val: Date) => {
  console.log(val);
};
let dateEndChange = (val: dateEndValue) => {
  console.log(val);
};
let startOptions = {
  // size: 'mini',
  // clearable: false,
};
</script>

<style lang="scss" scoped></style>
