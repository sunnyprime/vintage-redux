import axios from 'axios'
import { setAlert } from "../actions/Alert"
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
}
from "./Type"


// Register User
export const register = ({username, email, password}) =>async dispatch => {

    const body ={
        username,
        email,
        password
    }
    

    try {          
        
        const res= await axios.post("http://localhost:1337/auth/local/register",body)      
        
        // console.log(res.data);
        
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
        // dispatch(loadUser())
    }
    catch(err){
               
        var errors = err.response.data.errors
        if (errors===undefined)
        {
            errors = err.response.data.error
        }
        // console.log(errors);               
        
        if (errors) {       
            dispatch(setAlert(errors,"danger"))
        }
        dispatch({
            type:REGISTER_FAIL
        })

    }
}

// LOGIN
export const login = ({ email, password }) =>async dispatch => {

    const body ={
        identifier:email,
        password:password
    }

    // console.log(body);
    

    try {
        
        
        const res= await axios.post("http://localhost:1337/auth/local",body)      
        
        // console.log(res.data);
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        // dispatch(loadUser())
    }
    catch(err){
               
        var errors = err.response.data.errors
        if (errors===undefined)
        {
            errors = err.response.data.error
        }
        // console.log(errors);
        
               
        
        if (errors) {
            dispatch(setAlert(errors,"danger"))
        }
        dispatch({
            type:LOGIN_FAIL
        })

    }
}

// LOGOUT / CLEAR PROFILE
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}