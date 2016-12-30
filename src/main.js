// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Page from './components/page'
import ListPage from './components/list'
import DetailPage from './components/detail'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Page },
  { path: '/list/:id', component: ListPage },
  { path: '/detail/:id/:name', component: DetailPage }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
