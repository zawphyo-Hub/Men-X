
import { useState, useEffect, useRef } from "react";
import userImage from './assets/user.png';
import { useNavigate } from "react-router-dom";
import LogoutButton from './Component/Logout';

import Toast from 'bootstrap/js/dist/toast'; // <-- Import just the Toast module


function Profile() {
  const navigate = useNavigate();
  const toastRef = useRef(null); // Ref for the toast DOM element

  const [profilePic, setProfilePic] = useState(userImage);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    

    if (!localUser) {
      navigate("/login");
    } else {
      setUser(localUser);
      if (localUser.picture) {
        setProfilePic(localUser.picture);
      }

      // Wait for the DOM to render the toast, then show it
      setTimeout(() => {
        if (toastRef.current) {
          const toast = new Toast(toastRef.current);
          toast.show();
        }
      },1);
    }
   
  }, [navigate]);

  if (!user) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontSize: "16px" }}>
    {/* <div className="position-fixed top-30px start-50 translate-middle-x p-3" style={{ zIndex: 9999 }}> */}
      {/* Bootstrap Toast */}
      <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">
        <div
          ref={toastRef}
          className="toast "
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false" // optional: keep toast visible until closed
        >
          <div className="toast-header">
            <div className="d-flex justify-content-between w-100">
            <strong >Profile</strong>
            <strong >MenX</strong>

            </div>
           
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button> */}

          </div>
          <div className="toast-body">
            <img src={`https://images.weserv.nl/?url=${encodeURIComponent(profilePic)}`} alt="Profile" style={{ width: "50px", borderRadius: "50%", marginBottom: "10px" }} 
            onError={(e) => {
             
              e.target.src = userImage; // fallback image
            }}
            />
            {/* <h2 style={{ fontSize: "17px" }}>Welcome to Menx</h2> */}
            
            
            <h2 style={{ fontSize: "15px" }}><strong>UserName:</strong> {user.name || user.username || "User"}</h2>
            <p style={{ fontSize: "15px" }}><strong>Email:</strong> {user.email}</p>
            <LogoutButton/>

          </div>
          
        </div>
      </div>

      <br />
      
    </div>
  );
}

export default Profile;

