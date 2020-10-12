<template>
  <div >
    <div class="content-nav">
      <div item v-for="item in nav_list" >{{item.name}}</div>
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
          {name:"jetBrains系列", category:""},
          {name:"jetBrains系列", category:""},
          {name:"jetBrains系列", category:""},
          {name:"jetBrains系列", category:""},
          {name:"jetBrains系列", category:""},
          {name:"jetBrains系列", category:""},
          {name:"jetBrains系列", category:""},
          {name:"jetBrains系列", category:""},
        ]
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.content-nav{
  display: flex;
  align-items: center;
  color: #6b7386;
  flex-wrap: wrap;
  padding: .5rem .5rem;
  justify-content: space-evenly;

  width: 900px;
  margin: auto;
  >div[item]{
    flex-shrink: 0;
    padding: .5rem .5rem;
    cursor: pointer;
    width: 12rem;
    height: 6rem;
    background: #53565c;
    border-radius: .5rem;
    margin: 1.5rem .5rem 0 0;
    &:hover{
      color: #aaaaaa;
      background-color: #1f2d3d;
    }
    &.active{
      color: #ffffff;
    }
  }
  >.x-auto-fill{

  }
}

</style>
