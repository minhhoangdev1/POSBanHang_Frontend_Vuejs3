import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('../layout/MainContainer.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/Index.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/product/List.vue'),
      },
      {
        path: '/product/create',
        name: 'addProduct',
        component: () => import('../views/product/Form.vue'),
      },
      {
        path: `/product/edit/:code`,
        name: 'editProduct',
        component: () => import('../views/product/Form.vue'),
      },
      {
        path: `/members`,
        name: 'members',
        component: () => import('../views/member/List.vue'),
      },
      {
        path: '/member/create',
        name: 'addMember',
        component: () => import('../views/member/Form.vue'),
      },
      {
        path: `/member/edit/:code`,
        name: 'editMember',
        component: () => import('../views/member/Form.vue'),
      },
    ]
  },
  {
    path: '/pos',
    name: 'pos',
    component: () => import( '../views/pos/Form.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import( '../views/error/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
