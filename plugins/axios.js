import axios from 'axios';//引入 axios 服务
let options = {};
if (process.server) {
  // 配置基路由
  options.baseURL = 'http://qjz.jiqiao.tech'; // （服务端地址）
}
export default axios.create(options);// 注意这里是直接 export 了一个对象实例，而不是 Vue.use，这个插件不需要注册
