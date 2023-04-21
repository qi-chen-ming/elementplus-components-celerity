<template>
  <div class="ecc-components-show">
    <h1 class="ecc-h1">组件示例</h1>
    <div style="display: flex">
      <div style="flex: 1">
        <ecc-menu
          :data="data1"
          defaultActive="1"
          name="a"
          index="b"
          icon="c"
          children="d"
        ></ecc-menu>
      </div>
      <div style="flex: 1">
        <ecc-infinite-menu
          :data="data2"
          defaultActive="2"
          name="a"
          index="b"
          icon="c"
          children="d"
        >
        </ecc-infinite-menu>
      </div>
    </div>
  </div>
  <v-md-preview :text="mdDoc"></v-md-preview>
</template>

<script lang="ts" setup>
import mdDoc from './doc.md?raw';
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document',
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
      },
    ],
  },
];
let data2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document',
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document',
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document',
                d: [
                  {
                    a: '导航3-1-1-1-1',
                    b: '3-1-1-1-1',
                    c: 'Document',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
