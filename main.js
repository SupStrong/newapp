import App from './App'
import store from './store/index.js'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.baseUrlImg = 'https://juran-vue.oss-cn-beijing.aliyuncs.com/weapp/image/';
Vue.prototype.$store=store;
import {router,RouterMount} from './router/index.js'
// import share from '@/mixins/share.js'

// Vue.mixin(share);
Vue.use(router)
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif