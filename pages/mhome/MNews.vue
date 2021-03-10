<template>
  <div class="mibile-wrapper">
    <Home-Header :navindex="3"></Home-Header>
    <Home-TabBar :navindex="3"></Home-TabBar>
    <Home-NewsList></Home-NewsList>
  </div>
</template>

<script>
import '../../assets/css/mstyle.css'
import HomeHeader from '~/components/mcommon/Header.vue'
import HomeTabBar from '~/components/mcommon/TabBar.vue'
import HomeNewsList from '~/components/mcommon/NewsList.vue'
export default {
  name: 'MNews',
  metaInfo: {
    // 这里的 title 会替换 title中的字符占位
    title: '企业代理记账-上海机巧科技有限公司'
  },
  components: {
    HomeHeader, HomeTabBar, HomeNewsList
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
