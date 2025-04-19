import mh1 from './assets/mh1.jpg';
import mh2 from './assets/mh2.jpg';
import mh3 from './assets/mh3.jpg';
import mh4 from './assets/mh4.jpg';
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
function Home(){
    
    return(
        <div className='home-background1'>
            <div className="home-background">
                <h4 className="home-page-heading">Let's find an outfit</h4>
                <h4 className="home-page-heading">that's perfect for you</h4>
                <p className="home-page-p">
                    From cozy hoodies to street-ready fits, we've got the looks to match your mood.  
                    Slide into styles that turn heads—wherever you go.
                </p>
                <Link to="/shirts" className="shop-now-btn">
                   Shop Now
                </Link>
                {/* <button to="/Men-X/shirts" className="shop-now-btn">Shop Now</button>
                <a href=" /Men-X/shirts" className="f-page-Links">T-Shirts</a> */}
            </div>


            <div className="category-section">
                <div 
                className="category-left"
               
                >
                    <img src={mh3} alt="Women's Fashion" className="category-img1" />
                    <div className="category-content">
                    <p className="item-count1">45+ Items</p>
                    <h3 className='home-h1'>MenX Shirt</h3>
                    <ul>
                        <li>Short Sleeves Tshirts</li>
                        <li>Long Sleeves Tshirts</li>
                        <li>Plain Tees</li>
                        <li>Pocket Tees</li>
                        <li>Over Size Tees</li>
                        <li>Polo Shirts</li>
                        <li>Simple Design Tees</li>
                    </ul>
                    </div>
                </div>

                <div  
                className="category-right"
               
                >
                    <div className="category-card">
                    <img src={mh2} alt="Men's Fashion" className="category-img" />
                    <div className="category-content">
                        <p className="item-count">25+ Items</p>
                        <h3 className='home-h3'>MenX Pant</h3>
                        <ul>
                        <li>Baggy Jeans</li>
                        <li>Regular Jeans</li>
                        <li>Skinny Jeans</li>
                        <li>Sweat Pants</li>
                        </ul>
                    </div>
                    </div>
                    <div className="category-card">
                    <img src={mh1} alt="Accessories" className="category-img" />
                    <div className="category-content">
                        <p className="item-count">20+ Items</p>
                        <h3 className='home-h3'>MenX Sweater|Hoddie</h3>
                        <ul>
                        <li>Fashionable Hoddies</li>
                        <li>Sweaters</li>
                        <li>Jackets</li>
                        <li>Upper Wear Shirts</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                <div className='aboutUs-section'>
                    <h3>About Us</h3>
                    <div className='aboutUs-content'>
                        <motion.div
                        className='about-img'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                        <img src={mh4} alt="About Us"/>
                        </motion.div>

                        <motion.div
                        className='aboutUs-p'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        // viewport={{ once: true, amount: 0.2 }}
                        >
                        <p>
                            Welcome to our men’s fashion e-commerce platform where style meets quality.
                            We are based in England, found by Ryan in 2022. Our intension of this MenX website is that we want the world to try on the best quality outfits from UK. 
                            We are committed to bringing you the latest trends in men’s clothing, 
                            accessories, and footwear — all tailored to elevate your wardrobe with ease and confidence.
                        </p>
                        </motion.div>
                    </div>
                    </div>

                                
                                    
           

        </div>
       
       
    )
}
export default Home;