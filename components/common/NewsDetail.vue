<template>
    <section  id="div_content_master" class="figer-wrapper pb-5  pt-5 mt-5" style="overflow:hidden;clear: both;">
        <div class="title mb-5 mt-3 container text-center">
            <h3>{{article.title}}</h3>
            <h6 class="  container mt-2  text-right text-999">{{article.publish_time}}</h6>
        </div>
        <div class="container">
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
      title: this.article.title + '上海机巧科技有限公司',
      meta: [
        { name: 'keywords', content: this.article.key_words }
      ]
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
    console.log(M,'M')
    var D = date.getDate() + ' '
    if (D < 10) {
      D = '0' + D
    }
    var Time = ('COMMON_' + Y + '_' + M + '_' + D).replace(/\s+/g, '')
    var hashTime = md5(Time).toUpperCase()
    self.key = hashTime
    console.log(self.key, 'self.key')
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
.clear::after {
  display: block;
  clear: both;
  content: "";
}
.container {
  overflow: hidden;
}
.main {
  margin-top: 80px;
  position: relative;
  margin-left: 30px;
}
.main-inner {
  background: #fff;
  padding: 0 40px;
  float: left;
  max-width: 50%;
  position: absolute;
  right: 690px;
}
@media screen and (max-width: 1360px) {
  .main-inner {
    right: 600px;
  }
  .box {
    margin-right: 0 !important;
  }
}
@media screen and (max-width: 1200px) {
  .main-inner {
    right: 20%;
  }
  .box {
    opacity: 0;
  }
}
@media screen and (max-width: 756px) {
  .main {
    height: 600px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 5%;
  }
  .box {
    display: none;
  }
}

.main h2 {
  font-size: 36px;
  font-weight: bolder;
  /* margin-block-start: 0.83em;
  margin-block-end: 0.83em; */
  margin-top: 0.83rem;
  margin-bottom: 0.83rem;
}
.main p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
}

.box {
  width: 450px;
  height: 490px;
  float: right;
  margin-right: 20%;
  margin-top: -20px;
}
.box img {
  width: 450px;
  height: 490px;
}
@media screen and (max-width: 496px) {
  .main {
    margin-top: 30px;
    padding: 10%;
    height: 700px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 10%;
  }
}
.sub{
    text-indent: 35px;
  }
</style>
