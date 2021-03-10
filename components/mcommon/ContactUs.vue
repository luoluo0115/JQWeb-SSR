<template>
  <section class="tech-wrapper container" >
      <div class="title  text-center">
          <h6 class="text-c">联系我们</h6>
          <p class="font-12 text-c  color-044fff">Contact Us</p>
      </div>
      <div id="map" style="width:100%;height:200px;"></div>
      <el-row :gutter="20">
        <el-col :span="16">
          <p class="font-18  color-044fff mt">
            <span class="font-14 d-block color-333">服务热线</span>
            021-5450-5858
            <span class="font-12 d-block color-333"><i class="iconfont  iconqunfengyouxiang text-1e6ce8"></i> hk@51dljz.com</span>
            <span class="font-12 d-block color-333"><i class="iconfont  iconqunfengfabushangxian text-1e6ce8"></i> www.jiqiao.tech</span>
            <span class="font-12 d-block color-333"><i class="iconfont  iconqunfengxiangxidizhi text-1e6ce8"></i> 上海市徐汇区建国西路285号15F</span>
          </p>
        </el-col>
        <el-col :span="8">
          <div class="text-center mt" >
            <el-image :src="weixingJQLOGOImg" class="text-center"></el-image>
            <span class="d-block font-12 text-center">扫码关注机巧科技</span>
          </div>
        </el-col>
      </el-row>
  </section>
</template>
<script>
export default {
  name: 'Technology',
  data () {
    return {
      list: [],
      techImg: require('~/assets/image/index-tech-right-bg.png'),
      weixingJQLOGOImg: require('~/assets/image/weixingJQLOGO.png'),
      wechartImg: require('~/assets/image/img-jq-wechart.jpg'),
      longitude: '',
      latitude: ''
    }
  },
  methods: {
    init () {
      var map = new BMapGL.Map('map') // 创建地图实例
      map.centerAndZoom(new BMapGL.Point(121.465344, 31.211385), 17)
      map.enableScrollWheelZoom(true)
      // 创建点标记
      var marker = new BMapGL.Marker(new BMapGL.Point(121.465344, 31.211385))
      var point = new BMapGL.Point(121.465344, 31.211385)
      // 在地图上添加点标记
      map.addOverlay(marker)
      // 创建信息窗口
      var opts = {
        width: 150,
        height: 60,
        title: '上海机巧科技'
      }
      var infoWindow = new BMapGL.InfoWindow('地址：上海市徐汇区建国西路285号15F', opts)
      map.openInfoWindow(infoWindow, point) // 开启信息窗口
      // 点标记添加点击事件
      marker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point) // 开启信息窗口
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped>
.tech-wrapper {
  margin-top:4rem ;
}
.tech-main{
  padding-top: 1rem;
}
ul{
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul li{
  margin-bottom: 0.2rem;
}

</style>
