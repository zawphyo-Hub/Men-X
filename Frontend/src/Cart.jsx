import { useSelector } from "react-redux";
import CartItems from "./Component/CartItems.jsx";
import Product_data from "./assets/tee_data.js";
import Polo_data from "./assets/polo_data.js";
import tshirt_data from "./assets/tshirt_data.js";
import Jean_data from "./assets/jean_data.js";
import SweatPant_data from './assets/sweatpant_data.js';
import Hoodie_data from './assets/hoodie_data.js';
import Sweater_data from "./assets/sweater_data.js";
import { cartConfig } from "./Store/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "./Store/cart.js";

function Cart(){
    const carts = useSelector(cartConfig => cartConfig.cart.items)
    

    // Calculate total price
    const totalPrice = carts.reduce((total, item) => {
        const allProducts = [...Product_data, ...Polo_data, ...tshirt_data, ...Jean_data, ...SweatPant_data, ...Hoodie_data, ...Sweater_data];
        const product = allProducts.find(p => p.id === item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCheckOut = () => {
        toast.success("Your Order Has Been Placed");
        
        setTimeout(() =>{
            dispatch(clearCart());
            navigate('/home');

        }, 1000)
       

    }

    return(
        <div>
           {carts.length === 0 ? (
                <div className="emptyCartMessage">
                    <p>There are no items in the cart.</p>
                </div>
            ) : (
                <>
                    <h3 className="headingCartPage">
                        SHOPPING CART <i className="fa-solid fa-cart-shopping cartIcon1"></i>
                    </h3>
                    <div className="cartWholeContainer">
                        <div className="cartItems">
                            {carts.map((item) =>
                                <CartItems
                                    key={`${item.productId}-${item.size}`}
                                    productId={item.productId}
                                    quantity={item.quantity}
                                    size={item.size}
                                />
                            )}
                        </div>
                        <div className="cartCheckOut">
                            <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
                        </div>
                        <button className="checkout-button" onClick={handleCheckOut}>Check Out</button>
                    </div>
                </>
            )}
        </div>
    
    )
}
export default Cart;