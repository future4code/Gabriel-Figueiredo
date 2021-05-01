import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import Foto from './components/CardGrande/foto.jpg'
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardMedio from './components/CardMedio/CardMedio'
import ImagemEndereco from './components/CardMedio/endereco.png'
import ImagemEmail from './components/CardPequeno/email.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Foto} 
          nome="Gabriel Figueiredo" 
          descricao="Meu nome é Gabriel, tenho 35 anos e sou formado em Química,
           sou uma pessoa bastante determinada sempre buscando melhorar o trabalho proposto,
            atualmente sou estudante de desenvolvimento frontend focado em react."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
        imagemCaixa= {ImagemEmail}
        email= "Email: gabriel.devsistema@gmail.com"
        />
        <CardMedio
        imagemCasa = {ImagemEndereco}
        endereco = "Endereço: Rua São Paulo 475"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="No momento ainda não tenho experiência como desenvolvedor mas correndo atrás de uma oportunidade,
          já na área de Quimica já trabalhei com desenvolvimento de tintas e também em laboratório fazendo testes e análise,
          atualmente sou comerciante!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
