import React from 'react'
import CounterfeitMoneyComponent from '../../../../../components/About/InformDisclosure/PublicityEducation/CounterfeitMoney'

class CounterfeitMoney extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <CounterfeitMoneyComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default CounterfeitMoney
