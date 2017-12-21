import React from 'react'
import ConsultComplaintComponent from '../../../../components/About/OnlineService/ConsultComplaint'
import {$http} from '../../../../fetch'
import {PROPOSAL} from '../../../../constants'

class ConsultComplaint extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
    }

    render(){

        return <ConsultComplaintComponent submit={this.submit.bind(this)}/>
    }

    submit(data){
        return $http({url:PROPOSAL,method:'POST',data,headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
    }
}

export  default ConsultComplaint
