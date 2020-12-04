import React from 'react';
import {Button} from 'reactstrap';

const CounterButtons = ({amount, onChangeValue}) => {

    return (
        <div className='Counter'>
            <Button className='Counter__content' disabled={amount === 1}
                    onClick={() => onChangeValue(amount - 1)}>-</Button>

            <label className='Counter__content'>{amount}</label>

            <Button className='Counter__content'
                    onClick={() => onChangeValue(amount + 1)}>+</Button>
        </div>
    );
};

export default CounterButtons