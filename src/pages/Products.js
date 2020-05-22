import React,{useContext} from 'react'
import {ProductContext} from '../context/products'
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList'
import Filters from '../components/Products/Filters';
import PageProducts from '../components/Products/PageProducts';

export default function Products() {
    // console.log(React.useContext(ProductContext));
    const {loading, sorted} = React.useContext(ProductContext)
    // console.log(products); 
    // console.log(loading);
    
    
    if(loading){
        return <Loading />
    }
    // return (
    //     <div>            
    //         <ProductList title="our products" products={sorted} />
    //     </div>
    // )
    return (
        <>
        <Filters></Filters>
        <PageProducts></PageProducts>
        </>
    )
}
 