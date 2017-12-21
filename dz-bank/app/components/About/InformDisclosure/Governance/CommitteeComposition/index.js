import React from 'react'
import './style.scss'

const Committee = ({data}) => {
    return (
        <div className="inform-committee-composition">
            <div className="template-body-banner">
                <img src={data.bannerUrl} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title}</h2>
                <div className="inform-committee-composition-main">{
                    data.content ?
                        (
                            <div className="inform-committee-composition-dynamic"  dangerouslySetInnerHTML={{__html:data.content}}/>
                        ): (
                        <div className="inform-committee-composition-static">
                            <h5>一、监事会构成</h5>
                            <p>本行董事会由7名监事组成，其中含2名职工监事。</p>
                            <table>
                                <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>本行职务</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>周乾云</td>
                                    <td>纪委书记、监事长</td>
                                </tr>
                                <tr>
                                    <td>张志</td>
                                    <td>职工监事</td>
                                </tr>
                                <tr>
                                    <td>李磊</td>
                                    <td>股东监事</td>
                                </tr>
                                <tr>
                                    <td>贾海飞</td>
                                    <td>股东监事</td>
                                </tr>
                                <tr>
                                    <td>汪嗣荣</td>
                                    <td>外部监事</td>
                                </tr>
                                <tr>
                                    <td>王敏</td>
                                    <td>外部监事</td>
                                </tr>
                                <tr>
                                    <td>何九林</td>
                                    <td>外部监事</td>
                                </tr>
                                </tbody>
                            </table>
                            <h5 style={ { marginTop:'20px'}}>二、监事会专委会构成</h5>
                            <p>本行监事会下设2个专门委员会，即提名委员会、审计与监督委员会。</p>
                        </div>
                    )
                }</div>
            </div>
        </div>
    );
}

export default Committee
