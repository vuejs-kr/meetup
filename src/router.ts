import Vue from 'vue';
import Router from 'vue-router';

import Sixth from '@/views/Sixth/index.vue';
import SixthAbout from '@/views/Sixth/About.vue';
import Fifth from '@/views/Fifth/index.vue';
import Fourth from '@/views/Fourth/index.vue';
import Third from '@/views/Third/index.vue';
import Second from '@/views/Second/index.vue';
import First from '@/views/First/index.vue';

import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'root', component: Sixth },
    { path: '/about', name: 'root_about', component: SixthAbout },
    { path: '/sixth', name: 'sixth', redirect: '/' },
    { path: '/sixth/about', name: 'sixth_about', redirect: '/about' },
    { path: '/fifth', name: 'fifth', component: Fifth },
    { path: '/fourth', name: 'fourth', component: Fourth },
    { path: '/third', name: 'thrid', component: Third },
    { path: '/second', name: 'second', component: Second },
    { path: '/first', name: 'first', component: First },
    { path: '*', name: 'NotFound', component: NotFound }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
