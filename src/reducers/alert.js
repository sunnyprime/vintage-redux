import { SET_ALERT,REMOVE_ALERT } from "../actions/Type"

const initialState = [   {}  
]

export default function(state= initialState, action){

    switch (action.type) {
        case SET_ALERT:
            return [action.payload]
        case REMOVE_ALERT:
            return [{msg:"",show:false,type:""}]
        default:
            return state;
            
       
    }
}