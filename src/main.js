import Vue from 'vue'
import App from './App.vue'
// 引入elementui
import ElementUI from 'element-ui';
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
