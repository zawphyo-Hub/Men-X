

import Tee from './Component/tee.jsx';
import PopularCard from './Component/PopularCard.jsx';
import PoloShirt from './Component/PoloShirt.jsx';
import TShirt from './Component/t-shirt.jsx';
import shirtmodel from './assets/shirt-model.png';
import { motion } from 'framer-motion';

function Shirts(){


    return(
        <div>
            <div className='shirtPageCover'>
                <div className='imgForShirt'>
                    <motion.div className="sweater-img"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration:1 }}
                    viewport={1}
                    >
                    <img src={shirtmodel} className="modelGroupShirt1" alt="Group Model Image" />
                    </motion.div>
                    <motion.div className="SweaterPageText"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={1}
                    >
                        <h4 className='sweater-heading1'>Explore Our <span className='newArrival'>Exclusive</span> Shirt Collection</h4>
                        <p>Find the perfect fit for every occasion. From casual to formal, we offer a variety of styles, colors, and sizes.</p>
                        <span>Quality fabrics | Trendy designs | Comfortable wear</span>
                    </motion.div>
                
                </div>
            </div>


            
            <div className='container-fluid containerPopular'>
                
            <h3 className='Popular'>POPULAR SHIRTS</h3>   
                    <div className='container-fluid d-flex justify-content-center'>
                    < PopularCard/>
                        
                    </div> 
                
            </div>

            <div className='container-fluid containerTee' id="tshirtSection">
                
            <h4 className='headTeeColl' >T-SHIRT SECTION</h4>   
                <div className='container-fluid d-flex justify-content-center'>
                    < TShirt/>
                    
                </div> 
            
            </div>

            <div className='container-fluid containerTee'  id="teeSection">
                
            <h4 className='headTeeColl' >TEE SECTION</h4>   
                <div className='container-fluid d-flex justify-content-center'>
                    < Tee/>
                    
                </div> 
            
            </div> 
            
            <div className='container-fluid containerTee' id="poloSection">
                
                <h4 className='headTeeColl'  >POLO SECTION</h4>   
                    <div className='container-fluid d-flex justify-content-center'>
                    <PoloShirt />
                        
                    </div> 
                
            </div>



            
        </div>
        
    )
}
export default Shirts;