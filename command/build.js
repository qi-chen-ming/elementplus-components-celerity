import { resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, build } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// const fsExtra = require('fs-extra')
import fsExtra from 'fs-extra';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 打包入口文件
const entryDir = resolve(__dirname, '../packages');
// 出口文件夹
const outDir = resolve(__dirname, '../lib');

// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

//rollup配置
const rollupOptions = {
  // external: ['vue', 'vue-router', 'element-plus'],
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
      // 'element-plus': 'elementPlus',
    },
  },
};

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: resolve(entryDir, 'index.ts'),
        name: 'ecc',
        fileName: 'index',
        formats: ['es', 'umd'],
      },
      outDir,
    },
  });
};

// 单文件打包构建
const buildSingle = async name => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd'],
      },
      outDir: resolve(outDir, name),
    },
  });
};

// 每个组件生成package.json
const createPackageJson = name => {
  const fileStr = `
  {
    "name":"${name}",
    "main":"index.umd.cjs",
    "module":"index.js",
    "style":"style.css",
    "types":"../../index.d.ts" 
  }
  `;
  // 输出
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  );
};

// 打包成库
const buildLib = async () => {
  await buildAll();

  //获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter(name => {
    const componentDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    // return isDir && fs.readdirSync(componentDir).includes('index.ts');
    return (
      isDir && componentDir.split('packages')[1].includes('ecc-')
      // && fs.readdirSync(componentDir).includes('index.ts')
    );
  });
  // console.log('components', components);
  //components [ 'ecc-container', 'ecc-form', 'ecc-modalForm', 'ecc-progress' ]

  //循环构建
  for (const name of components) {
    await buildSingle(name);
    createPackageJson(name);
  }
};

buildLib();
