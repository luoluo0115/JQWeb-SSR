<template>
    <section class="container" :style="{ 'margin-top': (mHeight-30) + 'px'}">
      <div class="top-from">
        <h6 class="color-044fff text-c">智能财税Saas系统智能代账更轻松高效</h6>
        <p class="color-666 font-12 text-c">提交公司信息申请免费体验高效智能代账功能</p>
        <p>
        <el-form ref="form" :model="form" >
          <el-row :gutter="5">
            <el-col :span="9">
              <el-input v-model="form.name" placeholder="请输入公司名称" size="mini"></el-input>
            </el-col>
            <el-col :span="9">
              <el-input v-model="form.telephone" placeholder="请输入手机号码" size="mini"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" size="mini" class="free-btn" @click="onSubmit">免费体验</el-button>
            </el-col>
          </el-row>
        </el-form>
        </p>
        <p class="color-666 font-10 text-c">您提交的信息仅限于申请机巧科技代账版免费体验，您的信息将会被严格保密!</p>
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
  name: 'TopFrom',
  data () {
    return {
      downmenuShow: false,
      navshow: true,
      height: 0,
      timer: null,
      name: '',
      telephone: '',
      showFooterFrom: true,
      footerLeftImg: require('../../assets/image/qi_04.png'),
      mHeight: 180,
      labelPosition: 'right',
      form: {
        name: '',
        telephone: ''
      }
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
    let that = this
    that.screenWidth = document.body.clientWidth
    that.mHeight = that.screenWidth / (674 / 315) - 100
  },
  methods: {
    onSubmit () {
      let self = this
      var name = self.form.name
      var telephone = encodeURIComponent(self.form.telephone)
      if (name.length <= 0) {
        self.$message({
          message: '请输入正确的公司名！',
          type: 'error',
          offset: 250
        })
        return
      }
      if (telephone.length <= 0) {
        self.$message({
          message: '请输入正确的电话或者手机号码！',
          type: 'error',
          offset: 250
        })
        return
      }
      if (telephone.length < 8) {
        self.$message({
          message: '请输入正确的电话或者手机号码！',
          type: 'error',
          offset: 250
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
        'request_data': '机巧手机网站表单',
        'flag': 'F'
      }
      let loadingInstance = Loading.service()
      axios.post(url.PostMarktingForm, postData).then(res => {
        self.$message({
          message: '亲，您已预约成功~我们会尽快和您回电详谈！',
          offset: 250
        })
        loadingInstance.close()
        self.form.name = ''
        self.form.telephone = ''
        console.log(res.data, 'res.data')
      }).catch(err => {
        console.log(err, 'error')
        loadingInstance.close()
        self.$message({
          message: err,
          type: 'error',
          offset: 250
        })
        // error callback
      })
    }
    // submitForm: function (event) {
    //   let self = this

    //   var name = self.name
    //   var telephone = encodeURIComponent(self.telephone)
    //   if (name.length <= 0) {
    //     this.$alert("<div style='font-size:18px;text-align:center'>请输入正确的姓名！</div>", {
    //       dangerouslyUseHTMLString: true,
    //       showConfirmButton: false
    //     })
    //     return
    //   }
    //   if (telephone.length <= 0) {
    //     this.$alert("<div style='font-size:18px;text-align:center'>请输入您的电话！</div>", {
    //       dangerouslyUseHTMLString: true,
    //       showConfirmButton: false
    //     })
    //     return
    //   }
    //   if (telephone.length < 8) {
    //     this.$alert("<div style='font-size:18px;text-align:center'>请输入正确的电话或者手机号码！</div>", {
    //       dangerouslyUseHTMLString: true,
    //       showConfirmButton: false
    //     })
    //     return
    //   }
    //   var date = new Date()
    //   var Y = date.getFullYear()
    //   var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    //   var D = date.getDate() + ' '
    //   var Time = ('COMMON_' + Y + '_' + M + '_' + D).replace(/\s+/g, '')
    //   var hashTime = md5(Time).toUpperCase()
    //   var postData = {
    //     'key': hashTime,
    //     'request_category': '上海代理公司',
    //     'request_name': name,
    //     'request_phone': telephone,
    //     'request_data': '机巧网站底部表单',
    //     'flag': 'F'
    //   }
    //   let loadingInstance = Loading.service()
    //   axios.post(url.PostMarktingForm, postData).then(res => {
    //     this.$alert("<div style='font-size:14px;text-align:center'>亲，您已预约成功~您想知道的注册流程和精准报价,我们会尽快和您回电详谈！</div>", {
    //       dangerouslyUseHTMLString: true,
    //       showConfirmButton: false
    //     })
    //     loadingInstance.close()
    //     console.log(res.data, 'res.data')
    //   }).catch(err => {
    //     console.log(err, 'error')
    //     this.$alert(err)
    //     loadingInstance.close()
    //     // error callback
    //   })
    // },
    // closeFooterfrom () { this.showFooterFrom = false; bus.$emit('mb', 'mb0') },
    // onbaiduline () {
    //   window.open('https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2')
    // }
  }

}
</script>
<style scoped>
.top-from{
  margin-top: 30px;
}
.free-btn{
  background: #044fff;
  border-color: #044fff;
}
</style>
