<template>
    <section>
        <div class="footer-from" v-if="showFooterFrom">
            <div class="container">
                <div class="row">
                    <div class="col-md-3  col-sm-2 col-3">
                      <b-img :src="footerLeftImg" class="img-footer-left" fluid alt="代理记账"></b-img>
                    </div>
                    <div class="col-md-8 col-sm-9 center-wrapper col-8">
                        <form class="form-inline">
                            <div class="form-group">
                                <input type="text" class="form-control" value="" v-model="name" id="indexName" placeholder="请输入您的姓名">
                                <span class="iconfont icon-Userpersonavtar  form-control-feedback" aria-hidden="true"></span>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" value="" v-model="telephone" id="indexTelephone" placeholder="请输入您的手机号">
                                <span class="iconfont icon-phone form-control-feedback" aria-hidden="true"></span>
                            </div>

                            <button type="button" class="btn btn-default index-submit-userinfo" id="userinfo-btm-from" @click="submitForm($event)">立即免费预约</button>
                            <button type="button" class="btn btn-default index-submit-userinfo" @click="onbaiduline()" >在线咨询</button>
                        </form>
                    </div>
                    <div class="col-md-1  col-sm-1  col-1">
                        <div class="form-guanbi"  @click="closeFooterfrom">
                            <i class="iconfont icontubiao-"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import md5 from 'js-md5'
import axios from 'axios'
import url from '~/plugins/api'
import bus from '~/assets/js/eventBus.js'
import { Loading } from 'element-ui'
export default {
  name: 'Footerfrom',
  data () {
    return {
      downmenuShow: false,
      navshow: true,
      height: 0,
      timer: null,
      name: '',
      telephone: '',
      showFooterFrom: true,
      footerLeftImg: require('~/assets/image/qi_04.png')
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
  },
  methods: {
    submitForm: function (event) {
      let self = this

      var name = self.name
      var telephone = encodeURIComponent(self.telephone)
      if (name.length <= 0) {
        this.$alert("<div style='font-size:18px;text-align:center'>请输入正确的姓名！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        return
      }
      if (telephone.length <= 0) {
        this.$alert("<div style='font-size:18px;text-align:center'>请输入您的电话！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        return
      }
      if (telephone.length < 8) {
        this.$alert("<div style='font-size:18px;text-align:center'>请输入正确的电话或者手机号码！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        return
      }
      var date = new Date()
      var Y = date.getFullYear()
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
      var D = date.getDate() + ' '
      var Time = ('COMMON_' + Y + '_' + M + '_' + D).replace(/\s+/g, '')
      var hashTime = md5(Time).toUpperCase()
      var postData = {
        'key': hashTime,
        'request_category': '上海代理公司',
        'request_name': name,
        'request_phone': telephone,
        'request_data': '机巧网站底部表单',
        'flag': 'F'
      }
      let loadingInstance = Loading.service()
      axios.post(url.PostMarktingForm, postData).then(res => {
        this.$alert("<div style='font-size:14px;text-align:center'>亲，您已预约成功~您想知道的注册流程和精准报价,我们会尽快和您回电详谈！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        loadingInstance.close()
        console.log(res.data, 'res.data')
      }).catch(err => {
        console.log(err, 'error')
        this.$alert(err)
        loadingInstance.close()
        // error callback
      })
    },
    closeFooterfrom () { this.showFooterFrom = false; bus.$emit('mb', 'mb0') },
    onbaiduline () {
      window.open('https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2')
    }
  }

}
</script>
<style scoped>
</style>
