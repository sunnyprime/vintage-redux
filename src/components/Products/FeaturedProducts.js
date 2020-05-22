import React from 'react'
import ProductList from './ProductList'
import {ProductContext} from '../../context/products'
import Loading from '../Loading'

export default function FeaturedProducts() {
  const {loading,featured} = React.useContext(ProductContext)
  console.log(featured.length);
  
  if(loading){
    return <Loading/>
  }
  if(featured.length===0){
    return(
      <div>
        
      </div>
    )
  }
  
  return (
    <div>
      <ProductList title="freatured products" products={featured} />
    </div>
  ) 
}
