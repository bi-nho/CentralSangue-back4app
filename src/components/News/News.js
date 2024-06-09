import React from 'react';
import imgDoacao from '../img/DoacaoS.jpg';
import img04 from '../img/img04.png';
import img05 from '../img/img05.png';
import img06 from '../img/img06.png';

const News = () => {
  return (
    <section className="news" id="news">


<div style={{fontSize: '1.4em', fontWeight: 'bold', justifyContent: 'left', padding: '20px'}}>
<h2 className='News1'>Últimas Notícias</h2>
</div>

<div style={{ display: 'flex', marginBottom: '20px', marginLeft:'15%', marginRight:'15%'}}>
  <div>
    <img className='ImgDS' src={imgDoacao} alt='Imagem Hemope' style={{position: 'static'}}/>
  </div>


    <table style={{flex: '1', fontWeight: 'bold', textAlign: 'left', alignContent: 'center'}}>
  <tr>
  <td>
    <img className = "img04" src={img04} alt="coração de brinquedo entre duas mão" style={{height: '100px'}}/>
    </td>


      <td>
      <a href='https://www.hemope.pe.gov.br/noticia/faculdade-pernambucana-saude-realiza-campanha-para-a-efetuar-cadastros-para-a-doacao-de-medula-ossea'>
        <h5>19/10/2023</h5>
        <h4>Faculdade Pernambucana Saúde realiza campanha para a efetuar cadastros para a doação de medula óssea</h4>
        </a>
      </td>
  </tr>


  <tr>
  <td>
    <img className = "img05" src={img05} alt="fachada do hemope" style={{height: '100px'}}/>
    </td>
    <td>
    <a href='https://www.hemope.pe.gov.br/noticia/ses-pe-nomeia-16-profissionais-aprovados-em-concurso-para-fundacao-hemope'>
      <h5>18/03/2024</h5>
      <h4>SES-PE nomeia 16 profissionais aprovados em concurso para Fundação HEMOPE</h4>
      </a>
    </td>
  </tr>


  <tr>
  <td>
    <img className = "img06" src={img06} alt="cadeiras para doação de sangue" style={{height: '100px'}}/>
    </td>
    <td>
    <a href='https://www.hemope.pe.gov.br/noticia/novas-cadeiras-no-hemope-mais-conforto-para-os-doadores'>
      <h5>05/04/2024</h5>
      <h4>Novas Cadeiras no Hemope: Mais conforto para os doadores</h4>
      </a>
    </td>
  </tr>
</table>

</div>

  
    </section>
  );
};

export default News;