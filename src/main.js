import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
