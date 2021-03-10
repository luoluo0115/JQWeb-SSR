<template>
  <div>
    <Home-Header :navindex="1"></Home-Header>
    <!-- <Home-Nav :navindex="0"></Home-Nav> -->
    <Home-Swiper :slideindex="1"></Home-Swiper>
    <div class="content-wrapper">
      <Home-Bookkeeping></Home-Bookkeeping>
      <Home-Services></Home-Services>
    </div>
    <Home-Safe></Home-Safe>
    <Home-Floatbar></Home-Floatbar>
    <Home-Footer></Home-Footer>
    <Home-Footerfrom></Home-Footerfrom>
  </div>
</template>

<script>
import HomeHeader from '~/components/common/Header'
import HomeSwiper from '~/components/common/Swiper'
import HomeBookkeeping from '~/components/common/Bookkeeping'
import HomeServices from '~/components/common/Services'
import HomeSafe from '~/components/common/Safe'
import HomeFloatbar from '~/components/common/Floatbar'
import HomeFooter from '~/components/common/Footer'
import HomeFooterfrom from '~/components/common/Footerfrom'

export default {
  name: 'Product',
  metaInfo: {
    title: '企业代理记账-上海机巧科技有限公司',
    meta: [
      { name: 'keywords', content: '企业代理记账_上海代理记账_记账代理' },
      { name: 'description', content: '机巧科技专业代理公司注册、代理记账及税收筹划。为中小企业提供优质的公司注册、代理记账报税、纳税筹划及公司注销等服务.' }
    ]
  },
  components: {
    HomeHeader, HomeSwiper, HomeBookkeeping, HomeServices, HomeSafe, HomeFloatbar, HomeFooter, HomeFooterfrom
  },
  data () {
    return {
      list1: [],
      list2: [],
      list3: []
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.content-wrapper{
  margin-top: 72px;
}
</style>
