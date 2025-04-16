import './component.css';
import model from '../assets/Teemodel.jpg';
import model1 from '../assets/modelShirt3.jpg';
import model2 from '../assets/poloModel3.jpg';
import { teeLink } from './Route';
import { poloLink } from './Route';
import { tshirtLink } from './Route';
import { motion } from 'framer-motion';
// import {linkToTee} from '../Shirts.jsx';
function PopularCard(){
    return(
        
            <div className='container-fluid popularContainer d-flex justify-content-center'>
                <div className="row justify-content-center">
                   <div className="cardPop col-md-4 col-sm-6 d-flex justify-content-center" onClick={teeLink}>
                    
                        <motion.div 
                        className="card WrapColorAll " 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src={model} className="card-img-top img-fluid imgColorTee" alt="Tee Collection Image"/>
                            <div className="card-body colorBody">
                                <h5 className="card-title">Plain Tee</h5>
                                <div className='colors'>
                                    <div className='lightBlue'></div>
                                    <div className='darkgrey'></div>
                                    <div className='white'></div>
                                    <div className='black'></div>
                                    <div className='darkRed'></div>
                                </div>
                                <p className="card-text price">19.99 USD</p>
                                <div className='flexArrowColor'>
                                    <p className='availableColor'>Available 5 Colors</p>
                                    <i className="fa-solid fa-arrow-right-long arrowRight"></i>
                                </div>
                                
                            </div>
    
                        </motion.div>
                    </div>

                    <div className="cardPop col-md-4 col-sm-6 d-flex justify-content-center" onClick={tshirtLink}>
                    
                        <motion.div className="card WrapColorAll " 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src={model1} className="card-img-top img-fluid imgColorTee" alt="Tee Collection Image"/>
                            <div className="card-body colorBody">
                                <h5 className="card-title">Short Sleeve Shirt</h5>
                                <div className='colors'>
                                    <div className='lightyellow'></div>
                                    <div className='grey'></div>
                                    <div className='green'></div>
                                    <div className='white'></div>
                                    
                                </div>
                                <p className="card-text price">40.99 USD</p>
                                <div className='flexArrowColor'>
                                    <p className='availableColor'>Available Colors 4 Colors</p>
                                    <i className="fa-solid fa-arrow-right-long arrowRight"></i>
                                </div>
                                
                            </div>
                        </motion.div>
                    </div>
                        
                    <div className="cardPop col-md-4 col-sm-6 d-flex justify-content-center" onClick={poloLink}>
                    
                        <motion.div className="card WrapColorAll " 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                       >
                            <img src={model2} className="card-img-top img-fluid imgColorTee" alt="Tee Collection Image"/>
                            <div className="card-body colorBody">
                                <h5 className="card-title">Polo Shirt</h5>
                                <div className='colors'>
                                    <div className='lightyellow'></div>
                                    
                                    <div className='white'></div>
                                    <div className='brown'></div>
                                </div>
                                <p className="card-text price">30.00 USD</p>
                                <div className='flexArrowColor'>
                                    <p className='availableColor'>Available 3 Colors</p>
                                    <i className="fa-solid fa-arrow-right-long arrowRight"></i>
                                </div>
                                
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
       

    )
}
export default PopularCard;