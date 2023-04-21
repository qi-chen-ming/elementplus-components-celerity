<template>
  <div class="ecc-components-show">
    <h1 class="ecc-h1">组件示例</h1>
    <ecc-choose-area @change="changeArea"></ecc-choose-area>
  </div>
  <v-md-preview :text="mdDoc"></v-md-preview>
</template>

<script lang="ts" setup>
import mdDoc from './doc.md?raw';
let changeArea = (val: any) => {
  console.log(val);
};
// console.log('mdDoc', mdDoc);
</script>

<style lang="scss" scoped></style>
