import hoddie from './assets/hoddie.png';
import Popularpant from './Component/PopularPant.jsx';
import Sweater from './Component/Sweater.jsx';
import { motion } from 'framer-motion';
import Hoodie from './Component/Hoodie.jsx';
function Sweaterhoodie(){
    return(
        <div>
            <div className="SweaterPage">
                <div className="imgForSweater">
                    <motion.div className="sweater-img"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration:1 }}
                    viewport={1}
                    >
                        <img src={hoddie} className="modelGroupShirt" alt="Group Model Image" />
                    </motion.div>
                    <motion.div className="SweaterPageText"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={1}
                    >
                        <h4 className='sweater-heading'><span className='newArrival'>New Arrival</span> Famous Sweaters | Hoodies Collection</h4>
                        <p >Tailored comfort meets everyday style. Choose from modern fits, durable fabrics, and versatile designs.</p>
                    </motion.div>
                </div>
            </div>

            

            <div className='container-fluid containerTee'>
                
            <h4 className='headTeeColl' id="jeanSection">HOODIE SECTION</h4>   
                <div className='container-fluid d-flex justify-content-center'>
                    < Hoodie/>
                    
                </div> 
            
            </div>

            <div className='container-fluid containerTee'>
                
            <h4 className='headTeeColl'  id="sweatpantSection">SWEAT PANT SECTION</h4>   
                <div className='container-fluid d-flex justify-content-center'>
                    < Sweater/>
                    
                </div> 
            
            </div> 

        </div>
    )
}
export default Sweaterhoodie;