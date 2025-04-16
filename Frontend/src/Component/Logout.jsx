
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Successfully Logout");
    setTimeout (() => {
      navigate("/login");
    },500)
  }  
  

  return <button  className="b-logout" style={{ borderRadius: "6px" }} onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
