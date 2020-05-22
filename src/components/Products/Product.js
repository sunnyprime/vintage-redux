import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import img from "../../assets/mainBcg.jpeg"


export default function Products({imageurl,title,id,price}) {
    // console.log(image.url);
    // console.log(price);
    // const url = image.url

    
    
    return (
        <article className="product">
           <div className="img-container">
            <img src={imageurl||img} alt={title||"title missing"} />
            <Link to={`products/${id}`} className="btn btn-primary product-link">
            details</Link>
            <div className="product-footer">
                <p className="product-title">{title || "default products"}</p>
                <p className="product-price">${price || "default price"}</p>
            </div>
           </div>
        </article>
    )
}

Products.prototype ={
    imageurl:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    id:PropTypes.number.isRequired,
} 