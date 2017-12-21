/**
 * 轮播组件
 */
import React from 'react';
import {Link} from 'react-router-dom'
import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/idangerous.swiper.css'
import './style.scss'

class Scroll extends React.Component{
    render() {
        const {banners} = this.props;

        let resultElem = banners.length <= 0 ? null :
            ( <div className="category swiper-container" id="swiper-container">
                <div className="swiper-wrapper">
                    {
                        banners.map((currItem, index) => (
                            <div className="category-item swiper-slide" key={ index }>
                                <Link to={currItem.linkUrl} className="inline-block">
                                    <img src={currItem.imgUrl} title={currItem.title}/>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {
                    banners && banners.length > 1 && <div className="swiper-pagination" />
                }
            </div> );

        return resultElem
    }

    componentDidMount() {

        this.startSwipe();
    }

    startSwipe() {
        try{
            new Swiper ('#swiper-container', {
                // loop: true,
                // autoplay:{
                //     delay: 3000,
                //     disableOnInteraction:false
                // },
                // speed:800,
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable:true
                // },
                //loop:true,
                autoplay:4000,
                autoplayDisableOnInteraction:false,
                speed:2000,
                pagination:'.swiper-pagination',
                paginationClickable:true
            })
        }catch(e){
            console.log(e.message)
        }
    }
}

export default Scroll
