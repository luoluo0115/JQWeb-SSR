<template>
  <section class="tech-wrapper">
      <div class="title  container text-center">
          <h6 class="text-c">高科技</h6>
          <p class="font-12 text-c  color-044fff">High Technology</p>
      </div>
      <div class="bg-f8f6f9">
          <div class="container pt">
            <el-row :gutter="10">
              <el-col :span="16">
                <p class="font-12 color-333">机巧科技采用最新的图像识别和人工智能技术，经由多名20年以上经验的财税领域专家协同开发，研制最符合小微企业实际情况的会计分录，为用户实现全自动无纸化记账和申报服务.</p>
              </el-col>
              <el-col :span="8">
                <el-image :src="techImg" alt='财务代理' fit="fill"></el-image>
              </el-col>
            </el-row>
          </div>
      </div>
      <div class=" font-12 container ">
        <ul>
          <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>智能多维度校验的OCR图像识别技术</li>
          <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>多名资深财务总监研制的做账逻辑</li>
          <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>使用贝叶斯算法实现自动分类票据</li>
          <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>使用TensorFlow实现RPA自动纳税申报</li>
          <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>全数据上传阿里云，保障用户信息安全</li>
          <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>实时获取财务报表，账本账册，监测企业动态</li>
          <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>企业预警信息、缴款信息实时推送</li>
        </ul>
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
.tech-wrapper {
  margin-top:20px ;
}
.tech-main{
  padding-top: 1rem;
}
ul{
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul li{
  margin-bottom: 0.2rem;
}

</style>
