<template>
  <div>
    <Home-Header :navindex="4"></Home-Header>
    <Home-NewsDetail :article_id='id'></Home-NewsDetail>
    <Home-Safe></Home-Safe>
    <Home-Floatbar></Home-Floatbar>
    <Home-Footer></Home-Footer>
    <Home-Footerfrom></Home-Footerfrom>
  </div>
</template>

<script>
import HomeHeader from '~/components/common/Header'
import HomeNewsDetail from '~/components/common/NewsDetail'
import HomeSafe from '~/components/common/Safe'
import HomeFloatbar from '~/components/common/Floatbar'
import HomeFooter from '~/components/common/Footer'
import HomeFooterfrom from '~/components/common/Footerfrom'

export default {
  name: 'NewsDetail',
  components: {
    HomeHeader, HomeNewsDetail, HomeSafe, HomeFloatbar, HomeFooter, HomeFooterfrom
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created: function () {
    console.log(this.id, 'id')
  },
  mounted () {
    var articleId = this.$route.params.id
    console.log(this.id, 'id')
    console.log(articleId, 'articleId')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
