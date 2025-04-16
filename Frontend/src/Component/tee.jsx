import Product_data from '../assets/tee_data.js';
import Card from './CardTee.jsx';

function Tee(){
    return(
        <div className=' container-fluid justify-content-center teeSection'>
           
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {Product_data.map((shirt, i) => {
                            return(
                                <div className='teeCard1'>
                                <Card key={i} 
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
export default Tee;