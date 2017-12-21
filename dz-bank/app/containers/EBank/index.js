import React from 'react'
import Index from './First'
import Second from './Second'
import {Switch,Route} from 'react-router-dom'

class EBank extends React.Component{

    render(){
        return (
            <Switch>
                <Route path='/eBank' component={Index} exact/>
                <Route path='/eBank/:type?' render={
                    props => <Second {...this.props}/>
                } exact/>
            </Switch>
        )
    }
}

export default EBank
