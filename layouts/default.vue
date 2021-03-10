<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
<script>
  import VHeader from '~/components/common/Header'
  import {seo} from '~/utils/assist'

  export default {
    components: {
      VHeader,
    },
    data (){
      return {
        headFixed:false,
        maxClientWidth: 980
      }
    },
    mounted (){
      //监听滚动条，固定头部
      //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
      seo();
      //统计脚本
      var _hmt = _hmt || [];
      // (function() {
      //   var hm = document.createElement("script");
      //   hm.src = "https://hm.baidu.com/hm.js?3e80cd95dc92153bd633c7376355e892";
      //   var s = document.getElementsByTagName("script")[0]; 
      //   s.parentNode.insertBefore(hm, s);
      // })();    
    },
    methods: {
      
    },
    destroyed (){
    }
  }
</script>

