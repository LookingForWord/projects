import React from 'react'
import Index from './First'
import Second from './Second'
import {Switch,Route} from 'react-router-dom'

class FinancialMarket extends React.Component{

    render(){
        return (
            <Switch>
                <Route path='/financialMarket' component={Index} exact/>
                <Route path='/financialMarket/:type?' render={
                    props => <Second {...this.props}/>
                } exact/>
            </Switch>
        )
    }
}

export default FinancialMarket
