import React from 'react'
import BoardCompositionComponent from '@/components/About/InformDisclosure/Governance/BoardComposition'

class BoardComposition extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../../static/images/about_banner_xxpl.jpg'),
                title:'董事会及专委会',
                content:''
            }
        }
    }

    render(){

        return <BoardCompositionComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default BoardComposition
