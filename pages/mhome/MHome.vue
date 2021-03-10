<template>
  <div class="mibile-wrapper">
    <Home-Header :navindex="0"></Home-Header>
    <Home-TabBar :navindex="0"></Home-TabBar>
    <Home-Swiper ></Home-Swiper>
    <Home-TopFrom ></Home-TopFrom>
    <Home-Technology ></Home-Technology>
    <hr>
    <Home-Lowprice ></Home-Lowprice>
    <hr>
    <Home-Flexiblecharge ></Home-Flexiblecharge>
    <hr>
    <Home-Businessphilosophy ></Home-Businessphilosophy>
    <Home-Paperlessprocesses ></Home-Paperlessprocesses>
    <Home-Teamfounders></Home-Teamfounders>
    <Home-QA></Home-QA>
    <hr>
  </div>
</template>

<script>
import '../../assets/css/mstyle.css'
import HomeHeader from '~/components/mcommon/Header.vue'
import HomeTabBar from '~/components/mcommon/TabBar.vue'
import HomeSwiper from '~/components/mcommon/Swiper.vue'
import HomeTopFrom from '~/components/mcommon/TopFrom.vue'
import HomeTechnology from '~/components/mcommon/Technology.vue'
import HomeLowprice from '~/components/mcommon/Lowprice.vue'
import HomeFlexiblecharge from '~/components/mcommon/Flexiblecharge.vue'
import HomeBusinessphilosophy from '~/components/mcommon/Businessphilosophy.vue'
import HomePaperlessprocesses from '~/components/mcommon/Paperlessprocesses.vue'
import HomeTeamfounders from '~/components/mcommon/Teamfounders.vue'
import HomeQA from '~/components/mcommon/QA.vue'
export default {
  name: 'MHome',
  metaInfo: {
    // 这里的 title 会替换 title中的字符占位
    title: '企业代理记账-上海机巧科技有限公司'
  },
  components: {
    HomeHeader, HomeTabBar, HomeSwiper, HomeTopFrom, HomeTechnology, HomeLowprice, HomeFlexiblecharge, HomeBusinessphilosophy, HomePaperlessprocesses, HomeTeamfounders, HomeQA
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
hr{
  height: 10px;
  width: 100%;
  background: #f8f6f9;
}

</style>
