<template>
  <div class="user-msg-box-body user-taobao-box-body">
    <dl class="taobao-base-message">
      <dt>基本信息：</dt>
      <dd>
        <el-table
          :data="taobaoBaseData"
          border
          :fit="false"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名"
            width="15%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话"
            width="20%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="20%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="nike"
            label="昵称"
            width="15%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="vipLevel"
            label="vip等级"
            width="15%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="vipCount"
            label="vip值"
            width="15%"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </dd>
    </dl>
    <dl class="taobao-orders-detail">
      <dt>订单列表：</dt>
      <dd>
        <define-content :cgxpageHandle='cgxpageHandleOrders' :tableData='taobaoOrdersData' :total="totalOrders"
                        :cgxpagesizeHandle="cgxpagesizeHandleOrders" :pageUrl="pageUrlOrders"
                        :currentPage='currentPageOrders' :pageSize='pageSizeOrders'>
          <el-table-column
            prop="shopName"
            label="店铺名称"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品名称"
            width='14%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="url"
            label="商品地址"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="original"
            label="商品价格"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="realTotal"
            label="交易价格"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="quantity"
            label="商品数量"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="actualFee"
            label="订单金额"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="invoiceName"
            label="发票抬头"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="交易时间"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="tradeText"
            label="交易状态"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="deliverName"
            label="收货人"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="mobilePhone"
            label="收货人移动电话"
            width='8%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="fixedPhone"
            label="收货人固定电话"
            width='8%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="收获地址"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
        </define-content>
      </dd>
    </dl>
    <dl class="taobao-address">
      <dt>收获地址：</dt>
      <dd>
        <define-content :cgxpageHandle='cgxpageHandleAddress' :tableData='taobaoAddressData' :total="totalAddress"
                        :cgxpagesizeHandle="cgxpagesizeHandleAddress" :pageUrl="pageUrlAddress"
                        :currentPage='currentPageAddress' :pageSize='pageSizeAddress'>
          <el-table-column
            prop="name"
            label="收货人"
            width='20%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话"
            width='15%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="zipCode"
            label="邮编"
            width='15%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width='35%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="isDefault"
            label="是否默认收货地址"
            width='15%'
            show-overflow-tooltip
          >
          </el-table-column>
        </define-content>
      </dd>
    </dl>
  </div>
</template>

