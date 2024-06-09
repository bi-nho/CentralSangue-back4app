import React from 'react';
import AuthNavbar from '../../components/AuthNavbar/AuthNavbar';
import Fami from '../../components/img/FamiliaODS3-removebg-preview.png';
import ods03 from '../../components/img/imagemODS03.jpg';
import './ODS3.css'

const ODS3 = () => {
  const fontFamily = 'Laundry Gothic, sans-serif';

  return (
    <div>
      <AuthNavbar />
      <h1 style={{ fontFamily, fontSize: '2.5em', fontWeight: 'bold', margin: '20px 0', textAlign: 'center' }}>
        Objetivo de Desenvolvimento Sustentável 3: Saúde e Bem-Estar
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ flex: 1, fontFamily, fontSize: '1.4em', fontWeight: 'bold', textAlign: 'justify', padding: '20px' }}>
          <p>
            O Objetivo de Desenvolvimento Sustentável 3 (ODS 3) visa assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades. Este objetivo é fundamental para o desenvolvimento sustentável, pois uma população saudável é essencial para o crescimento econômico e o progresso social.
          </p>
          <p>
            Entre as metas específicas do ODS 3 estão a redução da taxa de mortalidade materna, o fim das epidemias de doenças como AIDS, tuberculose, malária e doenças tropicais negligenciadas, e a promoção da saúde mental e do bem-estar. Além disso, o ODS 3 enfatiza a importância de garantir o acesso a serviços de saúde de qualidade, medicamentos e vacinas seguros e eficazes, e aumentar o financiamento da saúde e a formação, recrutamento e retenção da força de trabalho na área da saúde.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={Fami} alt="Saúde e Bem-Estar" className="imagemFami" />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={ods03} alt="Promoção da Saúde" className="imageOds" />
        </div>
        <div style={{ flex: 1, fontFamily, fontSize: '1.4em', fontWeight: 'bold', textAlign: 'justify', padding: '20px' }}>
          <p>
            Atingir o ODS 3 requer um esforço global coordenado, com a colaboração de governos, organizações não governamentais, setor privado e comunidades. Iniciativas como campanhas de vacinação, programas de educação em saúde e investimentos em infraestrutura sanitária são exemplos de ações que contribuem para a promoção da saúde e do bem-estar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ODS3;