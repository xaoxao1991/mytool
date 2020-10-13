<template>
    <div class="container">
        <ul class="nav-list" >
          <li v-for="item in left_list" class="nav-item" :class="{active:item.path===$route.path}" @click="select_nav(item)">
            <router-link  :to="item.path" >
              <div class="title">
                <i class="iconfont" :class="item.icon"></i>{{item.name}}
              </div>
              <div class="desc"></div>
            </router-link>
          </li>
      </ul>
      <div class="bei-an">备案号:赣ICP备15011116号-5</div>
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
          {name:"网址导航",path:"/website",icon:"icon-software"},
          {name:"娱乐休闲",path:"/entertainment",icon:"icon-entertainment"}
        ]
      }
    },

    methods:{
      select_nav:function (item) {

        let that=this

        that.route_path=this.$route.path

        // that.left_list.forEach((nav,index)=>{
        //   if(nav.path===item.path){
        //     nav.isSelected=true
        //   }else{
        //     nav.isSelected=false
        //   }
        // })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../styles/variables.scss';
  .container{
    padding: 0 0 0 0;
    height: 100%;
    width: 100%;
    min-width: $widthMain;
    position: relative;
    .content{
      width: 100%;
      height: 100%;
      background: #f3f6f8;
      position: relative;
    }
  }

  .nav-list{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .nav-item{
      padding: .5rem 1rem .5rem 2rem;
      width: 14rem;
      background-color: #F3F5F6;
      border-radius: .2rem;
      flex-shrink: 0;
      flex-grow: 0;
      margin: 1.5rem 0 0 0;
      .title{

      }
      .desc{
        height: 6rem;
      }
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
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: .25rem;
  text-align: center;
  font-size: .6rem;
  color: #999999;
  background-color: #3A3A3A;
}

</style>
