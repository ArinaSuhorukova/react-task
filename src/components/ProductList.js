import React from 'react';
import {connect} from 'react-redux';
import ProductItem from "./ProductItem";
import {Alert, Spinner} from "reactstrap";

const ProductList = ({productList, isLoading, error}) => {

    const countTotalAmount = productList.reduce((total, product) => total + product.price * product.amount, 0);

    return (
        <div className='ProductListPanel'>
            <h4>Product list</h4>

            {isLoading &&
            <div className='ProductListPanel__spinner'>
                <Spinner color="secondary"/>
            </div>}

            {error && <Alert color="secondary">{error}</Alert>}

            {
                productList.map(product => <ProductItem product={product}
                                                        key={product.id}/>)
            }
            {
                productList.length > 0 && <span>Total: {countTotalAmount}</span>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        productList: state.products,
        isLoading: state.app.isLoading,
        error: state.app.error
    };
};

export default connect(mapStateToProps)(ProductList)