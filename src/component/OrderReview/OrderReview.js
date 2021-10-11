import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products); 
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push('/shipping');
    }
    return (
        <div className="shop">
            <div className="product__container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.key}
                        handleRemove = {handleRemove}
                        product={product}/>)
                }
            </div>
            <div className="cart__container">
                <Cart cart={cart}>
                    <button
                    onClick={handlePlaceOrder}
                    className="btn__regular">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>

    );
};

export default OrderReview;