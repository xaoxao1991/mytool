<template>
    <div class="container">
      <div class="left-bar">
        <div class="title">
          <p>常用工具导航</p>
        </div>
          <ul class="nav-list" >
            <li v-for="item in left_list" class="nav-item" :class="{active:item.isSelected}" @click="select_nav(item)">
              <router-link  :to="item.path" >
                <i class="iconfont icon-tool"></i>{{item.name}}
              </router-link>
            </li>
          </ul>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        left_list:[
          {name:"常用软件",path:"software",icon:"icon-tool"},
          {name:"操作系统",path:"system",icon:"icon-tool"},
          {name:"开发编程",path:"programming",icon:"icon-tool"},
          {name:"外语学习",path:"language",icon:"icon-tool"},
          {name:"考试资料",path:"examination",icon:"icon-tool"},
          {name:"网址导航",path:"website",icon:"icon-tool"}
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
<style>
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
    padding: .25rem .25rem;
  }
  .nav-item.active,
  .nav-item:hover{
    color: #ffffff;
  }

</style>
