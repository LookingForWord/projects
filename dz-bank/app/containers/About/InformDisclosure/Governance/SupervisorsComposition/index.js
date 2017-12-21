import React from 'react'
import SupervisorsCompositionComponent from '../../../../../components/About/InformDisclosure/Governance/SupervisorsComposition'

class Supervisors extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../../static/images/about_banner_xxpl.jpg'),
                title:'监事会构成',
                content:''
            }
        }
    }

    render(){

        return <SupervisorsCompositionComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default Supervisors
