<template>
    <div class="swiper-bg" >
      <el-carousel :interval="8000" indicator-position="none" :height="swiperHeight + 'px'">
        <el-carousel-item v-for="item in banner_img" :key="item.index">
          <el-image :src="item.img" fit="fill" ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      banner_img: [{
        img: require('~/assets/mimage/mbanner-01.png')
      }, {
        img: require('~/assets/mimage/mbanner-02.png')
      }, {
        img: require('~/assets/mimage/mbanner-03.png')
      }],
      screenWidth: document.body.clientWidth, // 屏幕尺寸
      swiperHeight: 180
    }
  },
  props: {
    slideindex: Number
  },
  created () {
  },
  computed: {
  },
  mounted () {
    const that = this
    that.screenWidth = document.body.clientWidth
    that.swiperHeight = that.screenWidth / (674 / 315)
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //     console.log(that.screenWidth, 'that.screenWidth')
    //     that.swiperHeight = that.screenWidth / (674 / 315)
    //     console.log(that.swiperHeight, 'that.swiperHeight')
    //   })()
    // }
  }
}
</script>
<style >
.swiper-bg{
  background: #2d50ff;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  height: 135px;
  padding:5px 15px;
}
.el-carousel__item {
  background: none;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
button:focus {
  outline: 0;
}
</style>
