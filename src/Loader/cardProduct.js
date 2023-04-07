import { getShoppingCart } from "../Copy/utilities/fakedb";

const cardProductsLoader = async () => {
    const loadedProduct=await fetch('products.json')
    const products=await loadedProduct.json();

    ///if cart data is in database, you have tro use async await
    const  storedCart=getShoppingCart()
    console.log(storedCart)
    const savedCart=[];
    for(const id in storedCart){
        const addedProduct=products.find(pd=>pd.id===id);
        if(addedProduct){
            const quantity=storedCart[id]
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct)
        }
    }

    return savedCart
}
export default cardProductsLoader;
