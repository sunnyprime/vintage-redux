// import React, { Children, useContext } from 'react'
import React, { useState } from "react"
import axios from 'axios'
// import url from '../utils/URL'
import {featuredProducts,flattenProducts,paginate} from '../utils/helpers'
export const ProductContext = React.createContext()
// Provider, Consumer, useContext()
export default function ProductsProvider({children}) {
    const [loading, setLoading] = React.useState(false)
    const [products, setProducts] = React.useState([])
    // const [items,setitems] = useState([])
    const [featured, setFeatured] =React.useState([]) 
    // extra state values
    const [sorted,setSorted] = useState([])
    const [page,setPage] = React.useState(0)
    const [filters,setFilters] = React.useState({
        search:"",
        category:"all",
        shipping:false,
        price:"all"
    })

    React.useEffect(() => {
       
        
        setLoading(true)
        axios
        .get(`http://localhost:1337/products`)
        .then(response => 
            {
            const featured = featuredProducts(response.data)
            const products = flattenProducts(response.data)
            const products1 = flattenProducts(response.data)            
            setSorted(paginate(products))
            setProducts(products1)
            setFeatured(featured)
            setLoading(false)
            }
            );
        return () => {}
    } ,[])


    React.useEffect(()=>{        
        let newProducts = [...products].sort((a,b)=>a.price-b.price)
        const {search,category,shipping,price} = filters
        // console.log(newProducts);
        
        // console.log(category);
        
        if(category !== "all"){
            console.log(category);
            console.log(newProducts);
            
            
            newProducts = newProducts.filter(item => item.Category === category)
        }
        console.log(newProducts[0]);
        
        if(shipping !== false) {
            newProducts = newProducts.filter(item => item.Free_shipping === shipping)
        }
        if(search !== ""){
            newProducts = newProducts.filter(item => {
                let title = item.title.toLowerCase().trim();
                return title.startsWith(search)?item:null
            })
        if(price !== "all"){
            newProducts = newProducts.filter(item => {
                if(price === 0) {
                    return item.price < 300
                }
                else if(price ===300){
                    return item.price > 300 && item.price < 650
                }
                else {
                    return item.price > 650
                }
            })
        }
        }

        
        setPage(0);
        setSorted(paginate(newProducts))
    },[filters,products])

    const changePage = (index) => {
        setPage(index);
        
    }
    const updateFilters = e => {
        
        const type = e.target.type;
        const filter = e.target.name;
        const value = e.target.value
        
        
        let filterValue
        if (type === "checkbox") {
            filterValue = e.target.checked

        }
        else if(type === "radio"){
            value === "all" ? (filterValue = value) : (filterValue=parseInt(value))
        }
        else {
            filterValue = value
        }
        // console.log(type,filter,value);
        setFilters({...filters,[filter]:filterValue})
        

        
        
        
    }
    
    


    return (
       <ProductContext.Provider value={{products, loading,featured,
       sorted,page,filters,changePage,updateFilters}}>
        {children}
       </ProductContext.Provider>
    )
}
