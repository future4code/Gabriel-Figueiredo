import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { baseUrlChoosePerson, baseUrlGetProfile } from '../../constant';

const ContainerImagem = styled.div`
display: flex;
justify-content: flex-end;
margin-top: -50px;
 `

const Imagem = styled.img`
width: 30px;
height: 30px;
margin-right: 10px;
 `
const ContainerButtonLike = styled.div`
display: flex;
justify-content: space-around;
margin-top: -25px;
 `
const BotaoLike = styled.p`
color: red;
font-size: 40px;
border: 2px solid red;
text-align: center;
border-radius: 50%;
width: 50px;
height: 50px;
 `
const BotaoDesLike = styled.p`
background-color: white;
color: black;
font-size: 40px;
border: 2px solid black;
text-align: center;
border-radius: 50%;
width: 50px;
height: 50px;
 `
const Container = styled.div`
position: relative;
margin-left: 23px;
border: 1px solid black;
height: 350px;
width: 300px;
border-radius: 10px;
box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
-webkit-box-align: center;
overflow: hidden;
margin-top: 10px;
 `
const ContainerFotoPerfil = styled.div`
position: absolute;
width: 100%;
 `
const ImagemPerfil = styled.img`
width: 100%;
display: block;
z-index: 1;
 `
const NomePerfil = styled.p`
position: absolute;
z-index: 1;
color: white;
font-weight: 700;
 `
const ContainerTexto = styled.div`
height: 30%;
position: absolute;
bottom: 0px;
width: 100%;
background-image: linear-gradient(to top, rgba(10, 20, 10, 0.5), transparent);
color: white;
display: flex;
padding: 15px;
z-index: 1;
 `
const Bio = styled.div`
margin-top: 20px;
 `
function Pageprofile(props) {

  const [perfil, setPerfil] = useState([])

  useEffect(() => {
    returnProfile()
  }, [])

  const returnProfile = () => {

    axios.get(baseUrlGetProfile)
      .then((response) => {
        setPerfil(response.data.profile)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  console.log("perfil", perfil);

  const like = () => {

    const body = {
      id: perfil.id,
      choice: true
    }
    axios.post(baseUrlChoosePerson, body)
      .then((response) => {
        console.log(response.data);
        setPerfil(response.data.isMatch)
        returnProfile()
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deslike = () => {

    const body = {
      id: perfil.id,
      choice: false
    }
    axios.post(baseUrlChoosePerson, body)
      .then((response) => {
        setPerfil(response.data.isMatch)
        returnProfile()
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <ContainerImagem>
        <Imagem src="https://icon-library.com/images/person_ok-512.png" onClick={props.mudaPagina}></Imagem>
      </ContainerImagem>
      <Container>
        <ContainerFotoPerfil>
          <ImagemPerfil src={perfil.photo}></ImagemPerfil>
        </ContainerFotoPerfil>
        <ContainerTexto>
          <div>
            <NomePerfil>{perfil.name}  {perfil.age}</NomePerfil>
          </div>
          <Bio>
            <p>{perfil.bio}</p>
          </Bio>
        </ContainerTexto>
      </Container>
      <ContainerButtonLike>
        <BotaoDesLike onClick={deslike}>X</BotaoDesLike>
        <BotaoLike onClick={like}>♥️</BotaoLike>
      </ContainerButtonLike>
    </div>
  )
}


export default Pageprofile;