import React from 'react'
import StrategyComponent from '../../../../components/About/CompanyProfile/Strategy'

class Strategy extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <StrategyComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default Strategy
