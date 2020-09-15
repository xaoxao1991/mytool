<template>
      <div class="footer-bar">
          <ul class="nav-list" >
            <li v-for="item in nav_list" class="nav-item" :class="{active:item.path===route_path}" @click="select_nav(item)">
              <router-link  :to="item.path" >{{item.name}}</router-link>
            </li>
          </ul>
      </div>
</template>
<script>
  export default {
    data() {
      return {
        route_path:this.$route.path,
        nav_list:[
          {name:"录入",path:"/farm.enter"},
         // {name:"秀",path:"/farm.share"},
          {name:"列表",path:"/farm.list"},
        ]
      }
    },
    methods:{
      select_nav:function (item) {
        let that=this
        that.nav_list.forEach((nav,index)=>{
          if(nav.path===item.path){
            nav.isSelected=true
          }else{
            nav.isSelected=false
          }
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../styles/variables.scss';
  @import '../../styles/mixin.scss';
  .footer-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: $footerHeight;
    background: #30333c;
    color: #6b7386;
    transition: all .5s;
    .nav-list{
      display: table;
      height: 100%;
      margin: auto;
      width: 100%;
      .nav-item{
        display: table-cell;
        vertical-align: middle;
        padding: .5rem 1rem .5rem 2rem;
        text-align: center;
        &.active,&.hover{
          color: #ffffff;
        }
      }
    }
  }
</style>
