import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

class DepositCalculate extends React.Component {
    constructor(props, contexts) {
        super(props, contexts);
        this.state = {
            coinType: 'rmb',
            dateType: "default",
            depositNumber: '',
            depositRate: '',
            depositDate: '',
            accrual: '',
            accrualTax: '',
            total: '',
            months: {
                sy: 3,
                ly: 6,
                yn: 12,
                ln: 24,
                sn: 36,
                wn: 60
            },
            rates: {
                hq: 0.36,
                sy: 1.71,
                ly: 1.98,
                yn: 2.25,
                ln: 2.79,
                sn: 3.33,
                wn: 3.6
            }
        }
    }

    render() {

        return (
            <div className="deposit-calculate-container">
                <h2><Link to="/">首页</Link><em>/</em><span>存款计算</span></h2>
                <div className="deposit-calculate-main">
                    <h4>存款计算（仅供参考）</h4>
                    <div className="submit-container">
                        <div className="deposit-calculate-item">
                            <span>币种</span>
                            <select name="coinType" value={this.state.coinType} onChange={this.changeHandle.bind(this)}>
                                <option value="rmb">人民币</option>
                            </select>
                        </div>
                        <div className="deposit-calculate-item">
                            <span>期限种类</span>
                            <select name="dateType" value={this.state.dateType} onChange={this.changeHandle.bind(this)}>
                                <option value="default">请选择期限种类</option>
                                <option value="hq">活期</option>
                                <option value="sy">整存整取 三个月</option>
                                <option value="ly">整存整取 半年</option>
                                <option value="yn">整存整取 一年</option>
                                <option value="ln">整存整取 二年</option>
                                <option value="sn">整存整取 三年</option>
                                <option value="wn">整存整取 五年</option>
                            </select>
                        </div>
                        <div className="deposit-calculate-item">
                            <span>存款金额</span>
                            <input type="text" name="depositNumber" value={this.state.depositNumber}
                                   onChange={this.changeHandle.bind(this)} maxLength={15}/>元
                        </div>
                        <div className="deposit-calculate-item">
                            <span>年利率</span>
                            <input type="text" name="depositRate" value={this.state.depositRate}
                                   onChange={this.changeHandle.bind(this)} maxLength={10}/>%
                        </div>
                        <div className="deposit-calculate-item">
                            <span>存期	</span>
                            <input type="text" name="depositDate" value={this.state.depositDate}
                                   onChange={this.changeHandle.bind(this)} maxLength={10}/>月
                        </div>
                        <div className="deposit-btn">
                            <button onClick={this.reset.bind(this)}>重置</button>
                            <button onClick={this.submit.bind(this)}>计算</button>
                        </div>
                    </div>
                    <div className="show-container">
                        <div className="deposit-calculate-item">
                            <span>利息</span>
                            <input type="text" name="accrual" readOnly value={this.state.accrual}
                                   onChange={this.changeHandle.bind(this)}/>元
                        </div>
                        <div className="deposit-calculate-item">
                            <span>利息税款</span>
                            <input type="text" name="accrualTax" readOnly value={this.state.accrualTax}
                                   onChange={this.changeHandle.bind(this)}/>元
                        </div>
                        <div className="deposit-calculate-item">
                            <span>本息合计</span>
                            <input type="text" name="total" readOnly value={this.state.total}
                                   onChange={this.changeHandle.bind(this)}/>元
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeHandle(event) {
        const currentElem = event.currentTarget;
        const name = currentElem.name;
        const value = currentElem.value;

        this.setState({[name]: value});

        if (name === 'dateType') {
            const rate = this.state.rates[value];
            if (rate !== undefined) this.setState({depositRate: rate});

            const month = this.state.months[value];
            if (month !== undefined) this.setState({depositDate: month});
        }

    }

    reset() {
        const obj = this.state;
        for (let key in obj) {
            this.setState({
                [key]: key === 'coinType' ? 'rmb' : key === 'dateType' ? 'default' :
                    key === 'months' ? this.state.months : key === 'rates' ? this.state.rates : ''
            })
            ;
        }
    }

    submit() {
        const {depositNumber, depositDate, depositRate} = this.state;

        if (depositNumber === '') return alert('请输入存款金额！');
        if (isNaN(depositNumber)) return alert('请输入纯数字存款金额！');
        if (depositRate === '') return alert('年利率不能为空！');
        if (isNaN(depositRate)) return alert('请输入纯数字年利率！');
        if (depositDate === '') return alert('存期不能为空！');
        if (isNaN(depositDate)) return alert('请输入纯数字存期！');

        this.props.submit({money: depositNumber, timeLimit: depositDate, interestRate: depositRate})
            .then(response => {
                if (response.code === 200) {
                    this.setState(prevState => {
                        const accrual = response.data.revenuedInterest || '';
                        const accrualTax = response.data.interestRevenue || '';
                        const total = response.data.amount || '';

                        return {
                            accrual: Math.round(accrual * 100) / 100,
                            accrualTax: Math.round(accrualTax * 100) / 100,
                            total: Math.round(total * 100) / 100
                        }
                    })
                }
            });
    }
}

export default DepositCalculate
