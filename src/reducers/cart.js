import {REMOVE,INCREASE,DECREASE,ADD_TO_CART,CLEAR_CART} from "../actions/Type"
function getCartFromLocalStorage() {
    return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
const initialState = {
    name:"cart",
    items:[],
    total:0
}



export default function(state=initialState,action)  {
    // console.log("Cart Reducer");
    // console.log(action);
    var local_data=localStorage.getItem("cart")

    // console.log(local_data);
    local_data=JSON.parse(local_data)
    
    const {type,payload} = action
    // console.log(payload);
    // console.log(type);
    var a=10
    var item_data=[]
    if(local_data){
    var item_data=local_data.items
    }
  
    
    // console.log(state.items);
    

    
    
    
        
        
        if (type===REMOVE){   
            item_data = state.items.filter(item => item.id !== payload)          
}
            
        
        if (type===INCREASE){            
            item_data = state.items.map(item=>{
                return item.id === payload
                ? { ...item,amount: item.amount + 1}
                : {...item}
            })
           
            
        }
            
        if (type===DECREASE){   
            if(state.items){           
            let checkItem = state.items.find(item=> item.id === payload)        
            if(checkItem.amount===1){    
                item_data = state.items.filter(item => item.id !== payload)
            }}
            else{            
            item_data = state.items.map(item=>{
            return item.id === payload
            ? { ...item,amount: item.amount - 1}
            : {...item}
        })
    }
      
    }
  

        if (type===ADD_TO_CART){
            const {id,imageurl,title,price} = payload
            let product = {id,imageurl,title,price,amount:1}
            if(state.items){ 
            const item_flag = state.items.find(item=> item.id===product.id)
            
            if(item_flag){                               
                const newcart = state.items.map(item => {
                    return item.id === product.id
                    ? { ...item,amount:item.amount+1}
                    :{...item}
                })         
          
                       
                item_data=newcart
            }}
            else{

            item_data=[...state.items,product]
            }
        }
        

        if (type===CLEAR_CART){
            console.log("clear cart added");            
           item_data=[]

        }  
        let Total=0       
        if(item_data){
        let Total = item_data.reduce((total, cartItems)=>{
            return (total += cartItems.amount * cartItems.price)
        }, 0)
        }
       
        var data={...state,items:item_data,total:Total}
        data=JSON.stringify(data)
        // console.log(data);
        localStorage.setItem("cart",data)
        
        return {...state,items:item_data,total:Total}
    }    
    
    
