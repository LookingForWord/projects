import React from 'react'
import SHBZKComponent from '../../../../components/PersonalBusiness/BankCard/SHBZK'

class SHBZK extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <SHBZKComponent data={this.state.data}/>
    }
}

export  default SHBZK
