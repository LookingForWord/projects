import React from 'react'
import './style.scss'

class Page extends React.Component {
    constructor(props, contexts) {
        super(props, contexts);

        const total = props.total || 0;
        const pageSize = props.pageSize || 8;
        const pageAccount = Math.ceil(total / pageSize);

        this.state = {
            total,
            pageSize,
            pageAccount,
            items: [],
            currentPage: props.currentPage || 1,
            showPageAccount: props.showPageAccount || 6,
            startPage: 1,
        }
    }

    render() {

        return (
            this.state.total !== 0 ?
            <div className="page-container">
                <span className="page-prev" onClick={this.changeShowPageAccount.bind(this)}>上一页</span>
                <span className="page-count-items">
                    {
                        this.createPageItems()
                    }
                </span>
                <span className="page-next" onClick={this.changeShowPageAccount.bind(this)}>下一页</span>
            </div> :null
        );
    }

    createPageItems() {
        const items = [];
        for (let i = this.state.startPage; i <= this.state.pageAccount; i++) {

            if (i > this.state.showPageAccount) {
                items.push(<span className="page-item" key={i}
                                 onClick={this.changeShowPageAccount.bind(this)}>...</span>);
                break;
            }

            items.push(
                <span className={`page-item ${i === this.state.currentPage ? 'active' : ''}`} key={i}
                      onClick={this.clickItem.bind(this)}
                >{i}</span>
            );
        }

        return items;
    }

    changeShowPageAccount(event) {
        const currentElem = event.currentTarget;
        if (!currentElem) return;

        if (currentElem.className === 'page-prev') {
            this.setState(prevState => {
                let currentPage = prevState.currentPage - 1;
                if (currentPage <= 0) return;

                let startPage = prevState.startPage;
                let showPageAccount = prevState.showPageAccount;
                if (currentPage < prevState.startPage) {
                    --startPage;
                    --showPageAccount
                }

                this.clickHandle(prevState.pageSize, currentPage);

                return {
                    currentPage,
                    startPage,
                    showPageAccount
                }
            });
        } else if (currentElem.className === 'page-next') {
            this.setState(prevState => {
                let currentPage = prevState.currentPage + 1;

                if (currentPage > prevState.pageAccount) return;

                let startPage = prevState.startPage;
                let showPageAccount = prevState.showPageAccount;
                if (currentPage > prevState.showPageAccount) {
                    ++startPage
                    ++showPageAccount;
                }

                this.clickHandle(prevState.pageSize, currentPage);

                return {
                    currentPage,
                    startPage,
                    showPageAccount: showPageAccount
                }
            });
        } else if (currentElem.className === 'page-item') {
            this.setState(prevState => {
                let startPage = prevState.startPage;
                let showPageAccount = prevState.showPageAccount;
                if (prevState.currentPage > startPage) {
                    ++startPage
                    ++showPageAccount;
                }

                return {
                    startPage,
                    showPageAccount: showPageAccount
                }
            });
        }
    }

    clickHandle(pageSize, currentPage) {
        const {clickHandle} = this.props;
        if (clickHandle) clickHandle(pageSize, currentPage);
    }

    clickItem(event) {
        const currentElem = event.currentTarget;
        if (!currentElem) return;
        const currentPage = Number(currentElem.innerHTML);

        if(currentPage !== this.state.currentPage){
            this.setState({currentPage});
            this.clickHandle(this.state.pageSize,currentPage);
        }
    }
}

export default Page
