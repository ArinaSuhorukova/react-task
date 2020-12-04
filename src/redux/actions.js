import {ActionTypes} from "../data/constants";
import {getAllProducts} from "../services/productApi";

export function addProduct(product) {
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

export function showLoader() {
    return {
        type: ActionTypes.SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: ActionTypes.HIDE_LOADER,
    }
}

export function showErrorPopup(message) {
    return dispatch => {
        dispatch({
            type: ActionTypes.SHOW_ALERT,
            message: message
        });
        setTimeout(() => {
            dispatch(hideErrorPopup())
        }, 3000);
    }

}

export function hideErrorPopup() {
    return {
        type: ActionTypes.HIDE_ALERT,
    }
}

export function setMockedData() {
    return async dispatch => {
        try{
            dispatch(showLoader());
            const products = await getAllProducts();
            setTimeout(() => {
                dispatch({type: ActionTypes.SET_MOCKED_DATA, productList: products.data});
                dispatch(hideLoader())
            }, 500)
        }catch (e) {
            dispatch(showErrorPopup('Data was not loaded'));
            dispatch(hideLoader())
        }


    }
}
