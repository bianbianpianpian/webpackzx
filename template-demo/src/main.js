// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)

// 自定义组件
import MultiLayerSearchCascader from './common-components/multiLayerSearchCascader'
Vue.use(MultiLayerSearchCascader)

import axios from 'axios'
// axios.interceptors.request.use(
//   config => {
//     config.headers = {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     return config
//   }
// )
Vue.prototype.$http = axios

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'
import '../static/scss/style.scss'
// import 'iview/dist/styles/iview.scss'    // 使用 CSS

Vue.config.productionTip = false
// import layer from 'vue-layer'
// Vue.prototype.$layer = layer

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
