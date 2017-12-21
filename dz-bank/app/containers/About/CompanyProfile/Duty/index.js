import React from 'react'
import DutyComponent from '../../../../components/About/CompanyProfile/Duty'

class Duty extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <DutyComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default Duty
