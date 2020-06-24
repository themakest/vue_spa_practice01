// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBodyClass from 'vue-body-class'
import VueHead from 'vue-head'
import App from './App'
import Routes from '@/router/router'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueHead, {
  separator: ' | '
})

const router = new VueRouter({
  routes: Routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

const vueBodyClass = new VueBodyClass(Routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
