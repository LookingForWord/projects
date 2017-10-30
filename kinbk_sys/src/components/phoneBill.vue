<template>
  <div class="phone-bill-message" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total"
                    :cgxpagesizeHandle="cgxpagesizeHandle" :pageUrl="pageUrl"
                    :currentPage='currentPage' :pageSize='pageSize'>
      <el-table-column
        prop="mobile"
        label="手机号码"
        width='8%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="billmonth"
        label="帐单月"
        width='5%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="billstartdate"
        label="账单起始日"
        width='8%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="billenddate"
        label="账单结束日"
        width='8%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="relatedmobiles"
        label="关联的手机号"
        width='8%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="point"
        label="当前积分"
        width='5%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="lastpoint"
        label="上期积分"
        width='5%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="费用(单位分)">
        <el-table-column
          prop="basefee"
          label="固定"
          width='3%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="extraservicefee"
          label="增值"
          width='3%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="voicefee"
          label="语音"
          width='3%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="smsfee"
          label="短彩信"
          width='3%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="webfee"
          label="流量"
          width='3%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="extrafee"
          label="其它"
          width='3%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="totalfee"
          label="总费用"
          width='5%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="discount"
          label="优惠费"
          width='5%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="extradiscount"
          label="其它优惠"
          width='5%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="actualfee"
          label="个人实际"
          width='5%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="paidfee"
          label="已支付"
          width='5%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="unpaidfee"
          label="未支付"
          width='5%'
          show-overflow-tooltip
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="notes"
        label="备注"
        width='5%'
        show-overflow-tooltip
      >
      </el-table-column>
    </define-content>
  </div>
</template>

<script>
  import defineContent from './content';
  export default{
    name: "phoneBillMsg",
    data(){
      return {
        tableData:[],
        total:0,
        pageUrl:"",
        currentPage:1,
        pageSize:20,
        loading: true
      }
    },
    mounted(){
      let memberId = this.$router.currentRoute.params.id;
      if (this.$constant.PHONEBILL && memberId !== undefined) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.PHONEBILL+"?id="+memberId;
        this.$http({
          url: this.$constant.PHONEBILL,
          vm: me,
          method: "GET",
          params: {id:memberId,page: this.currentPage, rows: this.pageSize}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                if (data.data[0].totals !== undefined) {
                  me.total = Number(data.data[0].totals);
                }
                let arr = [];
                for (let i = 0; i < data.data.length; i++) {
                  let dt = data.data[i];
                  arr.push({
                    mobile:me.$handleData(dt.mobile),
                    billmonth:me.$handleData(dt.billmonth),
                    billstartdate:me.$handleData(dt.billstartdate),
                    billenddate:me.$handleData(dt.billenddate),
                    relatedmobiles:me.$handleData(dt.relatedmobiles),
                    point:me.$handleData(dt.point),
                    lastpoint:me.$handleData(dt.lastpoint),
                    basefee:me.$handleData(dt.basefee),
                    extraservicefee:me.$handleData(dt.extraservicefee),
                    voicefee:me.$handleData(dt.voicefee),
                    smsfee:me.$handleData(dt.smsfee),
                    webfee:me.$handleData(dt.webfee),
                    extrafee:me.$handleData(dt.extrafee),
                    totalfee:me.$handleData(dt.totalfee),
                    discount:me.$handleData(dt.discount),
                    extradiscount:me.$handleData(dt.extradiscount),
                    actualfee:me.$handleData(dt.actualfee),
                    paidfee:me.$handleData(dt.paidfee),
                    unpaidfee:me.$handleData(dt.unpaidfee),
                    notes:me.$handleData(dt.notes),
                  });
                }
                me.tableData = arr;
              } else {
                me.tableData = [];
              }
            } else {
              me.tableData = [];
            }
            me.loading = false;
          } else {
            me.tableData = [];
            me.total = 0;
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
    },
    methods:{
      cgxpageHandle(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data[0].totals !== undefined) {
                me.total = Number(data.data[0].totals);
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  mobile:me.$handleData(dt.mobile),
                  billmonth:me.$handleData(dt.billmonth),
                  billstartdate:me.$handleData(dt.billstartdate),
                  billenddate:me.$handleData(dt.billenddate),
                  relatedmobiles:me.$handleData(dt.relatedmobiles),
                  point:me.$handleData(dt.point),
                  lastpoint:me.$handleData(dt.lastpoint),
                  basefee:me.$handleData(dt.basefee),
                  extraservicefee:me.$handleData(dt.extraservicefee),
                  voicefee:me.$handleData(dt.voicefee),
                  smsfee:me.$handleData(dt.smsfee),
                  webfee:me.$handleData(dt.webfee),
                  extrafee:me.$handleData(dt.extrafee),
                  totalfee:me.$handleData(dt.totalfee),
                  discount:me.$handleData(dt.discount),
                  extradiscount:me.$handleData(dt.extradiscount),
                  actualfee:me.$handleData(dt.actualfee),
                  paidfee:me.$handleData(dt.paidfee),
                  unpaidfee:me.$handleData(dt.unpaidfee),
                  notes:me.$handleData(dt.notes),
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
          me.loading = false;
          me.currentPage = data.currentPage;
        } else {
          me.tableData = [];
          me.total = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
      cgxpagesizeHandle(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data[0].totals !== undefined) {
                me.total = Number(data.data[0].totals);
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  mobile:me.$handleData(dt.mobile),
                  billmonth:me.$handleData(dt.billmonth),
                  billstartdate:me.$handleData(dt.billstartdate),
                  billenddate:me.$handleData(dt.billenddate),
                  relatedmobiles:me.$handleData(dt.relatedmobiles),
                  point:me.$handleData(dt.point),
                  lastpoint:me.$handleData(dt.lastpoint),
                  basefee:me.$handleData(dt.basefee),
                  extraservicefee:me.$handleData(dt.extraservicefee),
                  voicefee:me.$handleData(dt.voicefee),
                  smsfee:me.$handleData(dt.smsfee),
                  webfee:me.$handleData(dt.webfee),
                  extrafee:me.$handleData(dt.extrafee),
                  totalfee:me.$handleData(dt.totalfee),
                  discount:me.$handleData(dt.discount),
                  extradiscount:me.$handleData(dt.extradiscount),
                  actualfee:me.$handleData(dt.actualfee),
                  paidfee:me.$handleData(dt.paidfee),
                  unpaidfee:me.$handleData(dt.unpaidfee),
                  notes:me.$handleData(dt.notes),
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
          me.loading = false;
          me.currentPage = 1;
          me.pageSize = data.pageSize;
        } else {
          me.tableData = [];
          me.total = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      }
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .phone-bill-message {
    width: 100%;
    height: 100%;
    .content{
      .el-table__header-wrapper,.el-table__body-wrapper{
        min-width: 1300px;
      }
      table {
        width: 100% !important;
        .cell {
          height: 20px;
          text-align: left;
          line-height: 20px;
          width: 100% !important;
          box-sizing: border-box;
          min-width: 0;
          padding: 0;
        }
        th, tr, td {
          height: 30px;
        }
      }
      .el-table__header-wrapper {
        height: 61px !important;
        box-sizing: border-box;
      }
      .el-table__empty-block {
        width: 100% !important;
        height: 30px;
        min-height: 30px;
      }
      .block {
        margin-top: 10px !important;
      }
    }
  }
</style>
