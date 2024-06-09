import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../Profile/Profile.css';
import Ruan from'../../components/img/FotoPerfil.jpeg';

const Profile = () => {
return (
    <div>
    <Navbar />

    <link rel="stylesheet" type="text/css" href="Profile.css" media="screen" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"></link>

    <div class="image-description-container">
        <div class="image-container">
            <img src= {Ruan} alt="Descrição da imagem" class="example-image"/>
        </div>
        <div class="description">
            <p>ID: 12322-2</p>
            <p>Robson Henrique</p>
            <p>CPF: 123.342.123-10</p>
        </div>
    </div>
    <div class="content">
        <h3> Descrição </h3>
        <div class="paragraphs-container">
            <p>Sexo: Masculino</p>
            <p>Tipo Sanguíneo: O</p>
            <p>RH: Positivo</p>
        </div>

        <h3> Endereço </h3>
        <div class="paragraphs-container">
            <p>CEP: 123456-78</p>
            <p>Endereço: Rua Ambo - Morro da Conceição, Recife - PE</p>
            <p>Número: 38</p>
        </div>

        <h3> Doações </h3>
        <div class="paragraphs-container">
            <p>AGENDAMENTO: Rua Joaquim Nabuco - Graças, Recife - PE</p>
            <p>HORÁRIO: 14:00</p>
            <p>p.m</p>
        </div>
</div>
    </div>
  );
  
  
}

export default Profile;