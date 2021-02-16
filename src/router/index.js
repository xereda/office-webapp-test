import { createRouter, createWebHistory } from 'vue-router';
import Offices from '@/views/Offices.vue';
import OfficeForm from '@/views/OfficeForm.vue';

const routes = [
  {
    path: '/',
    name: 'Offices',
    component: Offices,
    children: [
      {
        path: 'edit/:officeId',
        name: 'edit',
        component: OfficeForm,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
