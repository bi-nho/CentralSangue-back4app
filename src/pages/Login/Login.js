import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      // Lógica de autenticação aqui
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div><AuthNavbar />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="login-label">Login</label> <br></br> <br></br>
            <label className="email-label">Email:</label>
            <input className="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="password-label">Senha:</label>
            <input className="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="submit-button" type="submit" disabled={!email || !password}>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;