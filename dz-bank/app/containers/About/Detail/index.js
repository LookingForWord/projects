import React from 'react'
import DetailComponent from '../../../components/About/Detail'
import {NEWS,PUBLIC_NOTICE,INFORMATION,RECRUITMENT,REPORT} from '../../../constants'
import {$http} from '../../../fetch'

class Detail extends React.Component {
    constructor(props, contexts) {
        super(props, contexts);

        const {match} = props;
        let type = match.params.type === 'gsgg' ? '公司公告' :
                   match.params.type === 'xwdt' ? '新闻动态' :
                   match.params.type === 'zpgg' ? '招聘公告' :
                       match.params.type === 'xxplu' ? '信息披露' :
                    match.params.type === 'dqbg' ? '定期报告' : '';//gsgg xwdt dqbg

        let title = '信息披露 ';
        if(match.params.type === 'zpgg') title = '人才招聘';
        this.state = {
            type,
            data: {},
            title
        }
    }

    render() {

        return <DetailComponent type={this.state.type} title={this.state.title} data={this.state.data}/>
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        const {match} = this.props;
        const type = match.params.type;
        const id = match.params.id;
        let url = '';

        switch (type){
            case 'gsgg':
                url = PUBLIC_NOTICE;
                break;
            case 'xwdt':
                url = NEWS;
                break;
            case 'zpgg':
                url = RECRUITMENT;
                break;
            case 'xxplu':
                url = INFORMATION;
                break;
            case 'dqbg':
                url = REPORT;
                break;
            default:
                url = '';
                break;

        }

        if(url === '') return;

        $http({url:`${url}/${id}`,headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
            .then( response => {

                if(response.code === 200 && response.data){
                    const data = response.data;
                    this.setState({
                        data:{
                            title:data.title || '',
                            content:data.content || '',
                            date:data.createTime || ''
                        }
                    });
                }else this.setState({data:{}});
            });
    }
}

export default Detail

