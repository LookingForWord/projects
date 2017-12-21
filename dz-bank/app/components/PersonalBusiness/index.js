/**
 * 个人业务
 */
import React from 'react'
import Banner from './Banner'
import RecommendCard from './RecommendCard'
import './style.scss'

const PersonalBusiness = ({banners,recommendCards}) => {

    return (
        <div className="personal-business-container">
            <Banner banners={banners}/>
            <RecommendCard recommendCards={recommendCards}/>
        </div>
    )
}

export default PersonalBusiness