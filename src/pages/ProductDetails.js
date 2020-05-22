import React from 'react'
import {useParams} from 'react-router-dom';
import {ProductContext} from '../context/products'
import {useHistory} from 'react-router-dom';
import Loading from '../components/Loading';
// import {CartContext} from '../context/Cart'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import {addtocart} from "../actions/cart"


function ProductDetails({addtocart}) {
    // console.log(useParams());
    const { id } = useParams()
    const history = useHistory()
    const {products} = React.useContext(ProductContext)
    // const {addToCart} = React.useContext(CartContext)
    // console.log(history);
    const product = products.find(item => item.id === parseInt(id))

  
    // console.log(products);
    if (products.length === 0) {
        return <Loading />
    }    
    
    else {
        const {imageurl,title,price,Description} = product
        // console.log("details");
        
        // console.log(image);
        
        return (
            <section className="single-product">
            <img src={imageurl} alt={title} 
                className="single-product-image" />
                <article>
                    <h1>{title}</h1>
                    <h2>${price}</h2>
                    <p>{Description}</p>
                    <button className="btn btn-primary btn-block" onClick={()=>{addtocart(product);history.push('/cart')}}>add to cart</button>
                </article>

            </section>
        )
    }
    
}
ProductDetails.props={
    addtocart:PropTypes.func,
}

export default connect(null,{addtocart})(ProductDetails)