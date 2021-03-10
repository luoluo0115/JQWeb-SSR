<template>
  <div>
    <Home-Header :navindex="4"></Home-Header>
    <!-- <Home-Nav :navindex="2"></Home-Nav> -->
    <News-List></News-List>
    <Home-Safe></Home-Safe>
    <Home-Floatbar></Home-Floatbar>
    <Home-Footer></Home-Footer>
    <Home-Footerfrom></Home-Footerfrom>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '~/components/common/Header'
import NewsList from '~/components/common/NewsList'
import HomeSafe from '~/components/common/Safe'
import HomeFloatbar from '~/components/common/Floatbar'
import HomeFooter from '~/components/common/Footer'
import HomeFooterfrom from '~/components/common/Footerfrom'

export default {
  name: 'News',
  metaInfo: {
    title: '代理记账公司新闻资讯-上海机巧科技有限公司'
  },
  components: {
    HomeHeader, NewsList, HomeSafe, HomeFloatbar, HomeFooter, HomeFooterfrom
  },
  data () {
    return {
    }
  }

		
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
