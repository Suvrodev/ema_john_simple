import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   // const {price,shipping}={cart}
    console.log(cart)
    let Total=0;
    let Total_Shipping=0;
    let Tax=0;
    for(const product of cart){
        Total=Total+product.price;
        Total_Shipping+=product.shipping;
    }
    Tax=((Total*7)/100);
    const grandTotal=Total+Total_Shipping+Tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price:$ {Total} </p>
            <p>Total Shipping: ${Total_Shipping} </p>
            <p>Tax: ${Tax.toFixed(2)} </p>
            <h6>Grand Total:$ {grandTotal} </h6> 
        </div>
    );
};

export default Cart;