<script>
  import defineContent from './content';
  import formatDate from '../api/formatDate';
  export default{
    name: "taobaoDetail",
    data(){
      return {
        totalOrders: 0,
        totalAddress:0,
        pageUrlOrders: '',
        currentPageOrders: 1,
        pageSizeOrders: 20,
        pageUrlAddress: '',
        currentPageAddress: 1,
        pageSizeAddress: 20,
        taobaoBaseData: [],
        taobaoOrdersData: [],
        taobaoAddressData:[],
      }
    },
    mounted(){
        //获取基本信息
      let memberId = this.$router.currentRoute.params.id;
      if (this.$constant.TAOBAOBASEDATA && memberId !== undefined) {
        let me = this;
        this.$http({
          url: this.$constant.TAOBAOBASEDATA,
          vm: me,
          method: "GET",
          params: {memberId}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                let dt = data.data;
                me.taobaoBaseData = [{
                  name:me.$handleData(dt.tbName),
                  nike:me.$handleData(dt.tbNike),
                  phone:me.$handleData(dt.tbPhoneNumber),
                  email:me.$handleData(dt.tbEmail),
                  vipLevel:me.$handleData(dt.vipLevel),
                  vipCount:me.$handleData(dt.vipCount)
                }];
              }
            } else {
              me.taobaoBaseData = [];
            }
          } else {
            me.taobaoBaseData = [];
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
      //获取订单详情
      if (this.$constant.TAOBAOORDERSDATA && memberId !== undefined) {
        let me = this;
        this.totalOrders = 0;
        this.pageUrlOrders = this.$constant.TAOBAOORDERSDATA + "?id=" + memberId;
        this.$http({
          url: this.$constant.TAOBAOORDERSDATA,
          vm: me,
          method: "GET",
          params: {id:memberId,page: this.currentPageOrders, rows: this.pageSizeOrders}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                if (data.data[0].total !== undefined) {
                  me.totalOrders = data.data[0].total;
                }
                let arr = [];
                for (let i = 0; i < data.data.length; i++) {
                  let dt = data.data[i];
                  arr.push({
                    shopName:me.$handleData(dt.sellerShopName),
                    name: me.$handleData(dt.itemName),
                    url:me.$handleData(dt.itemUrl),
                    original:me.$handleData(dt.original) === '' ? '' : '￥ '+me.$handleData(dt.original),
                    realTotal:me.$handleData(dt.realTotal) ===  '' ? '' : '￥ ' + me.$handleData(dt.realTotal),
                    quantity:me.$handleData(dt.quantity),
                    actualFee:me.$handleData(dt.actualFee) === '' ? '' :"￥ " +me.$handleData(dt.actualFee),
                    invoiceName:me.$handleData(dt.invoiceName),
                    createTime:me.$handleData(dt.tradeCreateTime) === '' ? '' : formatDate(me.$handleData(dt.tradeCreateTime),true),
                    tradeText:me.$handleData(dt.tradeText),
                    deliverName:me.$handleData(dt.deliverName),
                    mobilePhone:me.$handleData(dt.deliverMobilePhone),
                    fixedPhone:me.$handleData(dt.deliverFixedPhone),
                    address:me.$handleData(dt.deliverFullAddress)
                  });
                }
                me.taobaoOrdersData = arr;
              } else {
                me.taobaoOrdersData = [];
              }
            } else {
              me.taobaoOrdersData = [];
            }
          } else {
            me.taobaoOrdersData = [];
            me.totalOrders = 0;
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
      //获取收获地址数据
      if (this.$constant.TAOBAOADDRESSDATA && memberId !== undefined) {
        let me = this;
        this.totalAddress = 0;
        this.pageUrlAddress = this.$constant.TAOBAOADDRESSDATA + "?id=" + memberId;;
        this.$http({
          url: this.$constant.TAOBAOADDRESSDATA,
          vm: me,
          method: "GET",
          params: {id:memberId,page: this.currentPageAddress, rows: this.pageSizeAddress}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                if (data.data[0].total !== undefined) {
                  me.totalAddress = data.data[0].total;
                }
                let arr = [];
                for (let i = 0; i < data.data.length; i++) {
                  let dt = data.data[i];
                  arr.push({
                    name:me.$handleData(dt.name),
                    address:me.$handleData(dt.fullAddress),
                    zipCode:me.$handleData(dt.zipCode),
                    phone:me.$handleData(dt.phoneNumber),
                    isDefault:me.$handleData(dt.isDefault) == 1 ? "是" : "否"
                  });
                }
                me.taobaoAddressData = arr;
              } else {
                me.taobaoAddressData = [];
              }
            } else {
              me.taobaoAddressData = [];
            }
          } else {
            me.taobaoAddressData = [];
            me.totalAddress = 0;
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }

    },
    methods: {
      cgxpageHandleOrders(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data[0].total !== undefined) {
                me.totalOrders = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  shopName:me.$handleData(dt.sellerShopName),
                  name: me.$handleData(dt.itemName),
                  url:me.$handleData(dt.itemUrl),
                  original:me.$handleData(dt.original) === '' ? '' : '￥ '+me.$handleData(dt.original),
                  realTotal:me.$handleData(dt.realTotal) ===  '' ? '' : '￥ ' + me.$handleData(dt.realTotal),
                  quantity:me.$handleData(dt.quantity),
                  actualFee:me.$handleData(dt.actualFee) === '' ? '' :"￥ " +me.$handleData(dt.actualFee),
                  invoiceName:me.$handleData(dt.invoiceName),
                  createTime:me.$handleData(dt.tradeCreateTime) === '' ? '' : formatDate(me.$handleData(dt.tradeCreateTime),true),
                  tradeText:me.$handleData(dt.tradeText),
                  deliverName:me.$handleData(dt.deliverName),
                  mobilePhone:me.$handleData(dt.deliverMobilePhone),
                  fixedPhone:me.$handleData(dt.deliverFixedPhone),
                  address:me.$handleData(dt.deliverFullAddress)
                });
              }
              me.taobaoOrdersData = arr;
            } else {
              me.taobaoOrdersData = [];
            }
          } else {
            me.taobaoOrdersData = [];
          }
          me.currentPageOrders = data.currentPage;
        } else {
          me.taobaoOrdersData = [];
          me.totalOrders = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
      cgxpagesizeHandleOrders(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data[0].total !== undefined) {
                me.totalOrders = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  shopName:me.$handleData(dt.sellerShopName),
                  name: me.$handleData(dt.itemName),
                  url:me.$handleData(dt.itemUrl),
                  original:me.$handleData(dt.original) === '' ? '' : '￥ '+me.$handleData(dt.original),
                  realTotal:me.$handleData(dt.realTotal) ===  '' ? '' : '￥ ' + me.$handleData(dt.realTotal),
                  quantity:me.$handleData(dt.quantity),
                  actualFee:me.$handleData(dt.actualFee) === '' ? '' :"￥ " +me.$handleData(dt.actualFee),
                  invoiceName:me.$handleData(dt.invoiceName),
                  createTime:me.$handleData(dt.tradeCreateTime) === '' ? '' : formatDate(me.$handleData(dt.tradeCreateTime),true),
                  tradeText:me.$handleData(dt.tradeText),
                  deliverName:me.$handleData(dt.deliverName),
                  mobilePhone:me.$handleData(dt.deliverMobilePhone),
                  fixedPhone:me.$handleData(dt.deliverFixedPhone),
                  address:me.$handleData(dt.deliverFullAddress)
                });
              }
              me.taobaoOrdersData = arr;
            } else {
              me.taobaoOrdersData = [];
            }
          } else {
            me.taobaoOrdersData = [];
          }
          me.currentPageOrders = 1;
          me.pageSizeOrders = data.pageSize;
        } else {
          me.taobaoOrdersData = [];
          me.totalOrders = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
      cgxpageHandleAddress(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data[0].total !== undefined) {
                me.totalAddress = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  name:me.$handleData(dt.name),
                  address:me.$handleData(dt.fullAddress),
                  zipCode:me.$handleData(dt.zipCode),
                  phone:me.$handleData(dt.phoneNumber),
                  isDefault:me.$handleData(dt.isDefault) == 1 ? "是" : "否"
                });
              }
              me.taobaoAddressData = arr;
            } else {
              me.taobaoAddressData = [];
            }
          } else {
            me.taobaoAddressData = [];
          }
          me.currentPageAddress = data.currentPage;
        } else {
          me.taobaoAddressData = [];
          me.totalAddress = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
      cgxpagesizeHandleAddress(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data[0].total !== undefined) {
                me.totalAddress = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  name:me.$handleData(dt.name),
                  address:me.$handleData(dt.fullAddress),
                  zipCode:me.$handleData(dt.zipCode),
                  phone:me.$handleData(dt.phoneNumber),
                  isDefault:me.$handleData(dt.isDefault) == 1 ? "是" : "否"
                });
              }
              me.taobaoAddressData = arr;
            } else {
              me.taobaoAddressData = [];
            }
          } else {
            me.taobaoAddressData = [];
          }
          me.currentPageAddress = 1;
          me.pageSizeAddress = data.pageSize;
        } else {
          me.taobaoAddressData = [];
          me.totalAddress = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      }
    },
    components: {
      defineContent
    }
  }
