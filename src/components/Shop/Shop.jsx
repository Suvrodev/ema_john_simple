import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../Copy/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'



const Shop = () => {

    ///Pagination start
    const [products,setProducts]=useState([])
    const [currentPage,setCurrentPage]=useState(0)
    const [itemsPerPage,setItemsPerPage]=useState(10);
    const [cart,setCart]=useState([])
    const { totalProducts } = useLoaderData();

    
 

    //const itemsPerPage=10;
    const totalPages=Math.ceil(totalProducts/itemsPerPage)
    // useEffect(()=>{
    //     fetch('http://localhost:7000/totalproducts')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         //console.log(data.totalProducts)
    //         setTotalProducts(data.totalProducts)
    //     })
    // },[])

    const pageNumber=[...Array(totalPages).keys()]
   

   // console.log(totalProducts, typeof totalProducts)

    ///Pagination end

    ///Products start
   
    // useEffect(()=>{
    //     fetch('http://localhost:7000/products')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])

    useEffect(()=>{
        fetch(`http://localhost:7000/products?page=${currentPage}&limit=${itemsPerPage} `)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[currentPage,itemsPerPage])


    ///Products start

    ///Contain data after pressing Button start
    
    //Handle Any Single Product start
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product._id)
    }
    //HAndle Any Single Product end
    ///Contain data after pressing Button end


    ///Get Data from LocalStorage Start
    useEffect(()=>{
        const storedCart=getShoppingCart();
       // console.log(storedCart)
       const ids=Object.keys(storedCart);

        fetch('http://localhost:7000/productsbyid',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
     })
     .then(res=>res.json())
     .then(cardProducts=>{
        console.log('Only Product in the shopping card: ',cardProducts)
        const SavedCart=[];

        ///Step-1: Get ID
        for(const id in storedCart){
           //console.log(id)
 
           //Step:2 Get the product by using id
           const addedProduct=cardProducts.find(product=>product._id===id)
           //console.log(addedProduct)
 
           if(addedProduct){
              ///get Quantity of the product
             const quantity=storedCart[id];
             addedProduct.quantity=quantity;
            // console.log(addedProduct)
 
             ///Step-4: Add the added product into saved cart
             SavedCart.push(addedProduct)
           }
         }
           setCart(SavedCart)
     })
     
    },[])
    ///Get Data from LocalStorage End

    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart()
    }


    const options=[5,10,15,20]
    const handleSelectChange=(event)=>{
        setItemsPerPage(parseInt(event.target.value))
        setCurrentPage(0)
    }




    return (
        <>
            <div className='shop_container'>
            <div className='Product_Container'>
               {
                 products.map(product=> <Product
                 key={product._id}
                 product={product}
                 handleAddToCart={handleAddToCart}
                 ></Product> )
               }
            </div>

            <div className='Cart_Container'>
                <Cart
                 cart={cart}
                 handleClearCart={handleClearCart}
                 > 
                 <div className='cartLinkbtn'>
                   <Link to='/Orders'>
                      <button className='btn_proceed'>
                        Review Order
                        <FontAwesomeIcon className='delete-icon_' icon={faArrowCircleRight} />
                        </button>
                   </Link>
                 </div>
                 </Cart>
            </div>
        </div>


        {/* Pagination */}
        <div className='pagination'> 
        <p>current Page: {currentPage} and items per page: {itemsPerPage} </p>
            {
                pageNumber.map(number=> <button
                 className={currentPage===number ? 'Selected':'' }
                 key={number}
                
                 onClick={()=>setCurrentPage(number)}
                 >
                    {number}</button>
                     )
            }

            <select value={itemsPerPage} onChange={handleSelectChange}>
                {
                    options.map(option=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))
                }

            </select>
        </div>
        </>
    );
};

export default Shop;