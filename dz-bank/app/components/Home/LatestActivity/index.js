/**
 * 最新活动
 */
import React from 'react'
import {Link} from 'react-router-dom'
import Swiper from 'swiper'
//import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/idangerous.swiper.css'
import './style.scss'

class LatestActivity extends React.Component{

    render(){
        const activityItems = this.props.activityItems;
        return (
            <div className="latest-activity-container">
                <h2>最新活动</h2>
                <div className="latest-activity-items swiper-container" id="swiper-latest-activity">
                    <div className="swiper-wrapper">
                        {
                            activityItems.map((currItem, index) => (
                                <div className="latest-activity-item swiper-slide" key={ index }>
                                    <Link to={currItem.linkUrl} className="inline-block">
                                        <img src={currItem.imgUrl} title={currItem.title}/>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="swiper-button-prev swiper-button" onClick={this.prev.bind(this)}/>
                    <div className="swiper-button-next swiper-button" onClick={this.next.bind(this)}/>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        this.startSwipeLatestActivity();
    }

    startSwipeLatestActivity() {
        try{
            this.swiper = new Swiper ('#swiper-latest-activity', {
                // loop: true,
                // autoplay:{
                //     delay: 5000,
                //     disableOnInteraction:false
                // },
                // speed:400,
                // slidesPerView: 3,
                // spaceBetween: 20,
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // }
                // autoplay:6000,
                // autoplayDisableOnInteraction:false,
                //loop: true,
                speed:1000,
                slidesPerView:3,

            })
        }catch (e){
            console.log(e.message)
        }

    }

    prev(){
        //this.swiper.stopAutoplay();
        this.swiper.swipePrev();
        //this.swiper.startAutoplay();
    }

    next(){
        //this.swiper.stopAutoplay();
        this.swiper.swipeNext();
        //this.swiper.startAutoplay();
    }
}

export default LatestActivity
