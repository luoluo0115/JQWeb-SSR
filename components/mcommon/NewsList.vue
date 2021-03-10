<template>
   <section class="bg-f8f6f9" style="overflow:hidden" >
      <div class="articleList container mt" v-if="articleListShow==true">
        <div class="title  text-center">
            <h6 class="text-c">新闻资讯</h6>
            <p class="font-12 text-c  color-044fff">News</p>
        </div>
        <router-link :to="{ path: '../mnewsdetail/'+ item.article_id + '/' }"  v-for="(item,index) in articleList" v-bind:key='index'>
          <el-row :gutter="15" class="bgfff mb">
            <el-col :span="8" class="pt04 pb04">
              <el-image :src="item.picture_url" alt="item.title" lazy></el-image>
            </el-col>
            <el-col :span="16" class="pt pb04">
              <div class="font-14 color-333 news-title">{{item.title}}</div>
              <div class="font-12 color-999 news-summary pt01">{{item.summary}}</div>
              <div class="font-12 color-999 text-right">{{item.publish_time}}</div>
            </el-col>
          </el-row>
         </router-link>
      </div>
      <div v-show="pageData.maxPageCount > 1" class="text-center">
        <div id="layui-laypage-2" class="layui-box layui-laypage layui-laypage-default">
            <span class="layui-laypage-skip">总<span class="layui-laypage-skip laypage-num">{{pageData.maxPageCount}}</span>页 当前</span>
            <a href="javascript:;" data-page="1" v-bind:class="pageData.laypagePrev"> <i class="iconfont iconzyojiantou1" v-on:click="queryArticleList('s')"></i></a>
            <a href="javascript:;" data-page="3" class="laypage-centernum">{{pageData.currIndex}}</a>
            <a href="javascript:;" data-page="3" v-bind:class="pageData.laypageNext"><i class="iconfont iconzyojiantou" v-on:click="queryArticleList('p')"></i></a>
            <span class="layui-laypage-skip">页 到第<input type="text" min="1" value="1" v-model.trim="pageData.currIndex_refresh" class="layui-input">页<button type="button" class="layui-laypage-btn" v-on:click="queryArticleList('r')">确定</button></span>
        </div>
      </div>
  </section>
</template>
<script>
import md5 from 'js-md5'
import axios from 'axios'
import url from '~/plugins/api'
import { Loading } from 'element-ui'
export default {
  name: 'Banner',
  data () {
    return {
      articleList: [],
      page_index: 1,
      page_size: 6,
      laypagePrev: 'layui-laypage-prev layui-disabled',
      laypageNext: 'layui-laypage-next',
      pageData: {
        maxPageCount: 1,
        currIndex: 1,
        currIndex_refresh: 1,
        page_size: 6,
        page_index: 1,
        laypagePrev: 'layui-laypage-prev layui-disabled',
        laypageNext: 'layui-laypage-next'
      },
      article: [],
      postData: {},
      title: '',
      summary: '',
      articleListShow: true,
      articleDetailShow: false
    }
  },
  created: function () {
  },
  mounted () {
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
    self.pageData.key = hashTime
    self.queryArticleList()
  },
  methods: {
    queryArticleList: function (flag) {
      var self = this
      self.getPagerData(flag, self.pageData)
      let loadingInstance = Loading.service()
      console.log(self.pageData, 'self.pageData')
      axios.post(url.QueryWmArticleList, self.pageData).then(res => {
        if (res.data.success === true) {
          console.log(res.data, '查询文章列表')
          self.articleList = res.data.articleList
          self.pageData.maxPageCount = res.data.maxCount
          console.log(self.pageData.maxPageCount, 'self.pageData.maxPageCount ')
        } else {
          self.articleList = []
          self.pageData.maxPageCount = 0
          self.pageData.page_size = 0
        }
        console.log(res.data, 'res.data')
        loadingInstance.close()
      }).catch(err => {
        console.log(err, 'error')
        this.$alert(err)
        self.articleList = []
        self.pageData.maxPageCount = 0
        self.pageData.page_size = 0
        loadingInstance.close()
        // error callback
      })
    },
    getPagerData: function (flag, pageData) {
      if (flag === undefined) {
        flag = 'a'
      }
      var d_currIndex = parseInt(pageData.currIndex)
      var d_maxPageCount = parseInt(pageData.maxPageCount)

      if (flag === 's') {
        d_currIndex = d_currIndex - 1
        if (d_currIndex <= 0) {
          d_currIndex = 1
        }
      }
      else if (flag === 'p') {
        d_currIndex = d_currIndex + 1
        if (d_currIndex > d_maxPageCount) {
          d_currIndex = d_maxPageCount
        }
      }
      else if (flag === 'r') {
        d_currIndex = pageData.currIndex_refresh
        if (d_currIndex > d_maxPageCount) {
          d_currIndex = d_maxPageCount
          pageData.currIndex_refresh = d_currIndex
        }
      }
      if (d_currIndex === 1) {
        pageData.laypagePrev = 'layui-laypage-prev layui-disabled'
      } else {
        pageData.laypagePrev = 'layui-laypage-prev'
        pageData.currIndex = d_currIndex
        pageData.page_index = (d_currIndex)
      }
      if (flag !== 'a') {
        if (d_currIndex === d_maxPageCount) {
          pageData.laypageNext = 'layui-laypage-next layui-disabled'
        } else {
          pageData.laypageNext = 'layui-laypage-next'
          pageData.currIndex = d_currIndex
          pageData.page_index = (d_currIndex)
        }
      }
    }
  }
}
</script>
<style scoped>
.news-title{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.news-summary{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.layui-laypage .layui-laypage-skip {
    height: 28px;
    line-height: 28px;
    color: #999;
}
.layui-laypage .layui-laypage-count, .layui-laypage .layui-laypage-limits, .layui-laypage .layui-laypage-refresh, .layui-laypage .layui-laypage-skip {
    margin-left: 5px;
    margin-right: 5px;
    padding: 0;
    border: none;
}
.layui-laypage-prev, .layui-laypage-next {
    padding: 0 5px!important;
}
.layui-laypage input {
    width: 35px;
    margin: 0 5px;
}
</style>
