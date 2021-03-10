<template>
    <section  id="div_content_master" class="figer-wrapper container mt" style="overflow:hidden;clear: both;">
        <div class="title text-center">
            <h5>{{article.title}}</h5>
            <p class="text-999  text-left sub" >  {{article.summary}} </p>
            <p class="text-right text-999">{{article.publish_time}}</p>
        </div>
        <div class="">
            <p v-html="article.content"></p>
        </div>
    </section>
</template>
<script>
import md5 from 'js-md5'
import axios from 'axios'
import url from '~/plugins/api'
import { Loading } from 'element-ui'
export default {
  name: 'NewsDetail',
  metaInfo () {
    return {
      title: this.article.title
    }
  },
  data () {
    return {
      articleList: [],
      article: [],
      postData: {},
      title: '',
      summary: '',
      articleListShow: true,
      articleDetailShow: false
    }
  },
  props: {
    'article_id': String
  },
  created: function () {
  },
  mounted () {
    console.log(this.article_id, 'article_id')
    var self = this
    var date = new Date()
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    var D = date.getDate() + ' '
    if (D < 10) {
      D = '0' + D
    }
    var Time = ('COMMON_' + Y + '_' + M + '_' + D).replace(/\s+/g, '')
    var hashTime = md5(Time).toUpperCase()
    self.key = hashTime
    console.log(self.key, 'self.key')
    console.log(self.article_id, ' self.article_id')
    self.queryArticleDetail(self.key, self.article_id)
  },
  methods: {
    queryArticleDetail: function (key, articleid) {
      var self = this
      console.log(self.pageData, 'self.pageData')
      var postData = {
        key: key,
        article_id: articleid
      }
      console.log(postData, 'postData')
      let loadingInstance = Loading.service()
      axios.post(url.QueryWmArticleByID, postData).then(res => {
        if (res.data.success === true) {
          console.log(res.data, 'res.data')
          self.article = res.data.article[0]
          // document.title = self.article.title
        } else {
          self.article = []
        }
        loadingInstance.close()
        console.log(res.data, '查询文章')
      }).catch(err => {
        console.log(err, 'error')
        this.$alert(err)
        self.articleList = []
        self.pageData.maxPageCount = 0
        self.pageData.page_size = 0
        loadingInstance.close()
        // error callback
      })
    }
  }
}
</script>
<style scoped>
p{
  text-indent: 0!important;
}
</style>
