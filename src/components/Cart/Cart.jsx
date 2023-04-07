import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
   // const {price,shipping}={cart}
    console.log(cart)
    let Total=0;
    let Total_Shipping=0;
    let Tax=0;
    let quantity=0;

    for(const product of cart){
       if(product.quantity===0) product.quantity=1;
       product.quantity=product.quantity||1;
        Total=Total+product.price* product.quantity;
        Total_Shipping+=product.shipping;
        quantity=quantity+product.quantity;
    }
    Tax=((Total*7)/100);
    const grandTotal=Total+Total_Shipping+Tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity} </p>
            <p>Total Price:$ {Total} </p>
            <p>Total Shipping: ${Total_Shipping} </p>
            <p>Tax: ${Tax.toFixed(2)} </p>
            <h6>Grand Total:$ {grandTotal} </h6> 
            <button onClick={handleClearCart} className='btn_clear_cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon className='delete-icon_' icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;