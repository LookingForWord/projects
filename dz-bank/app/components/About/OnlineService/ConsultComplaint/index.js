import React from 'react'
import './style.scss'

class ConsultComplaint extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            username:'',
            phone:'',
            email:'',
            content:''
        }
    }

    render(){
        return (
            <div className="consult-complaint-container">
                <div className="template-body-banner">
                    <img src={require('../../../../static/images/about_banner_zxfw.jpg')} title='咨询与投诉'/>
                </div>
                <div className="template-body-content overflow-top">
                    <h2>咨询与投诉</h2>
                    <div className="consult-complaint-main">
                        <div className="consult-complaint-form">
                            <div className="consult-complaint-item-first">
                                <label htmlFor="username" className="inline-block">*姓名<input type="text" name="username" maxLength={40} id="username" autoComplete="off" value={this.state.username} onChange={this.changeHandle.bind(this)}/></label>
                                <label htmlFor="phone" className="inline-block">*手机<input type="text" name="phone" id="phone" maxLength={11} autoComplete="off" value={this.state.phone} onChange={this.changeHandle.bind(this)}/></label>
                                <label htmlFor="email" className="inline-block email">*E-mail<input type="text" name="email" id="email" maxLength={20} autoComplete="off" value={this.state.email} onChange={this.changeHandle.bind(this)}/></label>
                            </div>
                            <div className="consult-complaint-item-second">
                                <label htmlFor="content">*内容<textarea name="content" maxLength={500} id="content" autoComplete="off" value={this.state.content} onChange={this.changeHandle.bind(this)}/></label>
                            </div>
                        </div>
                        <div className="consult-complaint-footer">注：①您的意见对我们非常宝贵，我们将尽力在收到您反馈后两个工作日内联络您；<p>②客户服务热线：028-962559（四川省外用户拨打028-962559）；</p></div>
                        <div className="btn">
                            <button onClick={this.reset.bind(this)}>重置</button>
                            <button onClick={this.submit.bind(this)}>提交</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeHandle(event){
        const currentElem = event.currentTarget;
        const value = currentElem.value;
        const name = currentElem.name;
        this.setState({[name]:value});
    }

    reset(){
        this.setState( prevState => {
            const obj = {};
            for(let key in prevState){
                obj[key] = '';
            }

            return obj;
        })
    }

    submit(){
        if(this.state.username === '') return alert('姓名不能为空！');

        if(this.state.phone === '') return alert('手机号不能为空！');
        else{
            const reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
            if(!reg.test(this.state.phone)) return alert('手机号格式错误！')
        }

        if(this.state.email === '') return alert('邮箱不能为空！');
        else{
            const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
            if(!reg.test(this.state.email)) return alert('邮箱格式错误！')
        }

        if(this.state.content === '')return alert('内容不能为空！');

        this.props.submit({
            consumerName:this.state.username,
            consumerMobile:this.state.phone,
            consumerEmail:this.state.email,
            content	:this.state.content
        }).then( response => {
            if(response.code === 200) this.reset();
        })
    }
}

export default ConsultComplaint