</script>
<style lang="scss">
  .user-taobao-box-body {
    .taobao-orders-detail, .taobao-base-message, .taobao-address {
      width: 100%;
      dt {
        text-align: left;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
      }
      dd {
        width: 100%;
      }
      table {
        width: 100% !important;
        .cell {
          text-align: center;
          height: 20px;
          line-height: 20px;
          width: 100% !important;
          box-sizing: border-box;
          padding: 0 5px;
        }
        th, tr, td {
          height: 30px;
        }
      }
      .el-table__header-wrapper {
        height: 31px;
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
    .taobao-base-message{
      dd{
        height:84px;
        width:100%;
        overflow-x: auto;
        //overflow-y:hidden;
        .el-table{
          min-width: 1300px;
          height:64px;
        }
      }
    }
    .taobao-address,.taobao-orders-detail{
      dd{
        width: 100%;
        .el-table{
          overflow: auto;
          max-height:340px;
        }
        .el-table__header-wrapper,.el-table__body-wrapper{
          min-width: 1300px;
        }
      }
    }
    .taobao-orders-detail{
      dd{
        .el-table{
          max-height:640px;
        }
      }
    }
  }

  .user-msg-box-taobao {
    .box-card {
      width: 100%;
      margin: 0 auto;
      //height: 100%;
      padding-top: 51px;
      position: relative;
      box-sizing: border-box;
    }
  }
  /*.user-taobao-box-body {*/
    /*min-height: 600px;*/
    /*overflow: auto ;*/
    /*.taobao-orders-detail, .taobao-base-massage ,.taobao-address{*/
      /*width: 100%;*/
      /*dt {*/
        /*text-align: left;*/
        /*font-size: 16px;*/
        /*height: 30px;*/
        /*line-height: 30px;*/
      /*}*/
      /*dd {*/
        /*width: 100%;*/
      /*}*/
      /*table {*/
        /*width: 100% !important;*/
        /*.cell {*/
          /*text-align: center;*/
          /*height: 20px;*/
          /*line-height: 20px;*/
          /*width: 100% !important;*/
          /*box-sizing: border-box;*/
          /*padding: 0 5px;*/
        /*}*/
        /*th, tr, td {*/
          /*height: 30px;*/
        /*}*/
      /*}*/
      /*.el-table__header-wrapper {*/
        /*height: 31px;*/
      /*}*/
      /*.el-table__empty-block {*/
        /*width: 100% !important;*/
        /*height: 30px;*/
        /*min-height: 30px;*/
      /*}*/
      /*.block{*/
        /*margin-top:10px !important;*/
      /*}*/
    /*}*/
    /*.taobao-base-massage {*/
    /*}*/
    /*.el-table__header-wrapper,.el-table{*/
      /*//min-width: 1500px !important;*/
    /*}*/
    /*.taobao-orders-detail {*/
      /*.el-table{*/
        /*max-height:640px !important;*/
      /*}*/
    /*}*/
    /*.taobao-address{*/
      /*.el-table{*/
        /*max-height:340px !important;*/
      /*}*/
    /*}*/
  /*}*/
  /*.user-msg-box-taobao{*/
    /*.box-card {*/
      /*width: 100%;*/
      /*margin:0 auto;*/
      /*height: 100%;*/
      /*padding-top:51px;*/
      /*position: relative;*/
      /*box-sizing: border-box;*/
    /*}*/
  /*}*/
</style>
