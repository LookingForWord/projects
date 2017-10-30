<template>
  <div class="user-msg-box-body user-jingdong-box-body">
    <dl class="jingdong-base-message">
      <dt>基本信息：</dt>
      <dd>
        <el-table
          :data="jingDongBaseData1"
          border
          :fit="false"
          style="width: 100%">
          <el-table-column
            prop="realName"
            label="姓名"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="birthday"
            label="生日"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="loginName"
            label="登录名"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="nick"
            label="昵称"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="registerDate"
            label="注册时间"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="vipLevel"
            label="会员等级"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="vipCount"
            label="vip值"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="xbCreadit"
            label="小白信用分"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="totalMoney"
            label="总资产"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
        <el-table
          :data="jingDongBaseData2"
          border
          :fit="false"
          style="width: 100%" class="jingdong-base-table">
          <el-table-column
            prop="balance"
            label="小金库"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="walletMoneyAvailable"
            label="钱包余额"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="fund"
            label="理财金额"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="availableLimit"
            label="白条可用额度"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="creditLimit"
            label="白条总额度"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="creditWaitPay"
            label="白条欠款"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="delinquencyBalance"
            label="白条逾期"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="tourAvailableLimit"
            label="白条+可用额度"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="tourCreditWaitPay"
            label="白条+欠款"
            width="5%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="tourDelinquencyBalance"
            label="白条+逾期"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="tourCreditLimit"
            label="白条+总额度"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="netBussinessLoan"
            label="网商贷待还款"
            width="10%"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table>
      </dd>
    </dl>
    <dl class="jingdong-orders-detail">
      <dt>订单列表：</dt>
      <dd>
        <define-content :cgxpageHandle='cgxpageHandleOrders' :tableData='jingDongOrdersData' :total="totalOrders"
                        :cgxpagesizeHandle="cgxpagesizeHandleOrders" :pageUrl="pageUrlOrders"
                        :currentPage='currentPageOrders' :pageSize='pageSizeOrders'>
          <el-table-column
            prop="pName"
            label="商品名称"
            width='20%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="wareUrl"
            label="商品链接"
            width='15%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="tradeId"
            label="订单编号"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="dealTime"
            label="订单日期"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="amount"
            label="订单金额"
            width='7%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="tradeStatus"
            label="订单状态"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="receiver"
            label="收货人"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="receivePhone"
            label="收货人联系方式"
            width='8%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="province"
            label="收货省份"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="city"
            label="收货城市"
            width='5%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="receiveAddress"
            label="收货地址"
            width='15%'
            show-overflow-tooltip
          >
          </el-table-column>
        </define-content>
      </dd>
    </dl>
    <dl class="jingdong-address">
      <dt>收货地址：</dt>
      <dd>
        <define-content :cgxpageHandle='cgxpageHandleAddress' :tableData='jingDongAddressData' :total="totalAddress"
                        :cgxpagesizeHandle="cgxpagesizeHandleAddress" :pageUrl="pageUrlAddress"
                        :currentPage='currentPageAddress' :pageSize='pageSizeAddress'>
          <el-table-column
            prop="name"
            label="收货人"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="phone"
            label="联系方式"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="province"
            label="收货省份"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="city"
            label="收货城市"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="fullAddress"
            label="收货地址"
            width='50%'
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="isDefault"
            label="默认收货地址"
            width='10%'
            show-overflow-tooltip
          >
          </el-table-column>
        </define-content>
      </dd>
    </dl>
  </div>
</template>

