import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../Copy/utilities/fakedb';
import Cart from '../Cart/Cart';
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
        addToDb(product.id)
    }
    //HAndle Any Single Product end
    ///Contain data after pressing Button end


    ///Get Data from LocalStorage Start
    useEffect(()=>{
        const storedCart=getShoppingCart();
       // console.log(storedCart)

       const SavedCart=[];

       ///Step-1: Get ID
       for(const id in storedCart){
          //console.log(id)

          //Step:2 Get the product by using id
          const addedProduct=products.find(product=>product.id===id)
          //console.log(addedProduct)

          if(addedProduct){
             ///get Quantity of the product
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            console.log(addedProduct)

            ///Step-4: Add the added product into saved cart
            SavedCart.push(addedProduct)
          }

          setCart(SavedCart)
         

       }
    },[products])
    ///Get Data from LocalStorage End

   




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
                <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;