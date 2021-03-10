let url = {
  swiperLists: '/swiperList',
  productLists: '/productList',
  partnerList: '/partnerList',
  expertList: '/expertList',
  contactList: '/contactList',
  producDetailtList: '/producDetailtList',
  PostMarktingForm: '/PostMarktingForm',
  QueryWmArticleList: '/QueryWmArticleList',
  QueryWmArticleByID: '/QueryWmArticleByID'
};

// 开发环境和生产环境的切换
let host = 'https://qjz.jiqiao.tech/api/JQCommonAccount';// 正式
// let host = 'http://testqjz.jiqiao.tech/api/JQCommonAccount'// 测试

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];
  }
}

export default url;
