<template>
  <div class="mibile-wrapper">
    <Home-Header :navindex="3"></Home-Header>
    <Home-TabBar :navindex="3"></Home-TabBar>
    <Home-NewsDetail :article_id='id'></Home-NewsDetail>
  </div>
</template>

<script>
import '../../assets/css/mstyle.css'
import HomeHeader from '~/components/mcommon/Header.vue'
import HomeTabBar from '~/components/mcommon/TabBar.vue'
import HomeNewsDetail from '~/components/mcommon/NewsDetail.vue'
export default {
  name: 'MNews',
  metaInfo: {
    // 这里的 title 会替换 title中的字符占位
    title: '企业代理记账新闻资讯-上海机巧科技有限公司'
  },
  components: {
    HomeHeader, HomeTabBar, HomeNewsDetail
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  mounted () {
    // var articleId = this.$route.query.id
    // console.log(this.id, 'id')
    // console.log(articleId, 'articleId')
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
