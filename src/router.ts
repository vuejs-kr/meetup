import Vue from 'vue';
import Router from 'vue-router';

const SixthLayout = () => import('@/views/Sixth/Layout.vue');
const Sixth = () => import('@/views/Sixth/index.vue');
const SixthAbout = () => import('@/views/Sixth/About.vue');
const Fifth = () => import('@/views/Fifth/index.vue');
const Fourth = () => import('@/views/Fourth/index.vue');
const Third = () => import('@/views/Third/index.vue');
const Second = () => import('@/views/Second/index.vue');
const First = () => import('@/views/First/index.vue');

const NotFound = () => import('@/views/NotFound.vue');

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: SixthLayout,
      children: [
        { path: '', name: 'root', component: Sixth },
        { path: 'about', name: 'root_about', component: SixthAbout }
      ]
    },
    { path: '/sixth', name: 'sixth', redirect: '/' },
    { path: '/sixth/about', name: 'sixth_about', redirect: '/about' },
    { path: '/fifth', name: 'fifth', component: Fifth },
    { path: '/fourth', name: 'fourth', component: Fourth },
    { path: '/third', name: 'thrid', component: Third },
    { path: '/second', name: 'second', component: Second },
    { path: '/first', name: 'first', component: First },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
});
