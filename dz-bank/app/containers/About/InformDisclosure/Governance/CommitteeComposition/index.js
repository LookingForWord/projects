import React from 'react'
import CommitteeCompositionComponent from '@/components/About/InformDisclosure/Governance/CommitteeComposition'

class CommitteeComposition extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../../static/images/about_banner_xxpl.jpg'),
                title:'监事会及专委会',
                content:''
            }
        }
    }

    render(){

        return <CommitteeCompositionComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default CommitteeComposition
