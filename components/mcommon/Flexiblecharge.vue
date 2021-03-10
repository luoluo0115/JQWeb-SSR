<template>
    <section class="tech-wrapper  container">
        <div class="title">
             <h6 class="text-c">收费灵活</h6>
            <p class="font-12 text-c  color-044fff">Flexible Charge</p>
        </div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-image :src="flexibleImg" alt='财务代理' fit="fill"></el-image>
            </el-col>
            <el-col :span="12" >
                <p class="font-12 color-333">传统代理记账公司都向客户直接收取一整年的费用，且客户不满意想退出时手续麻烦，卡着客户不让退出。对客户而言有较高的试错风险……</p>
            </el-col>
        </el-row>
        <div class="font-12">
            <h6 class="font-12">但在机巧:</h6>
            <ul >
                <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>按月度结算客户的代理记账费用</li>
                <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>客户可随时充值任意金额，充值越多赠送也越多</li>
                <li class="text-333"><i class="iconfont  iconfangkuai text-1e6ce8"></i>不满意随时退出，5个工作日内完成退出手续，试错成本低</li>
            </ul>
        </div>
    </section>
</template>
<script>

export default {
  name: 'Flexiblecharge',
  data () {
    return {
      flexibleImg: require('~/assets/mimage/img-flexible-01.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
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
