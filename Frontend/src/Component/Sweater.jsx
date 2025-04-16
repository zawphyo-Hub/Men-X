import Sweater_data from '../assets/sweater_data.js';
import SweaterCard from './SweaterCard.jsx';

function Sweater(){
    return(
        <div className=' container-fluid justify-content-center teeSection'>
           
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {Sweater_data.map((shirt, i) => {
                            return(
                                <div className='teeCard1'>
                                <SweaterCard key={i} 
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
export default Sweater;