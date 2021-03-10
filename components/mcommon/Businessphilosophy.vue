<template>
   <section class="price-wrapper container mb">
        <div class="title">
             <h6 class="text-c">机巧理念</h6>
            <p class="font-12 text-c  color-044fff">Business Philosophy</p>
        </div>
        <div class="mb">
            <el-image :src="ideaImg" alt='财务代理' fit="fill"></el-image>
        </div>
        <ul class="font-12">
          <li class="text-333">我们无意改变代理记账行业，我们只希望切实解决客户的需求.</li>
          <li class="text-333">简单的需求就要有简单实惠的解决方案,</li>
          <li class="text-333">机巧科技通过最尖端的信息技术,</li>
          <li class="text-333">为客户提供一个最便宜的解决基本需求的SaaS工具.</li>
          <li class="text-333">倾其蕴藏的可能性，机巧科技也将不断探索，确保技术和服务</li>
          <li class="text-333">模式持续进步更新,为客户提供更好更合适的产品.</li>
        </ul>
    </section>
</template>
<script>

export default {
  name: 'Businessphilosophy',
  data () {
    return {
      ideaImg: require('~/assets/mimage/img-idea-01.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
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
