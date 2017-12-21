import React from 'react'
import DepositRateComponent from '../../components/DepositRate'

class DepositRate extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            data:{
                title:'',
                content:''
            }
        }
    }

    render(){

        return <DepositRateComponent data={this.state.data}/>
    }
}

export default DepositRate
