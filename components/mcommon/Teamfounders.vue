<template>
   <section class="figer-wrapper bg-f8f6f9 pt" >
        <div class="title">
             <h6 class="text-c">领军人物</h6>
            <p class="font-12 text-c  color-044fff">Team of Founders</p>
        </div>
        <div class="container">
            <el-row :gutter="15" class="bgfff pt pb">
                <el-col :span="10" >
                     <img :src="figer_img1"  alt='财务代理' class=" img-fluid" />
                     <div class="tag ">黄侃 机巧科技 CEO</div>
                </el-col>
                <el-col :span="14" >
                    <p class="font-12 mb01"><strong>机巧科技CEO</strong></p>
                    <p class="font-12 mb01"><strong>慕尼黑工业大学物理学硕士</strong></p>
                    <p class="font-12 mb01"><strong>伦敦大学学院管理学硕士</strong></p>
                    <p class="font-12 mb01"><strong>上海代理记账行业协会专家委员会副主任</strong></p>
                    <p class="pt01 border-top font-12 text-left">
                        曾于德国法兰克福中欧国际交易所担任产品经理，于上海企汇集团担任总裁助理及产品经理，对代理记账行业有多年的深入研究，可准确分析企业服务市场的痛点及客户的需求。
                    </p>
                </el-col>
            </el-row>
            <el-row :gutter="15" class="bgfff  pt mt pb">
                <el-col :span="10" >
                     <img :src="figer_img2"  alt='财务代理' class=" img-fluid" />
                     <div class="tag ">周维明 机巧科技 CTO</div>
                </el-col>
                <el-col :span="14">
                    <p class="font-12 mb01"><strong>机巧科技CTO</strong></p>
                    <p class="font-12 mb01"><strong>复旦大学MBA</strong></p>
                    <p class="font-12 mb01"><strong>系统架构师</strong></p>
                    <p class="font-12 mb01"><strong>财税自动化设计师</strong></p>
                    <p class="pt01 border-top font-12 text-left">
                        曾任500强公司IT部门经理，实施OracleERP的上线，以及负责生产线自动化以及企业ERP的研发；对企业信息自动化和企业ERP有深入研究，特别是对流程控制、财税自动化有独到的见解。
                    </p>
                </el-col>
            </el-row>
            <el-row :gutter="15" class="bgfff  pt mt pb">
                <el-col :span="10" >
                     <img :src="figer_img3"  alt='财务代理' class=" img-fluid" />
                     <div class="tag ">郑列豪 会计负责人</div>
                </el-col>
                <el-col :span="14">
                    <p class="font-12 mb01"><strong>机巧科技会计负责人</strong></p>
                    <p class="font-12 mb01"><strong>中级会计师</strong></p>
                    <p class="font-12 mb01"><strong>办公自动化应用师</strong></p>
                    <p class="font-12 mb01"><strong>曾任500强企业财务主管</strong></p>
                    <p class="pt01 border-top font-12 text-left">
                        根据丰富的会计及代理记账流程化管理经验，将代理记账从单人单户企业服务模式，转化为系统流程化服务；控制发票开具、账务资料归集、会计凭证编制复核等流程系统及负责各模块准确性监管。
                    </p>
                </el-col>
            </el-row>
        </div>
        <hr>
    </section>
</template>
<script>

export default {
  name: 'Teamfounders',
  data () {
    return {
      figer_img1: require('~/assets/image/img-figer-01.png'),
      figer_img2: require('~/assets/image/img-figer-02.png'),
      figer_img3: require('~/assets/image/img-figer-03.png')
    }
  },
  props: { bg: String },
  mounted () {}
}
</script>
<style scoped>
.tag {
    display: block;
    padding: 3px 0;
    width: 100%;
    background: #044fff;
    font-size: 12px;
    text-align: center;
    color: #fff;
    margin-top:0.5rem ;
}
hr{
    padding: 0;
    height: 15px;
    background: #f8f6f9;
}
</style>
