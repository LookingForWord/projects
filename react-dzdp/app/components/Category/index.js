/**
 * Home 轮播部分
 */
import React from 'react'
import ReactSwipe from 'react-swipe'
import BaseComponent from '../BaseComponent'
import {Link} from 'react-router-dom'
import './style'
class Category extends BaseComponent{
    constructor(props,context){
        super(props,context);
        this.state = {
            index:0,
            carouselItem:[
                [
                    { content:"景点", title:"jingdian", bgImg:"138012-20161022224203170-1528315005.png" },
                    { content:"KTV", title:"ktv", bgImg:"138012-20161022224309185-1519181081.png" },
                    { content:"购物", title:"gouwu", bgImg:"138012-20161022224150045-30962603.png" },
                    { content:"生活服务", title:"shenghuofuwu", bgImg:"138012-20161022224237513-176380794.png" },
                    { content:"健身运动", title:"jianshenyundong", bgImg:"138012-20161022224256732-145714491.png" },
                    { content:"美发", title:"meifa", bgImg:"138012-20161022224222123-643915682.png" },
                    { content:"亲子", title:"qinzi", bgImg:"138012-20161022224229451-475201730.png" },
                    { content:"小吃快餐", title:"xiaochikuaican", bgImg:"138012-20161022224244545-1583700011.png" },
                    { content:"自助餐", title:"zizhucan", bgImg:"138012-20161022224113560-1012968440.png" },
                    { content:"酒吧", title:"jiuba", bgImg:"138012-20161022224210732-490953965.png" },
                ],
                [
                    { content:"美食", title:"meishi", bgImg:"138012-20161022224409107-2018112337.png" },
                    { content:"电影", title:"dianying", bgImg:"138012-20161022224033873-290248113.png" },
                    { content:"酒店", title:"jiudian", bgImg:"138012-20161022224051513-2057698989.png" },
                    { content:"休闲娱乐", title:"xuixianyule", bgImg:"138012-20161022224129076-2058206915.png" },
                    { content:"外卖", title:"waimai", bgImg:"138012-20161022224121920-424129491.png" },
                    { content:"火锅", title:"huoguo", bgImg:"138012-20161022224046342-1896393176.png" },
                    { content:"丽人", title:"liren", bgImg:"138012-20161022224057670-257626875.png" },
                    { content:"度假出行", title:"dujiachuxing", bgImg:"138012-20161022224040842-2050913385.png" },
                    { content:"足疗按摩", title:"zuliaoanmo", bgImg:"138012-20161022224144060-1009120401.png" },
                    { content:"周边游", title:"zhoubianyou", bgImg:"138012-20161022224138123-197921773.png" },
                ],
                [
                    { content:"日本菜", title:"ribencai", bgImg:"138012-20161022224354951-1102565687.png" },
                    { content:"SPA", title:"spa", bgImg:"138012-20161022224419998-1442330810.png" },
                    { content:"结婚", title:"jiehun", bgImg:"138012-20161022224340545-213074048.png" },
                    { content:"学习培训", title:"xuexipeixun", bgImg:"138012-20161022224415013-114294334.png" },
                    { content:"西餐", title:"xican", bgImg:"138012-20161022224409107-2018112337.png" },
                    { content:"火车机票", title:"huochejipiao", bgImg:"138012-20161022224323467-1926976043.png" },
                    { content:"烧烤", title:"shaokao", bgImg:"138012-20161022224402576-1611337354.png" },
                    { content:"家装", title:"jiazhuang", bgImg:"138012-20161022224333185-1082315113.png" },
                    { content:"宠物", title:"chongwu", bgImg:"138012-20161022224315779-157132725.png" },
                    { content:"全部分类", title:"all", bgImg:"138012-20161022224348467-646596364.png" },
                ]
            ]
        }
    }

    render(){
        const options = {
            auto:2000,
            speed:600,
            startSlide:this.state.index,
            callback: (index) =>{
                this.setState({ index });
            }
        };

        return (
            <div className="home-category">
                <ReactSwipe swipeOptions={ options }>
                    {
                        this.state.carouselItem.map((currItem,index) => (
                            <div className="carousel-item" key={ index }>
                                <ul className="clear-fix">
                                    {
                                        currItem.map( (val) => {
                                            return (
                                                <Link to={ '/search/' + val.title} key={ val.title }>
                                                    <li className={val.title} style={ {backgroundImage:'url('+ require('./images/'+ val.bgImg ) +')'} }>{val.content}</li>
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </ReactSwipe>
                <div className="swipe-propagation">
                    <ul>
                        {
                            this.state.carouselItem.map( (val,index) => (
                                <li className={ this.state.index === index ? 'selected' : ''} key={index}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category
