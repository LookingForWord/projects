/**
 * 处理列表信息模块
 */
import {$http} from '../fetch'

export default function getData(url,page,pageSize,clumns){

    $http({url,data:{page,pageSize},headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
        .then( response=> {
            if(response.code === 200){

                if(response.data && response.data.content){
                    const data = response.data.content;

                    const result = data.map( item => ({
                        id:item.id,
                        title:item.title,
                        date:item.createTime ? item.createTime.split(' ')[0] : ''
                    }));

                    this.setState({[clumns]:{data:result},total:response.data.totalElements})
                }else this.setState({[clumns]:{},total:0});

            }else this.setState({[clumns]:{},total:0});
        });
}
