import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { baseUrlMatchs } from '../../constant';



const ContainerMatchs = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: -50px;
border: 1px solid blue;
 `

const Imagem = styled.img`
width: 30px;
height: 30px;

 `
const ImagemPessoa = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
margin: 0 20px 0 0;
 `
const Container = styled.div`
 display: flex;
margin-left: 10px;
  `
const ContainerBotao = styled.p`
margin-top: 0px;
margin-left: 5px;
 `
const Paragrafo = styled.p`
margin-top: 5px;
 `
function PageMatchs(props) {

  const [perfilVisto, setPerfilVisto] = useState([])

  useEffect(() => {

    axios.get(baseUrlMatchs)
      .then((response) => {
        setPerfilVisto(response.data.matches)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [setPerfilVisto])

  console.log("Visto", perfilVisto);
  return (
    <ContainerMatchs>
      <ContainerBotao >
        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkBLaX2ZjCnAVsmtgc6ibWVW-1tn93FXuiRp06E0pqRkzd-b70kFbP20HUcdlZoTF_q0&usqp=CAU" onClick={props.voltaPagina}></Imagem>
      </ContainerBotao >
      {perfilVisto.map((perfil) => {
        return <Container key={perfil.id}>
          <ImagemPessoa src={perfil.photo}></ImagemPessoa ><Paragrafo>{perfil.name}</Paragrafo>
        </Container>
      })}
    </ContainerMatchs>
  )
}


export default PageMatchs;