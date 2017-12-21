import React from 'react'
import WornCoinComponent from '../../../../../components/About/InformDisclosure/PublicityEducation/WornCoin'

class WornCoin extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <WornCoinComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default WornCoin
