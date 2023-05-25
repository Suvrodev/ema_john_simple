import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {_id,img,price,name,quantity}=product
    return (
        <div className='review_item'>
            <img className='' src={img} alt="" />
            <div className="Review_details">
                <p className='title'>{name}</p>
                <p>Price: <span className='orange_text'>${price}</span>  </p>
                <p>Order Quantity: <span className='orange'>{quantity}</span>  </p>
            </div>
            <button onClick={()=>handleRemoveFromCart(_id)} className='btn_delete'>
              <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;