// import React from 'react'
// // import localCart from '../utils/localCart'
// import reducer from "../reducers/cart"
// import {REMOVE,INCREASE,DECREASE,ADD_TO_CART,CLEAR_CART} from "../actions/Type"

// function getCartFromLocalStorage() {
//     return localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [];
// }

// const CartContext = React.createContext();

// function CartProvider({children}){
//     const [cart, setCart] = React.useState(reducer,getCartFromLocalStorage())
//     const [total, setTotal] = React.useState(0)
//     const [cartItems, setCartItems] = React.useState(0)

//     // React.useEffect(()=> {
//     //     //local storage
//     //     localStorage.setItem("cart",JSON.stringify(cart))
//     //     //cart items
//     //     let newCartItems = cart.reduce((total,cartItems)=>{   
            
//     //         return (total += cartItems.amount)
//     //     },0)
//     //     setCartItems(newCartItems)
//     //     // cart total
//     //     let newTotal = cart.reduce((total, cartItems)=>{
//     //         return (total += cartItems.amount * cartItems.price)
//     //     }, 0)
//     //     newTotal = parseFloat(newTotal.toFixed(2))
//     //     setTotal(newTotal)
//     // },[cart])

//     // remove item 
//     const removeItem = id => {
//         // setCart([...cart].filter(item => item.id !== id))
//         // dispatch({type:REMOVE,payload:id})
//     }
//     // increase amount
//     const increaseAmount = id => {
//         // const newCart = [...cart].map(item => {
//         //     return item.id === id
//         //     ? { ...item, amount: item.amount +1}
//         //     : {...item}
//         // })
//         // setCart(newCart)
//         // dispatch({type:INCREASE,payload:id})
//     }
//     // decrease amount
//     const decreaseAmount = (id, amount) => {
//         if (amount === 1) {
//             // removeItem(id)
//             // dispatch({type:REMOVE,payload:id})
//             return
//         }
//         else{
        
//         // const newCart = [...cart].map(item => {
//         //     return item.id === id
//         //     ? { ...item, amount: item.amount - 1}
//         //     : {...item}
            
//         // })
//         // dispatch({type:REMOVE,payload:id})
        
//         // setCart(newCart)
//     }
//     }
//     // add to cart
//     const addToCart = product => {
//         // const {id,imageurl,title,price} = product
//         // const item = [...cart].find(item => item.id === id)
//         // if (item){
//         //     increaseAmount(id)
//         //     return;
//         // } else {
//         //     const newItem = { id, imageurl, title, price, amount: 1 }
//         //     const newCart = [...cart, newItem]
//         //     setCart(newCart)
//         // }
//         let item = [...cart].find(item => item.id === product.id)
//         // if(item){
//         //     dispatch({ type:INCREASE, payload:product.id })
//         // }
//         // else {
//         //     dispatch({ type:ADD_TO_CART,payload:product.id })
//         // }
//     }
//     // clear cart
//     const clearCart = () => {
//         // setCart([])
//         // dispatch({type:CLEAR_CART})
//     }



//     return <CartContext.Provider value={{cart, total, cartItems,removeItem,increaseAmount,decreaseAmount,addToCart,clearCart}}>
//         {children}
//     </CartContext.Provider>
// }

// export { CartContext, CartProvider }