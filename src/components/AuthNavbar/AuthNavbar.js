import React from 'react';
import { Link } from 'react-router-dom';
import './AuthNavbar.css';
import Landing from '../img/LogoTN.png';
import ODS from '../img/ODS.png';
import About from '../img/About.png';

const AuthNavbar = () => {
  const imgStyle = {  
    margin: '10px',
    height:'50px'
  }; 

  return (
    <nav className="auth-navbar" style={{ backgroundColor: '#dc143c', color: '#333' }}>
      <Link to="/" className="navbar-link"><img src={Landing} alt="LandingPage" style={imgStyle}/></Link>
      <Link to="/about" className="navbar-link"><img src={About} alt="About" style={imgStyle}/></Link>
      <Link to="/ods3" className="navbar-link"><img src={ODS} alt="ODS" style={imgStyle}/></Link>
      <div class="buttons-container">
  <Link to="/login"><button class="buttonLogin">Login</button></Link>
  <Link to="/register"><button class="buttonRegister">Register</button></Link>
</div>
    </nav>
  );
};

export default AuthNavbar;