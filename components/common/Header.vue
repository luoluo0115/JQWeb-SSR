<template>
  <div>
    <div class=" navbar navbar-expand-lg bg-dark01  bd-navbar navbar-dark ">
      <div class="container">
         <nuxt-link tag="a" class="navbar-brand mr-3 mr-xl-5" to="/"  aria-label="jiqiao"><img :src="LogoImg" alt='代理记账'/></nuxt-link>
          <ul class="navbar-nav ">
            <nuxt-link tag="li" to="/"  class="nav-item" :class="{active:navindex===0}">
              <a class="nav-link pt-xl-4 pb-xl-4 pl-xl-4 pr-xl-4 pt-2 pb-2 pl-3 pr-3" >首页</a>
            </nuxt-link>
              <nuxt-link tag="li" to="/product"  class="nav-item" :class="{active:navindex===1}">
              <a class="nav-link pt-xl-4 pb-xl-4 pl-xl-4 pr-xl-4 pt-2 pb-2 pl-3 pr-3" >代理记账</a>
            </nuxt-link>
              <nuxt-link tag="li" to="/about"  class="nav-item" :class="{active:navindex===2}">
              <a class="nav-link pt-xl-4 pb-xl-4 pl-xl-4 pr-xl-4 pt-2 pb-2 pl-3 pr-3" >关于机巧</a>
            </nuxt-link>
              <nuxt-link tag="li" to="/problem"  class="nav-item" :class="{active:navindex===3}">
              <a class="nav-link pt-xl-4 pb-xl-4 pl-xl-4 pr-xl-4 pt-2 pb-2 pl-3 pr-3" >常见问题</a>
            </nuxt-link>
              <nuxt-link tag="li" to="/news"  class="nav-item" :class="{active:navindex===4}">
              <a class="nav-link pt-xl-4 pb-xl-4 pl-xl-4 pr-xl-4 pt-2 pb-2 pl-3 pr-3" >新闻资讯</a>
            </nuxt-link>
          </ul>
          <ul class="navbar-nav nav-in text-white  pl-3">
            <li class="nav-item pl-xl-3 pr-xl-2 pl-2 pr-1 login-center" v-if="logincenter">
                <a class="pl-1 text-fff" id="login" @click="login()"> 登录 </a><span class=" pl-1 pr-1">| </span> <a  v-b-modal.modal-login class="register text-fff" @click="register()"> 注册</a>
            </li>
            <li class="nav-item pl-xl-3 pr-xl-2 pl-2 pr-1 user-center" v-else >
                <span class="text">{{userNm}}</span><span class=" pl-1 pr-1">|</span><a class="d-inline-block text-fff" id="logout" @click="logout()">退出</a>
            </li>
            <li class="nav-item">
                <a href="http://qjz.jiqiao.tech" class="badge badge-primary" target="_blank">票据上传</a>
            </li>

          </ul>
            
      </div>
    </div>
    <!-- <div class="session-wrapper loginWrapper" v-if="loginWrapper">
        <div class="ui container">
            <div class="session__body">
                <div class="session-sidebox">
                    <div class="session-sidebox__container">
                        <div class="session-sidebox__header">
                            <div class="session-sidebox__logo">
                                <img  src="~/assets/image/login/login-logo.png" alt='公司注册代办'>
                            </div>

                        </div>
                        <div class="session-sidebox__content">
                            <div class="session-sidebox-content__container">
                                <div class="session-sidebox-comments__header">
                                    <span class="session-sidebox-comments__title">黄侃</span>
                                    <span class="session-sidebox-comments__position">机巧科技CEO</span>
                                </div>
                                <div class="session-sidebox-comments__content">
                                    致力于真正的财税智能，让天下没有难做的账，通过全流程化，全自动化，全智能化的机制节约做账报税成本，做到真正的让利于中小企业。
                                </div>
                            </div>
                        </div>
                        <div class="session-sidebox__footer">
                            <img src="~/assets/image/login/login-left-bottom.png" />
                        </div>
                    </div>

                </div>
                <div class="session-form">
                    <span class="iconfont iconguanbi cancel-login" @click="cancelLogin()"></span>
                    <div class="session-form__container is-login " v-if="pwdLogin">
                        <div class="top-wechart">
                            <div class="wechart-notice">扫码登录</div>
                            <span class="iconfont iconerweima" id="WechartLogin" @click="WechartLogin()"></span>
                        </div>
                        <div class="session-form__header">
                            <h2 class="session-form__title">
                                <span>用户登录</span>
                            </h2>

                        </div>
                        <div class="session__flash-error">
                            <div class="ui message error flash_error flash_error_box"></div>
                        </div>
                        <div class="layui-form" id="new_user">
                            <div class="session-login__body">
                              <el-form ref="form" :model="form" label-width="80px">
                                  <el-form-item label-width="0">
                                    <el-input v-model="form.username" placeholder="手机号码/用户名"></el-input>
                                  </el-form-item>
                                  <el-form-item label-width="0">
                                     <el-input v-model="form.password" placeholder="请输入登陆密码" type='password'></el-input>
                                  </el-form-item>
                                  <el-form-item label-width="0">
                                    <el-checkbox-group v-model="form.customControlAutosizing">
                                      <el-checkbox label="记住我" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                  </el-form-item>
                                  <el-form-item  label-width="0">
                                     <el-button type="primary" @click="onSubmit" size="medium">登录</el-button>
                                  </el-form-item>
                                  <el-form-item class="text-right">
                                    <a class="forget-password register" >免费注册</a>
                                    <a class="forget-password" href="#" rel='nofollow'>忘记密码</a>
                                  </el-form-item>
                                </el-form>
                            </div>
                        </div>

                    </div>
                    <div class="session-form__container is-login " v-if="wechartLogin">
                        <div class="top-wechart">
                            <div class="wechart-notice">密码登录</div>
                            <span class="iconfont iconshiliangzhinengduixiang2" id='PwdLogin' @click="PwdLogin()"></span>
                        </div>
                        <div class="layui-form">
                            <div class="session-login__body">
                              <div class="wechart_container">
                                <p id="wxCode"/>
                                <wxlogin
                                  appid="wx95ec8aeacd265c7e"
                                  scope="snsapi_login"
                                  theme="black"
                                  :redirect_uri="redirect_uri"
                                  :state="state"
                                  rel="external nofollow"
                                  >
                                </wxlogin>
                              </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div> -->
    <!-- <b-modal id="modal-login" v-model="modalShow" title="机巧用户注册协议" hide-footer size="xl">
      <p class="title">一、接受条款</p>
        <p>1.1以下所述条款和条件构成您与上海机巧科技有限公司（以下简称“机巧”或“平台”）就使用本平台服务所达成的协议。当您完成注册并点击本协议下方“我同意”键时，即表示您已同意受机巧平台网站服务协议约束。如果您不同意接受全部的条款和条件，请您立即停止注册或主动停止使用本平台的服务。</p>
        <p>1.2在本协议有效期内，机巧平台有权随时修改本协议条款和条件，并只需公示于其网站，而无需征得您的事先同意。修改后的条款和条件应于公示后即时生效。在机巧平台修改服务条款和条件后，如您继续使用服务将被视作您已接受了修改后的条款和条件。</p>
        <p>1.3除非得到机巧平台的书面授权，任何人将不得修改本协议。</p>
        <p>1.4机巧平台提供的网络服务的所有权和最终解释权归机巧所有。本协议中，被许可使用机巧平台服务的用户（包括自然人或企业）均简称为“用户”。</p>
        <p class="title">二、服务内容</p>
        <p>机巧平台向用户提供的服务包括：代理记账；财务咨询、信息咨询服务（不含许可类信息咨询服务）；社会经济咨询服务；工商登记代理代办；商务代理代办服务；会议及展览服务。</p>
        <p class="title">三、用户权利义务</p>
        <p>3.1用户有权按照机巧平台的规则，使用机巧平台。</p>
        <p>3.2用户有义务在使用过程中，遵循以下原则：</p>
        <p>3.2.1其遵守所有与网络服务、机巧平台服务有关的网络协议、其他协议和程序。</p>
        <p>3.2.2不得为任何非法目的而使用机巧服务。</p>
        <p>3.2.3不得利用机巧服务系统进行任何可能对互联网和移动互联网正常运转造成不利影响的行为。</p>
        <p>3.2.4不得利用机巧平台发布或传播任何虚假的、骚扰的、恐吓的、种族歧视的、情色的或其他任何非法信息资料。</p>
        <p>3.2.5不得以任何方式侵犯他人依法享有的知识产权、名誉权或其他任何合法权益。</p>
        <p>3.2.6不得利用机巧服务进行任何不利于机巧平台的行为。</p>
        <p>3.3用户有义务保证其提供的所有信息（包括但不限于注册信息、向平台上传的资料等）真实、准确、完整，无重大遗漏或误导。如因用户提供的信息不准确，不真实、不完整，或有虚假、误导、违反法律法规禁止性要求等情形的，机巧平台有终止用户使用机巧平台各项服务的权利，用户有义务对此负责，并承担赔偿责任。</p>
        <p>3.4用户必须为有完全民事行为能的自然人、法人或其他组织。</p>
        <p class="title">四、机巧平台权利义务</p>
        <p>4.1机巧平台为所提供服务提供技术支持。</p>
        <p>4.2如用户有以下行为之一的，机巧平台有权立即停止对用户提供技术支持，并保存有关记录，必要时可依据法律法规及相关规定向国家有关机关报告，有权删除含有该内容的地址、目录或关闭服务器。用户应承担全部法律责任，并赔偿机巧平台由此受到的损失，包括合理的追索费用：</p>
        <p>4.2.1用户提供的信息或产品侵害任何第三方知识产权、财产权等合法权益，或可能对第三方造成不利影响或侵害；</p>
        <p>4.2.2用户利用机巧平台提供之网络平台进行任何犯罪活动，或宣传散播法律法规禁止散播的信息，或进行一切损害机巧平台利益的活动；</p>
        <p>4.2.3用户有违反本协议任何条款的行为，经机巧平台警告后仍未更正的；</p>
        <p>4.2.4用户的行为干扰机巧平台的服务；</p>
        <p>4.2.5其他违反国家政策、法律法规及机巧平台交易规则的行为。</p>
        <p>4.3用户同意机巧平台有权依据本协议及机巧平台服务规则对用户的不合法、不合规行为采取行动，包括但不限于中断其帐号、删除地址、删除目录或关闭服务器等。</p>
        <p>4.4如因用户违反协议，而造成机巧损失，机巧有权追究责任，要求赔偿，以消除或减轻不良影响和损失。</p>
        <p class="title">五、免责声明</p>
        <p>5.1机巧尽力维护机巧平台的稳定，但不就电讯系统或互联网的中断或无法运作、技术故障、计算机错误或病毒、信息损坏或丢失或由此而产生的其他任何性质的破坏而向用户或任何第三方承担赔偿责任。</p>
        <p>5.2用户明确同意使用机巧平台服务的风险由用户自行承担。机巧平台不保证其提供的服务一定能满足用户的要求，用户理解并自行决定是否通过网络下载或通过机巧平台获取相关信息资料并由用户承担系统受损、资料丢失以及其它任何风险。</p>
        <p>5.3对于因不可抗力或其他机巧不能控制的原因造成服务中断或其他缺陷，机巧不承担责任，但机巧平台应尽力减少因此给用户造成的损失和影响。</p>
        <p class="title">六、隐私政策与安全</p>
        <p>6.1尊重用户个人隐私是机巧平台的一项基本政策，机巧平台将尽力维护用户隐私。除非用户授权，机巧平台不会公开、修改或透露用户的注册资料及投资信息，但以下情况除外：</p>
        <p>6.1.1为符合国家法律法规强制性规定，或应有权机关要求而提供；</p>
        <p>6.1.2为维护机巧平台的知识产权和其他重要权利而提供；</p>
        <p>6.1.3在紧急情况下为维护用户个人和社会公众的账户及相关信息安全而提供；</p>
        <p>6.1.4用户侵害本协议下机巧的合法权益，而为维护机巧权益所必须；</p>
        <p>6.1.5根据本条款相关规定或者机巧平台认为必要的其他情况下。</p>
        <p>6.2用户在机巧平台注册成功后，即得到一个密码和帐号。如果因用户未保管好自己的帐号和密码而对用户、机巧平台或第三方造成损害，用户应承担全部责任，即用户应对任何人使用其帐户进行的一切操作行为承担全部责任。在用户发现其账户或密码泄露或被非法使用时，应立即通知机巧。</p>
        <p class="title">七、知识产权</p>
        <p>7.1机巧平台服务涉及到的产品的所有权以及相关软件的知识产权归机巧    所有。</p>
        <p>7.2机巧提供的网络服务中包含的任何文本、图片、音频、视频资料均受著作权、商标和/或其他财产所有权法律的保护。</p>
        <p>7.3用户应当保证其发布的信息不侵犯任何第三方知识产权及其他合法权利，否则应赔偿由此给第三方及机巧平台造成的损失。</p>
        <p class="title">八、不可抗力</p>
        <p>如果由于黑客攻击或政府管制或网络通讯瘫痪等不能预见且不能控制的事件，导致机巧平台无法正常运行，双方均确认此属不可抗力，互不承担违约责任。</p>
        <p class="title">九、法律及争议解决</p>
        <p>9.1本协议签署、效力、解释和执行以及争议之解决均应适用中华人民共和国法律。</p>
        <p>9.2因本协议引起之双方争议，应该通过友好协商解决；协商不成的，任一方均可向机巧所在地有管辖权的人民法院起诉。</p>
        <p class="title">十、期限</p>
        <p>本协议的期限自用户点击同意之日起算，至用户注销账号之日起自动终止。</p>
        <p class="title">十一、协议的转让</p>
        <p>除非取得机巧平台的事先书面同意，用户不得将其在本协议项下的权利与义务转让给任何第三方。</p>
        <p class="title">十二、其他</p>
        <p>12.1如本协议的任何条款被视作无效或无法执行，则上述条款可被分离，其余部份则仍具有法律效力。</p>
        <p>12.2本协议的标题仅为方便阅读所设，非对条款的定义、限制、解释或描述其范围或界限。</p>
        <p>12.3在用户过失或违约时，机巧平台放弃本协议规定的权利的，不视为机巧平台对用户的其他或以后同类之过失或违约行为放弃追索权。</p>
        <div class="agreement">
          <b-button class="mt-3 button-login agree-btn" variant="primary" block  v-if="showTime" @click="agreeBtn()">同意</b-button>
          <b-button class="mt-3 button-login" block disabled v-else>{{agreeText}}</b-button>
        </div>
    </b-modal> -->
    <!-- <div class="session-wrapper registerWrapper" v-if="registerWrapper">
        <div class="ui container">
            <div class="session__body">
                <div class="session-sidebox">
                    <div class="session-sidebox__container">
                        <div class="session-sidebox__header">
                            <div class="session-sidebox__logo">
                                <img alt="logo" src="~/assets/image/login/login-logo.png">
                            </div>

                        </div>
                        <div class="session-sidebox__content">
                            <div class="session-sidebox-content__container">
                                <div class="session-sidebox-comments__header">
                                    <span class="session-sidebox-comments__title">黄侃</span>
                                    <span class="session-sidebox-comments__position">机巧科技CEO</span>
                                </div>
                                <div class="session-sidebox-comments__content">
                                    致力于真正的财税智能，让天下没有难做的账，通过全流程化，全自动化，全智能化的机制节约做账报税成本，做到真正的让利于中小企业。
                                </div>
                            </div>
                        </div>
                        <div class="session-sidebox__footer">
                            <img src="~/assets/image/login/login-left-bottom.png" />
                        </div>
                    </div>

                </div>
                <div class="session-form">
                    <span class="iconfont iconguanbi cancel-login" @click="cancelLogin()"></span>
                    <div class="session-form__container is-login">
                        <div class="layui-form">
                            <h2 class="session-form__title">
                                <span>扫码关注公众号注册</span>
                            </h2>
                            <div class="session-login__body">
                                <div id="register_container" class="wechart_container">
                                  <wxlogin
                                    :appid="appid"
                                    :scope="'snsapi_login'"
                                    :theme="'black'"
                                    :redirect_uri="redirect_uri"
                                    :state="state"
                                    rel="external nofollow"
                                    >
                                  </wxlogin>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      loginWrapper: true,
      downmenuShow: false,
      navshow: true,
      height: 0,
      timer: null,
      bast64css: '',
      appid: 'wx95ec8aeacd265c7e', // 后端提供
      state: '',
      redirect_uri: '',
      pwdLogin: false,
      wechartLogin: true,
      form: {
        username: '',
        password: '',
        customControlAutosizing: ''
      },
      setIntervalID: '',
      Seconds: '10',
      agreeText: '同意用户协议',
      disabled: 'disabled',
      times: 10,
      showTime: false,
      registerWrapper: false,
      modalShow: false,
      logincenter: true,
      userNm: '',
      LogoImg: require('~/assets/image/jq-logo.png'),
      navuserImg: require('~/assets/image/icon-nav-user.png'),
      navminishow: false
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
    let self = this
    self.redirecturi = encodeURIComponent('https://qjz.jiqiao.tech/accounthome/login/loginWechatCode.html')

    // var state = Math.ceil(Math.random() * 1000000)
    // self.state = state
  //self.getWxcode()
   
  },
  methods: {
    login () {
      let self = this
      self.loginWrapper = true
      self.redirecturi = encodeURIComponent('https://qjz.jiqiao.tech/accounthome/login/loginWechatCode.html')
     // setTimeout(self.getWxcode(),1000)
      //self.getWxcode()
    },
    cancelLogin () {
      let self = this
      self.loginWrapper = false
    },
    getWxcode: function(){
      let self=this
        // eslint-disable-next-line
      var redirecturi = encodeURIComponent('https://qjz.jiqiao.tech/accounthome/login/loginWechatCode.html')
      console.log(redirecturi, ' self.redirect_uri')

      // var WxLogin = new WxLogin({
      //     self_redirect: true,
      //     id: 'wxCode', // 二维码地址
      //     appid: 'wx95ec8aeacd265c7e',
      //     scope: 'snsapi_login',
      //     redirect_uri: redirecturi,
      //     state: '',
      //     style: 'black',
      //     href: ''
      //   })
    },
  }
  
 

}
</script>
<style scoped>
 .bd-navbar{
    width: 100%;
  }
