import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="auth-navbar-container">
        <AuthNavbar />
    <div className="landing-page">
      <div className="content-container">
        <h1 className='BemVindo'>Bem-vindo ao nosso site</h1>
        <p className='Texto1'>Explore nosso site utilizando a navegação acima.</p>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;