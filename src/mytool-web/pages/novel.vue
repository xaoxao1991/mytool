<template>
    <div class="container">
      <div class="content">
        <router-view />
        <div class="bei-an">备案号:赣ICP备15011116号-5</div>
      </div>
    </div>
</template>

<script>


  export default {
    data() {
      return {
        route_path:this.$route.path,
        novel_list:[]
      }
    },

    methods:{
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .title{
    padding: .5rem 1rem .5rem 2rem;
    font-size: .7rem;
    &:hover{
      color:#ffffff;
    }
  }
  .container{
    padding: 0 0 0 12rem;
    height: 100%;
    width: 100%;
    position: relative;
    .content{
      width: 100%;
      height: 100%;
      background: #f3f6f8;
      position: relative;
    }
  }

  .nav-list{
    .nav-item{
      padding: .5rem 1rem .5rem 2rem;

      &:hover{
        color: #aaaaaa;
      }
      &.active{
        color: #ffffff;
      }

      .iconfont{
        display: inline-block;
        font-size: 1rem;
        padding: 0 .5rem 0 0;
      }
    }
  }

.bei-an{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: .25rem;
  text-align: center;
  font-size: .6rem;
  color: #999999;
}

</style>
