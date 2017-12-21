import React from 'react'
import './style.scss'

class PersonalLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state = {
            username:'',
            sex:'',
            nation:'',
            idType:'',
            idNumber:'',
            address:'',
            contactAddress:'',
            phone:'',
            unit:'',
            workAddress:'',
            workType:'gy',
            applyType:'xfdk',
            lineCredit:'',
            creditPeriod:'',
            guaranteeType:'zy',
            guarantee:'',
            data:{
                gy:'国有',
                jt:'集体',
                sy:'私营',
                gt:'个体',
                ly:'联营',
                gf:'股份',
                wz:'外资',
                gat:'港澳台',
                zwhzi:'中外合资',
                zwhz:'中外合作',
                hh:'合伙',
                qt:'其他',
                xfdk:"个人消费性贷款",
                jydk:'个人经营性贷款',
                zy:'质押',
                dy:'抵押',
                bz:'保证',
                xy:'信用'
            }
        }
    }

    render(){

        return (
            <div className="personal-loan-container">
                <div className="template-body-banner">
                    <img src={require('../../../../../static/images/about_banner_zxfw.jpg')} title='个人授信业务申请'/>
                </div>
                <div className="template-body-content overflow-top">
                    <h2>个人授信业务申请</h2>
                    <div className="personal-loan-main">
                        <div className="personal-loan-form">
                            <div className="personal-loan-form-item">
                                <div className="username inline-block">
                                    <label htmlFor="username"><span className="inline-block">申请人姓名</span><input type="text" id="username" name="username" maxLength={40} value={this.state.username} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                                <div className="sex inline-block">
                                    <label htmlFor="sex"><span className="inline-block">性别</span><input type="text" id="sex" name="sex" maxLength={4} value={this.state.sex} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                                <div className="nation inline-block">
                                    <label htmlFor="nation"><span className="inline-block">民族</span><input type="text" id="nation" name="nation" maxLength={10} value={this.state.nation} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="id-type inline-block">
                                    <label htmlFor="idType"><span className="inline-block">证件类型</span><input type="text" id="idType" name="idType" maxLength={10} value={this.state.idType} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                                <div className="id-number inline-block">
                                    <label htmlFor="idNumber"><span className="inline-block">证件号码</span><input type="text" id="idNumber" name="idNumber" maxLength={20} value={this.state.idNumber} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="address">
                                    <label htmlFor="address"><span className="inline-block">家庭地址</span><input type="text" name="address" id="address" maxLength={30} value={this.state.address} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="contact-address">
                                    <label htmlFor="contactAddress"><span className="inline-block">联系地址</span><input type="text" name="contactAddress" maxLength={30} id="contactAddress" value={this.state.contactAddress} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="phone">
                                    <label htmlFor="phone"><span className="inline-block">联系电话</span><input type="text" name="phone" maxLength={11} value={this.state.phone} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="unit">
                                    <label htmlFor="unit"><span className="inline-block">工作单位</span><input type="text" name="unit" id="unit" maxLength={20} value={this.state.unit} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="work-address">
                                    <label htmlFor="workAddress"><span className="inline-block">单位地址</span><input type="text" maxLength={20} name="workAddress" id="workAddress" value={this.state.workAddress} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item work-type-form-item">
                                <div className="work-type">
                                    <span className="inline-block">单位性质</span>
                                    <div className="work-type-item">
                                        <label className="inline-block default"><em className={this.state.workType === 'gy' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='gy' onChange={this.changeHandle.bind(this)}/>国有</label>
                                        <label className="inline-block"><em className={this.state.workType === 'jt' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='jt' onChange={this.changeHandle.bind(this)}/>集体</label>
                                        <label className="inline-block"><em className={this.state.workType === 'sy' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='sy' onChange={this.changeHandle.bind(this)}/>私营</label>
                                        <label className="inline-block"><em className={this.state.workType === 'gt' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='gt' onChange={this.changeHandle.bind(this)}/>个体</label>
                                        <label className="inline-block"><em className={this.state.workType === 'ly' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='ly' onChange={this.changeHandle.bind(this)}/>联营</label>
                                        <label className="inline-block"><em className={this.state.workType === 'gf' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='gf' onChange={this.changeHandle.bind(this)}/>股份</label>
                                        <label className="inline-block"><em className={this.state.workType === 'wz' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='wz' onChange={this.changeHandle.bind(this)}/>外资</label>
                                        <label className="inline-block"><em className={this.state.workType === 'gat' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='gat' onChange={this.changeHandle.bind(this)}/>港澳台</label>
                                        <label className="inline-block"><em className={this.state.workType === 'zwhzi' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='zwhzi' onChange={this.changeHandle.bind(this)}/>中外合资</label>
                                        <label className="inline-block"><em className={this.state.workType === 'zwhz' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='zwhz' onChange={this.changeHandle.bind(this)}/>中外合作</label>
                                        <label className="inline-block"><em className={this.state.workType === 'hh' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='hh' onChange={this.changeHandle.bind(this)}/>合伙</label>
                                        <label className="inline-block"><em className={this.state.workType === 'qt' ? 'active' : ''}><b/></em><input type="radio" name="workType" value='qt' onChange={this.changeHandle.bind(this)}/>其他</label>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="apply-type">
                                    <span className="inline-block">申请授信业务类型</span>
                                    <div className="apply-type-item">
                                        <label className="inline-block default"><em className={this.state.applyType === 'xfdk' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='xfdk' onChange={this.changeHandle.bind(this)}/>个人消费性贷款</label>
                                        <label className="inline-block"><em className={this.state.applyType === 'jydk' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='jydk' onChange={this.changeHandle.bind(this)}/>个人经营性贷款</label>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="line-credit inline-block">
                                    <label htmlFor="lineCredit"><span className="inline-block">申请个人授信总额度</span><input type="text" maxLength={15} placeholder="如：1000000" id="lineCredit" name="lineCredit" autoComplete="off" value={this.state.lineCredit} onChange={this.changeHandle.bind(this)}/></label>
                                </div>
                                <div className="credit-period inline-block">
                                    <label htmlFor="creditPeriod"><span className="inline-block">授信期限</span><input type="text" id="creditPeriod" maxLength={10} name="creditPeriod" autoComplete="off" value={this.state.creditPeriod} onChange={this.changeHandle.bind(this)}/>月</label>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="guarantee-type">
                                    <span className="inline-block">选择担保方式</span>
                                    <div className="guarantee-type-item">
                                        <label className="inline-block default"><em className={this.state.guaranteeType === 'zy' ? 'active' : ''}><b/></em><input type="radio" name="guaranteeType" value='zy' onChange={this.changeHandle.bind(this)}/>质押</label>
                                        <label className="inline-block"><em className={this.state.guaranteeType === 'dy' ? 'active' : ''}><b/></em><input type="radio" name="guaranteeType" value='dy' onChange={this.changeHandle.bind(this)}/>抵押</label>
                                        <label className="inline-block"><em className={this.state.guaranteeType === 'bz' ? 'active' : ''}><b/></em><input type="radio" name="guaranteeType" value='bz' onChange={this.changeHandle.bind(this)}/>保证</label>
                                        <label className="inline-block"><em className={this.state.guaranteeType === 'xy' ? 'active' : ''}><b/></em><input type="radio" name="guaranteeType" value='xy' onChange={this.changeHandle.bind(this)}/>信用</label>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-loan-form-item">
                                <div className="guarantee">
                                    <label htmlFor="guarantee"><span className="inline-block">提供抵（质）押物明细</span><input type="text" name="guarantee" id="guarantee" autoComplete="off" placeholder="（选填项）" maxLength={20} value={this.state.guarantee} onChange={this.changeHandle.bind(this)}/></label>
                                </div>
                            </div>
                        </div>
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
                if(key === 'workType')  obj[key] = 'gy';
                else if(key === 'applyType' ) obj[key] = 'xfdk';
                else if(key === 'guaranteeType')obj[key] = 'zy';
                else if(key === 'data') obj[key] = prevState.data;
                else obj[key] = '';
            }

            return obj;
        })
    }

    submit(){
        const {username, idType, idNumber, address, contactAddress, phone, unit, workAddress,
            lineCredit, creditPeriod,sex,nation} = this.state;

        if(username === '')return alert('申请人不能为空！');
        if(sex === '')return alert('性别不能为空！');
        if(nation === '')return alert('民族不能为空！');
        if(idType === '')return alert('证件类型不能为空！');
        if(idNumber === '')return alert('证件号码不能为空！');
        if(!/^\+?[1-9][0-9]*$/.test(idNumber))return alert('请输入纯数字的证件号码！');
        if(address === '')return alert('请输入家庭地址！');
        if(contactAddress === '')return alert('请输入联系地址！');
        if(phone === '')return alert('请输入联系电话！');
        if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))return alert('手机号格式错误！');
        if(unit === '')return alert('请输入工作单位！');
        if(workAddress === '')return alert('请输入单位地址！');
        if(lineCredit === '')return alert('授信总额度不能为空！');
        if(!/^\+?[1-9][0-9]*$/.test(lineCredit))return alert('请输入纯数字的授信总额度！');
        if(creditPeriod === '')return alert('授信期限不能为空！');
        if(!/^\+?[1-9][0-9]*$/.test(creditPeriod))return alert('请输入正整数的授信期限！');

        this.props.submit({name:username, sex, nation, credentialsType:idType,
            credentialsNumber:idNumber, homeAddress:address, contactAddress	:contactAddress, contactMobile:phone,
            company	:unit, companyAddress	:workAddress, companyType:this.state.data[this.state.workType],
            loadType:this.state.data[this.state.applyType], loanLimit:lineCredit, creditLimit:creditPeriod,
            guaranteeType:this.state.data[this.state.guaranteeType], guaranteeDetail:this.state.guarantee
        }).then( response => {
            if(response.code === 200) this.reset();
        });
    }
}

export default PersonalLoan
