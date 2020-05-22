import React from 'react'
import {FaAngleUp,FaAngleDown} from 'react-icons/fa'
// import {CartContext} from '../../context/Cart'
// import { log } from 'util'
import { connect } from "react-redux"
import { INCREASE, DECREASE, REMOVE } from '../../actions/Type';
// import PropTypes from 'prop-types'




function CartItem({id, imageurl, title, price, amount,increased,decreased,removed}) {
//   const { removeItem,increaseAmount,decreaseAmount } = React.useContext(CartContext)
  
  return (
    <article className="cart-item">
    <img src={imageurl} alt={title}/>
    <div>
      <h4>{title}</h4>
      <h5>${price}</h5>
      <button type="button" className="cart-btn remove-btn" onClick={()=>removed(id)}
      >Remove</button>
    </div>
    <div>
      <button type="button" className="cart-btn amount-btn" 
      onClick={()=>increased(id)}>
        <FaAngleUp />
      </button>
        <p className="item-amount">{amount}</p>
      <button type="button" className="cart-btn amount-btn" onClick={()=>decreased(id)}>
        <FaAngleDown />
      </button>
    </div>

    </article>
  )
}

// const mapStateToProps = state => ({
//     carts: state.cart
//   })

const mapDispatchToProps = (dispatch) => {
    return{
    increased:(id)=>dispatch({type:INCREASE,payload:id}),
    decreased:(id)=>dispatch({type:DECREASE,payload:id}),
    removed:(id)=>dispatch({type:REMOVE,payload:id})
}}

export default connect(null,mapDispatchToProps)(CartItem);