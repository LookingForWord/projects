/**
 * mock server
 */
var app = require('koa')();
var router = require('koa-router')();

/**
 * 配置路由
 */
//首页 广告(超值特惠)
var homeAdData = require('./home/ad.js');
router.get('/web/homead',function *(next){
    console.log('首页 ----> 超值特惠');
    this.body = homeAdData;
});

//首页 推荐列表
var homeListData = require('./home/list');
router.get('/web/homelist/:city/:page',function *(next){
    console.log('首页 ----> 猜你喜欢');

    //参数
    console.log(this.params);

    this.body = homeListData;
});

//?a=b&c=d
// router.get('/web/homelist',function *(next){
//     console.log('首页 ----> 猜你喜欢');
//
//     //参数
//     console.log(this.req);
//
//     this.body = homeListData;
// });

//搜索页列表
const searchListData = require('./search/list');
router.get('/web/searchlist/:city/:page/:category/:keyword?',function *(){
   console.log('搜索结果页');

    console.log(this.params);

    this.body = searchListData;
});

//详情页 商户信息
const detailInfo = require('./detail/info');
router.get('/web/detail/info/:id',function *(next){
    console.log('详情页 -- 商户信息');
    console.log(this.params);

    this.body = detailInfo
});

//详情页 -- 用户评论
const detailComment = require('./detail/comment');
router.get('/web/detail/comment/:page/:id',function *(next){
    console.log('详情页 -- 用户点评');
    console.log(this.params);

    this.body = detailComment
})
/**
 * 开始服务并生成路由
 */
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3001);
