import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClearMatches from '../ClearMatches';
import styled from 'styled-components'
import { baseUrlMatchs } from '../../constant';



const ContainerMatchs = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: -50px;
width: 20vw;
 `

const Imagem = styled.img`
width: 30px;
height: 30px;
margin-top: 25px;
 `
const ImagemPessoa = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
padding: 5px;
 `
const Container = styled.div`
 display: flex;
 @media screen and (max-width: 767px) {
  width: 80vw;
  display: flex;
}
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
    matches()
  },[])

  const matches = () => {

    axios.get(baseUrlMatchs)
      .then((response) => {
        setPerfilVisto(response.data.matches)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  return (
    <ContainerMatchs>
      <ContainerBotao >
        <Imagem src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-red/raphael/raphael_people/raphael_people_flat-circle-white-on-red_512x512.png" onClick={props.voltaPagina}></Imagem>
      </ContainerBotao >
      {perfilVisto.map((perfil) => {
        return <Container key={perfil.id}>
          <ImagemPessoa src={perfil.photo}></ImagemPessoa ><Paragrafo>{perfil.name}</Paragrafo>
        </Container>
      })}
      <ClearMatches
      matches={matches}
      />
    </ContainerMatchs>
  )
}


export default PageMatchs;