<template>
    <section class="in-tabbar" >
        <el-row >
            <el-col :span="6">
                <router-link tag="a" to="/mhome" class="nav-item" :class="{active:navindex===0}">
                    <div class="grid-content bg-purple text-center">
                        <i class="iconfont iconhome1"></i>
                        <span class="d-block">首页</span>
                    </div>
                 </router-link>
            </el-col>
            <el-col :span="6">
                <router-link tag="a" to="/mproduct"  class="nav-item"  :class="{active:navindex===1}">
                    <div class="grid-content bg-purple text-center">
                        <i class="iconfont iconqiaojizhang64px-011"></i>
                        <span class="d-block">巧记账</span>
                    </div>
                </router-link>
            </el-col>
            <el-col :span="6">
                <router-link tag="a" to="/mcontact"  class="nav-item" :class="{active:navindex===2}">
                    <div class="grid-content bg-purple text-center">
                        <i class="iconfont icondianhua2"></i>
                        <span class="d-block">联系我们</span>
                    </div>
                 </router-link>
            </el-col>
            <el-col :span="6">
                <router-link tag="a" to="/mnews"  class="nav-item" :class="{active:navindex===3}">
                    <div class="grid-content bg-purple text-center">
                        <i class="iconfont iconxinwen"></i>
                        <span class="d-block">新闻资讯</span>
                    </div>
                </router-link>
            </el-col>
        </el-row>
    </section>
</template>
<script>
export default {
  name: 'TabBar',
  data () {
    return {
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
  },
  methods: {

  },
  watch: {}
}
</script>
<style scoped>
.in-tabbar{
    position: fixed;
    bottom: 0px;
    height: 60px;
    border-top: 1px solid #eee;
    width: 100%;
    color: #666666;
    font-size: 12px;
    background: #fff;
    z-index: 99;

}
.in-tabbar .iconfont{
    font-size: 24px;
}
.in-tabbar .nav-item{
   color: #666666;
   text-decoration: none;
}
.in-tabbar .nav-item.active{
    color: #044fff;
}
@media (min-width: 750px) {
  .in-tabbar{
    height: 80px;
    font-size: 14px;

  }
  .in-tabbar .iconfont{
    font-size: 32px;
  }
}
@media (min-width: 1024px) {
  .in-tabbar{
    height: 100px;
    font-size: 16px;

  }
  .in-tabbar .iconfont{
    font-size: 38px;
  }
}
</style>
