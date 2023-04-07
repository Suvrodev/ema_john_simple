import React from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const cart=useLoaderData()
    //console.log(Products)
    return (
        <div className='shop_container'>
          <div className='review_container'>
            {
                cart.map(product=> <ReviewItem
                key={product.id}
                product={product}
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