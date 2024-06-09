import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && cpf && password && confirmPassword && password === confirmPassword) {
      // Lógica de registro aqui
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <div>
      <AuthNavbar /> 
      <div className="login-container"> 
        <form onSubmit={handleSubmit} className="login-form"> 
          <div>
            <label className='register-label'>Cadastro</label><br></br> <br></br>
            <label className="email-label">Email:</label> 
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" /> 
          </div>
          <div>
            <label className="cpf-label">CPF:</label> 
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="cpf-input" /> 
          </div>
          <div>
            <label className="password-label">Senha:</label> 
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password-input" /> 
          </div>
          <div>
            <label className="confirm-password-label">Confirmar Senha:</label> 
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="confirm-password-input" /> 
          </div>
          <button type="submit" disabled={!email || !cpf || !password || !confirmPassword || password !== confirmPassword} className="submit-button">Cadastrar</button> 
        </form>
      </div>
    </div>
  );
};

export default Register;