import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (h: (arg0: any) => any) => h(App),
}).$mount('#app')
