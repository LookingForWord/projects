/**
 * 子级页面模版
 */
import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import './style.scss'

class  SubPageTemplate extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state = {
            currentItem:'',
        }
    }

    render(){
        const {navItems,match} = this.props;

        let currentItem = null
        if(navItems.items){
            currentItem = navItems.items.filter( item => item.type === match.params.type || item.type === this.props.type)[0].title
        }

        return (
            <div className="sub-page-template overflow-top">
                <h4><span>{navItems.firstTitle}<em>/</em></span>{navItems.title ? <span>{navItems.title}<em>/</em></span>:null}<span style={{color:'#A1753A'}}>{currentItem}<em></em></span></h4>
                <div className="template-container clear-fix">
                    <div className="template-nav float-left">
                        <h3>{navItems.title || navItems.firstTitle}</h3>
                        <ul>
                            {
                                navItems.items ?
                                    navItems.items.map( (item,index) => (
                                            <li key={index} className={match.params.type === item.type  || this.props.type === item.type ? 'active' : ''}>
                                                <Link to={item.linkUrl || '/'} className="text-ellipsis">{item.title}</Link>
                                                {
                                                    match.params.type === item.type || this.props.type === item.type ?
                                                        (
                                                            <div className='template-nav-sub'>
                                                                {
                                                                    item.items ?
                                                                        (
                                                                            item.items.map( (subItem,subIndex) => (
                                                                                <Link to={subItem.linkUrl} key={subIndex} className={match.params.subType === subItem.type ? 'active text-ellipsis' : 'text-ellipsis'}>{subItem.title}</Link>
                                                                            ))
                                                                        ):null
                                                                }
                                                            </div>
                                                        ):null
                                                }
                                            </li>
                                        )):null
                            }
                        </ul>
                    </div>
                    <div className="template-body float-right">
                        {
                            this.props.children
                        }
                    </div>
                </div>
            </div>
        );
    }

    componentWillReceiveProps(nextProps){
        // //if(this.props === nextProps) return;
        //
        // const {navItems,match} = nextProps;
        //
        // if(navItems.items){
        //     navItems.items.map( item => {
        //         if(match.params.type === item.type || this.props.type === item.type) {
        //             console.log(this.props.type,item.type)
        //             this.setState({currentItem:item.title});
        //         }
        //     })
        // }
    }
}

export default withRouter(SubPageTemplate)
