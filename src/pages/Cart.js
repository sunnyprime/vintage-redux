import React from 'react'
import {CartContext} from '../context/Cart'
// import {UserContext} from '../context/user'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'
import {Link} from 'react-router-dom'
import { connect } from "react-redux"
import PropTypes from 'prop-types'


function Cart({carts}) {
    // console.log(cart);

    
    // let user = true
    
    const {items,total} =carts
    // console.log(items);
    
    // const { user } = React.useContext(UserContext)

    if (!items || items.length === 0) {
        return <EmptyCart />
    }
    
    
    
    return (
       <section className="cart-items section">
           <h2>your cart</h2>
           {items.map(item => {
               return <CartItem key={item.id} {...item} />
           })}
           <h2>total : $ {total}</h2>
           
           <Link to="/checkout" className="btn btn-primary btn-block">
               checkout
           </Link> <br/>
           
           <Link to="/login" className="btn btn-primary btn-block">
               Login
           </Link>
       </section>
    )
}

const mapStateToProps = state => ({
    carts: state.cart
  })

export default connect(mapStateToProps)(Cart);