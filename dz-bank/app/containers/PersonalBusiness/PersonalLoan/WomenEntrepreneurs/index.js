import React from 'react'
import WomenEntrepreneursLoanComponent from '../../../../components/PersonalBusiness/PersonalLoan/WomenEntrepreneurs'

class WomenEntrepreneurs extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <WomenEntrepreneursLoanComponent data={this.state.data}/>
    }
}

export  default WomenEntrepreneurs
