import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css";

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect( ()=>{
        fetch(`./products.JSON`)
        .then(res => res.json())
        .then(products => {
            setProducts(products)
            setDisplayProducts(products)
        });
    }, []);

    const handleAddToCart = (product)=>{
            const newCart = [...cart, product];
            setCart(newCart);
            addToDb(product.key);
    }

    const handleDisplayProducts = (event) => {
        const searchText = event.target.value;
        let findProducts =  products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(findProducts);
    }

    useEffect( ()=>{
        const savedCart = getStoredCart();
        const sortedCart = [];
        for(const key in savedCart){
            const addedProduct = products.find(product => product.key===key);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                sortedCart.push(addedProduct);
            }
            setCart(sortedCart);
        }
    },[products])

    return (
        <>
        <div className="search__container">
            <input onChange={handleDisplayProducts} type="text" placeholder="Search Your Products" />
        </div>
        <div className="shop">
            <div className="shop__container">
                {
                    displayProducts.map(product =>(
                        <Products
                        key={product.key}
                        handleAddToCart={handleAddToCart}
                        product={product}
                />
                ))}
            </div>
            <div className="order__container">
                <Cart
                cart={cart}/>
            </div>
        </div>
        </>
    );
};

export default Shop;