import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Shirts from './Shirts.jsx';
import Login from './LoginPage.jsx';
import Register from './RegisterPage.jsx';
import Pants from './Pants.jsx';
import Cart from './Cart.jsx';
import Profile from './Profile.jsx';
import Sweaterhoodie from './Sweaterhoodie.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer.jsx';


import { useLocation } from 'react-router-dom';
import ScrollToTop from './Component/ScrollOnTop.jsx';
const clientID = "576751783022-0f74mck7m9lgdvq5kno19ekaccsc4b65.apps.googleusercontent.com";


function App() {
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Router basename="/Men-X">
        <MainApp />
      </Router>
    </GoogleOAuthProvider>
  );
}

function MainApp() {
  const location = useLocation(); // use location need to use before router is mouted. 
  const hideFooterRoutes = ["/login", "/register", "/profile", "/cart"];

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/sweaterhoodie" element={<Sweaterhoodie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
}

export default App;
