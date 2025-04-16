
import modelGroup from './assets/m8.png';
import Popularpant from './Component/PopularPant.jsx';
import Jean from './Component/Jean.jsx';
import SweatPant from './Component/SweatPant.jsx';
import { motion } from 'framer-motion';
function Pants(){


    return(
        <div>
            <div className='PantPageCover'>
                <div className='imgForShirt'>
                    <motion.div className="sweater-img"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration:1 }}
                    viewport={1}
                    >
                        <img src={modelGroup} className="modelGroupShirt2" alt="Group Model Image" />
                    </motion.div>
                    <motion.div className="SweaterPageText"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={1}
                    >
                        <h4 className='sweater-heading1'><span className='newArrival'>Trendy </span> Jean|Sweat Pant Collection</h4>
                         <p>Discover the ideal pair for any event. Whether it's for a laid-back day or a polished look, we provide a wide range of styles, colors, and sizes to suit your needs.</p>
                        
                    </motion.div>
                          
               
               
                </div>
            </div>


            
            <div className='container-fluid containerPopular'>
                
            <h3 className='Popular'>POPULAR PANTS</h3>   
                    <div className='container-fluid d-flex justify-content-center'>
                    < Popularpant/>
                        
                    </div> 
                
            </div>

            <div className='container-fluid containerTee'>
                
            <h4 className='headTeeColl' id="jeanSection">JEAN SECTION</h4>   
                <div className='container-fluid d-flex justify-content-center'>
                    < Jean/>
                    
                </div> 
            
            </div>

            <div className='container-fluid containerTee'>
                
            <h4 className='headTeeColl'  id="sweatpantSection">SWEAT PANT SECTION</h4>   
                <div className='container-fluid d-flex justify-content-center'>
                    < SweatPant/>
                    
                </div> 
            
            </div> 
            
                        
        </div>
        
    )
}
export default Pants;