import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import { addToCart, calculateTotalAmount } from "../../helpers/cart";
import { useDispatch } from "react-redux";
import { modifyCart } from "../../store/slices/cart.slice"

function Detail({ product, cart, toggleDetailFunc }) {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const addToCartHandler = (e, product) => {		
		e.preventDefault();
		const newCart = addToCart(cart, product, quantity);
		dispatch(modifyCart({cart:newCart, totalPrice: calculateTotalAmount(newCart)}));
	}

    return (
		<aside className="popup">	
			<p>{product.product_title}</p>
			<button onClick={()=>{
				if(quantity <= 1) return setQuantity(1);
				setQuantity(quantity - 1)}
			}>-</button>

			<input type="number" min="1" value={quantity} onChange={e=> setQuantity(e.target.value)}/>

			<button onClick={()=>setQuantity(quantity + 1)}>+</button>			
			<button className="btn add-cart-btn" onClick={(e)=>{addToCartHandler(e, product)}}>
				<FontAwesomeIcon icon={faCartArrowDown} size="2x" />
			</button>
			<button onClick={(e)=> toggleDetailFunc(e)}>close</button>
		</aside>
    );

}

export default Detail;
