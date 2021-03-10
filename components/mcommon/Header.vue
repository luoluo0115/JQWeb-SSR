<template>
  <div>
    <el-row  class="header-nav">
      <el-col :span="8">
        <i class="iconfont iconfenlei " @click="drawer = true" ></i>
      </el-col>
      <el-col :span="8"><img :src="LogoImg" width="100%" height="100%"></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <div class="header-left">
      <el-drawer
        title="机巧科技"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
        size="75%" custom-class="drawerWrapper">
        <template slot="title" >
          <div class="left-logo">
            <img :src="LogoImg" />
          </div>
        </template>
          <div class="nav-list">
            <a  :class="{active:navindex===0}" @click="gohref('mhome')">
              <span>首页 / <span class="text-en">HOME PAGE</span></span>
            </a>
            <a  :class="{active:navindex===1}" @click="gohref('mproduct')">
              <span>巧记账 / <span class="text-en">QIAO JIZHANG</span></span>
            </a>
            <a  :class="{active:navindex===2}" @click="gohref('mcontact')">
              <span>联系我们 / <span class="text-en">CONTACT US</span></span>
            </a>
            <a  :class="{active:navindex===3}" @click="gohref('mnews')">
              <span>新闻资讯 / <span class="text-en">NEWS</span></span>
            </a>
          </div>
      </el-drawer>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Header',
  data () {
    return {
      LogoImg: require('~/assets/mimage/jq-mlogo_05.png'),
      drawer: false,
      direction: 'ltr',
      slot: '我是头部'
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
  },
  methods: {
    handleClose (done) {
      done()
    },
    cancelForm () {
      console.log(this.drawer)
      this.drawer = false
    },
    gohref (rout) {
      console.log(rout)
      this.$router.push({path: '/' + rout + '/'})
      this.drawer = false
    }
  }
}
</script>
<style scoped>
button:focus {
  outline: 0;
}
.header-nav{
  background: #2d50ff;
  color:#fff;
  padding: 12px;
}
.header-nav .iconfenlei{
  font-size: 20px;
}
.header-left /deep/ .drawerWrapper {
   background: #14205b;
   color: #fff;
}
.header-left /deep/  .left-logo{
  width: 140px;
  height: 40px;
}
.header-left /deep/  .left-logo img{
  width: 140px;
  height: auto;
}
.header-left /deep/ .nav-list a{
  font-size: 16px;
  padding: 0 10px;
  color: #fff;
  display: block;
  border-bottom: 1px solid #fff;
  height: 54px;
  line-height: 54px;
  text-decoration: none;
}
.header-left /deep/ .nav-list a.active{
  background: #24358b;
}
.header-left /deep/ .nav-list a .text-en{
  font-size: 12px;
}
.header-left /deep/ .el-divider--horizontal {
  margin: 12px 0;
}
@media (min-width: 750px) {
  .header-nav{
    background: #2d50ff;
    color:#fff;
    padding: 20px;
  }
  .header-nav .iconfenlei{
    font-size: 40px;
    font-weight: 600;
    margin-left: 20px;
  }
}
@media (min-width: 1024px) {
  .header-nav{
    background: #2d50ff;
    color:#fff;
    padding: 25px;
  }
  .header-nav .iconfenlei{
    font-size: 50px;
    font-weight: 600;
    margin-left: 20px;
  }
}
</style>
