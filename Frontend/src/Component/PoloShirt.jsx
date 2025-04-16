import Polo_data from "../assets/polo_data.js";
import PoloCard from "./PoloCard.jsx";

function PoloShirt(){
    return(
        
        <div className="container d-flex justify-content-center">
        <div className="row">
            {Polo_data.map((polo, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                    <PoloCard 
                        key={index}
                        id={polo.id}
                        name = {polo.name}
                        color = {polo.color}
                        image={polo.image}
                        description={polo.description}
                        price={polo.price}
                    />
                </div>
            ))}
        </div>
    </div>
    
    )
}
export default PoloShirt;