<template>
  <div >
    <div class="farm-name">
      <div>{{farm_info.farm_name}}</div>
      <div >{{farm_info.address}}</div>
    </div>
    <div class="farm-desc">
      <div>
        {{farm_info.description}}
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
   import footer from 'farmWap/pages/footer'
  export default {
    data() {
      return {
        farm_info: {
          farm_name:"农场名称",
          address:"详细地址",
          description:"描述",
          lat:null,
          lang:null,
        },
        image_list:[
          {name:"", url:'./static/upload/farm.1.jpg'},
          {name:"", url:'./static/upload/farm.2.jpg'},
          {name:"", url:'./static/upload/farm.3.jpg'},
          {name:"", url:'./static/upload/farm.4.jpg'},
          {name:"", url:'./static/upload/farm.5.jpg'}
        ],
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
<style rel="stylesheet/scss" lang="scss" scoped>
.farm-name{
  text-align: center;
  >div:nth-of-type(1){
    font-size: .8rem;
  }
  >div:nth-of-type(2){
    font-size: .6rem;
  }
}

.farm-desc{}
</style>
