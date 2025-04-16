import './component.css';
import model from '../assets/modelPant.jpg';
import model1 from '../assets/modelPant1.jpg';

import { jeanLink } from './Route';
import { motion } from 'framer-motion';
import { sweatLink } from './Route';
// import {linkToTee} from '../Shirts.jsx';
function PopularPant(){
    return(
        
            <div className='container-fluid popularContainer d-flex justify-content-center'>
                <div className="row justify-content-center">
                   <div className="cardPop col-md-4 col-sm-6 d-flex justify-content-center" onClick={sweatLink}>
                    
                        <motion.div className="card WrapColorAll " 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src={model} className="card-img-top img-fluid pantImage" alt="Tee Collection Image"/>
                            <div className="card-body colorBody">
                                <h5 className="card-title">Sweat Pant</h5>
                                <div className='colors'>
                                    
                                    <div className='grey'></div>
                                    <div className='black'></div>
                                   
                                </div>
                                <p className="card-text price">19.99 USD</p>
                                <div className='flexArrowColor'>
                                    <p className='availableColor'>Available 2 Colors</p>
                                    <i className="fa-solid fa-arrow-right-long arrowRight"></i>
                                </div>
                                
                            </div>
    
                        </motion.div >
                    </div>

                    <div className="cardPop col-md-4 col-sm-6 d-flex justify-content-center" onClick={jeanLink}>
                    
                        <motion.div className="card WrapColorAll " 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src={model1} className="card-img-top img-fluid pantImage" alt="Tee Collection Image"/>
                            <div className="card-body colorBody">
                                <h5 className="card-title">Baggy | Regular Jean</h5>
                                <div className='colors'>
                                    <div className='lightBlue'></div>
                                    <div className='darkBlue'></div>
                                    <div className='darkgrey'></div>
                                    <div className='white'></div>
                                    <div className='black'></div>
                                    
                                </div>
                                <p className="card-text price">40.99 USD</p>
                                <div className='flexArrowColor'>
                                    <p className='availableColor'>Available Colors 5 Colors</p>
                                    <i className="fa-solid fa-arrow-right-long arrowRight"></i>
                                </div>
                                
                            </div>
                        </motion.div >
                    </div>
                        
                </div>
            </div>
       

    )
}
export default PopularPant;