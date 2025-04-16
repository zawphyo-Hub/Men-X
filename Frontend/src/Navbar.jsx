import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import userPNG from './assets/user2.png'





function Navbar(){

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const location = useLocation();
   
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
      }, [location]);
    
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(cartConfig => cartConfig.cart.items);
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity)
        setTotalQuantity(total);
    }, [carts])
    
    const [showProfileToast, setShowProfileToast] = useState(false);//for toast login/profile


    return(
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                
                <div className="container theWholeContainer">
                
                
                    <div className='wrap-logo'>
                        <h3 className="navbar-brand ">MenX</h3>
                        

                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='links-nav'>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                
                                <li className="nav-item dropdown d-flex align-items-center ">
                                    
                                    <Link className="nav-link text-black" to="/shirts" aria-expanded="false">
                                    Shirts
                                    </Link>
                                    <button 
                                    className=" dropdown-toggle text-black border-0 bg-transparent" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                                                        
                                    </button>
                                                                    
                                
                                <ul className="dropdown-menu">
                                    <li><HashLink smooth className="dropdown-item" to="/shirts#tshirtSection">T-Shirts</HashLink></li>
                                    <li><HashLink smooth className="dropdown-item" to="/shirts#poloSection">Polo Shirt</HashLink></li>
                                    <li><HashLink smooth className="dropdown-item" to="/shirts#teeSection">Tee Collections</HashLink></li>
                                                                        
                                </ul>
                                </li>

                                <li className="nav-item dropdown d-flex align-items-center ">
                                <Link className="nav-link text-black" to="/pants" aria-expanded="false">
                                Pants
                                </Link>
                                <button 
                                    className="dropdown-toggle text-black border-0 bg-transparent" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                                                        
                                    </button>
                                <ul className="dropdown-menu">
                                    <li><HashLink smooth className="dropdown-item" to="/pants#jeanSection">Jeans</HashLink></li>
                                   
                                    <li><HashLink smooth className="dropdown-item" to="/pants#sweatpantSection">Sweat Pants</HashLink></li>
                                    
                                                                        
                                </ul>
                                </li>

                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sweaterhoodie">Sweaters | Hoddies</Link>
                                </li>

                                                             
                                
                            
                            </ul>
                            

                        </div>
                        <div className='links-login'>
                            {!user ? (
                            <div>
                            <Link to="/login" className="login-button">Login</Link>
                            </div>
                             ) : (
                            <>
                            <div>
                                <Link to="/profile" >
                                <div className="account-button"><img src={userPNG} alt="" className="account-img"/></div>
                                </Link>
                              
                            </div>
                            
                            </>
                        )}
                            
                            <div class="cartIcon">
                                <Link to="/cart" className="cart-link"><i className="fa-solid fa-cart-shopping cart"></i>
                                </Link>
                                <span className="cartSpan">{totalQuantity}</span>
                            </div>
                            

                        </div>
                        
                    
                    </div>
                
                    
                </div>
                
            </nav>
       
        
    )
}
export default Navbar;