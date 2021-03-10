const webpack = require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '企业代理记账-上海机巧科技有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '注册公司_上海注册公司_注册上海公司_财务代理_上海代理记账_财税筹划' },
      { name: 'description', content: '机巧科技专注为企业提供智能财税SaaS解决方案及商脉资源拓展对接服务。提供：财税筹划,会计代理记账,公司注册代办服务,为初创小微企业提供了便捷的拍照式记账报税新体验，为中小企业解决财务方面的难题和痛点,同时也降低用人成本.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global Css
  */
 css: [
    { src: '~assets/css/style.css' },
    { src: '~assets/css/iconfont.css' },
    { src: '~assets/css/login.css' },
    { src: 'swiper/css/swiper.css' },
    {src: 'bootstrap/dist/css/bootstrap.css'},
    {src: 'bootstrap-vue/dist/bootstrap-vue.css'}
  ],
  plugins: [
    { src: '~/plugins/vue-swiper.js', ssr: false },
    { src: '~/plugins/bootstrap.js'},
    { src: '~/plugins/vue-bootstrap.js', ssr: false},
    { src: '~/plugins/wxlogin.js', ssr: false}
  ],
  
  /*
  ** Build configuration
  */
  build: {
    /**
     * 将查看源代码中的css采用外部引入方式
     */
    extractCSS: {
      allChunks: true
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ['jquery', 'bootstrap','axios','wxlogin'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  //设置缓存
  cache: true,
};

