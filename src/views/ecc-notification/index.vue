<template>
  <div class="ecc-components-show">
    <h1 class="ecc-h1">组件示例</h1>
    <div>
      <!-- <ecc-notification :value="50"></ecc-notification>
    <br />
    <br />
    <ecc-notification :value="50" :max="30"></ecc-notification>
    <br />
    <br />
    <ecc-notification :value="50" isDot></ecc-notification>
    <br />
    <br />
    <ecc-notification icon="ChatRound" :value="50"></ecc-notification>-->
      <ecc-notification :value="50">
        <template #default>
          <ecc-list
            @clickItem="clickItem"
            @clickAction="clickAction"
            :list="list"
            :actions="actions"
          ></ecc-list>
        </template>
      </ecc-notification>
    </div>
  </div>
  <v-md-preview :text="mdDoc"></v-md-preview>
</template>

<script lang="ts" setup>
import mdDoc from './doc.md?raw';
import { list, actions } from './data';

let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
