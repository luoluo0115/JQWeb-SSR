<template>
<section class="in-foooter" :class="marginb">
      <div class="container">
          <div class="in-foooter-main">
              <div class="row in-foooter-top">
                  <div class="col-md-5 col-12">
                      <div class="row">
                          <div class="col-md-4 col-4 col-xs-4 item">
                              <a href="###" rel='nofollow'>注册公司办理</a>
                              <a href="###" rel='nofollow'>智能记账报税</a>
                              <a href="###" rel='nofollow'>银行开户办理</a>
                              <a href="###" rel='nofollow'>委托开票服务</a>
                          </div>
                          <div class="col-md-4 col-4 col-xs-4 item">
                              <a href="###" rel='nofollow'>社保公积金开户</a>
                              <a href="###" rel='nofollow'>工商变更服务</a>
                              <a href="###" rel='nofollow'>许可资质办理</a>
                              <a href="###" rel='nofollow'>商标设计注册</a>
                          </div>
                          <div class="col-md-4 col-xs-4 item">
                              <router-link tag="a" to="/product/"  >
                                机巧简介
                              </router-link>
                              <router-link tag="a" to="/problem/"  >
                                常见问题
                              </router-link>
                              <router-link tag="a" to="/about/"  >
                                联系我们
                              </router-link>
                          </div>

                      </div>

                  </div>

                  <div class="col-md-7 col-12 mt-1">
                      <div class="row">
                          <div class="col-md-6 col-12 contact-us">
                              <div class="row ">
                                  <p class="col-md-12 col-xs-12 ">
                                      联系我们
                                  </p>
                                  <p class="col-md-12 col-xs-12">
                                      咨询电话：130-0219-3888
                                  </p>
                                  <p class="col-md-12 col-xs-12">
                                      客服热线：021-5450-5858
                                  </p>
                                  <p class="col-md-12 col-xs-12">
                                      地址：上海徐汇区建国西路285号6楼
                                  </p>
                                  <div class="col-md-12 col-xs-12 ">
                                      <div class="d-inline-block itemIcon ">
                                          <i class="iconfont iconqietu08"></i>
                                          <span class="iconWechart-show">
                                              <img src="~/assets/image/weixingJQLOGO.png"  alt='代理记账'/>
                                          </span>
                                      </div>
                                      <div class="d-inline-block itemIcon">
                                          <a href="https://weibo.com/7475987313/manage" target="_blank"><i class="iconfont icon-- "></i></a>
                                      </div>
                                      <div class="d-inline-block itemIcon ">
                                          <i class="iconfont icondianhua"></i>
                                          <span class="iconPhone-show">
                                              130-0219-3888
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 col-12 wechart-bottom text-center">
                              <div class="row">
                                  <div class="col-md-6">
                                      <img :src="weixingJQLOGOImg"  alt='代理记账'/>
                                      <span>· 创业技巧 ·</span>
                                  </div>
                                  <div class="col-md-6">
                                      <img :src="wechartImg" class="wechart-icon" />
                                      <span>· 机巧记账小程序 ·</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row in-foooter-bottom">
                  <div class="col-md-12 col-xs-12">
                      <a href="http://www.beian.miit.gov.cn"  rel='nofollow' target="_blank" style="color:#fff">版权所有 © 2019 - 2020 上海机巧科技有限公司   沪ICP备：20018413号-1</a>
                  </div>
              </div>

          </div>
          <div class="in-foooter-main-phone">
              <div class="row in-foooter-top">
                  <div class="col-12 mt-4">
                      <div class="row ">
                          <div class="col-6 contact-us">
                              <div class="row ">
                                  <p class="col-md-12 col-xs-12 ">
                                      联系我们
                                  </p>
                                  <p class="col-md-12 col-xs-12">
                                      咨询电话：130-0219-3888
                                  </p>
                                  <p class="col-md-12 col-xs-12">
                                      客服热线：021-5450-5858
                                  </p>
                                  <p class="col-md-12 col-xs-12">
                                      地址：上海徐汇区建国西路285号6楼
                                  </p>
                                  <p class="col-12 icon text-center ">
                                      <i class="iconfont iconqietu08 font-28"></i>
                                      <a href="https://weibo.com/7475987313/manage" target="_blank"><i class="iconfont icon-- font-28"></i></a>
                                      <i class="iconfont icondianhua font-28"></i>
                                  </p>
                              </div>
                          </div>
                          <div class="col-6 wechart-bottom text-center ">
                              <img :src="weixingJQLOGOImg" alt='代理记账' />
                              <span>· 创业技巧 ·</span>
                              <img :src="wechartImg"  alt='代理记账' class="wechart-icon" />
                              <span>· 机巧记账小程序 ·</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row in-foooter-bottom mt-3">
                  <div class="col-12">
                      <a href="http://www.beian.miit.gov.cn"  rel='nofollow' target="_blank" style="color:#fff">版权所有 © 2019 - 2020 上海机巧科技有限公司  沪ICP备：20018413号-1</a>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
import bus from '~/assets/js/eventBus.js'
export default {
  name: 'Footer',
  data () {
    return {
      showFooterFrom: true,
      marginb: 'mb',
      weixingJQLOGOImg: require('~/assets/image/weixingJQLOGO.png'),
      wechartImg: require('~/assets/image/img-jq-wechart.jpg')
    }
  },
  props: { navindex: Number },
  created () {
    bus.$on('mb', (n) => {
      this.marginb = n
      console.log(this.marginb, 'this.total')
    })
    // bus.$on('mb', function (n) {
    //   this.marginb = n
    //   console.log(this.marginb, 'this.total')
    // })
  },
  mounted () {
  },
  methods: {

  },
  watch: {}
}
</script>
<style scoped>

</style>
