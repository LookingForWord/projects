/**
 * Home banner
 */
import React from 'react'
import Scroll from '../../commons/Scroll'
import './style.scss'

class HomeBanner extends React.Component {

    render() {

        return <Scroll banners={this.props.banners}/>
    }
}

export default HomeBanner