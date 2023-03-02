import Vue from 'vue'
import App from './App.vue'
import store from "../store"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
// 下面是js的禁止拖动
document.οncοntextmenu = new Function("event.returnValue=false");
document.onselectstart = new Function("event.returnValue=false");
document.getElementsByTagName('img')[0].onmousedown = function (e) {
  e.preventDefault()
};