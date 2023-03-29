import React, { useEffect, useState } from 'react';
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


    return (
        <div className='shop_container'>
            <div className='Product_Container'>
                <h2>Product Number: {products.length}</h2>
            </div>

            <div className='Cart_Container'>
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};

export default Shop;