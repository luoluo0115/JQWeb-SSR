$('#login').click(function () {
  $('#exampleModal').modal('hide')
  $('.loginWrapper').css('display', 'block')
  var self = this
  var protocol = window.location.protocol
  var port = window.location.port
  var host = window.location.host
  var href = window.location.href
  var url = protocol + '//' + host + '/accounthome/login/loginWechatCode.html'
  url = 'http://qjz.jiqiao.tech/accounthome/login/loginWechatCode.html'
  var state = Math.random() * 1000000

  url = encodeURIComponent(url)

  var obj = new WxLogin({
    id: 'login_container',
    appid: 'wx95ec8aeacd265c7e',
    scope: 'snsapi_login',
    redirect_uri: url,        // 回调地址
    state: state,　　　　　　　　　// 参数，可带可不带
    style: 'black',　　　　　　　　　// 样式  提供"black"、"white"可选，默认为黑色文字描述
    href: ''                 // 自定义样式链接，第三方可根据实际需求覆盖默认样式。

  })
  /// 获取请求的参数
  function getUrlKey(name, url) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ''])[1].replace(/\+/g, '%20')) || null
  }
})
$('.cancel-login').click(function () {
  $('.loginWrapper').css('display', 'none')
  $('.registerWrapper').css('display', 'none')
})
// 验证所有表单提交
$('#btnSubmit').click(function (event) {
  var uname = $('#user_login')[0].value
  var pwd = $('#user_password')[0].value
  var rem = $('#customControlAutosizing')[0].checked
  var vercode = '1234'
  console.log(uname, 'uname')
  console.log(pwd, 'pwd')
  console.log(rem, 'rem')
  if (rem == true) {
    console.log('checked == true')
    // 传入账号名，密码，和保存天数3个参数
    setCookie(uname, pwd, 7)
  } else {
    console.log('清空Cookie')
    // 清空Cookie
    clearCookie()
  }
  console.log(1234)
  if (uname.length > 0 && pwd.length > 0) {
    var formData = {}
    formData.uname = uname
    formData.pwd = pwd
    formData.vercode = vercode
    $.ajax({
      type: 'post',
      url: '/Api/OAuthAccount/UserOAuthCheck',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(formData),
      success: function (data) {
        console.log(data, 'data')
        if (data.success == true) {
          var is_follow_official_account = data.is_follow_official_account
          is_follow_official_account = is_follow_official_account == null ? 'N' : is_follow_official_account
          // is_follow_official_account = "Y";

          if (is_follow_official_account == 'Y') {
            qhsession.session.set('qhcustomer', data)
            alert('登入成功')
            location.href = '/view/index.html' // 后台主页\
          }
          else {
            alert('请先关注机巧科技公众号')

            if (currInvertal != 0) {
              window.clearInterval(currInvertal)
            }

            currInvertal = window.setInterval(function () {
              axios.post('/api/OAuthAccount/UserOAuthCheckFollowAccount', { ui: data.ui }).then(function (recData) {
                var aData = recData.data
                if (aData.success == true) {
                  qhsession.session.set('qhcustomer', data)
                  alert('关注成功')
                  location.href = '/view/index.html' // 后台主页\
                }
              })
            }, 2000)
          }
        } else {
          alert(res.msg)
        }
      },
      error: function (xhr, ts, et) {
        alert(res.msg)
      }
    })
  } else {
    layer.msg('请输入用户名，密码。')
    qhsession.session.set('qhcustomer', {})
  }
})
// 设置cookie
function setCookie(c_name, c_pwd, exdays) {
  var exdate = new Date()
  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
  document.cookie = 'userName=' + c_name + ';path=/;expires=' + exdate.toLocaleString()
  document.cookie = 'userPwd=' + c_pwd + ';path=/;expires=' + exdate.toLocaleString()
};
// 获取cookie
function getCookie() {
  if (document.cookie.length > 0) {
    var arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=') // 再次切割
      // 判断查找相对应的值
      if (arr2[0] == 'userName') {
        this.form.uname = arr2[1] // 保存到保存数据的地方
      } else if (arr2[0] == 'userPwd') {
        this.form.pwd = arr2[1]
      }
    }
    $('#customControlAutosizing')[0].checked = true
  } else {
    $('#customControlAutosizing')[0].checked = false
  }
};
// 删除cookie
function clearCookie() {
  this.setCookie('', '', -1) // 修改2值都为空，天数为负1天就好了
  $('#customControlAutosizing')[0].checked = false
};

