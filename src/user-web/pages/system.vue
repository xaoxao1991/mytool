<template>
  <div class="box">
    <div v-for="item in system_list" class="item">
      <div>
        {{item.name}}
      </div>
      <div>
        {{item.desc}}
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        system_list:[
          {
            name:"windows10",
            des:"windows10 破解版",
            imageUrl:""
          }

        ]
      }
    },
  }
</script>

<style>
</style>
