<template>
  <div >
    <div class="content-nav">
      <div v-for="item in nav_list">{{item.name}}</div>

    </div>
    <div >

    </div>
  </div>
</template>
<script>
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
  }
</script>
<style>


</style>
