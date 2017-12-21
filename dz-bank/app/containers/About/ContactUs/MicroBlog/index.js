import React from 'react'
import MicroBlogComponent from '../../../../components/About/ContactUs/Microblog'

class MicroBlog extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <MicroBlogComponent data={this.state.data}/>
    }
}

export  default MicroBlog
