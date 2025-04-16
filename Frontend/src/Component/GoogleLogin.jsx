import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function LoginButton({ onLoginSuccess }) {
  return (
    <div id="signInButton">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log("SignIn Success:", decoded);
         
          onLoginSuccess(decoded);  // Let parent handle redirect
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default LoginButton;
