<template>
  <div >
    <aside class="left-bar" id="leftBar">
      <div class="title">
        <p>基佬导航</p>
      </div>
      <nav class="nav">
        <div class="item active"><a href="#search"><i class="iconfont icon-daohang2"></i>Search</a><i class="line"></i></div>
        <ul class="nav-item" id="navItem">
          <li><a href="#devtools" class="active" v-for="item in left_list"><i class="iconfont icon-tool"></i>{{item.name}}</a></li>
        </ul>
        <div class="item comment"><a target="_blank" href="https://www.ofcoder.com/book/"><i class="iconfont icon-liuyan"></i>留言</a></div>
      </nav>
    </aside>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        left_list:[
          {name:"开发小能手",id:"devtools",icon:"icon-tool"},
          {name:"实用工具",id:"tools",icon:"icon-tool"},
          {name:"常用网站",id:"devtools",icon:"icon-tool"},
          {name:"开发社区",id:"devtools",icon:"icon-tool"},
          {name:"技术博客",id:"devtools",icon:"icon-tool"},
          {name:"开发文档",id:"devtools",icon:"icon-tool"},
          {name:"设计资源",id:"devtools",icon:"icon-tool"},
          {name:"学无止境",id:"devtools",icon:"icon-tool"},
          {name:"网络运营",id:"devtools",icon:"icon-tool"},
          {name:"源码下载",id:"devtools",icon:"icon-tool"},
        ]
      }
    },
  }
</script>

<style>
</style>
