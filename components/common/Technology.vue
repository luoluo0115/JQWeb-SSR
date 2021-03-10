<template>
  <section class="tech-wrapper  pt-5 pb-5 mt-5">
      <div class="title mb-5 container">
          <h3>高科技</h3>
          <h4 class="text-1e6ce8 ">High Technology</h4>
      </div>
      <div class="bg-f8f6f9">
          <div class="container tech-main">
              <div class="row  p-5">
                  <div class="col-md-7 col-xs-7  text-333">
                      <p class="text-333">机巧科技采用最新的图像识别和人工智能技术，经由多名20年以上经验的财税领域专家协同开发，研制最符合小微企业实际情况的会计分录，为用户实现全自动无纸化记账和申报服务.</p>
                      <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 智能多维度校验的OCR图像识别技术</p>
                      <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 多名资深财务总监研制的做账逻辑</p>
                      <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 使用贝叶斯算法实现自动分类票据</p>
                      <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 使用TensorFlow实现RPA自动纳税申报</p>
                      <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 全数据上传阿里云，保障用户信息安全</p>
                      <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i>实时获取财务报表，账本账册，监测企业动态</p>
                      <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 企业预警信息、缴款信息实时推送</p>
                      了解详情>>
                  </div>
                  <div class="col-md-5 col-xs-5 tech-right ">
                      <img :src="techImg" alt='财务代理' class="img-tech-right" />
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
export default {
  name: 'Technology',
  data () {
    return {
      list: [],
      techImg: require('~/assets/image/index-tech-right-bg.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
