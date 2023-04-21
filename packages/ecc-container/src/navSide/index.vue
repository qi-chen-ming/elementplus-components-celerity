<template>
  <ecc-menu
    :collapse="collapse"
    :data="data"
    router
    :defaultActive="$route.path"
  ></ecc-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();

let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/',
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea',
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity',
  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseDateAndTime',
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form',
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu',
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm',
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification',
  },
  {
    icon: 'Management',
    name: '步骤',
    index: '/step',
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table',
  },
];
</script>

<style lang="scss" scoped></style>
