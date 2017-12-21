import React from 'react'
import ProductDetailComponent from '../../components/ProductDetail'

class ProductDetail extends React.Component{
    constructor(props,contexts){
        super(props,contexts);

        this.state={data:{}}
    }

    render(){
        return <ProductDetailComponent data={this.state.data}/>
    }

    componentDidMount(){
        const params = this.props.match.params;
        const id = params.id;
        if(id === undefined) return;

        this.setState({data:{id}});
    }
}

export default ProductDetail
