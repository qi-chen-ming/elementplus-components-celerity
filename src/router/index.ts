import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Container from '../../packages/ecc-container/src/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/chooseArea',
        component: () => import('../views/ecc-chooseArea/index.vue'),
      },
      {
        path: '/chooseCity',
        component: () => import('../views/ecc-chooseCity/index.vue'),
      },
      {
        path: '/chooseDateAndTime',
        component: () => import('../views/ecc-chooseDateAndTime/index.vue'),
      },
      {
        path: '/form',
        component: () => import('../views/ecc-form/index.vue'),
      },
      {
        path: '/menu',
        component: () => import('../views/ecc-menu/index.vue'),
      },
      {
        path: '/modalForm',
        component: () => import('../views/ecc-modalForm/index.vue'),
      },
      {
        path: '/notification',
        component: () => import('../views/ecc-notification/index.vue'),
      },
      {
        path: '/step',
        component: () => import('../views/ecc-step/index.vue'),
      },
      {
        path: '/table',
        component: () => import('../views/ecc-table/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
