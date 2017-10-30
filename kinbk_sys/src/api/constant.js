/**
 * 常量模块
 *    用于定义接口地址
 */
let APIBASEURL = 'http://10.191.12.75:8081/api/';//数据接口基路径 http://101.204.232.167:6830/web/ https://eloan.kinbk.com/web/
try{
  if(process.env.SERVER){
    APIBASEURL = process.env.SERVER;
  }
}catch(err){
  console.error(err);
}
export const PRODBASEURL = '/';// 和打包时配置文件的assetsPublicPath属性值一样 如：/work/projects/dist/
const LOGINURL = APIBASEURL + 'tokens/login';//登录验证地址
const LOGINOUT = APIBASEURL + 'tokens/logout';//退出登录
const TOTALDATALISTURL = APIBASEURL + 'index';//统计信息接口 + 'total.json'
const AUDITALLURL = APIBASEURL + 'verify/list';//审核全部接口
const AUDITEDURL = APIBASEURL + 'verify/list?status=3';//已审核接口
const UNAUDITEDURL = APIBASEURL + 'verify/list?status=2';//未审核接口
const AUDITDETAIL = APIBASEURL + 'verify/initiateAudits';//审核详情
const CERTIITEMS = APIBASEURL + 'verify/doAudits';//需要重新认证的项目
const ACCOUNT = APIBASEURL + 'verify/doAudits';//提取的金额
const REFUNDALL = APIBASEURL + 'repayment/list';//还款全部接口
const REFUNDED = APIBASEURL + 'repayment/list?status=5';//还款 已结清接口
const UNREFUNDED = APIBASEURL + 'repayment/list?status=4';//还款 待还款接口
const REFUNDDETAIL = APIBASEURL + 'repayment/getDetail';//还款 详情接口
const AUDITPASSDETAIL = APIBASEURL + 'verify/initiateAudits';//审核通过详情接口
const AUDITNOPASSDETAIL = APIBASEURL + 'verify/initiateAudits';//审核未通过详情接口
const VERSIONMANAGEURL = APIBASEURL + 'appVersion/list';//版本管理列表接口
const VERSIONMANAGEADD = APIBASEURL + 'appVersion/input';//版本管理新建获取id
const VERSIONMANAGESAVE = APIBASEURL + 'appVersion/save';//版本管理新建保存
const VERSIONMANAGEDELETE = APIBASEURL + 'appVersion/delete';//版本管理删除
const PROTOCOLMANAGE = APIBASEURL + 'protocol/list';//协议管理列表接口
const PROTOCOLMANAGESAVE = APIBASEURL + 'protocol/save';//协议管理保存
const PROTOCOLMANAGEDELETE = APIBASEURL + 'protocol/delete';//协议管理删除
const PROTOCOLMANAGEINIT = APIBASEURL + 'protocol/update';//协议管理内容初始化
const BANNERMANAGE = APIBASEURL + 'banner/list';//banner管理列表
const BANNERMANAGEINIT = APIBASEURL + 'banner/update';//banner初始化
const BANNERMANAGEDELETE = APIBASEURL + 'banner/delete';//banner管理删除
const BANNERMANAGEUPLOAD = APIBASEURL + 'banner/photoUpload';//banner图片上传
const BANNERMANAGEUPLOADEDIT = APIBASEURL + 'banner/input';//banner图片上传
const IMAGEURL = APIBASEURL + 'attachment/showImage?path=';//图片地址
const UPDATEPASSWORDVALIDATE = APIBASEURL + 'user/vilidate';//修改密码 --验证新密码
const UPDATEPASSWORD = APIBASEURL + 'user/save';//修改密码
const OAUPLOAD = APIBASEURL + 'oaEmployee/uploadfile';//oa文件上传
const OAMANAGE = APIBASEURL + 'oaEmployee/list';//oa数据列表
const OAMANAGEDETAIL = APIBASEURL + 'oaEmployee/detail';//oa详情
const OAMANAGEINNIT = APIBASEURL + 'oaEmployee/update';//oa初始化
const OAMANAGESAVE = APIBASEURL + 'oaEmployee/save';//oa保存
const OAMANAGEDELETE = APIBASEURL + 'oaEmployee/delete';//oa删除
const BASEDATAMANGE = APIBASEURL + 'dictionary/list';//数据字典列表
const BASEDATAINNIT = APIBASEURL + 'dictionary/input';//数据字典初始化
const BASEDATAPARENT = APIBASEURL + 'dictionary/saveBasedataType';//保存父级字典
const BASEDATACHILD = APIBASEURL + 'dictionary/saveBasedataItem';//保存子级字典
const BASEDATADELETE = APIBASEURL + 'dictionary/delete';//数据字典删除
const TAOBAOBASEDATA = APIBASEURL + 'verify/taobaoDetail';//淘宝基本信息
const TAOBAOORDERSDATA = APIBASEURL + 'verify/taobaoTradeinfoList';//淘宝订单信息
const TAOBAOADDRESSDATA = APIBASEURL + 'verify/taobaoAddressList';//淘宝地址信息
const CONTACTSDETAILDATA = APIBASEURL + 'verify/contactList';//通信录列表
const JINGDONGBASEDATA = APIBASEURL + 'verify/jdUserinfo';//京东基本信息
const JINGDONGADDRESS = APIBASEURL + "verify/jdAddress";//京东地址
const JINGDONGORDERS = APIBASEURL + "verify/jdTradeinfoList";//京东订单信息
const PHONEBASEDATA = APIBASEURL + "verify/mobileBasic";//手机基本信息
const PHONEPACKAGE = APIBASEURL + "verify/mobilePackageusageList";//手机套餐列表
const PHONEBILL = APIBASEURL +  'verify/mobileBillList';//手机账单信息
const PHONECALL = APIBASEURL +  'verify/mobileVoicecallList';//手机通话信息
const PHONESHORTMSG = APIBASEURL + 'verify/mobileSmsList';//手机短信信息
const PHONERECHARGE = APIBASEURL + 'verify/mobileRechargeList';//手机充值信息
const PHONEFAMILY = APIBASEURL + 'verify/mobileFamilynetList';//手机亲情号信息
const REGISTERUSER = APIBASEURL + 'members';//注册用户列表
const REGISTERURL = APIBASEURL + 'members/detail';//注册用户详情
const PRESTADALL = APIBASEURL + 'members/manage/loan';//放款管理全部
const PRESTADED = APIBASEURL + 'members/manage/loan';//已放款
const UNPRESTAD = APIBASEURL + 'members/manage/loan';//未放款
const PRESTADSURE = APIBASEURL + "members/affirm/credit";//确认放款
export default {
  PRESTADSURE,
  UNPRESTAD,
  PRESTADED,
  PRESTADALL,
  REGISTERURL,
  REGISTERUSER,
  PHONEFAMILY,
  PHONERECHARGE,
  PHONESHORTMSG,
  PHONECALL,
  PHONEBILL,
  PHONEPACKAGE,
  PHONEBASEDATA,
  JINGDONGORDERS,
  JINGDONGADDRESS,
  JINGDONGBASEDATA,
  CONTACTSDETAILDATA,
  TAOBAOADDRESSDATA,
  TAOBAOORDERSDATA,
  TAOBAOBASEDATA,
  BANNERMANAGEUPLOADEDIT,
  BASEDATADELETE,
  BASEDATACHILD,
  BASEDATAPARENT,
  BASEDATAINNIT,
  PRODBASEURL,
  LOGINURL,
  LOGINOUT,
  TOTALDATALISTURL,
  AUDITALLURL,
  AUDITEDURL,
  UNAUDITEDURL,
  AUDITDETAIL,
  CERTIITEMS,
  ACCOUNT,
  REFUNDALL,
  REFUNDED,
  UNREFUNDED,
  REFUNDDETAIL,
  AUDITPASSDETAIL,
  AUDITNOPASSDETAIL,
  VERSIONMANAGEURL,
  VERSIONMANAGEADD,
  VERSIONMANAGESAVE,
  VERSIONMANAGEDELETE,
  PROTOCOLMANAGE,
  PROTOCOLMANAGESAVE,
  PROTOCOLMANAGEDELETE,
  PROTOCOLMANAGEINIT,
  BANNERMANAGE,
  BANNERMANAGEDELETE,
  UPDATEPASSWORDVALIDATE,
  UPDATEPASSWORD,
  OAUPLOAD,
  OAMANAGE,
  OAMANAGEDETAIL,
  BANNERMANAGEINIT,
  BANNERMANAGEUPLOAD,
  IMAGEURL,
  OAMANAGEINNIT,
  OAMANAGESAVE,
  OAMANAGEDELETE,
  BASEDATAMANGE
}
