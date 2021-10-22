import Vue from 'vue';
import VueRouter from "vue-router";
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage'),
      meta: {authenticated: true}
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage'),
      meta: {authenticated: true}
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage'),
      meta: {authenticated: true}
    },
    {
      path: '*',
      component: () => import('@/views/PageNotFound')
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.authenticated && !store.getters.isLogin) {
    next('/login');
    return;
  }
  next();
})

export default router;