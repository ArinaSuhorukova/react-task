import React from 'react';
import {iconList} from "../data/constants";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function ProductDetails({product}) {

    const {name, amount, price, iconId} = product;
    return (
        <div className='ProductDetails'>
            <h4 className='ProductDetails__title'>{name}</h4>
            <div className='ProductDetails__content'>
                {iconList[iconId]}
                <div className='ProductDetails__content__item'>Count: {amount}</div>
                <div className='ProductDetails__content__item'>Price: {price}</div>
                <div className='ProductDetails__content__item'>Total: {price * amount}</div>
                <Link className='btn btn-secondary' to={''}>To List</Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    product: state.products.find(p => p.id === props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);