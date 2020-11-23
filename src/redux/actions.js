import {ActionTypes} from "../data/constants";

export function addProduct(product){
    return {
        type: ActionTypes.ADD,
        product: product
    }
}

export function deleteProduct(id) {
    return {
        type: ActionTypes.DELETE,
        id: id
    }
}

export function changeAmount(id, newAmount) {
    return {
        type: ActionTypes.CHANGE_AMOUNT,
        id: id,
        amount: newAmount
    }
}

export function setMockedData(data) {
    return {
        type: ActionTypes.SET_MOCKED_DATA,
        productList: data
    }
}
