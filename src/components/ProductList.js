import React from 'react';
import {connect} from 'react-redux';
import ProductItem from "./ProductItem";

const ProductList = ({productList}) => {

    const countTotalAmount = () => {
        return productList.reduce((total, product) => total + product.price * product.amount, 0)
    };
    return (
        <div className='ProductListPanel'>
            <h4>Product list</h4>
            {
                productList.map(product => <ProductItem product={product}
                                                        key={product.id}/>)
            }
            {
                productList.length > 0 && <span>Total: {countTotalAmount()}</span>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        productList: state
    };
};

export default connect(mapStateToProps)(ProductList)