<template>
  <div>
    <Home-Header :navindex="3"></Home-Header>
     <Home-Swiper :slideindex="2"></Home-Swiper>
    <!-- <Home-Nav :navindex="2"></Home-Nav> -->
    <Home-QA  :bg="bgfff"></Home-QA>
    <Home-Safe></Home-Safe>
    <Home-Floatbar></Home-Floatbar>
    <Home-Footer></Home-Footer>
    <Home-Footerfrom></Home-Footerfrom>
  </div>
</template>

<script>
import HomeHeader from '~/components/common/Header'
import HomeSwiper from '~/components/common/Swiper'
import HomeQA from '~/components/common/QA'
import HomeSafe from '~/components/common/Safe'
import HomeFloatbar from '~/components/common/Floatbar'
import HomeFooter from '~/components/common/Footer'
import HomeFooterfrom from '~/components/common/Footerfrom'

export default {
  name: 'Problem',
  metaInfo: {
    title: '代理记账问题汇总-上海机巧科技有限公司',
    meta: [
      { name: 'keywords', content: '代理记账流程_代理记账费用_代理记账公司' },
      { name: 'description', content: '上海机巧科技有限公司常见问题栏目为你讲解：企业对代理记账的需求,代理注册公司的流程以及注意事项,代理记账的费用以及收费标准相关问题。' }
    ]
  },
  components: {
    HomeHeader, HomeSwiper, HomeQA, HomeSafe, HomeFloatbar, HomeFooter, HomeFooterfrom
  },
  data () {
    return {
      list: [{
        id: 2,
        h2: '关于公司',
        p: '我们着眼未来，相信前程似锦'
      }],
      bgf8f6f9: 'bgf8f6f9',
      bgfff: 'bgfff'
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
