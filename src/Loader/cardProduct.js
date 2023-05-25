import { getShoppingCart } from "../Copy/utilities/fakedb";

const cardProductsLoader = async () => {
    ///if cart data is in database, you have tro use async await
    const  storedCart=getShoppingCart()
    const ids=Object.keys(storedCart);
 
  

    const loadedProduct=await fetch('http://localhost:7000/productsbyid',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)

    })
    const products=await loadedProduct.json();
    console.log('products by id: ',products);

    
    const savedCart=[];
    for(const id in storedCart){
        const addedProduct=products.find(pd=>pd._id===id);
        if(addedProduct){
            const quantity=storedCart[id]
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct)
        }
    }

    return savedCart
}
export default cardProductsLoader;
