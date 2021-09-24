import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';
import "./Products.css";

const Products = (props) => {
    console.log(props.product);
    const {name,img,price,seller,stock,star} = props.product;
    return (
            <div className="product">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4 style={{color: '#0000ff', fontWeight:"500"}}>{name}</h4>
                    <p>by: {seller}</p>
                    <h4>${price}</h4>
                    <p>only {stock} left in stock - Order Soon</p>
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star icon__style"
                        fullSymbol="fas fa-star icon__style"
                    /> <br />
                    <button 
                    onClick={()=>props.handleAddToCart(props.product)}
                    className="btn__regular"><FontAwesomeIcon icon={faShoppingCart} />  Add to Cart</button>
                </div>
            </div>
    );
};

export default Products;