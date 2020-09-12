<template>
  <div class="content">
    <div class="title">创建我的农场秀</div>
    <div class="item">
      <label>您的姓名:</label>
      <el-input v-model="farm_info.name" placeholder="姓名"></el-input>
      <span>*</span>
    </div>

    <div class="item">
      <label>联系方式:</label>
      <el-input v-model="farm_info.name" placeholder="常用电话"></el-input>
      <span>*</span>
    </div>

    <div class="item">
      <label>农场名称:</label>
      <el-input v-model="farm_info.farm_name" placeholder="农场名称"></el-input>
      <span>*</span>
    </div>
    <div class="item">
      <label>农场简述:</label>
      <el-input v-model="farm_info.simple_desc" placeholder="30字以内"></el-input>
      <span>*</span>
    </div>

    <div class="item">
      <label>农场地址:</label>
      <el-input v-model="farm_info.address" placeholder="农场地址"></el-input>
      <span>*</span>
    </div>

<!--    <div class="item">-->
<!--      <label>农场坐标:</label>-->
<!--      <div >-->
<!--        <span style="font-size: 1rem;">点击选择坐标</span>-->
<!--      </div>-->
<!--      <span>可选</span>-->
<!--    </div>-->

    <div class="item">
      <label>农场详细介绍:</label>
      <el-input   type="textarea" :rows="3" v-model="farm_info.desc" placeholder="30字以内"></el-input>
      <span>*</span>
    </div>
    <div class="tips">
      <i class="el-icon-s-opportunity"></i>
      上传农场风采图片,更好的展示您的农场,最多5张</div>
    <div class="item">
      <label>风采图一:</label>
      <div>
        <el-upload
          class="avatar-uploader"
          accept="image/*"
          :action="'/index.php?act=clz_index&op=uploadImg'"
          :data="{type:2,name:'image1'}"
          name="goods_image3"
          :show-file-list="false"
          :on-success="image_Success"
          :before-upload="beforeAvatarUpload">
          <img  v-show="" class="avatar">
          <i  class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <span>*</span>
    </div>

    <div class="submit">
      <div @click="submit">确 定</div>
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
          name:null,
          farm_name:null,
          address:null,
          description:null,
          lat:null,
          lang:null,
          simple_desc:null,
          desc:null
        },
        image_list:[],
      }
    },
    mounted () {
      let that = this;
    },
    methods:{
      image_Success(result, file) {
        let that = this;

      },

      beforeAvatarUpload(file) {
        let isJPG ='image/png|image/jpeg|image/jpg'.indexOf(file.type)>-1;
        let isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('商品图片只能是 png、jpeg、jpg 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submit:function () {
        let that = this;

        let params={

        }
        that.$message.error("请选择")
        return

        if(!/\S/.test(params.goods_state)){
          that.$message.error("请选择"+that.goodsInfo.goods_state.title)
          return
        }
        vFetch({
          url: ApiUrl + "/index.php?act=clz_goods&op=editGoods",
          method: 'post',
          data:params,
          success(result){
            that.$alert('您已成功录入商品', '跳转', {
              confirmButtonText: '确定',
              callback: action => {
                window.location.href=WapSiteUrl+"/vue/html/enter.goods.list.html?flag=1";
              }
            });
          },
          that:that,
        })
      }
    },
    components:{
     "v-footer":footer
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../styles/variables.scss';
  .content{
    padding: 0 0 $footerHeight 0;
    background-image: url(../../assets/images/farm.enter.bg.jpg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
    overflow: auto;
    height: 100%;
    position: relative;
  }

  .title{
    text-align: center;
    padding: 1rem .25rem .25rem .25rem;
  }
  .item{
    display: flex;
    align-items: center;
    padding: .5rem .5rem;
    font-size: .6rem;
    >div{
      flex-grow: 8;
    }
    >label{
      width: 5rem;
      text-align: right;
      flex-shrink: 0;
      padding: 0 1rem 0 0;
    }
    >span{
      width: 3rem;
      flex-shrink: 0;
      padding: 0 0 0 .5rem;
    }
  }

  .tips{
    color: #999999;
    font-size: .6rem;
    text-align: center;
    >i{
      color: #e29918;
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .submit{
    padding: .25rem .5rem 3rem .5rem;
    >div{
      font-size: .8rem;
      background-color: #0D93BF;
      padding: .5rem .5rem;
      color: #ffffff;
      cursor: pointer;
      border-radius: 4px;
      text-align: center;
    }
  }


</style>
