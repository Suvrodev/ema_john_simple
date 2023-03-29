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

    ///Contain data after pressing Button start
     const [cart,setCart]=useState([])

    //Handle Any Single Product start
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    //HAndle Any Single Product end
    ///Contain data after pressing Button end

   




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
                <p>Selected Items: {cart.length} </p>
            </div>
        </div>
    );
};

export default Shop;