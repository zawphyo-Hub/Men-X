import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function Register(){
    const countryCodes = [
        { code: "+93", name: "Afghanistan" },
        
        { code: "+61", name: "Australia" },
        { code: "+43", name: "Austria" },
       
        { code: "+267", name: "Botswana" },
        { code: "+55", name: "Brazil" },
        { code: "+673", name: "Brunei" },
        { code: "+359", name: "Bulgaria" },
        { code: "+226", name: "Burkina Faso" },
        { code: "+257", name: "Burundi" },
        { code: "+855", name: "Cambodia" },
        { code: "+237", name: "Cameroon" },
        { code: "+1", name: "Canada" },
        { code: "+236", name: "Central African Republic" },
        { code: "+235", name: "Chad" },
        { code: "+56", name: "Chile" },
       
        { code: "+45", name: "Denmark" },
        { code: "+253", name: "Djibouti" },
        { code: "+1", name: "Dominica" },
        { code: "+1", name: "Dominican Republic" },
        { code: "+593", name: "Ecuador" },
        { code: "+20", name: "Egypt" },
        { code: "+503", name: "El Salvador" },
        { code: "+240", name: "Equatorial Guinea" },
        { code: "+291", name: "Eritrea" },
        { code: "+372", name: "Estonia" },
        { code: "+251", name: "Ethiopia" },
        { code: "+679", name: "Fiji" },
        { code: "+358", name: "Finland" },
        { code: "+33", name: "France" },
        { code: "+241", name: "Gabon" },
        { code: "+220", name: "Gambia" },
        { code: "+995", name: "Georgia" },
        { code: "+49", name: "Germany" },
        { code: "+233", name: "Ghana" },
        { code: "+30", name: "Greece" },
        { code: "+502", name: "Guatemala" },
        { code: "+224", name: "Guinea" },
        { code: "+245", name: "Guinea-Bissau" },
        { code: "+509", name: "Haiti" },
        { code: "+504", name: "Honduras" },
        { code: "+852", name: "Hong Kong" },
        { code: "+36", name: "Hungary" },
        { code: "+354", name: "Iceland" },
        { code: "+91", name: "India" },
        { code: "+62", name: "Indonesia" },
        { code: "+98", name: "Iran" },
        { code: "+964", name: "Iraq" },
        { code: "+353", name: "Ireland" },
        { code: "+972", name: "Israel" },
        { code: "+39", name: "Italy" },
        { code: "+81", name: "Japan" },
        { code: "+962", name: "Jordan" },
        { code: "+7", name: "Kazakhstan" },
        { code: "+254", name: "Kenya" },
        { code: "+965", name: "Kuwait" },
        { code: "+996", name: "Kyrgyzstan" },
        { code: "+856", name: "Laos" },
        { code: "+371", name: "Latvia" },
        { code: "+961", name: "Lebanon" },
        { code: "+218", name: "Libya" },
        { code: "+423", name: "Liechtenstein" },
        { code: "+370", name: "Lithuania" },
        { code: "+352", name: "Luxembourg" },
        { code: "+261", name: "Madagascar" },
        { code: "+265", name: "Malawi" },
        { code: "+60", name: "Malaysia" },
        
        { code: "+356", name: "Malta" },
        { code: "+52", name: "Mexico" },
        { code: "+377", name: "Monaco" },
        
        { code: "+258", name: "Mozambique" },
        { code: "+95", name: "Myanmar" },
        { code: "+977", name: "Nepal" },
        { code: "+31", name: "Netherlands" },
        { code: "+64", name: "New Zealand" },
        { code: "+505", name: "Nicaragua" },
        { code: "+227", name: "Niger" },
        { code: "+234", name: "Nigeria" },
        { code: "+47", name: "Norway"}
    ];

    const [value, setValue] = useState({
                              username: '', 
                              password: '',
                              email:'',
                              countryCode: '',
                              phoneNumber: '', 
                              address: ''
                            });

    const handleChange = (e) => {
        setValue({...value, [e.target.name]:e.target.value});

    }

    const navigate = useNavigate();
    
    async function handleSubmit(e){
         
        e.preventDefault();
        try{
           
            const res = await axios.post('http://localhost:8080/Register', value)
            const message = res.data.message;

            if (message === "Successfully register"){
                toast.success(message);
                navigate('/login', );

            }else{
                toast.error(message);
            }
            
        }
        catch(err){
            toast.error("registration Fail");
           
        }

    }


    
    return(
        <div className="RegContainer">
        <div className="RegForm">
            <form action="" method="post" onSubmit={handleSubmit}>
                
                <div className="regPhoto">
                    <h2>Register Form</h2>
                            
                    
                    <div className="regincontainer">
                    
                    <div className="regin">
                        <div className="reginInput">
                            <input className="reginput" type="text" name= "username" placeholder="Username" onChange={handleChange} required/>
                            
                            <input  className="reginput" type="password"  name="password" placeholder="Password" onChange={handleChange} required />

                        
                            <input  className="reginput" type="password"  name="confirm_pass" placeholder="Confirm Password" onChange={handleChange} required/>
                            
                            <input className="reginput" type="email" name="email" placeholder="Email" onChange={handleChange} required/>
                            

                        </div>
                        <div className="reginInput">

                            <select className="reginput" name="countryCode" onChange={handleChange}>
                                <option value="0">Select Country Code</option>
                                {countryCodes.map((country, i) => (
                                    <option key={i} value={country.code}>
                                        {country.code}, {country.name}
                                    </option>

                                ))}
                                

                            </select>
                            <input className="reginput" type="number" name="phoneNumber" placeholder="PhoneNumber" onChange={handleChange} required/>

                            <textarea className="reginput1" name="address" placeholder="Enter Address" onChange={handleChange}></textarea>

                        </div>
                        
                    

                        
                     
                    </div>                        
                    </div>
                    
                    <button className="buttonreg" type="submit" >Register</button>    
                </div>
                    <span id="span">Already have an account? <Link to="/login"> Login now </Link></span>
            </form>
        </div>
    </div>            
    
    )
}
export default Register;