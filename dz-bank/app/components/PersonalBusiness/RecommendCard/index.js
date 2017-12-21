import React from 'react'
import Item from './Item'
import Swiper from 'swiper'
//import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/idangerous.swiper.css'
import './style.scss'

class RecommendCard extends React.Component{

    render(){
        return (
            <div className="personal-business-recommend-container">
                <h2 className="clear-fix">
                    <span className="float-left">达行卡推荐</span>
                    <span className="float-right">
                        <em className="inline-block swiper-button-prev" onClick={this.prev.bind(this)}/>
                        <em className="inline-block swiper-button-next" onClick={this.next.bind(this)}/>
                    </span>
                </h2>
                <div className="personal-business-card-items clear-fix swiper-container" id="swiper-card">
                    <div className="swiper-wrapper">
                    {
                        this.props.recommendCards.map( (item,index) => <Item item={item} key={index}/>)
                    }
                    </div>
                </div>
            </div>
        );
    }

    componentDidUpdate() {
        this.startSwipeRecommendCard();
    }

    startSwipeRecommendCard() {
        this.swiper = new Swiper ('#swiper-card', {
            // loop: true,
            // autoplay:{
            //     delay: 5000,
            //     disableOnInteraction:false
            // },
            // speed:400,
            // slidesPerView: 4,
            // spaceBetween: 20,
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // }

            loop:true,
            // autoplay:6000,
            // autoplayDisableOnInteraction:false,
            speed:1000,
            slidesPerView:4,
        })

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

export default RecommendCard