import React from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import CounterButtons from "./CounterButtons";
import {deleteIcon, iconList, linkIcon} from "../data/constants";
import {changeAmount, deleteProduct} from "../redux/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function ProductItem({dispatch, product}) {

    const {id, name, amount, price, iconId} = product;
    const total = price * amount;

    const handleChangeAmount = newValue => dispatch(changeAmount(id, newValue));

    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product.id))
    };

    return (
        <div className='Product'>
            <div className='Product__content'>{name}</div>
            <ButtonGroup className='Product__controls Product__controls__right'>
                <Button onClick={handleDeleteProduct}>{deleteIcon}</Button>
                <Link className='btn btn-secondary' to={`/${id}`}>{linkIcon}</Link>
            </ButtonGroup>

            <div className='Product__icon'>{iconList[iconId]}</div>
            <CounterButtons amount={amount} onChangeValue={handleChangeAmount}/>
            <div className='Product__content'>Total: {total}</div>

        </div>
    )
}

export default connect()(ProductItem)