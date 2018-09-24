import Vue from 'vue'
import App from './App'
// 导入样式文件
import '@/assets/base.css'
import '@/assets/index.css'

// 导入store对象
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
