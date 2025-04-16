import Hoodie_data from '../assets/hoodie_data.js';
import HoodieCard from './HoodieCard.jsx';

function Hoodie(){
    return(
        <div className=' container-fluid justify-content-center teeSection'>
           
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {Hoodie_data.map((hoodie, i) => {
                            return(
                                <div className='teeCard1'>
                                <HoodieCard key={i} 
                                    id={hoodie.id} 
                                    name={hoodie.name} 
                                    image={hoodie.image} 
                                    price={hoodie.price}
                                    color={hoodie.color}
                                    description={hoodie.description}/>
                                </div>)


                        })

                        }

                    </div>
               </div>
            </div>
                        
            

        </div>
    )
}
export default Hoodie;

