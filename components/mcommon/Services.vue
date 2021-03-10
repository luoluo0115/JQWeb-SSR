<template>
   <section class="tech-wrapper ">
        <div class="title container">
            <h6 class="text-c">其他服务</h6>
            <p class="font-12 text-c  color-044fff">More Enterprise Services</p>
        </div>
        <div class="container">
          <div class="holderCircle">
              <div class="dotCircle" style="transform: rotate(0deg); transition: all 2s ease 0s;">
                  <span class="itemDot itemDot1" data-tab="1" style="left: 410px; top: 210px; transform: rotate(0deg); transition: all 1s ease 0s;">
                  </span>
                  <span class="itemDot itemDot2" data-tab="2" style="left: 372px; top: 328px; transform: rotate(90deg); transition: all 1s ease 0s;">
                  </span>
                  <span class="itemDot itemDot3 active" data-tab="3" style="left: 272px; top: 400px; transform: rotate(180deg); transition: all 1s ease 0s;">
                  </span>
                  <span class="itemDot itemDot4" data-tab="4" style="left: 148px; top: 400px; transform: rotate(270deg); transition: all 1s ease 0s;">
                  </span>
              </div>
              <div class="contentCircle">
                  <div class="CirItem CirItem1 active">
                  </div>
                  <div class="CirItem CirItem2">
                  </div>
                  <div class="CirItem CirItem3">
                  </div>
                  <div class="CirItem CirItem4">
                  </div>
              </div>
          </div>
        </div>
        <div class="bg-f8f6f9">
          <div class="container pt pb">
            <el-tag class="bg-044fff" effect="dark" size="small" :hit="false">工商服务</el-tag>
            <p class="mt font-12">为企业提供公司注册、工商变更、公司迁移等一站式服务产品，全方位满足企业的工商需求，可做到一对一及时响应、服务进程及时跟进。</p>
            <el-tag class="bg-044fff" effect="dark" size="small" :hit="false">知产资质</el-tag>
            <p class="mt font-12">选机巧，省心又放心！机巧作为行业内专业的资质代办公司，办证速度快，价格透明合理，不成功不收费。</p>
            <el-tag class="bg-044fff" effect="dark" size="small" :hit="false">人事服务</el-tag>
            <p class="mt font-12">人事服务找机巧，专业人事管理团队提供一体化人事服务，帮助企业从事务性工作中解脱出来，从而降低企业人力资源管理成本。</p>
            <el-tag class="bg-044fff" effect="dark" size="small" :hit="false">财税服务</el-tag>
            <p class="mt font-12">机巧拥有百人专业财务团队，收费透明合理，为企业定制专属财税筹划方案，助力企业稳健发展。</p>
          </div>
        </div>
        <p class="text-center font-12 pt pb"><a class="text-044fff" href="https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2"  rel='nofollow' target="_blank">更多问题>></a></p>

    </section>
</template>
<script>
import $ from 'jquery'
import '~/assets/css/circle.css'
export default{
  name: 'Services',
  data () {
    return {
    }
  },
  mounted () {
    var radius = 200
    var fields = $('.itemDot')
    var container = $('.dotCircle')
    var width = container.width()
    radius = width / 2.5
    var height = container.height()
    var angle = 0
    var step = (2 * Math.PI) / fields.length
    fields.each(function () {
      var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2)
      var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2)
      if (window.console) {
        console.log($(this).text(), x, y)
      }
      $(this).css({left: x + 'px', top: y + 'px'})
      angle += step
    })
    $('.itemDot').click(function () {
      var dataTab = $(this).data('tab')
      $('.itemDot').removeClass('active')
      $(this).addClass('active')
      $('.CirItem').removeClass('active')
      $('.CirItem' + dataTab).addClass('active')
      var i = dataTab
      console.log(i, 'i')
      $('.dotCircle').css({
        'transform': 'rotate(' + (360 - (i - 1) * 90) + 'deg)',
        'transition': '2s'})
      $('.itemDot').css({
        'transform': 'rotate(' + ((i - 1) * 90) + 'deg)',
        'transition': '1s'})
      $('.itemDot1').css({
        'transform': 'rotate(' + 0 + 'deg)',
        'transition': '1s'
      })
      $('.itemDot2').css({
        'transform': 'rotate(' + 90 + 'deg)',
        'transition': '1s'
      })
      $('.itemDot3').css({
        'transform': 'rotate(' + 180 + 'deg)',
        'transition': '1s'
      })
      $('.itemDot4').css({
        'transform': 'rotate(' + 270 + 'deg)',
        'transition': '1s'
      })
    })
  }
}
</script>
<style scoped>
.holderCircle {
    width: 150px;
    height: 150px;
    margin: 90px auto;
}
.dotCircle {
    left: -104px;
    top:0
}
.dotCircle .itemDot{
  background-size:cover ;
  width: 70px;
  height: 130px;
}
.contentCircle {
  background-size:cover ;
  width: 62px;
  height: 62px;
  top: 44px;
  left: -51px;
}
.contentCircle .CirItem {
  bottom: 4px;
  left: 100px;
  top: 0;
  right: 0;
}
.contentCircle .CirItem1,.contentCircle .CirItem2,.contentCircle .CirItem3,.contentCircle .CirItem4 {
   width: 147px;
  height: 302px;
}
</style>
