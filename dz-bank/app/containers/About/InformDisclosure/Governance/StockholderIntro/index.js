import React from 'react'
import StockholderIntroComponent from '../../../../../components/About/InformDisclosure/Governance/StockholderIntro'

class StockholderIntro extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../../static/images/about_banner_xxpl.jpg'),
                title:'股东大会',
                content:'股东大会是本行的最高权力机关，由全体股东组成，通过董事会、监事会对本行进行管理和监督，对本行重大事项进行决策，有权选任和解聘董事，并对本行的经营管理有广泛的决定权。本行重视与全体股东的联系，通过业绩披露、重大事项发布、召开股东大会等形式与广大股东保持充分沟通，确保所有股东对公司重大事项享有平等的知情权、参与权和表决权，保证股东大会的科学决策与工作质效。'
            }
        }
    }

    render(){

        return <StockholderIntroComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default StockholderIntro
