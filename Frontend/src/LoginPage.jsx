
import { Link} from "react-router-dom";
import { useState } from "react";
import LoginButton from './Component/GoogleLogin.jsx';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login(){
    
    const navigate = useNavigate(); 
    const [googleUser, setGoogleUser] = useState(null);
    const handleGoogleLogin = (userData) => {
        setGoogleUser(userData); // Save it locally (optional)

        const savedUser = {
            name: userData.name,
            email: userData.email,
            picture: userData.picture?.replace('=s96-c', '') 
          };

        localStorage.setItem("user", JSON.stringify(savedUser));
        toast.success(`SignIn Successful ${userData.name}(${userData.email})`);
        setTimeout(() => {
            navigate("/profile", { state: userData });
        }, 1000); 
      };
      
      const handleGoogleLogout = () => {
        setGoogleUser(null); // clear user info
    };

    
    const [eyePassword, setEyePassword] = useState("password");

    const togglePassword = () => {
        setEyePassword((eP) => (eP === 'password' ? "text" : "password"))
    }

   
    const [user, setUser] = useState({email: '', password: ''});
    const handleLoginChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

   
    async function handleSubmitForm(event){
        event.preventDefault();
        
        try{
            const res =  await axios.post('http://localhost:8080/login', user);

            const message = res.data.message;
            const userData = { 
                username: res.data.username, 
                email: res.data.email,
                
              };
            if (res.data.message === "Login Successful") {
                toast.success(message);
                localStorage.setItem("user", JSON.stringify(userData));
                navigate('/profile', { state: userData }); // state: { username: res.data.username, email: res.data.email } 
            } else {
                toast.error(message);
              }

        }catch(err){
            toast.error("Login Fail!");
        }
        
    }

       


    return(
        <div className="logContainer">
        <div className="loginForm">
        <form onSubmit={handleSubmitForm}>
            <div className="logPhoto1">
                    
                <h2>Login Form</h2>
                <input className="inputLog" type="email" name="email" placeholder="Email" onChange={handleLoginChange} required/>
                <div className="eyePassword">
                     <input className="inputLog" type={eyePassword} id="password" name="password" placeholder="Password" onChange={handleLoginChange} required/>
                     <i className={`fa-solid ${eyePassword === "password" ? "fa-eye" : "fa-eye-slash"}`} id="eyeToggle" onClick={togglePassword}></i>
                </div>
                    
                <button className="buttonlog" type="submit">Login</button>
                <div style={{ marginTop: '10px', width: '300px' }}>
                    <LoginButton onLoginSuccess={handleGoogleLogin}/>
                    
                </div>
            </div> 
            
        </form>
        
     
        <span id="span">Already have an account? <Link to="/Register"> Register now </Link></span>
        
        </div>
    </div>
 

    )
}
export default Login;