import React from 'react';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import GitHub from '../../components/img/Github.png';
import Linkedin from '../../components/img/Linkedin.png';
import RuanFoto from '../../components/img/FotoPerfil.jpeg'
import AdrielleFoto from '../../components/img/Adrielle.jpeg'
import LuisFoto from '../../components/img/Luis.png'
import AndreyFoto from '../../components/img/Andrey.jpeg'
import './About.css';

const teamMembers = [
  {
    name: 'Ruan Azevedo Lira',
    github: 'https://github.com/RuanAzevedoLira02',
    linkedin: 'https://www.linkedin.com/in/ruan-azevedo-lira/',
    photo: RuanFoto
  },
  {
    name: 'Andrey Ranielly',
    github: 'https://github.com/Andrey-Ranielly',
    linkedin: 'https://www.linkedin.com/in/andrey-ranielly/',
    photo: AndreyFoto
  },
  {
    name: 'Luís Gabriel',
    github: 'https://github.com/bi-nho',
    linkedin: 'https://www.linkedin.com/in/binho/',
    photo: LuisFoto
  },
  {
    name: 'Adrielle Ximendes',
    github: 'https://github.com/ximendesadrielle',
    linkedin: 'https://www.linkedin.com/in/adrielle-mendes/',
    photo: AdrielleFoto
  },
];

const About = () => {
  return (
    <div>
      <AuthNavbar />
      <div className="container">
        <h2>Por que a Doação de Sangue é Tão Importante?</h2>
        <p>A importância da doação de sangue é um tema vital e digno de ser destacado. Em sua essência, a doação de sangue é um ato altruístico que salva vidas.
           É uma demonstração de solidariedade e empatia para com aqueles que enfrentam condições médicas críticas, traumas ou cirurgias que demandam transfusões sanguíneas.
          O sangue é um recurso precioso e insubstituível. Não há tecnologia disponível que possa replicar sua complexa composição e função.A doação de
          sangue não apenas salva vidas, mas também fortalece comunidades. É um ato que une pessoas de diferentes origens, culturas e crenças em um objetivo comum: ajudar o próximo. A criação de uma aplicação 
          dedicada a facilitar e promover a doação de sangue é uma contribuição significativa para a saúde pública e o bem-estar da sociedade. Por meio da tecnologia, podemos simplificar o processo de doação de sangue, conectar doadores potenciais aos bancos de sangue e promover uma cultura de solidariedade e cuidado mútuo. 
          Por causa disso os alunos do curso sistema para internet da Universidade Católica de Pernambuco pensaram numa aplicação para auxiliar e reforça a importância
            de ajudar o próximo em momentos de necessidade.</p>
          <br></br><br></br>
            <p>Para sabe mais sobre os responsaveis pelo projeto, você pode acessar o Github e/ou Linkedin:</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ margin: '20px', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
              <img src={member.photo} alt={member.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
              {member.name}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <img src={GitHub} alt="Github" style={{ width: '50px', height: '50px' }} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="Linkedin" style={{ width: '50px', height: '50px' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;