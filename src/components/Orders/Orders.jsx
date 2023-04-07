import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../Copy/utilities/fakedb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

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

    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart()
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
             <Cart
               cart={cart}
               handleClearCart={handleClearCart} 
             >
                <div className='cartLinkbtn'>
                   <Link to="/checkout">
                      <button className='btn_proceed'>Proceed CheckOut
                      <FontAwesomeIcon className='delete-icon_' icon={faCreditCard} />
                      </button>
                   

                   </Link>
                </div>
             </Cart>
          </div>
        </div>
    );
};

export default Orders;