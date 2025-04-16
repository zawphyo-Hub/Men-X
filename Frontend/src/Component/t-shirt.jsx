import tshirt_data from '../assets/tshirt_data.js';
import TshirtCard from './TshirtCard.jsx';

function TShirt(){
    return(
        <div className=' container-fluid justify-content-center teeSection'>
           
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {tshirt_data.map((tshirt, i) => {
                            return(
                                <div className='teeCard1'>
                                <TshirtCard key={i} 
                                    id={tshirt.id} 
                                    name={tshirt.name} 
                                    image={tshirt.image} 
                                    price={tshirt.price}
                                    color={tshirt.color}
                                    description={tshirt.description}/>
                                </div>)


                        })

                        }

                    </div>
               </div>
            </div>
                        
            

        </div>
    )
}
export default TShirt;