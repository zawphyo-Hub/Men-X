import './component.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Store/cart';
import { useState } from 'react';
import { toast } from 'react-toastify';



function HoodieCard(props){
    const [selectedSize, setSelectedSize] = useState(''); // for choosing size
    const carts = useSelector(cartConfig => cartConfig.cart.items);
    console.log(carts);
    const dispatch = useDispatch();
    const {id, name, image, color, description, price} = props;

    
    const handleAddToCart= () => {
        if (selectedSize == 0) {
            toast.info('Please Choose The Size.');
            return;
        }
       
        dispatch(addToCart({
            productId: id,
            quantity: 1,
            size: selectedSize
            
        }));

    }
    return(
            <div className=" card-group ">
                <div to="/home" className="card cardWrap"> 
                    <div className='imgPolo1'>
                       <img src={image} className="card-img-top teeImage" alt="tee image"/>
                    </div>
                    <div className="card-body">
                        <div className='cardMiddle'>
                            <h6 className="card-title">{name}</h6>
                            <h6 className='sizeOptions'>{color}</h6>
                        
                        </div>
                        <p className='teeDescription'> {description}</p>

                        <div className='cardMiddle'>
                            <label className='sizeLabel'>Size</label>
                            <select className='sizeOption' value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} >
                            <option className='sizeOption' value="0">S - 2XL</option>   
                            <option className='sizeOption' value="S">S</option>
                            <option className='sizeOption' value="M">M</option>
                            <option className='sizeOption' value="L">L</option>
                            <option className='sizeOption' value="XL">XL</option>
                            <option className='sizeOption' value="2XL">2XL</option>

                            </select>
                            
                        
                        </div>

                        <div className='priceSection'>
                        <p className='priceLabel'>Price</p>    
                        <p className="card-text price">{price} USD</p>

                        </div>
                        <div>
                            
                        </div>
                        <div className='ratingSection'>
                        <p className='ratingLabel'>Rating</p>    
                        <p className='rating'> <i class="fa-solid fa-star star"> </i>4.9/5</p>

                        </div>

                        
                    
                    </div>

                    
                    <button className='cart-button' onClick={handleAddToCart}>ADD TO CART <i class="fa-solid fa-cart-shopping cartIcon"></i></button>
                     
                    
                    
                    
                </div>    
                </div>

 
        
            
            
       
    
    )
};
export default HoodieCard;