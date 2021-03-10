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
    'transition': '2s'
  })
  $('.itemDot').css({
    'transform': 'rotate(' + ((i - 1) * 90) + 'deg)',
    'transition': '1s'
  })
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
