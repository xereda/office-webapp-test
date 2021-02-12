import { createRouter, createWebHistory } from 'vue-router';
import Offices from '../views/Offices.vue';

const routes = [
  {
    path: '/',
    name: 'Offices',
    component: Offices,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