@media (max-width: 1000px){
  .bd-navbar{
    width: 998px;
  }
  .container, .container-sm, .container-md {
    width: 1140px;
    max-width: 820px;
  }
  .navbar-nav {
    display: flex;
    flex-direction:inherit;
  }
  
}
@media (max-width: 768px){
  .bd-navbar{
    width: 998px;
  }
  .container, .container-sm, .container-md {
      max-width: 1140px;
  }
  .navbar-nav {
    display: flex;
    flex-direction:inherit;
  }
}
@media (max-width: 568px){
  .bd-navbar{
    width: 998px;
  }
  .container, .container-sm, .container-md {
      max-width: 1140px;
  }
  .navbar-nav {
    display: flex;
    flex-direction:inherit;
  }
}




.agreement{
  width: 100%;
  margin: 0 auto;
  height: 60px;
}
.button-login{
  position: fixed;
  bottom: 6%;
  width: auto;
  margin-left: -94px;
  left: 50%;
}
.button-login.agree-btn{
   margin-left: -29px;
}
/*header*/

.bg-dark01 {
    background:#070706
}
.navbar {
    padding: 0;
}
.navbar-brand {
    padding-top:0;
    padding-bottom:0;
}
.bd-navbar {
    border-bottom:3px solid #1e6ce8
}
.navbar-dark .navbar-nav .nav-link {
    color: #fff;
}
.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
    background:#044fff
}
.nav-in {
    line-height:40px
}
.clear::after {
  content: "";
  display: block;
  clear: both;
}
.fff {
  color: #fff !important;
  pointer-events: none;
}
header {
  position: fixed;
  background: #043985;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  color: rgba(255, 255, 255, 0.5);
}
.modal-header {
    background: #fff!important;
    color: #333!important;
}
.navbar-brand {
  display: inline-block;
  /* padding: 16px 14px; */
}
.header .navbar-brand {
  float: left;
  background-color: #fa541c;
}
.header .navbar-brand img {
  height: 32px;
  width: 152px;
  vertical-align: middle;
  border-style: none;
}
.menu {
  float: right;
}
.menu li {
  float: left;
  padding: 24px 17px;
  font-size: 15px;
  cursor: pointer;
}
.nav-down ul li {
  margin-left: 50%;
  transform: translateX(-25%);
}
.more {
  display: none;
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  border: 1px solid #cccccc;
  padding: 10px;
}
.nav-down {
  z-index: 100;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: #043985;
  color: rgba(255, 255, 255, 0.5);
}
.downmenu li {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
header li:hover,
.nav-down li:hover {
  color: rgba(255, 255, 255, 0.75);
}
@media screen and (max-width: 767px) {
  .menu,
  .language {
    display: none;
  }
  .more {
    display: block;
  }
}
@media screen and (min-width: 767px) {
  .nav-down {
    display: none;
  }
}
@media screen and (max-width: 496px) {
  .header .navbar-brand {
    float: left;
    background-color: #043985;
  }
  .downmenu {
    border-top: 1px solid #fff;
    height: 181px;
  }
  .nav-down {
    overflow: hidden;
    animation: mymove 0.5s;
  }
  @keyframes mymove {
    from {
      height: 0px;
    }
    to {
      height: 181px;
    }
  }
}
.el-button{
  width: 100%;
  padding: 16px 20px;
  background-color: #007bff;
  border-color: #007bff;
}
.el-input__inner{
  height: 52px;
  line-height: 52px;
}
.el-form-item:nth-child(2){
  margin-bottom: 5px;
}
.el-form-item:nth-child(3){
  margin-bottom: 0px;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    color: #007bff;
}
</style>
