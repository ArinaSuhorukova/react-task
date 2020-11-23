import React, {useState} from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import CounterButtons from "./CounterButtons";
import {deleteIcon, iconList, linkIcon} from "../data/constants";
import {changeAmount, deleteProduct} from "../redux/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function ProductItem({dispatch, product}) {
    const [total, updateTotal] = useState(product.price * product.amount)

    const handleChangeAmount = (newValue) => {
        dispatch(changeAmount(product.id, newValue))
        updateTotal(product.price * newValue)
    }

    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product.id))
    }

    return (
        <div className='ProductListElement'>
            <div className='ProductItemElement'>{product.name}</div>
            <ButtonGroup className='RightCornerPanel ProductItemElement'>
                <Button onClick={handleDeleteProduct}>{deleteIcon}</Button>
                <Link className='btn btn-secondary' to={'/' + product.id}>{linkIcon}</Link>
            </ButtonGroup>

            <div className='ProductItemIcon'>{iconList[product.iconId]}</div>
            <CounterButtons amount={product.amount} onChangeValue={handleChangeAmount}/>
            <div className='ProductItemElement'>Total: {total}</div>

        </div>
    )
}

export default connect()(ProductItem)