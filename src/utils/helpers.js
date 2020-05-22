import url from './URL'

// flatten
export function flattenProducts(data){
    return data.map(item=>{
        // console.log("flatten");        
        // console.log(item.Image.url);
        let imageurl = (!item.image && item.Image.url) || null
        
        // claudinary
        // let image = `${url}${imageurl}`
        // console.log(image);
        // console.log({...item,imageurl});
        
        
        return {...item,imageurl}
    })
}

// helper function 
export function featuredProducts(data){
    return data.filter(item => {
        return item.featured === true;
    })
}

// paginate
export function paginate(products) {
    const itemPerPage = 4
    const numberOfPages = Math.ceil(products.length / itemPerPage)
  

    const newProducts = Array.from({length:numberOfPages},()=>{
        // return "hello world"
        return products.splice(0, itemPerPage)
    })

    // const newProducts = Array.from({length:numberOfPages},(_, index)=>
    //      {
    //     const start = index * itemPerPage;
    //     return products.splice(start, start + itemPerPage)
    //     })


    // console.log(newProducts);
    
    
    // our code goes here
    return newProducts;
}