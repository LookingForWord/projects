import React from 'react'
import IntroComponent from '../../../../components/About/CompanyProfile/Intro'

class Intro extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <IntroComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default Intro
