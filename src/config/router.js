import VueRouter from 'vue-router'

const First = () => import(/* webpackChunkName: "first" */ '@/pages/first/First')
const Second = () => import(/* webpackChunkName: "second" */ '@/pages/second/Second')
const NotFound = () => import(/* webpackChunkName: "notfound" */ '@/pages/NotFound')

/* eslint-disable import/prefer-default-export */
export const routes = [
  { path: '/', name: 'First', component: First },
  { path: '/meetup/second', name: 'Second', component: Second },
  { path: '*', name: 'NotFound', component: NotFound }
]

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true
}

export default new VueRouter(VueRouterObject)
