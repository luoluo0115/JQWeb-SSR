<template>
  <section class="price-wrapper">
    <div class="container ">
        <div class="title  text-center">
            <h6 class="text-c">价格低</h6>
            <p class="font-12 text-c  color-044fff">Low Price</p>
        </div>
        <el-row class="table-wrapper">
            <el-col :span="20" :offset="2">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                    :show-header="false"
                    >
                    <el-table-column align="center"
                    prop="priceInfo">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <p class="text-666 font-12">机巧科技根据用户每月实际的凭证数量浮动式收费，当月无票据时最低50元/月；80%的小微企业平均每月代理记账费用不超过100元。</p>
    </div>
</section>
</template>
<script>

export default {
  name: 'Lowprice',
  data () {
    return {
      tableData: [{
        priceInfo: '机巧智能记账'
      }, {
        priceInfo: '按当月凭证数浮动式收费'
      }, {
        priceInfo: '纳税申报基础费用仅50元/月'
      }, {
        priceInfo: '大部分客户平均每月低于100元'
      }, {
        priceInfo: '≥50元/月'
      }]
    }
  },
  mounted () {
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 0 || rowIndex === 2 || rowIndex === 4) {
        return 'success-row'
      } else if (rowIndex === 1 || rowIndex === 3 || rowIndex === 5) {
        return 'warning-row'
      }
      return ''
    }
  }
}
</script>
<style>
.el-table .warning-row {
    background: #e7f0fd;
    color: #044fff
}

.el-table .success-row {
    background: #044fff;
    color: #fff;
}
.table-wrapper{
    margin-bottom: 1rem ;
}
</style>
