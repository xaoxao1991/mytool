<template>
    <div class="container">
      <div class="header-bar">
          <ul class="nav-list" >
            <li v-for="item in nav_list" class="nav-item" :class="{active:item.isSelected}" @click="select_nav(item)">
              <router-link  :to="item.path" >
               {{item.name}}
              </router-link>
            </li>

          </ul>
      </div>
      <div class="content">
        <router-view/>
        <div class="bei-an">备案号:赣ICP备15011116号-5</div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        nav_list:[
          {name:"农场秀",path:"farm.share"},
          {name:"农场列表",path:"farm.list"},
          {name:"合作联系",path:"cooperation.contact"},
          {name:"加入我们",path:"add.us"},
          {name:"登录",path:"user.login"}
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
  .title{
    text-align: center;
  }
  .container{
    padding: 3rem 0 0 0;
    height: 100%;
    width: 100%;
    position: relative;
  }
  .header-bar{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 3rem;
    background: #30333c;
    color: #6b7386;
    transition: all .5s;
  }
  .content{
    width: $widthMain;
    height: 100%;
    background: #f3f6f8;
    padding: .5em 1rem;
    position: relative;
    margin: auto;
  }
  .nav-list{
    display: table;
    height: 100%;
    margin: auto;
    width: $widthMain;
    .nav-item{
      display: table-cell;
      vertical-align: middle;
      padding: .5rem 1rem .5rem 2rem;
    }
  }

  .nav-item.active,
  .nav-item:hover{
    color: #ffffff;
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
  .iconfont{
    display: inline-block;
    font-size: 1rem;
    padding: 0 .5rem 0 0;
  }
</style>
