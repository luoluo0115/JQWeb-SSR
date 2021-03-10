<template>
  <section class=" container">
        <div class="title">
            <h6 class="text-c">记账报税流程图</h6>
            <p class="font-12 text-c  color-044fff">Bookkeeping Flowcharts</p>
        </div>
        <el-row class="list">
            <el-col :span="6" class="text-center item">
                <el-tooltip content="用户可根据手上有的票据类型（如收入票据、支出票据、银行文件、社保公积金文件、工资、进项认证表等）在小程序或网页端分类上传。" placement="bottom" effect="light">
                     <el-button class="item-btn">
                        <span class="icon d-block">
                            <i class="iconfont iconpiao font-24"></i>
                        </span>
                        <span class="font-10">选择票据类别</span>
                        <i class="iconfont iconsanjiaoright arrow"></i>
                     </el-button>
                </el-tooltip>
            </el-col>
            <el-col :span="6" class="text-center item">
                <el-tooltip content="用户可拍照上传JPEG格式的发票或PDF格式的电子发票。用户也可直接上传PDF格式的开票汇总表、银行回单和社保公积金缴费回执以及EXCEL格式的银行对账单和一般纳税人进项认证表等。" placement="bottom" effect="light">
                    <el-button class="item-btn">
                        <span class="icon d-block">
                            <i class="iconfont iconzhaoxiangji font-24"></i>
                        </span>
                        <span class="font-10"> 拍照/上传</span>
                        <i class="iconfont iconsanjiaoright arrow"></i>
                    </el-button>
                </el-tooltip>
            </el-col>
            <el-col :span="6" class="text-center item">
                <el-tooltip content="采用最先进的OCR图像识别技术自动分析抓取图片中的票据信息。上传界面中的简表将实时显示您本月上传的票据数量、发票金额、估计生成凭证的数量等信息。" placement="bottom" effect="light">
                    <el-button class="item-btn">
                       <span class="icon d-block">
                            <i class="iconfont icon_renlianshibie font-24"></i>
                        </span>
                        <span class="font-10">系统自动识别</span>
                        <i class="iconfont iconsanjiaoright arrow"></i>
                    </el-button>
                </el-tooltip>
            </el-col>
            <el-col :span="6" class="text-center item">
                <el-tooltip content="当您确定本月无其他原始票据后，点击“最终确认”按钮后机巧将开始制单流程。若您在每月10号时仍未点击该按钮，系统将默认您已完成最终确认并开始制单。" placement="bottom" effect="light">
                    <el-button class="item-btn">
                       <span class="icon d-block">
                            <i class="iconfont iconquerendan- font-24"></i>
                        </span>
                        <span class="font-10">确认本月票据</span>
                    </el-button>
                </el-tooltip>
            </el-col>
            <el-col :span="6" class="text-center mt item">
                <el-tooltip content="机巧采用最先进的AI技术以及多名资深财务总监制定的做账逻辑自动帮用户完成做账工作。系统自动做账完毕后，将由专业财务老师人工审核，确保做账质量。" placement="top" effect="light">
                    <el-button class="item-btn">
                       <span class="icon d-block">
                            <i class="iconfont iconrengongzhinengdanao font-24"></i>
                        </span>
                        <span class="font-10">AI做账，人工审核 </span>
                        <i class="iconfont iconsanjiaoright arrow"></i>
                    </el-button>
                </el-tooltip>
            </el-col>
            <el-col :span="6" class="text-center  mt item">
                <el-tooltip content="消息通知税金当制单完成之后，将生成本月您应当纳税申报的税金。机巧将通过公众号及邮箱的方式通知您本月的税金金额。若您无不同意见，点击“确认”按钮后即自动完成申报并准备税金扣款。若您对税金数字有异议的，可以在线咨询机巧专业财务老师。" placement="top" effect="light">
                    <el-button class="item-btn">
                        <span class="icon d-block">
                            <i class="iconfont iconshuiwu font-24"></i>
                        </span>
                        <span class="font-10">确认本月税金</span>
                        <i class="iconfont iconsanjiaoright arrow"></i>
                    </el-button>
                </el-tooltip>
            </el-col>
            <el-col :span="6" class="text-center mt item">
                <el-tooltip content="电子税务在您确认过本月税金后，机巧将通过税局系统从您绑定的银行基本户中自动发起税金扣款。您只需要确保银行基本户中有足够的金额即可，无需额外操作。" placement="top" effect="light">
                    <el-button class="item-btn">
                       <span class="icon d-block">
                            <i class="iconfont iconkoukuanjilu font-24"></i>
                        </span>
                        <span class="font-10">自动扣缴税金</span>
                        <i class="iconfont iconsanjiaoright arrow"></i>
                    </el-button>
                </el-tooltip>
            </el-col>
            <el-col :span="6" class="text-center mt item">
                <el-tooltip content="当制单完成之后，将生成本月您应当纳税申报的税金。机巧将通过公众号及邮箱的方式通知您本月的税金金额。" placement="top" effect="light">
                    <el-button class="item-btn">
                        <span class="icon d-block">
                            <i class="iconfont icon_jinrongtouzi font-24"></i>
                        </span>
                        <span class="font-10">看财务报表账册</span>
                    </el-button>
                </el-tooltip>
            </el-col>
        </el-row>
        <!-- <div class="bg-f8f6f9">
            <div class="container tech-main chart-main pt-5 pb-5">
                <div class="row p-5 justify-content-center ">
                    <div class="col-12 position-relative">
                        <img :src="productImg" class="img-fluid position-relative" />
                        <div class=" text-center mb-3  mt-3 clearfix chart-item position-absolute" style="width:15%;top:6%;left:6%">
                            <span class=" d-inline-block chart-i" style="width: 100px;height: 75px;"></span>
                            <div class=" chart-hover text-left" style="left: -38.5%;">
                                <span class="triangle" style="left: 17.5%;"><em></em></span>
                                用户可根据手上有的票据类型（如收入票据、支出票据、银行文件、社保公积金文件、工资、进项认证表等）在小程序或网页端分类上传。
                            </div>
                        </div>
                        <div class="text-center mb-3  mt-3 clearfix  chart-item position-absolute" style="width:15%;top:6%;left:23.5%">
                            <span class=" d-inline-block chart-i" style="width: 80px;height: 75px;"></span>
                            <div class=" chart-hover text-left" style="right: -227%;">
                                <span class="triangle" style="left: 46%;"><em></em></span>
                                用户可拍照上传JPEG格式的发票或PDF格式的电子发票。用户也可直接上传PDF格式的开票汇总表、银行回单和社保公积金缴费回执以及EXCEL格式的银行对账单和一般纳税人进项认证表等。
                            </div>
                        </div>
                        <div class=" text-center mb-3  mt-3 clearfix  chart-item position-absolute" style="width:15%;top:6%;left:38.5%">
                            <span class=" d-inline-block chart-i" style="width: 96px;height: 75px;"></span>
                            <div class=" chart-hover text-left" style="    right: -127%;">
                                <span class="triangle" style="left:64.5%"><em></em></span>
                                采用最先进的OCR图像识别技术自动分析抓取图片中的票据信息。上传界面中的简表将实时显示您本月上传的票据数量、发票金额、估计生成凭证的数量等信息。
                            </div>
                        </div>
                        <div class=" text-center mb-3  mt-3 clearfix  chart-item position-absolute" style="width:15%;top:6%;left:51.5%">
                            <span class=" d-inline-block chart-i" style="width: 80px;height: 75px;"></span>

                            <div class=" chart-hover text-left" style="right: -40%;left: auto;">
                                <span class="triangle " style="left:82%"><em></em></span>
                                当您确定本月无其他原始票据后，点击“最终确认”按钮后机巧将开始制单流程。若您在每月10号时仍未点击该按钮，系统将默认您已完成最终确认并开始制单。
                            </div>
                        </div>
                        <div class="text-center mb-3  mt-3 clearfix chart-item  position-absolute" style="width:15%;top:35%;left:51.5%">
                            <span class=" d-inline-block chart-i" style="width:194px;height:150px;"></span>
                            <div class=" chart-hover text-left" style="right: -40%;left: auto; top:107%">
                                <span class="triangle" style="left:81.5%"><em></em></span>
                                机巧采用最先进的AI技术以及多名资深财务总监制定的做账逻辑自动帮用户完成做账工作。系统自动做账完毕后，将由专业财务老师人工审核，确保做账质量。
                            </div>
                        </div>
                        <div class=" text-center mb-3  mt-3 clearfix chart-item  position-absolute" style="width:15%;top: 78%;left: -0.5%;">
                            <span class=" d-inline-block chart-i" style="width: 80px;height: 95px;"></span>
                            <div class=" chart-hover text-left" style="left:5%">
                                <span class="triangle" style="left: 9.5%;"><em></em></span>
                               消息通知税金当制单完成之后，将生成本月您应当纳税申报的税金。机巧将通过公众号及邮箱的方式通知您本月的税金金额。若您无不同意见，点击“确认”按钮后即自动完成申报并准备税金扣款。若您对税金数字有异议的，可以在线咨询机巧专业财务老师。
                            </div>
                        </div>
                        <div class="  text-center mb-3  mt-3 clearfix chart-item position-absolute" style="width:15%;top: 78%;left: 19%;">
                            <span class=" d-inline-block chart-i" style="width:160px;height: 95px;"></span>
                            <div class=" chart-hover text-left" style=" left: -129%;">
                                <span class="triangle" style="left: 35.5%;"><em></em></span>
                                电子税务在您确认过本月税金后，机巧将通过税局系统从您绑定的银行基本户中自动发起税金扣款。您只需要确保银行基本户中有足够的金额即可，无需额外操作。
                            </div>
                        </div>
                        <div class=" text-center mb-3  mt-3 clearfix chart-item  position-absolute" style="width:15%;top: 78%;left: 36.5%;">
                            <span class=" d-inline-block chart-i" style="width: 80px;height: 95px;"></span>
                            <div class=" chart-hover text-left" style="    right: -140%;    left: auto;">
                                <span class="triangle" style="left: 63.5%;"><em></em></span>
                                当制单完成之后，将生成本月您应当纳税申报的税金。机巧将通过公众号及邮箱的方式通知您本月的税金金额。若您无不同意见，点击“确认”按钮后即自动完成申报并准备税金扣款。若您对税金数字有异议的，可以在线咨询机巧专业财务老师。
                            </div>
                        </div>
                        <div class=" text-center mb-3  mt-3 clearfix chart-item position-absolute" style="width:15%;top: 78%;left: 51.5%;">
                            <span class=" d-inline-block chart-i" style="width: 80px;height: 95px;"></span>
                            <div class=" chart-hover text-left" style="right: -42%;   left: auto;">
                                <span class="triangle" style="left: 81.5%;"><em></em></span>
                               当制单完成之后，将生成本月您应当纳税申报的税金。机巧将通过公众号及邮箱的方式通知您本月的税金金额。若您无不同意见，点击“确认”按钮后即自动完成申报并准备税金扣款。若您对税金数字有异议的，可以在线咨询机巧专业财务老师。
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> -->
    </section>
</template>
<script>
export default {
  name: 'Bookkeeping',
  data () {
    return {
      list: [],
      productImg: require('~/assets/image/product-list-03.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.icon{
    width: 46px;
    height: 46px;
    line-height: 46px;
    border-radius: 100%;
    background: #044fff;
    color: #fff;
    margin: 0 auto;
}
.item{
    position: relative;
}
.item .arrow{
    position: absolute;
    right: -10px;
    top: 7px;
    color: #044fff;
    z-index: 99;
}
.item-btn{
    line-height: 2.2;
    white-space: normal;
    cursor: pointer;
    background: #FFF;
    border: 0;
    color: #333;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    width: 100%;
    /* margin: 0; */
    /* -webkit-transition: .1s; */
    /* transition: .1s; */
    font-weight: 400;
    padding: 0;
    font-size: 10px;
    border-radius: 0;
    position: relative;
}

</style>
<style>
.el-tooltip__popper {
    width: 90%;
}
</style>
