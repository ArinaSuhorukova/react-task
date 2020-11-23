import {ActionTypes} from "../data/constants";
import nextId from "react-id-generator";

export const reducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD : {
            return state.concat({...action.product, id: nextId()})
        }
        case ActionTypes.DELETE : {
            return state.filter(product => product.id !== action.id)
        }
        case ActionTypes.CHANGE_AMOUNT : {
            return state.map(product => (product.id === action.id) ? {...product, amount: action.amount} : product)
        }
        case ActionTypes.SET_MOCKED_DATA: {
            return action.productList;
        }
        default: {
            return state;
        }
    }
};