import JeanCard from "./JeanCard.jsx";
import Jean_data from '../assets/jean_data.js';
function Jean(){
    return(
        <div className=' container-fluid justify-content-center teeSection'>
           
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {Jean_data.map((jean, i) => {
                            return(
                                <div className='teeCard1'>
                                <JeanCard key={i} 
                                    id={jean.id} 
                                    name={jean.name} 
                                    image={jean.image} 
                                    price={jean.price}
                                    color={jean.color}
                                    description={jean.description}/>
                                </div>)


                        })

                        }

                    </div>
               </div>
            </div>
                        
            

        </div>
    )
}
export default Jean;