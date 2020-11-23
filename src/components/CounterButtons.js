import React from 'react';
import {Button} from 'reactstrap';

const CounterButtons = ({amount, onChangeValue}) => {

    return (
        <div className='Counter ProductPanelElement'>
            <Button className='CounterElement' disabled={amount === 1}
                    onClick={() => onChangeValue(amount - 1)}>-</Button>

            <label className='CounterElement'>{amount}</label>

            <Button className='CounterElement'
                    onClick={() => onChangeValue(amount + 1)}>+</Button>
        </div>
    );
};

export default CounterButtons