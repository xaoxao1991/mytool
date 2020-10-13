<template>
  <div id="app">
    <router-view v-wechat-title='$route.meta.title'/>
  </div>
</template>
<script>
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
  export default {
    name: 'App',
    data() {
      return {}
    },
    components:{}
  }
</script>
<style></style>
