import React,{Fragment, useState} from 'react'
// import axios from "axios"
import {Link,Redirect} from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import {login} from "../actions/auth"


const Login = ({login,auth}) => {  
    const [formData, setFormData] = useState({
        email:"",
        password:""
        
    })
    const {email, password } = formData

    const onChange = e => 
    setFormData({ ...formData,[e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
        console.log(email);        
        login({email,password})
        
    }

    // Redirect if logged in
    if(auth){
      return <Redirect to="/products" />
    }
    
    return (
        <Fragment>
            <section className="form section">
            <h2 className="section-title">Sign In</h2>
      
      
      <form className="login-form" onSubmit={e=> onSubmit(e)} >        
        <div className="form-control">
        <label htmlFor="email">email</label>
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
          
        </div>
        <div className="form-control">
        <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        
        <input type="submit" className="btn btn-block btn-primary" value="Register" />
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </section>
        </Fragment>
    )
}
Login.propTypes={
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
})


export default connect(mapStateToProps,{login})(Login);