import React from 'react';
import './Product.css'

///Font Awesome Link Start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
///Font Awesome Link End

const Product = (props) => {
    const {img,name,seller,price,ratings}= props.product
    const handleAddToCart=props.handleAddToCart;
   


    return (
        <div className='product_container'>
           <div className="Image_">
              <img className='img_' src={img} alt="" />
            </div>
             <h4 className='product_name' >{name}</h4>
             <div className='product_info'>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star </p>
             </div>


            <div className="CheckBtn">
                <button onClick={()=> handleAddToCart(props.product)} className='btn_cart'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
            </div>
        </div>
    );
};

export default Product;