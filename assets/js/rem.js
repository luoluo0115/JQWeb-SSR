// 基准大小
const baseSize = 32
// 设置 rem 函数
function setRem () {
  var deviceWidth = document.documentElement.clientWidth
  console.log(deviceWidth, 'deviceWidth')
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。（简单的说 750 是设计稿的宽度）
  if (deviceWidth <= 750) {
    const scale = document.documentElement.clientWidth / 750
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  }
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
// eslint-disable-next-line eol-last
}