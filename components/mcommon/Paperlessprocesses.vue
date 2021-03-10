<template>
  <section class="">
    <div class="bg-f8f6f9 pt">
        <div class="title  text-center  container">
            <h6 class="text-c">无纸化合同服务</h6>
            <p class="font-12 text-c  color-044fff">Paperless Processes</p>
        </div>
        <div class="mb  container pb">
            <el-image :src="computerImg" alt='财务代理' fit="fill"></el-image>
        </div>
    </div>
    <div class="container">
        <el-row :gutter="10" class="paper-item">
            <el-col :span="6" class="text-center">
                <i class="iconfont  iconi-dianziqianming font-36"></i>
            </el-col>
            <el-col :span="16">
                <h6 class="font-14 color-044fff"><strong>电子签名</strong></h6>
                <p class="font-12">可靠合规，具有法律效力，防篡改防假冒，确保签署主体真实性</p>
            </el-col>
        </el-row>
         <el-row :gutter="10" class="paper-item">
            <el-col :span="6" class="text-center">
                <i class="iconfont  iconhetong font-36"></i>
            </el-col>
            <el-col :span="16">
                <h6 class="font-14 color-044fff"><strong>智能合同</strong></h6>
                <p class="font-12">实现便捷的多方在线签署、协同管理、批量签署等，效率显著提升</p>
            </el-col>
        </el-row>
         <el-row :gutter="10" class="paper-item">
            <el-col :span="6" class="text-center">
                <i class="iconfont  iconrenzheng font-36"></i>
            </el-col>
            <el-col :span="16">
                <h6 class="font-14 color-044fff"><strong>认证服务</strong></h6>
                <p class="font-12">接入权威数据库，快速完成个人与企业实名认证，实现精准核验</p>
            </el-col>
        </el-row>
    </div>
  </section>

</template>
<script>
export default {
  name: 'Paperlessprocesses',
  data () {
    return {
      list: [],
      computerImg: require('~/assets/mimage/img-paper-01.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.paper-item{
    border-bottom: 1px solid #eee;
    margin-bottom: 1rem
}
</style>
