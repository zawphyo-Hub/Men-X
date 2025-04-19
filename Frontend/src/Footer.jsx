import { Link } from "react-router-dom";
function Footer(){
    return(
        <div>
        
		<div className="f-container">
			<div className="footer-row">
				<div className="footer-column">
					<h4 >MenX</h4>
					<p>	MenX Fashion </p>
					

				</div>
               			

				 <div className="footer-column">
					<h4>Main Pages</h4>
					<div className="Main-links">
						<Link to="/home" className="f-page-Links">Home</Link>
						<Link to="/shirts" className="f-page-Links">T-Shirts</Link>
						<Link to="/pants" className="f-page-Links">Pants</Link>
						<Link to="/sweaterhoodie" className="f-page-Links">Sweaters</Link>
						<Link to="/cart" className="f-page-Links">CartPages</Link>
						<Link to="/login" className="f-page-Links">Login</Link>

					</div>
				
				</div> 



				<div className="footer-column">
					<h4>Contact us</h4>
					<h8 style={{color: " rgb(216, 209, 209)"}}>Phone - 9594710239</h8> <br></br>
					<h8 style={{color: "rgb(216, 209, 209)"}}>Email - menx77@gmail.com</h8>
				
				</div>
				<div className="footer-column">
					<h4>Follow us</h4>
					<a href="https://www.facebook.com/"><i className="fa-brands fa-facebook fa-xl" style={{color: "white", marginRight: "5px"}}></i></a>
    	            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram fa-xl" style={{color: "red", marginRight: "5px"}}></i></a>
    	            <a href="https://twitter.com/"><i className="fa-brands fa-twitter fa-xl" style={{color: "blue", marginRight: "5px"}}></i></a>
    	            <a href="https://www.whatsapp.com/"><i className="fa-brands fa-whatsapp fa-xl" style={{color: "green", marginRight: "5px"}}></i></a>
				</div>

				

			</div> 
			<p className="copyright">Copyrights &copy;2024 All rights reserved | Made by MenX </p>
            
		</div>
		
		
    
    </div>
    );
}
export default Footer;