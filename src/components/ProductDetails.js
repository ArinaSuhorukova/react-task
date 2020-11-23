import React from 'react';
import {iconList} from "../data/constants";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function ProductDetails({product}) {

    return (
        <div className='ProductDetails'>
            <h4 className='ProductItemElement'>{product.name}</h4>
            <div className='ProductInfo'>
                {iconList[product.iconId]}
                <div className='ProductItemElement'>Count: {product.amount}</div>
                <div className='ProductItemElement'>Price: {product.price}</div>
                <div className='ProductItemElement'>Total: {product.price * product.amount}</div>
                <Link className='btn btn-secondary' to={''}>To List</Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    product: state.find(p => p.id === props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);