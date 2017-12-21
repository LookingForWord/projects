import React from 'react'
import './style.scss'

const ProductDetail = ({data}) => {

    return (
        <div className="product-detail">
            <img src={require(`../../static/images/product_${data.id || 1}.jpg`)} alt="产品详情"/>
        </div>
    );
}

export default ProductDetail
