import React from 'react'
import HonorComponent from '../../../../components/About/CompanyProfile/Honor'

class Honor extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <HonorComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default Honor
