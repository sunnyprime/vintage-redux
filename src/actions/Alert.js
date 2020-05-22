import { SET_ALERT, REMOVE_ALERT } from "./Type";

export const setAlert =(msg,alertType) => dispatch => {
    dispatch({type:SET_ALERT,payload:{msg:msg,type:alertType,show:true}})
}




export const removeAlert = () =>dispatch =>{

    dispatch({ type:REMOVE_ALERT})

}