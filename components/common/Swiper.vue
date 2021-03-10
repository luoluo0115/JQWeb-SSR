<template>
<div v-swiper:mySwiper="swiperOption"    >
    <div class="swiper-wrapper">
      <div class="swiper-slide banner4">
         <div class="">
            <div class="container banner-01 banner-item  text-left">
              <img :src="banner_img[3].title_img" class="title04">
            </div>
          </div>
      </div>
      <div class="swiper-slide  banner1">
        <div >
          <div class="container banner-01 banner-item  text-left">
            <img :src="banner_img[0].title_img" class="title01 mb-5" >
            <img :src="banner_img[0].btn_img"  alt='会计代理记账' class="btn01 mt-5" />
          </div>
        </div>
      </div>
      <div class="swiper-slide banner2">
        <div >
          <div class="container banner-02 banner-item  text-left">
            <img :src="banner_img[1].title_img" class="title02 mb-5">
            <img :src="banner_img[1].btn_img" alt='会计代理记账' class="btn02  d-block  mt-5" />
          </div>
        </div>
      </div>
      <div class="swiper-slide banner3">
          <div class="container banner-03 banner-item  text-left">
            <img :src="banner_img[2].title_img"  class="title03 mb-5" >
            <img :src="banner_img[2].btn_img" alt='会计代理记账' class="btn03  d-block  mt-5" />
          </div>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-red" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-blue" slot="button-next"></div>
  </div>
</template>

<script>
export default {
  name: 'mySwiper',
  data () {
    return {
      num:2,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true,
        speed: 1000,
        setWrapperSize: true,
        autoHeight: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        initialSlide:'1'
      },
      banner_img: [{
        title_img: require('~/assets/image/banner-title-01.png'),
        btn_img: require('~/assets/image/banner-btn-01.png')
      }, {
        title_img: require('~/assets/image/banner-title-02.png'),
        btn_img: require('~/assets/image/banner-btn-02.png')
      }, {
        title_img: require('~/assets/image/banner-title-03.png'),
        btn_img: require('~/assets/image/banner-btn-03.png')
      }, {
        title_img: require('~/assets/image/banner_title_04.png'),
        btn_img: ''
      }]
    }
  },
  props: {
    slideindex: Number
  },
  mounted() {
    this.swiperOption.initialSlide =this.slideindex
  }
  
}
</script>
<style >
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 100px;
}
.swiper-container{
}
.swiper-pagination-bullet {
    width: 30px;
    height: 3px;
    display: inline-block;
    border-radius: 0;
    background: #fff;
    opacity: 0.5;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
.swiper-button-prev, .swiper-button-next {
    color: #fff!important;
}
.banner-item{
  height: 840px;
}
.banner4{
  width: 100%;
  height: 840px;
  background: url('../../assets/image/banner4.jpg') center top no-repeat;
  color: #fff;
  background-size: cover;
}
.banner1 {
  width: 100%;
  height: 840px;
  color: #fff;
  background: url('../../assets/image/banner1.png') center top no-repeat;
  background-size: cover;
}
.banner2{
  width: 100%;
  height:840px;
  color: #fff;
  background: url('../../assets/image/banner2.png') center top no-repeat;
  background-size: cover;
}
.banner3{
  width: 100%;
  height: 840px;
  color: #fff;
  background: url('../../assets/image/banner3.png') center top no-repeat;
  background-size: cover;
}
.title01{
  width:1068px;
  height:189px;
  margin: 0 auto;
  margin-top:240px;
}
.title02{
  width:847px;
  height:199px;
  margin-top:234px;
}
.title03{
  width:779px;
  height:201px;
  margin-top:234px;
}
.title04{
  width:770px;
  height:391px;
  margin-top: 190px;
 }
.btn01{
  width:288px;
  height:58px;
  margin: 160px auto;
  display: block;
}
.btn02{
  width:289px;
  height:58px;
  margin-top:80px;
}
.btn03{
  width:288px;
  height:58px;
  margin-top:80px;
}
@media only screen and (max-width: 1400px) {
  .banner-item{
    height: 720px;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 60px;
  }
  .swiper-container{
  }
  .banner4{
    height: 720px;
  }
  .banner2{
    height: 720px;
  }
  .banner1{
    height: 720px;
  }
  .banner3{
    height: 720px;
  }
  .title01{
      width:800px;
      height:142px;
  }
  .title02{
      width:700px;
      height:164px;
  }
  .title03{
      width:700px;
      height:181px;
  }
  .title04{
      width:700px;
      height:355px;
    }
  .btn01{
      width:200px;
      height:35px;
      display:block;
      margin:0 auto
  }
  .btn02{
      width:200px;
      height:35px;
      display:block
  }
  .btn03{
      width:200px;
      height:35px;
      display:block
  }
}
@media only screen and (max-width: 1200px) {
    /**banner*/
  .banner-item{
    height: 620px
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 30px;
  }
  .banner4{
    height: 620px;
  }
  .banner2{
    height: 620px;
  }
  .banner1{
    height: 620px;
  }
  .banner3{
    height: 620px;
  }
  .title01{
    width:680px;
    height:142px;
    margin-top: 0px;
    top: 160px;
    position: relative;
  }
  .title02{
      width:500px;
      height:117px;
      margin-top: 200px;
  }
  .title03{
      width:500px;
      height:129px;
      margin-top: 200px;
  }
  .title04{
      width:500px;
      height:254px;
    }
  .btn01{
      width:165px;
      height:33px;
      top: 200px;
    position: relative;
  }
  .btn02{
      width:165px;
      height:33px;
  }
  .btn03{
      width:165px;
      height:33px;
  }
  .swiper-pagination-bullet {
      width: 30px;
      height: 3px;
      display: inline-block;
      border-radius: 0;
      background: #fff;
      opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
      opacity: 1;
      background: #fff;
  }
  .swiper-button-prev, .swiper-button-next {
      color: #fff!important;
  }
  .swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 100px;
  }
}
@media only screen and (max-width: 980px) {
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 50px;
  }
}
@media only screen and (max-width: 578px) {
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 30px;
  }
  /**banner*/
  .banner-item{
    height: 400px
  }
  .banner4{
    height: 400px;
  }
  .banner2{
    height: 400px;
  }
  .banner1{
    height: 400px;
  }
  .banner3{
    height: 400px;
  }
  .banner-item {
      padding:0 45px;
  }
  .title01{
      width:300px;
    height:53px;
  }
  .title02{
      width:250px;
      height:59px;
  }
  .title03{
      width:250px;
      height:65px;
  }
  .title04{
      width:250px;
      height:127px;
    }
  .btn01{
      width:100px;
      height:20px;
  }
  .btn02{
      width:100px;
      height:20px;
  }
  .btn03{
      width:100px;
      height:20px;
  }
  .swiper-pagination-bullet {
      width: 20px;
      height: 2px;
      display: inline-block;
      border-radius: 0;
      background: #fff;
      opacity: 0.5;
  }
  .swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 70px;
  }
  .notice-wrapper .notice-content {
    width: 100%!important;
  }
}
</style>
