import VueRouter from 'vue-router'

const First = () => import(/* webpackChunkName: "first" */ '@/pages/first')
const Second = () => import(/* webpackChunkName: "second" */ '@/pages/second')
const Third = () => import(/* webpackChunkName: "second" */ '@/pages/third')
const NotFound = () => import(/* webpackChunkName: "notfound" */ '@/pages/NotFound')

/* eslint-disable import/prefer-default-export */
export const routes = [
  { path: '/', name: 'First', component: First },
  { path: '/second', name: 'Second', component: Second },
  { path: '/third', name: 'Third', component: Third },
  { path: '*', name: 'NotFound', component: NotFound }
]

export const VueRouterObject = {
  routes,
  mode: 'hash',
  saveScrollPosition: true
}

export default new VueRouter(VueRouterObject)
