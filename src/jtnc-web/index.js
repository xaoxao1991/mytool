const Vue=require("vue")
import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
