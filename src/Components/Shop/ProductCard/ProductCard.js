import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import './ProductCard.css'
const ProductCard = (props) => {
    console.log(props.product);
    const { name, category, features, img, price, seller, stock, starCount } = props.product;
    return (
        <div className="d-flex mt-2 py-4 px-1 " style={{borderBottom:'1px solid #d3d3d3'}}> 
            <div className="tex-left mr-4">
                <img className="" style={{width:"150px",height:"150px"}} src={img} alt="" />
            </div>
            <div className="mb-2" >
                <h5 style={{color:'royalblue'}}>{name}</h5>
                <p>by {seller}</p>
                <h6 className="" style={{color:"tomato"}}>${price}</h6>
                <small className="text-muted">only {stock} left in stock - order soon</small>
                <div>
                    <button className="add-to-cart-button mt-2"><span className="pr-3"><FontAwesomeIcon icon={faShoppingCart} /></span> add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;