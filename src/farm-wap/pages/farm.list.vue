<template>
  <div >
      <div v-for="item in farm_list">

      </div>

    <v-footer></v-footer>
  </div>
</template>
<script>
  import footer from 'farmWap/pages/footer'
  export default {
    data() {
      return {
        farm_list:[]
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