<script>
  import formatDate from '../api/formatDate';
  import defineContent from './content';
  export default{
    name: "jingDongDetail",
    data(){
        return {
          jingDongBaseData1:[],
          jingDongBaseData2:[],
          jingDongAddressData:[],
          totalAddress:0,
          pageUrlAddress:"",
          currentPageAddress:1,
          pageSizeAddress:20,
          jingDongOrdersData:[],
          totalOrders:0,
          pageUrlOrders:"",
          currentPageOrders:1,
          pageSizeOrders:20
        }
    },
    mounted(){
      //获取基本信息
      let memberId = this.$router.currentRoute.params.id;
      if (this.$constant.JINGDONGBASEDATA && memberId !== undefined) {
        let me = this;
        this.$http({
          url: this.$constant.JINGDONGBASEDATA,
          vm: me,
          method: "GET",
          params: {memberId}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                let dt = data.data;
                me.jingDongBaseData1 = [{
                  realName:me.$handleData(dt.realName),
                  gender:me.$handleData(dt.gender) === 'MALE' ? "男" : me.$handleData(dt.gender) === 'FEMALE' ? "女" : "",
                  birthday:me.$handleData(dt.birthday) === '' ? '' : formatDate(me.$handleData(dt.birthday),true),
                  email:me.$handleData(dt.email),
                  username:me.$handleData(dt.username),
                  loginName:me.$handleData(dt.loginName),
                  nick:me.$handleData(dt.nick),
                  registerDate:me.$handleData(dt.registerDate) === '' ? '' : formatDate(me.$handleData(dt.registerDate),true),
                  vipLevel:me.$handleData(dt.vipLevel),
                  vipCount:me.$handleData(dt.vipCount),
                  xbCreadit:me.$handleData(dt.xbCreadit),
                  totalMoney:me.$handleData(dt.totalMoney) === '' ? '' : "￥ "+me.$handleData(dt.totalMoney)
                }];
                me.jingDongBaseData2 = [
                  {
                    balance:me.$handleData(dt.balance) === '' ? '' : "￥ "+me.$handleData(dt.balance),
                    walletMoneyAvailable:me.$handleData(dt.walletMoneyAvailable) === '' ? '' : "￥ "+me.$handleData(dt.walletMoneyAvailable),
                    fund:me.$handleData(dt.fund) === '' ? '' : "￥ "+me.$handleData(dt.fund),
                    availableLimit:me.$handleData(dt.availableLimit) === '' ? '' : "￥ "+me.$handleData(dt.availableLimit),
                    creditLimit:me.$handleData(dt.creditLimit) === '' ? '' : "￥ "+me.$handleData(dt.creditLimit),
                    creditWaitPay:me.$handleData(dt.creditWaitPay) === '' ? '' : "￥ "+me.$handleData(dt.creditWaitPay),
                    delinquencyBalance:me.$handleData(dt.delinquencyBalance) === '' ? '' : "￥ "+me.$handleData(dt.delinquencyBalance),
                    tourAvailableLimit:me.$handleData(dt.tourAvailableLimit) === '' ? '' : "￥ "+me.$handleData(dt.tourAvailableLimit),
                    tourCreditWaitPay:me.$handleData(dt.tourCreditWaitPay) === '' ? '' : "￥ "+me.$handleData(dt.tourCreditWaitPay),
                    tourDelinquencyBalance:me.$handleData(dt.tourDelinquencyBalance) === '' ? '' : "￥ "+me.$handleData(dt.tourDelinquencyBalance),
                    tourCreditLimit:me.$handleData(dt.tourCreditLimit) === '' ? '' : "￥ "+me.$handleData(dt.tourCreditLimit),
                    netBussinessLoan:me.$handleData(dt.netBussinessLoan) === '' ? '' : "￥ "+me.$handleData(dt.netBussinessLoan),
                  }
                ]
              }
            } else {
              me.jingDongBaseData1 = [];
              me.jingDongBaseData2 = [];
            }
          } else {
            me.jingDongBaseData1 = [];
            me.jingDongBaseData2 = [];
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
      //获取订单信息
      if (this.$constant.JINGDONGORDERS && memberId !== undefined) {
        let me = this;
        this.totalOrders = 0;
        this.pageUrlOrders = this.$constant.JINGDONGORDERS + "?id=" + memberId;
        this.$http({
          url: this.$constant.JINGDONGORDERS,
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
                    pName:me.$handleData(dt.pName),
                    wareUrl:me.$handleData(dt.wareUrl),
                    tradeId:me.$handleData(dt.tradeId),
                    dealTime:me.$handleData(dt.dealTime) === '' ? '': formatDate(me.$handleData(dt.dealTime),true),
                    amount:me.$handleData(dt.amount) === '' ? '' : "￥ "+me.$handleData(dt.amount),
                    tradeStatus:me.$handleData(dt.tradeStatus),
                    receiver:me.$handleData(dt.receiver),
                    receivePhone:me.$handleData(dt.receivePhone),
                    province:me.$handleData(dt.province),
                    city:me.$handleData(dt.city),
                    receiveAddress:me.$handleData(dt.receiveAddress),
                  });
                }
                me.jingDongOrdersData = arr;
              } else {
                me.jingDongOrdersData = [];
              }
            } else {
              me.jingDongOrdersData = [];
            }
          } else {
            me.jingDongOrdersData = [];
            me.totalOrders = 0;
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
      //获取收货地址
      if (this.$constant.JINGDONGADDRESS && memberId !== undefined) {
        let me = this;
        this.totalAddress = 0;
        this.pageUrlAddress = this.$constant.JINGDONGADDRESS + "?id=" + memberId;;
        this.$http({
          url: this.$constant.JINGDONGADDRESS,
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
                    name: me.$handleData(dt.name),
                    province: me.$handleData(dt.province),
                    city: me.$handleData(dt.city),
                    fullAddress: me.$handleData(dt.address) + me.$handleData(dt.fulladdress),
                    phone: me.$handleData(dt.phonenumber),
                    isDefault: me.$handleData(dt.isdefault) === true ? "是" : "否"
                  });
                }
                me.jingDongAddressData = arr;
              } else {
                me.jingDongAddressData = [];
              }
            } else {
              me.jingDongAddressData = [];
            }
          } else {
            me.jingDongAddressData = [];
            me.totalAddress = 0;
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
    },
    methods:{
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
                  province:me.$handleData(dt.province),
                  city:me.$handleData(dt.city),
                  fullAddress:me.$handleData(dt.address) + me.$handleData(dt.fulladdress),
                  phone:me.$handleData(dt.phonenumber),
                  isDefault:me.$handleData(dt.isdefault) === true ? "是" : "否"
                });
              }
              me.jingDongAddressData = arr;
            } else {
              me.jingDongAddressData = [];
            }
          } else {
            me.jingDongAddressData = [];
          }
          me.currentPageAddress = data.currentPage;
        } else {
          me.jingDongAddressData = [];
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
                  province:me.$handleData(dt.province),
                  city:me.$handleData(dt.city),
                  fullAddress:me.$handleData(dt.address) + me.$handleData(dt.fulladdress),
                  phone:me.$handleData(dt.phonenumber),
                  isDefault:me.$handleData(dt.isdefault) === true ? "是" : "否"
                });
              }
              me.jingDongAddressData = arr;
            } else {
              me.jingDongAddressData = [];
            }
          } else {
            me.jingDongAddressData = [];
          }
          me.currentPageAddress = 1;
          me.pageSizeAddress = data.pageSize;
        } else {
          me.jingDongAddressData = [];
          me.totalAddress = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
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
                  pName:me.$handleData(dt.pName),
                  wareUrl:me.$handleData(dt.wareUrl),
                  tradeId:me.$handleData(dt.tradeId),
                  dealTime:me.$handleData(dt.dealTime) === '' ? '': formatDate(me.$handleData(dt.dealTime),true),
                  amount:me.$handleData(dt.amount) === '' ? '' : "￥ "+me.$handleData(dt.amount),
                  tradeStatus:me.$handleData(dt.tradeStatus),
                  receiver:me.$handleData(dt.receiver),
                  receivePhone:me.$handleData(dt.receivePhone),
                  province:me.$handleData(dt.province),
                  city:me.$handleData(dt.city),
                  receiveAddress:me.$handleData(dt.receiveAddress),
                });
              }
              me.jingDongOrdersData = arr;
            } else {
              me.jingDongOrdersData = [];
            }
          } else {
            me.jingDongOrdersData = [];
          }
          me.currentPageOrders = data.currentPage;
        } else {
          me.jingDongOrdersData = [];
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
                  pName:me.$handleData(dt.pName),
                  wareUrl:me.$handleData(dt.wareUrl),
                  tradeId:me.$handleData(dt.tradeId),
                  dealTime:me.$handleData(dt.dealTime) === '' ? '': formatDate(me.$handleData(dt.dealTime),true),
                  amount:me.$handleData(dt.amount) === '' ? '' : "￥ "+me.$handleData(dt.amount),
                  tradeStatus:me.$handleData(dt.tradeStatus),
                  receiver:me.$handleData(dt.receiver),
                  receivePhone:me.$handleData(dt.receivePhone),
                  province:me.$handleData(dt.province),
                  city:me.$handleData(dt.city),
                  receiveAddress:me.$handleData(dt.receiveAddress),
                });
              }
              me.jingDongOrdersData = arr;
            } else {
              me.jingDongOrdersData = [];
            }
          } else {
            me.jingDongOrdersData = [];
          }
          me.currentPageOrders = 1;
          me.pageSizeOrders = data.pageSize;
        } else {
          me.jingDongOrdersData = [];
          me.totalOrders = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      }
    },
    components:{
      defineContent
    }
  }
</script>

<style lang='scss'>
  .user-jingdong-box-body {
    .jingdong-orders-detail, .jingdong-base-message, .jingdong-address {
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
    .jingdong-base-message{
      .jingdong-base-table{
        margin-top:1px;
      }
      dd{
        height:150px;
        width:100%;
        overflow-x: auto;
        //overflow-y:hidden;
        .el-table{
          min-width: 1300px;
          height:64px;
        }
      }
    }
    .jingdong-address,.jingdong-orders-detail{
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
    .jingdong-orders-detail{
      dd{
        .el-table{
          max-height:640px;
        }
      }
    }
  }

  .user-msg-box-jingdong {
    .box-card {
      width: 100%;
      margin: 0 auto;
      //height: 100%;
      padding-top: 51px;
      position: relative;
      box-sizing: border-box;
    }
  }
</style>
