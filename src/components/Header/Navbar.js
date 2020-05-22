import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import {logout} from "../../actions/auth"

function Navbar({isAuthenticated,logout}) {
    const logouts = () => {
        // console.log("logout clicked");
        logout()
        

    }
    return (
        <header className="header">
            <img src={logo} alt="vintage tech logo" className="logo" />
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Product</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                {!isAuthenticated?
                <>
               
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">login</Link></li></>:
                <>
                <li><Link to="/checkout">Checkout</Link></li>
                <li onClick={()=>logouts()}><Link to="/products">logout</Link></li> 
                </>
                }
                </ul>
            </nav>
        </header>
    )
}

Navbar.propTypes={
    logout:PropTypes.func,
    isAuthenticated:PropTypes.bool,
  }


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    logout:state.auth.logout
  })

export default connect(mapStateToProps,{logout})(Navbar)