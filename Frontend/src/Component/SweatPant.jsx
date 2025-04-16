import SweatPant_data from '../assets/sweatpant_data.js';
import SweatPantCard from './SweatPantCard.jsx';

function SweatPant(){
    return(
        <div className=' container-fluid justify-content-center teeSection'>
           
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {SweatPant_data.map((shirt, i) => {
                            return(
                                <div className='teeCard1'>
                                <SweatPantCard key={i} 
                                    id={shirt.id} 
                                    name={shirt.name} 
                                    image={shirt.image} 
                                    price={shirt.price}
                                    color={shirt.color}
                                    description={shirt.description}/>
                                </div>)


                        })

                        }

                    </div>
               </div>
            </div>
                        
            

        </div>
    )
}
export default SweatPant;