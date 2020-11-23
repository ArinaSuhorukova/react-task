import React, {useEffect, useState} from 'react';
import {Button, Input} from 'reactstrap';
import {connect} from 'react-redux';

import CounterButtons from './CounterButtons';
import {emptyProduct} from '../data/constants';
import {addProduct, setMockedData} from '../redux/actions'
import IconMenu from './IconMenu';
import axios from "axios";

const AddProductPanel = ({dispatch}) => {

    useEffect(() => {
        axios.get('https://demo1714774.mockable.io/react_task_asuhorukova').then(response => {
            dispatch(setMockedData(response.data))
        }).catch(error => {
                console.log(error)
            }
        );
    }, []);

    const [product, setProduct] = useState(emptyProduct);

    const isAddButtonDisabled = () => {
        return product.name === '' || product.price === '';
    };

    const handleAddProduct = () => {
        dispatch(addProduct(product));
        setProduct(emptyProduct);
    };

    const handleChangeInput = (fieldName) => e => {
        setProduct({...product, [fieldName]: e.target.value});
    };

    const handleChangeIcon = index => {
        setProduct({...product, iconId: index});
    };

    const handleChangeAmount = newValue => {
        setProduct({...product, amount: newValue});
    };

    return (
        <div className='ProductPanel'>
            <h4>Add product to your cart list</h4>

            <Input id='ProductNameInput'
                   className='ProductPanelElement'
                   onChange={handleChangeInput('name')}
                   placeholder='Product name'
                   value={product.name}/>
            <Input id='ProductPriceInput'
                   className='ProductPanelElement'
                   onChange={handleChangeInput('price')}
                   placeholder='Product price'
                   type='number'
                   value={product.price}/>

            <CounterButtons amount={product.amount} onChangeValue={handleChangeAmount}/>
            <IconMenu iconId={product.iconId} onIconChanged={handleChangeIcon}/>

            <Button className='ProductPanelElement' onClick={handleAddProduct} disabled={isAddButtonDisabled()}>
                Add to list
            </Button>

        </div>
    );
};

export default connect()(AddProductPanel);