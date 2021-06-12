import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerImagem = styled.div `
display: flex;
justify-content: flex-end;
margin-top: -50px;
 `

const Imagem = styled.img `
width: 30px;
height: 30px;
margin-right: 10px;
 `
const ContainerButtonLike = styled.div`
display: flex;
justify-content: space-around;
margin-top: 330px;
 `
const Botao = styled.p`
font-size: 40px;
border: 2px solid black;
text-align: center;
border-radius: 50%;
width: 50px;
height: 50px;

 `

function Pageprofile(props) {

  
useEffect(() => {

  axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person',)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
})

useEffect(() => {
  axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person',)
})

  return (
    <div>
      <ContainerImagem>
      <Imagem src= "https://icon-library.com/images/person_ok-512.png" onClick= {props.mudaPagina}></Imagem>
      </ContainerImagem>
      <ContainerButtonLike>
        <Botao>X</Botao>
        <Botao>♥️</Botao>
      </ContainerButtonLike>
    </div>
  )
}


export default Pageprofile;