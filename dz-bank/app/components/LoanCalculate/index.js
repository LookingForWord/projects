import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

class LoanCalculate extends React.Component {
    constructor(props, contexts) {
        super(props, contexts);
        this.state = {
            loanType: 'grzfdk',
            loanNumber: '',
            loanDate: '',
            repaymentType: '1',
            loanRate: '',
            monthAccrual: '',
            monthCapital: '',
            totalAccrual: '',
            totalCapital: '',
            monthDecrease: '',
            firstAccrual: '',
            status: false,
            data: {
                grzfdk: '个人住房贷款',
                grzhxfdk: '个人综合消费贷款',
                grqcdk: '个人汽车贷款',
                grscjy: '个人生产经营'
            }
        }
    }

    render() {

        return (
            <div className="loan-calculate-container">
                <h2><Link to="/">首页</Link><em>/</em><span>贷款计算</span></h2>
                <div className="loan-calculate-main">
                    <h4>贷款计算</h4>
                    <div className="submit-container">
                        <div className="loan-calculate-item">
                            <span>贷款种类</span>
                            <select name="loanType" value={this.state.loanType} onChange={this.changeHandle.bind(this)}>
                                <option value="grzfdk">个人住房贷款</option>
                                <option value="grzhxfdk">个人综合消费贷款</option>
                                <option value="grqcdk">个人汽车贷款</option>
                                <option value="grscjy">个人生产经营</option>
                            </select>
                        </div>
                        <div className="loan-calculate-item">
                            <span>贷款金额</span>
                            <input type="text" name="loanNumber" maxLength={15} value={this.state.loanNumber}
                                   onChange={this.changeHandle.bind(this)}/>元
                        </div>
                        <div className="loan-calculate-item">
                            <span>详细期限</span>
                            <input type="text" name="loanDate" maxLength={10} value={this.state.loanDate}
                                   onChange={this.changeHandle.bind(this)}/>年
                        </div>
                        <div className="loan-calculate-item">
                            <span>还款方式</span>
                            <select name="repaymentType" value={this.state.repaymentType}
                                    onChange={this.changeHandle.bind(this)}>
                                <option value="1">等额本息还款</option>
                                <option value="0">等额本金还款</option>
                            </select>
                        </div>
                        <div className="loan-calculate-item">
                            <span>贷款利率(年利率)</span>
                            <input type="text" name="loanRate" maxLength={10} value={this.state.loanRate}
                                   onChange={this.changeHandle.bind(this)}/>%
                        </div>
                        <div className="loan-btn">
                            <button onClick={this.reset.bind(this)}>重置</button>
                            <button onClick={this.submit.bind(this)}>计算</button>
                        </div>
                    </div>
                    {
                        this.state.status ? (
                            <div className="show-container">
                                <div className="loan-calculate-item">
                                    <span>首月应付本息</span>
                                    <input type="text" name="firstAccrual" readOnly value={this.state.firstAccrual}
                                           onChange={this.changeHandle.bind(this)}/>元
                                </div>
                                <div className="loan-calculate-item">
                                    <span>每月递减</span>
                                    <input type="text" name="monthDecrease" readOnly value={this.state.monthDecrease}
                                           onChange={this.changeHandle.bind(this)}/>元
                                </div>
                                <div className="loan-calculate-item">
                                    <span>累计支付利息</span>
                                    <input type="text" name="totalAccrual" readOnly value={this.state.totalAccrual}
                                           onChange={this.changeHandle.bind(this)}/>元
                                </div>
                                <div className="loan-calculate-item">
                                    <span>累计还款总额</span>
                                    <input type="text" name="totalCapital" readOnly value={this.state.totalCapital}
                                           onChange={this.changeHandle.bind(this)}/>元
                                </div>
                            </div>
                        ) : (
                            <div className="show-container">
                                <div className="loan-calculate-item">
                                    <span>每月应付本息</span>
                                    <input type="text" name="monthAccrual" readOnly value={this.state.monthAccrual}
                                           onChange={this.changeHandle.bind(this)}/>元
                                </div>
                                <div className="loan-calculate-item">
                                    <span>累计支付利息</span>
                                    <input type="text" name="totalAccrual" readOnly value={this.state.totalAccrual}
                                           onChange={this.changeHandle.bind(this)}/>元
                                </div>
                                <div className="loan-calculate-item">
                                    <span>累计还款总额</span>
                                    <input type="text" name="totalCapital" readOnly value={this.state.totalCapital}
                                           onChange={this.changeHandle.bind(this)}/>元
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }

    changeHandle(event) {
        const currentElem = event.currentTarget;
        const name = currentElem.name;
        const value = currentElem.value;

        this.setState({[name]: value});

        if (name === 'repaymentType') {
            if (value === '1') this.setState({status: false});
            if (value === '0') this.setState({status: true});
        }
    }

    reset() {
        const obj = this.state;
        for (let key in obj) {
            this.setState({
                [key]: key === 'loanType' ? 'grzfdk' : key === 'repaymentType' ? '1' : key === 'status' ? false :
                    key === 'data' ? obj.data : ''
            });
        }
    }

    submit() {
        const {loanNumber, loanDate, repaymentType, loanRate} = this.state;

        if (loanNumber === '')return alert('请输入贷款金额！');
        if (isNaN(loanNumber)) return alert('请输入纯数字贷款金额！');
        if (loanDate === '')return alert('请输入详细期限！');
        if (isNaN(loanDate)) return alert('请输入纯数字详细期限！');
        if (loanRate === '')return alert('请输入贷款利率！');
        if (isNaN(loanRate)) return alert('请输入纯数字贷款利率！');

        this.props.submit({money: loanNumber, interestRate: loanRate, timeLimit: loanDate * 12, type: repaymentType})
            .then(response => {
                if (response.code === 200) {
                    const monthAccrual = response.data.totalPerMonth || '';
                    const totalAccrual = response.data.totalInterest || '';
                    const totalCapital = response.data.totalAll || '';
                    const monthDecrease = response.data.perMonthSubtractInterest || '';
                    const firstAccrual = response.data.firstMonthMoney || '';

                    this.setState({
                        monthAccrual:Math.round(monthAccrual * 100)/100,
                        totalAccrual:Math.round(totalAccrual * 100)/100,
                        totalCapital:Math.round(totalCapital * 100)/100,
                        monthDecrease:Math.round(monthDecrease * 100)/100,
                        firstAccrual:Math.round(firstAccrual * 100)/100
                    });
                }
            });
    }
}

export default LoanCalculate
