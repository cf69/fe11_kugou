import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 

// 导入基础样式
import "./assets/base.css"

import axios from "axios"
Vue.prototype.$axios=axios // 把当前的案凶手对象 挂载Vue的原型上 这样一来
// 所有的组件都可以通过this.$axios 去访问了

Vue.filter("imgFilter",(inp)=>{
  return inp.replace(/{size}/,"400")
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
