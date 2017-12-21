import React from 'react'
import CultureComponent from '../../../../components/About/CompanyProfile/Culture'

class Culture extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <CultureComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default Culture
