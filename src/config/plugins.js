import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default (Vue, ...params) => {
  params.filter(el => typeof el === 'object').map(le => Vue.use(le))
  Vue.use(VueRouter)
}
