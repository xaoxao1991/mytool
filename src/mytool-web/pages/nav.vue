<template>
    <div class="container">
      <div class="left-bar">
        <div class="title">
         常用工具导航
        </div>
          <ul class="nav-list" >
            <li v-for="item in left_list" class="nav-item" :class="{active:item.path===route_path}" @click="select_nav(item)">
              <router-link  :to="item.path" >
                <i class="iconfont" :class="item.icon"></i>{{item.name}}
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
        route_path:this.$route.path,
        left_list:[
          {name:"常用软件",path:"/software",icon:"icon-software"},
          {name:"操作系统",path:"/system",icon:"icon-system"},
          {name:"开发编程",path:"/programming",icon:"icon-code"},
          {name:"外语学习",path:"/language",icon:"icon-language"},
          {name:"考试资料",path:"/examination",icon:"icon-examination"},
          {name:"网址导航",path:"/website",icon:"icon-software"}
        ]
      }
    },

    methods:{
      select_nav:function (item) {
        let that=this
        that.left_list.forEach((nav,index)=>{
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
  }
  .left-bar{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12rem;
    background: #30333c;
    color: #6b7386;
    transition: all .5s;
  }
  .content{
    width: 100%;
    height: 100%;
    background: #f3f6f8;
    padding: .5em 1rem;
    position: relative;
  }
  .nav-list{

  }
  .nav-item{
    padding: .5rem 1rem .5rem 2rem;
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
