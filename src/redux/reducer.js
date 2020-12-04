import {ActionTypes, initState} from "../data/constants";
import nextId from "react-id-generator";

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.ADD : {
            return {...state, products: state.products.concat({...action.product, id: nextId()})}
        }
        case ActionTypes.DELETE : {
            return {...state, products: state.products.filter(product => product.id !== action.id)}
        }
        case ActionTypes.CHANGE_AMOUNT : {
            return {
                ...state, products: state.products.map(product => (product.id === action.id) ?
                    {...product, amount: action.amount} : product)
            }
        }
        case ActionTypes.SET_MOCKED_DATA: {
            return {...state, products: action.productList}
        }
        case ActionTypes.SHOW_LOADER : {
            return {...state, app: {...state.app, isLoading: true}}
        }
        case ActionTypes.HIDE_LOADER : {
            return {...state, app: {...state.app, isLoading: false}}
        }
        case ActionTypes.SHOW_ALERT : {
            return {...state, app: {...state.app, error: action.message}}
        }
        case ActionTypes.HIDE_ALERT : {
            return {...state, app: {...state.app, error: null}}
        }
        default: {
            return state;
        }
    }
};