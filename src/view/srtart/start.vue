<template>
<div class="page">  <img alt="Vue logo" src="@/assets/img/logo.png">
  <HelloWorld msg="一拳超人"/>
  <router-link to="/login">开始</router-link>
  <el-carousel :interval="4000" type="card" >
    <el-carousel-item v-for="(item,index) in img.arr" :key=index>
      <img class="backPic" :src= item.imgUrl>
    </el-carousel-item>
  </el-carousel></div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      img: {
        arr: [
          { imgUrl: require('../../assets/img/p_1.png')
          }, { imgUrl: require('../../assets/img/p_2.png')
          }, { imgUrl: require('../../assets/img/p_3.png')
          }, { imgUrl: require('../../assets/img/p_4.png')
          }, { imgUrl: require('../../assets/img/p_5.png')
          }, { imgUrl: require('@/assets/img/p_6.png')
          }
        ]

      } }
  },
  components: {
    HelloWorld
  },
  mounted () {
    // console.log(123)

  }
}
</script>

<style  lang="stylus">
  .page{
    text-align center
  }
  .el-carousel{
    height 50%!important
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .backPic{
    max-width: 100%
    max-height :100%
  }
</style>
