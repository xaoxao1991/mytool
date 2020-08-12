const Vue=require("vue")
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from 'admin/store'
import '@/icons' // icon
import './permission' // permission control
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