// 退出登录
$('#logout').click(function () {
  var outData = {
    uid: qhcustomer.ui
  }
  // 退出登录
  $.ajax({
    type: 'post',
    url: '/Api/OAuthAccount/UserLogout',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(outData),
    success: function (data) {
      console.log(data, 'data')
      if (data.success == true) {
        qhsession.session.set('qhcustomer', [])
        alert('退出成功')
        location.href = '/view/index.html' // 后台主页\
      } else {
        alert(res.msg)
      }
    },
    error: function (xhr, ts, et) {
      alert(res.msg)
    }
  })
})
// 扫码登录
$('#WechartLogin').click(function (event) {
  $('.pwdLogin').css('display', 'none')
  $('.wechartLogin').css('display', 'block')
  var self = this
  var protocol = window.location.protocol
  var port = window.location.port
  var host = window.location.host
  var href = window.location.href
  var url = protocol + '//' + host + '/accounthome/login/loginWechatCode.html'
  url = 'http://qjz.jiqiao.tech/accounthome/login/loginWechatCode.html'
  var state = Math.random() * 1000000

  url = encodeURIComponent(url)

  var obj = new WxLogin({
    id: 'login_container',
    appid: 'wx95ec8aeacd265c7e',
    scope: 'snsapi_login',
    redirect_uri: url,        // 回调地址
    state: state,　　　　　　　　　// 参数，可带可不带
    style: 'black',　　　　　　　　　// 样式  提供"black"、"white"可选，默认为黑色文字描述
    href: ''                 // 自定义样式链接，第三方可根据实际需求覆盖默认样式。

  })
  /// 获取请求的参数
  function getUrlKey(name, url) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ''])[1].replace(/\+/g, '%20')) || null
  }
})
// 密码登录
$('#PwdLogin').click(function (event) {
  $('.pwdLogin').css('display', 'block')
  $('.wechartLogin').css('display', 'none')
})

/*注册 */
var setIntervalID
$('.register').click(function () {
  $('.loginWrapper').css('display', 'none')
  $('#exampleModal').modal('show')

  // 用户有十秒钟的时间看协议，超过十秒钟，“同意”按钮将生效
  // 计时器ID
  setIntervalID = setInterval('ok()', 1000)
})
var Seconds =10
function ok() {
  var getid = $('.agreement')
  if (Seconds <= 0) {
    getid.html('同意')
    getid.disabled = false // 或者写成getid.disabled=""; 启用getid控件。
    // 停止计时器
    clearInterval(setIntervalID)
    getid.removeAttr('disabled')
  }
  else {
    getid.html('请仔细阅读协议还剩下【' + Seconds + '】秒')
  }
  Seconds--
}
$('.agreement').click(function () {
  $('#exampleModal').modal('hide')
  $('.registerWrapper').css('display', 'block')
  var self = this
  var protocol = window.location.protocol
  var port = window.location.port
  var host = window.location.host
  var href = window.location.href
  var url = protocol + '//' + host + '/accounthome/login/loginWechatCode.html'
  url = 'http://qjz.jiqiao.tech/accounthome/login/loginWechatCode.html'
  var state = Math.random() * 1000000

  url = encodeURIComponent(url)

  var obj = new WxLogin({
    id: 'register_container',
    appid: 'wx95ec8aeacd265c7e',
    scope: 'snsapi_login',
    redirect_uri: url,        // 回调地址
    state: state,　　　　　　　　　// 参数，可带可不带
    style: 'black',　　　　　　　　　// 样式  提供"black"、"white"可选，默认为黑色文字描述
    href: ''                 // 自定义样式链接，第三方可根据实际需求覆盖默认样式。

  })
  /// 获取请求的参数
  function getUrlKey(name, url) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ''])[1].replace(/\+/g, '%20')) || null
  }
})
function online() {
  window.open('http://www.jiqiao.tech/view/prodect.html')
}
function onbaiduline() {
  window.open('https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2')
}
