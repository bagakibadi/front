import vue from 'vue';
import VueRouter from 'vue-router';
import Register from './view/main/Register.vue';
import Login from './view/main/Login.vue';
import Home from './view/main/Home.vue';
import Detail from './view/main/Detail.vue';
import Logout from './view/Auth/Logout.vue';
import Landing from './view/main/Landing.vue';
import Auth from './view/main/Activate.vue';

vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      title: 'Landing Page',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Dashboard',
    },
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: true,
    meta: {
      title: 'Detail Book',
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
