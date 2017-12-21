import React from 'react'
import HomeBanner from './HomeBanner'
import HomeTools from './HomeTools'
import ServiceType from './ServiceType'
import LatestActivity from './LatestActivity'
// import News from './News'
// import Notice from './Notice'
import NewNotices from './NewNotices'
import './style.scss'

class Home extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
    }

    render(){
        const {banners,toolItems,serverType,activityItems,noticeItems,newItems} = this.props;

        return (
            <div className="home-container">
                <HomeBanner banners={ banners }/>
                <HomeTools toolItems = {toolItems}/>
                <ServiceType serverType = {serverType}/>
                <div className="latest-activity-notice overflow-top">
                    <LatestActivity  activityItems={activityItems}/>
                    {/*<Notice noticeItems={noticeItems}/>*/}
                </div>
                {/*<News newItems={newItems}/>*/}
                <NewNotices newItems={newItems} noticeItems={noticeItems}/>
            </div>
        );
    }
}

export default Home
