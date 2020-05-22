import {REMOVE,INCREASE,DECREASE,ADD_TO_CART,CLEAR_CART} from "./Type"


export const addtocart = (e) =>async dispatch => {
    // console.log("addtocart");
    // console.log(e);
    dispatch({
        type:ADD_TO_CART,
        payload:e
    })
    
    
}