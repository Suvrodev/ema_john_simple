import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../Copy/utilities/fakedb';

const Orders = () => {
    const savedCart=useLoaderData()
    //console.log(Products)

    const [cart,setCart]=useState(savedCart)
    const handleRemoveFromCart=id=>{
        console.log(id)
        const RemainingCart=cart.filter(product=>product.id!==id)
        setCart(RemainingCart)
        removeFromDb(id)
    }

   
    return (
        <div className='shop_container'>
          <div className='review_container'>
            {
                cart.map(product=> <ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ReviewItem>)
            }
          </div>

          <div className='Cart_Container'>
             <Cart cart={cart} ></Cart>
          </div>
        </div>
    );
};

export default Orders;