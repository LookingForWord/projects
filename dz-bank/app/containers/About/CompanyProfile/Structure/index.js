import React from 'react'
import StructureComponent from '../../../../components/About/CompanyProfile/Structure'
import mockImg from '../../../../util/mockImg'

class Structure extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <StructureComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default Structure

