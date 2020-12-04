import React from 'react'
import {MdDelete} from "react-icons/md";
import {FiLink} from "react-icons/fi";
import {GiCarrot, GiCupcake, GiMeat, GiShinyApple, GiShoppingCart} from "react-icons/gi";

export const initState = {
    products: [],
    isLoading: false,
    error: null
};

export const iconList = [
    <GiShoppingCart className='ProductIcon'/>,
    <GiShinyApple className='ProductIcon'/>,
    <GiCarrot className='ProductIcon'/>,
    <GiCupcake className='ProductIcon'/>,
    <GiMeat className='ProductIcon'/>,

];

export const deleteIcon = <MdDelete className='ButtonMenuIcon'/>;
export const linkIcon = <FiLink className='ButtonMenuIcon'/>;

export const ActionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    CHANGE_AMOUNT: 'CHANGE_AMOUNT',
    SET_MOCKED_DATA: 'SET_MOCKED_DATA',
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
    SHOW_ALERT: 'SHOW_ALERT',
    HIDE_ALERT: 'HIDE_ALERT'
};

export const emptyProduct = {
    price: '',
    name: '',
    amount: 1,
    iconId: 0
};