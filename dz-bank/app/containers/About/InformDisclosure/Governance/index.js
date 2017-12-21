import React from 'react'
import StockholderIntro from './StockholderIntro'
import BoardComposition from './BoardComposition'
import CommitteeComposition from './CommitteeComposition'
//import SupervisorsComposition from './SupervisorsComposition'
import {Switch,Route} from 'react-router-dom'

class Governance extends React.Component{
    render(){

        return (
            <Switch>
                <Route path="/about/xxpl/gszl/gdjs" component={StockholderIntro} exact/>
                <Route path="/about/xxpl/gszl/dsgc" component={BoardComposition} exact/>
                <Route path="/about/xxpl/gszl/wyhgc" component={CommitteeComposition} exact/>
                {/*<Route path="/about/xxpl/gszl/jshgc" component={SupervisorsComposition} exact/>*/}
            </Switch>
        );
    }
}

export  default Governance
