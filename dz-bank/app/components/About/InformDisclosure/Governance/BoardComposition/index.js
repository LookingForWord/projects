import React from 'react'
import './style.scss'

const BoardComposition = ({data}) => {
    return (
        <div className="inform-board-composition">
            <div className="template-body-banner">
                <img src={data.bannerUrl} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title}</h2>
                <div className="inform-board-composition-main">{
                    data.content ?
                        (
                            <div className="inform-board-composition-dynamic"  dangerouslySetInnerHTML={{__html:data.content}}/>
                        ): (
                        <div className="inform-board-composition-static">
                            <h5>一、董事会构成</h5>
                            <p>本行董事会由9名董事组成，其中含3名独立董事。</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>姓名</th>
                                        <th>本行职务</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>汪志德</td>
                                        <td>党委书记、董事</td>
                                    </tr>
                                    <tr>
                                        <td>唐晓红</td>
                                        <td>行长、董事</td>
                                    </tr>
                                    <tr>
                                        <td>苟耘</td>
                                        <td>董事</td>
                                    </tr>
                                    <tr>
                                        <td>戴学斌</td>
                                        <td>董事</td>
                                    </tr>
                                    <tr>
                                        <td>王道富</td>
                                        <td>董事</td>
                                    </tr>
                                    <tr>
                                        <td>陈秋燕</td>
                                        <td>董事</td>
                                    </tr>
                                    <tr>
                                        <td>蓝逢辉</td>
                                        <td>独立董事</td>
                                    </tr>
                                    <tr>
                                        <td>蒋和胜</td>
                                        <td>独立董事</td>
                                    </tr>
                                    <tr>
                                        <td>蓝逢辉</td>
                                        <td>独立董事</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5 style={ { marginTop:'20px'}}>二、董事会专委会构成</h5>
                            <p>本行董事会下设6个专门委员会，即战略发展委员会、薪酬与提名委员会、审计委员会、风险管理委员会、关联交易控制委员会与信息科技管理委员会。</p>
                        </div>
                    )
                }</div>
            </div>
        </div>
    );
}

export default BoardComposition
