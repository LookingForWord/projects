/**
 * 广告模块
 */
import React from 'react'
import './style'

export default ({homeAd}) => {
    return (
        <div className="home-ad">
            <h2>超值特惠</h2>
            <div className="ad-container clear-fix">
                {
                    homeAd.isFetching ?
                        (<div>加载中...</div>):
                        (
                            homeAd.data == null ?
                                <div>暂无数据！</div>:
                                (
                                    homeAd.data.map((item,index) => {
                                        return (
                                            <div key={index} className="ad-item float-left">
                                                <a href={item.link} target="_blank">
                                                    <img src={require(`./images/${item.img}`)} alt={item.title}/>
                                                </a>
                                            </div>
                                        );
                                    })
                                )
                        )
                }
            </div>
        </div>
    );
}