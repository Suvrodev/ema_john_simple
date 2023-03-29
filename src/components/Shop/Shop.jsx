import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    ///Products start
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    ///Products start

    //Handle Any Single Product start
    const handleAddToCart=(product)=>{
        console.log(product.name)
    }
    //HAndle Any Single Product end


    return (
        <div className='shop_container'>
            <div className='Product_Container'>
               {
                 products.map(product=> <Product
                 key={product.id}
                 product={product}
                 handleAddToCart={handleAddToCart}
                 ></Product> )
               }
            </div>

            <div className='Cart_Container'>
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;