import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    let totalQuantity = 0;
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let price = 0;
    let totalWithTax = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        totalQuantity += product.quantity;
        price = product.price;
        shipping = product.shipping;
    }
        total =  (total + price) * totalQuantity;
        tax = total / 10;
        totalWithTax = (total + tax + shipping);
    return (
        <div className="cart__style">
            <h2>Order Summary</h2>
            <p>Items Ordered: <span>{totalQuantity}</span></p>
            <p>Shipping and Handling: <span>${shipping.toFixed(2)}</span></p>
            <p>Total before tax: <span>${total.toFixed(2)}</span></p>
            <p>Estimated Tax: <span>${tax.toFixed(2)}</span></p>
            <h3>Order Total: <span>${totalWithTax.toFixed(2)}</span></h3>
            {props.children}
        </div>
    );
};

export default Cart;