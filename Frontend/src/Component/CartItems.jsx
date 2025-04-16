
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity, removeItem } from '../Store/cart.js';

import Product_data from '../assets/tee_data.js';
import Polo_data from '../assets/polo_data.js';
import tshirt_data from '../assets/tshirt_data.js';
import Jean_data from '../assets/jean_data.js';
import SweatPant_data from '../assets/sweatpant_data.js';
import Hoodie_data from '../assets/hoodie_data.js';
import Sweater_data from "../assets/sweater_data.js";

function CartItems(props){
    const {productId, quantity, size} = props;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const allProducts = [...Product_data, ...Polo_data, ...tshirt_data, ...Jean_data, ...SweatPant_data, ...Hoodie_data, ...Sweater_data];
        const findDetail = allProducts.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
           
        }));

    };

    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1

        }));

    };

    const handleRemoveItems = () => {
        dispatch(removeItem(productId));
    };

    return(
        <div className='WholeContainerItems'>
            <div className='containerCartItems1'>
                <div className='containerCartItems'>
                    <div className='detailItemsAdded'>
                        <img className='cartItemImage' src={detail.image} alt="Product Image" />
                        <div className='itemsDescription'>

                            <p className='itemDesP'> <strong className='strong'>Name:</strong> <span className='spanPrice'>{detail.name}</span></p>
                            <p className='itemDesP'> <strong className='strong'>Color:</strong> <span className='spanPrice'>{detail.color}</span></p>
                            <p className='itemDesP'> <strong className='strong'>Size: </strong> <span className='spanPrice'>{size}</span>  </p>
                                                   
                            <p className='itemDesP'><strong className='strong'>Price:</strong> <span className='spanPrice'>${(detail.price * quantity).toFixed(2)}</span></p>
                        </div>
                    </div>

                    <div className='quantity'>
                        <button className='quantity-button' onClick={handleMinusQuantity}>-</button>
                        <p className='quantityp'>{quantity}</p>
                        <button className='quantity-button' onClick={handlePlusQuantity}>+</button>
                       
                    </div>

                </div>
                <div className='div-removeButton'>
                <button className='remove-button' onClick={handleRemoveItems}>
                    <i class="fa-solid fa-trash"></i>
                </button> 

                </div>
                              
            </div>
           
        </div>
    )

}
export default CartItems;