import React from 'react'
import LoanRateComponent from '../../components/LoanRate'

class LoanRate extends React.Component{
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

        return <LoanRateComponent data={this.state.data}/>
    }
}

export default LoanRate
