import React from 'react'
import CounterfeitMoney from './CounterfeitMoney'
import WornCoin from './WornCoin'
import {Switch,Route} from 'react-router-dom'

class PublicityEducation extends React.Component{
    render(){

        return (
            <Switch>
                <Route path="/about/xwgg/xcjy/jbgl" component={CounterfeitMoney} exact/>
                <Route path="/about/xwgg/xcjy/cbgl" component={WornCoin} exact/>
            </Switch>
        );
    }
}

export  default PublicityEducation
