<template>
   <section class="figer-wrapper container ">
        <div class="title text-center ">
            <h6 class="text-c">常见问题</h6>
            <p class="font-12 text-c  color-044fff">Q&A</p>
        </div>
        <el-collapse accordion v-model="activeNames" @change="handleChange">
            <el-collapse-item  name="1" disabled>
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> <el-link href="http://ms.jiqiao.tech/FileDown/GetSharedImageQJZ?image_code=A001" target="_blank" :underline="false">机巧完整记账申报流程是怎样的？</el-link>
                </template>
            </el-collapse-item>
             <el-collapse-item  name="2" disabled>
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> <el-link href="https://mp.weixin.qq.com/s/8uYr4sNzOEjzRnHgIest3g" target="_blank" :underline="false">每月如何上传票据？上传有误/遗漏能否撤回重新上传？</el-link>
                </template>
            </el-collapse-item >
            <el-collapse-item name="3">
                <template slot="title" >
                    <i class="header-icon el-icon-question color-044fff"></i> 巧记账适合什么样类型的公司？
                </template>
                <div>答：① 巧记账只需拍照就能完成记账报税，节省出聘请专职会计的费用，适合初创的企业；</div>
                <div>答：②巧记账按凭证数量浮动式计费，且可按月支付。适合预算低、票量较少的企业。相较传统代账公司，可为企业节省约70%的费用。</div>
            </el-collapse-item>
            <el-collapse-item name="4">
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> 巧记账准确率高吗？怎样确保做账、申报质量？
                </template>
                <div>答：巧记账的票据识别率98%，记账准确率99.99%。从智能做账、人工审核两方面确保记账质量。机巧科技采用最新的图像识别和人工智能技术，经由多名20年以上经验的财税领域专家协同开发，研制最符合小微企业实际情况的会计分录，可为用户实现全自动无纸化记账和申报服务。</div>
            </el-collapse-item>
             <el-collapse-item  name="5">
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> 如果代账过程中出现问题，我要找谁及时处理调整？
                </template>
                <div>答:您可从机巧网站任意页面右侧的悬浮栏，点击“在线客服”联系机巧服务人员，或直接拨打机巧咨询热线：021-54505858/13002193888</div>
            </el-collapse-item>
             <el-collapse-item  name="6">
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> 机巧“凭票据数量浮动式收费”的标准是什么？充值有返利的比例是多少？
                </template>
                    <div>答:①若同时委托机巧代办注册公司，代理记账费为：申报费50元/月+月凭证数×10元</div>
                    <div>②若没有委托机巧代办注册公司，代理记账费为：申报费68元/月+月凭证数×10元</div>
                    <div>*凭证是指编制的会计凭证，相同类型的票据、相同人员或公司，即计为1张凭证。</div>
                    <div>充值奖励：充1000元送100元；充3000元送450元；充5000元送1000元。</div>
            </el-collapse-item>
             <el-collapse-item  name="7">
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> 巧记账的服务具体包括什么？
                </template>
                <div>答:巧记账的服务包括“票据识别、生成凭证、AI记账、人工审核、税款计算、税务申报、代缴税款、会计账簿、财务报表生成、工商年检”等。</div>
            </el-collapse-item>
             <el-collapse-item name="8">
                <template slot="title" >
                    <i class="header-icon el-icon-question color-044fff"></i> 为什么我拍照上传的票据老是识别不了？上传票据的图片像素最低是多少？
                </template>
                <div>答:上传票据无法识别可能因为上传的票据图片像素太低或是图片模糊等。上传票据的图片目前支持jpg、png、bmp格式，图片的长和宽要求最短边大于10px，最长边小于2048 px，图片大小不超过3M。</div>
            </el-collapse-item>
             <el-collapse-item  name="9">
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> 机巧除了代账，还能为企业提供其他服务吗？
                </template>
                <div>答：可以。除了代理记账之外，机巧科技同时可为企业提供工商注册、知产商标、高企认定、行政审批、人事银行、设计建站等一站式创业服务。</div>
            </el-collapse-item>
             <el-collapse-item  name="10">
                <template slot="title">
                    <i class="header-icon el-icon-question color-044fff"></i> 如果使用机巧代账，我注册账号时需要准备哪些个人及企业信息？
                </template>
                <div>答：您需要准备个人手机号、邮箱等个人信息，以及法人姓名、法人身份证号码、法人联系方式、公司名称、社会信用号等企业信息。</div>
            </el-collapse-item>
             <el-collapse-item name="11">
                <template slot="title" >
                    <i class="header-icon el-icon-question color-044fff"></i> 巧记账如何保证我的做账数据信息安全？
                </template>
                <div>答：巧记账采用阿里云专业加密存储与传输方式，并使用网络安全保护措施，努力为客户的信息安全提供保障。</div>
            </el-collapse-item>
        </el-collapse>
        <el-link  href="https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2" target="_blank" class="text-center mt mb d-block more-btn">更多问题</el-link>
    </section>
</template>
<script>

export default {
  name: 'QA',
  data () {
    return {
      text: ``,
      QAImg: require('~/assets/image/icon-Q.png'),
      activeNames: '3'
    }
  },
  props: {
    bg: String
  },
  mounted () {},
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
<style >
.el-collapse-item__header {
    line-height: 1.2!important;
    padding: 10px 0;
    font-size: 12px;
    height: auto;
}
.el-collapse-item.is-disabled .el-collapse-item__header {
    color: #303133;
    cursor: pointer;
}
.el-divider__text, .el-link {
    font-weight: 500;
    font-size: 12px;
}
.el-link.el-link--default {
    color: #303133;
}
.el-link.el-link--default:hover ,.el-link.el-link--default:active{
    color: #303133;
    text-decoration: none;
}
.more-btn{
    color: #044fff!important;
}
</style>
