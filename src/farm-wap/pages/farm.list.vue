<template>
  <div >
    <v-footer></v-footer>
  </div>
</template>
<script>
  import footer from 'farmWap/pages/footer'
  export default {
    data() {
      return {
        nav_list:[
          {
            name:"办公软件",
            category:"",
          }
        ]
      }
    },
    mounted () {
      let that = this;
    },
    components:{
      "v-footer":footer
    }
  }
</script>
<style>


</style>
