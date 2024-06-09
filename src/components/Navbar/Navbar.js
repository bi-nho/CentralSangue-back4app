import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import Exit from '../img/Exit.png';
import Schedule from '../img/IconA.png';
import Profile from '../img/IconP.png';
import LogoTN from '../img/LogoTN.png';
import './Navbar.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const imgStyle = {  
    margin: '10px',
    height: '40px',
  };
  const navButton = {
    margin: '10px',
    height: '40px',
    backgroundColor: darkMode ? '#555555' : '#ffffff',
    border: '0',
    color: darkMode ? '#ffffff' : '#333333',
  };
  const imgClass = "navbar-img";

  return (
    <nav style={{
      backgroundColor: darkMode ? '#212121' : '#dc143c',
      color: darkMode ? '#ffffff' : '#ffffff',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/home">
        <img src={LogoTN} alt="Home" style={{ ...imgStyle }} className={imgClass} />
      </Link>
        <Link to="/profile">
          <img src={Profile} alt="Perfil" style={{ ...imgStyle }} className={imgClass} />
        </Link>
        <Link to="/schedule">
          <img src={Schedule} alt="Agendamento" style={{ ...imgStyle }} className={imgClass} />
        </Link>
        <button className='ModoE' style={navButton} onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
        <Link to="/">
          <img src={Exit} alt="Sair" style={{ ...imgStyle }} className={imgClass} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;