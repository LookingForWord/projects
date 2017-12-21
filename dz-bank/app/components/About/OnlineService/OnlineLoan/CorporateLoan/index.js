import React from 'react'
import './style.scss'

class  CorporateLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            username:'',
            applyType:'yxzrgs',
            registerDate:'',
            registerCapital:'',
            businessDate:'1',
            legalPerson:'',
            contacts:'',
            contactWay:'',
            businessScope:'',
            mainProduct:'',
            address:'',
            addressWay:'',
            lineCredit:'',
            loanPurpose : 'gdzc',
            loanPurposeOther:'',
            data:{
                yxzrgs:'有限责任公司',
                gfzgs:'股份制公司',
                grdz:'个人独资',
                gydz:'国有独资',
                sydw:'事业单位',
                qt:'其他',
                gdzc:'固定资产投资',
                ldzj:'流动资金周转',
            }
        }
    }

    render(){

        return (
            <div className="corporate-loan-container">
                <div className="template-body-banner">
                    <img src={require('../../../../../static/images/about_banner_zxfw.jpg')} title='法人客户授信业务申请'/>
                </div>
                <div className="template-body-content overflow-top">
                    <h2>法人客户授信业务申请</h2>
                    <div className="corporate-loan-main">
                        <div className="corporate-loan-form">
                            <div className="corporate-loan-form-item">
                                <div className="username">
                                    <label htmlFor="username"><span className="inline-block">授信申请人名称</span><input type="text" maxLength={40} id="username" name="username" value={this.state.username} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item apply-type-form-item">
                                <div className="apply-type">
                                    <span className="inline-block">授信申请人类型</span>
                                    <div className="apply-type-item">
                                        <label className="inline-block default"><em className={this.state.applyType === 'yxzrgs' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='yxzrgs' onChange={this.changeHandle.bind(this)}/>有限责任公司</label>
                                        <label className="inline-block"><em className={this.state.applyType === 'gfzgs' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='gfzgs' onChange={this.changeHandle.bind(this)}/>股份制公司</label>
                                        <label className="inline-block"><em className={this.state.applyType === 'grdz' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='grdz' onChange={this.changeHandle.bind(this)}/>个人独资</label>
                                        <label className="inline-block"><em className={this.state.applyType === 'gydz' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='gydz' onChange={this.changeHandle.bind(this)}/>国有独资</label>
                                        <label className="inline-block"><em className={this.state.applyType === 'sydw' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='sydw' onChange={this.changeHandle.bind(this)}/>事业单位</label>
                                        <label className="inline-block"><em className={this.state.applyType === 'qt' ? 'active' : ''}><b/></em><input type="radio" name="applyType" value='qt' onChange={this.changeHandle.bind(this)}/>其他</label>
                                    </div>
                                </div>
                            </div>

                            <div className="corporate-loan-form-item">
                                <div className="register-date inline-block">
                                    <label htmlFor="registerDate"><span className="inline-block">注册时间</span><input maxLength={10} type="text" id="registerDate" name="registerDate" placeholder="如:2017-12-04" value={this.state.registerDate} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                                <div className="register-capital inline-block">
                                    <label htmlFor="registerCapital"><span className="inline-block">注册资本</span><input type="text" maxLength={15} placeholder="如：1000000" id="registerCapital" name="registerCapital" value={this.state.registerCapital} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="business-scope">
                                    <label htmlFor="businessScope"><span className="inline-block">经营范围</span><input maxLength={20} type="text" name="businessScope" id="businessScope" value={this.state.businessScope} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="main-product">
                                    <label htmlFor="mainProduct"><span className="inline-block">主导产品</span><input maxLength={20} type="text" name="mainProduct" id="mainProduct" value={this.state.mainProduct} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="business-date">
                                    <span className="inline-block">已持续经营年限</span>
                                    <div className="business-date-item">
                                        <label className="inline-block default"><em className={this.state.businessDate === '1' ? 'active' : ''}><b/></em><input type="radio" name="businessDate" value='1' onChange={this.changeHandle.bind(this)}/>1年以下</label>
                                        <label className="inline-block"><em className={this.state.businessDate === '3' ? 'active' : ''}><b/></em><input type="radio" name="businessDate" value='3' onChange={this.changeHandle.bind(this)}/>1年以上3年以下</label>
                                        <label className="inline-block"><em className={this.state.businessDate === '3+' ? 'active' : ''}><b/></em><input type="radio" name="businessDate" value='3+' onChange={this.changeHandle.bind(this)}/>3年以上</label>
                                    </div>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="legal-person">
                                    <label htmlFor="legalPerson"><span className="inline-block">法定代表人</span><input type="text" maxLength={40} name="legalPerson" value={this.state.legalPerson} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="contacts inline-block">
                                    <label htmlFor="contacts"><span className="inline-block">联系人</span><input type="text" maxLength={40} name="contacts" id="contacts" value={this.state.contacts} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                                <div className="contact-way inline-block">
                                    <label htmlFor="contactWay"><span className="inline-block">联系方式</span><input type="text" maxLength={11} name="contactWay" id="contactWay" value={this.state.contactWay} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="address inline-block">
                                    <label htmlFor="address"><span className="inline-block">通讯地址</span><input type="text" maxLength={20} name="address" id="address" value={this.state.address} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                                <div className="address-way inline-block">
                                    <label htmlFor="addressWay"><span className="inline-block">联系方式</span><input type="text" maxLength={11} name="addressWay" id="addressWay" value={this.state.addressWay} onChange={this.changeHandle.bind(this)} autoComplete="off"/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="line-credit">
                                    <label htmlFor="lineCredit"><span className="inline-block">授信总额度</span><input maxLength={15} type="text" placeholder="如：1000000" id="lineCredit" name="lineCredit" autoComplete="off" value={this.state.lineCredit} onChange={this.changeHandle.bind(this)}/></label>
                                </div>
                            </div>
                            <div className="corporate-loan-form-item">
                                <div className="loan-purpose">
                                    <span className="inline-block">借款用途</span>
                                    <div className="loan-purpose-item">
                                        <label className="inline-block default"><em className={this.state.loanPurpose === 'gdzc' ? 'active' : ''}><b/></em><input type="radio" name="loanPurpose" value='gdzc' onChange={this.changeHandle.bind(this)}/>固定资产投资</label>
                                        <label className="inline-block"><em className={this.state.loanPurpose === 'ldzj' ? 'active' : ''}><b/></em><input type="radio" name="loanPurpose" value='ldzj' onChange={this.changeHandle.bind(this)}/>流动资金周转</label>
                                        <label className="inline-block loan-purpose-label"><em className={this.state.loanPurpose === 'qt' ? 'active' : ''}><b/></em><input type="radio" name="loanPurpose" value='qt' onChange={this.changeHandle.bind(this)}/>其它（列明）：<input
                                            type="text" name="loanPurposeOther"  className="loan-purpose-other" readOnly={this.state.loanPurpose !== 'qt'}
                                            value={this.state.loanPurposeOther} onChange={this.changeHandle.bind(this)} autoComplete="off" maxLength={20}/></label>
                                    </div>
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
                if(key === 'applyType')  obj[key] = 'yxzrgs';
                else if(key === 'businessDate' ) obj[key] = '1';
                else if(key === 'loanPurpose')obj[key] = 'gdzc';
                else if(key === 'data')obj[key] = prevState.data;
                else obj[key] = '';
            }

            return obj;
        })
    }

    submit(){
        const {username,registerDate,registerCapital,legalPerson,contacts,contactWay,lineCredit,
            businessScope, mainProduct, address, addressWay,businessDate} = this.state;
        const regDate = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/ig;

        if(username === '') return alert('请输入申请人名称！');
        if(registerDate === '') return alert('请输入注册时间！');
        if(! regDate.test(registerDate) || new Date(registerDate).getTime() <= 0)
            return alert('请输入正确的注册时间格式(如:2017-12-04)！');
        if(registerCapital === '') return alert('请输入注册资本！');
        if(!/^\+?[1-9][0-9]*$/.test(registerCapital))return alert('请输入纯数字的注册资本！');
        if(businessScope === '') return alert('请输入经营范围！');
        if(mainProduct === '') return alert('请输入主导产品！');
        if(legalPerson === '') return alert('请输入法定代表人！');
        if(contacts === '') return alert('请输入联系人！');
        if(contactWay === '') return alert('请输入联系方式！');
        if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(contactWay))return alert('手机号格式错误！');
        if(address === '') return alert('请输入通讯地址！');
        if(addressWay === '') return alert('请输入联系方式！');
        if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(addressWay))return alert('手机号格式错误！');
        if(lineCredit === '') return alert('请输入授信总额度！');
        if(!/^\+?[1-9][0-9]*$/.test(lineCredit))return alert('请输入纯数字的授信总额度！');

        let operateYears = businessDate === '1' ? '1年以下' : businessDate === '3' ? '1年以上3年以下' : businessDate === '3+' ? '3年以上' : ''
        this.props.submit({
            name:username,
            personalType:this.state.data[this.state.applyType],
            registerTime:registerDate,
            registerCapital,
            businessScope:businessScope,
            leadingProducts:mainProduct,
            operateYears,
            legalName:legalPerson,
            linkmanName:contacts,
            linkmanMobile:contactWay,
            address	:address,
            mobile:addressWay,
            loanLimit:lineCredit,
            uses:this.state.data[this.state.loanPurpose] === '其他' ? this.state.loanPurposeOther : this.state.data[this.state.loanPurpose],
        }).then( response => {
            if(response.code === 200) this.reset();
        });
    }
}

export default CorporateLoan
