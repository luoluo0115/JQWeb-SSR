<template>
  <div>
    <Home-Header :navindex="2"></Home-Header>
    <Home-Swiper :slideindex="3"></Home-Swiper>
    <Home-Company ></Home-Company>
    <Home-Teamfounders :bg="bgf8f6f9"></Home-Teamfounders>
    <Home-QA  :bg="bgfff"></Home-QA>
    <Home-Safe></Home-Safe>
    <Home-Floatbar></Home-Floatbar>
    <Home-Footer></Home-Footer>
    <Home-Footerfrom></Home-Footerfrom>
  </div>
</template>

<script>
import HomeHeader from '~/components/common/Header.vue'
import HomeSwiper from '~/components/common/Swiper.vue'
import HomeCompany from '~/components/common/Company.vue'
import HomeTeamfounders from '~/components/common/Teamfounders.vue'
import HomeQA from '~/components/common/QA.vue'
import HomeSafe from '~/components/common/Safe.vue'
import HomeFloatbar from '~/components/common/Floatbar.vue'
import HomeFooter from '~/components/common/Footer.vue'
import HomeFooterfrom from '~/components/common/Footerfrom.vue'

export default {
  name: 'About',
  metaInfo: {
    title: '企业代理记账-上海机巧科技有限公司',
    meta: [
      { name: 'keywords', content: '代理记账价格_工商代理记账' },
      { name: 'description', content: '上海机巧科技有限公司是一款专为初创及中小微企业设计的无纸化记账报税SaaS工具，可为企业提供全程自动化、智能化、专业化、可视化的财税会计服务解决方案，帮助企业实现降本增效和快速发展.' }
    ]
  },
  components: {
    HomeHeader, HomeSwiper, HomeCompany, HomeTeamfounders, HomeQA, HomeSafe, HomeFloatbar, HomeFooter, HomeFooterfrom
  },
  data () {
    return {
      list: [{
        id: 2
      }],
      bgf8f6f9: 'bgf8f6f9',
      bgfff: 'bgfff'
    }
  },
  mounted () {
    document.title = '代理记账公司关于机巧-机巧科技'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
