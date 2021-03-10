<template>
  <div>
    <Home-Header :navindex="0"></Home-Header>
    <Home-Swiper :slideindex="0"></Home-Swiper>
    <div class="content-wrapper">
      <Home-Technology ></Home-Technology>
      <Home-Lowprice ></Home-Lowprice>
      <Home-Flexiblecharge ></Home-Flexiblecharge>
      <Home-Businessphilosophy ></Home-Businessphilosophy>
      <Home-Paperlessprocesses ></Home-Paperlessprocesses>
      <Home-Teamfounders :bg="bgfff"></Home-Teamfounders>
      <Home-QA :bg="bgf8f6f9"></Home-QA>
    </div>
    <Home-Safe></Home-Safe>
    <Home-Floatbar></Home-Floatbar>
    <Home-Footer></Home-Footer>
    <Home-Footerfrom></Home-Footerfrom>
  </div>
</template>

<script>
import HomeHeader from '~/components/common/Header.vue'
import HomeSwiper from '~/components/common/Swiper.vue'
import HomeTechnology from '~/components/common/Technology.vue'
import HomeLowprice from '~/components/common/Lowprice.vue'
import HomeFlexiblecharge from '~/components/common/Flexiblecharge.vue'
import HomeBusinessphilosophy from '~/components/common/Businessphilosophy.vue'
import HomePaperlessprocesses from '~/components/common/Paperlessprocesses.vue'
import HomeTeamfounders from '~/components/common/Teamfounders.vue'
import HomeQA from '~/components/common/QA.vue'
import HomeSafe from '~/components/common/Safe.vue'
import HomeFloatbar from '~/components/common/Floatbar.vue'
import HomeFooter from '~/components/common/Footer.vue'
import HomeFooterfrom from '~/components/common/Footerfrom.vue'

export default {
  name: 'Home',
  metaInfo: {
    // 这里的 title 会替换 title中的字符占位
    title: '企业代理记账-上海机巧科技有限公司'
  },
  components: {
    HomeHeader, HomeSwiper, HomeTechnology, HomeLowprice, HomeFlexiblecharge, HomeBusinessphilosophy, HomePaperlessprocesses, HomeTeamfounders, HomeQA, HomeSafe, HomeFloatbar, HomeFooter, HomeFooterfrom
  },
  data () {
    return {
      list1: [],
      list2: [],
      list3: [],
      bgf8f6f9: 'bgf8f6f9',
      bgfff: 'bgfff'

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
