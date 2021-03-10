<template>
  <section class="figer-wrapper   pb-5 mt-5  about-jq">
        <div class=" pt-5 mt-5">
            <div class="container">
                <div class="row  ">
                    <div class="col-md-7 col-12  text-333 text-left clearfix">
                        <img :src="aboutTitleImg" class="mb-3 mb-sm-0" />
                        <p class="text">
                            上海机巧科技有限公司成立于2020年，是企汇集团的孵化品牌，上海市中小企业公共服务机构，上海市代理记账行业协会专家委员会副主任单位。旗下自主研发的旗舰产品“巧记账”智能财税系统，是一款专为初创及中小微企业设计的无纸化记账报税SaaS工具，可为企业提供全程自动化、智能化、专业化、可视化的财税会计服务解决方案，帮助企业实现降本增效和快速发展。
                        </p>
                        <p class="more"><a class="text-044fff" href="https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2" target="_blank">了解机巧>></a> </p>
                    </div>
                    <div class="col-md-5 col-12  text-333 text-center clearfix">
                        <img :src="about01Img" class="img-fluid mb-3 mb-sm-0" />
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'Company',
  data () {
    return {
      aboutTitleImg: require('~/assets/image/img-about-title-01.png'),
      about01Img: require('~/assets/image/img-about-01.png')
    }
  }
}
</script>
<style scoped>

</style>
