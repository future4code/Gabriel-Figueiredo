import React, { useEffect, useState } from 'react';
import ClearProfile from '../ClearProfile';
import axios from 'axios';
import styled from 'styled-components'
import { baseUrlChoosePerson, baseUrlGetProfile } from '../../constant';

const ContainerImagem = styled.div`
display: flex;
justify-content: flex-end;
 `

const Imagem = styled.img`
width: 30px;
height: 30px;
 `
const ContainerButtonLike = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
 `
const BotaoLike = styled.p`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 50%;
color: green;
font-size: 50px;
margin-top: 10px;
text-align: center;
width: 50px;
height: 50px;
@keyframes direita {
from{
transform: translate(0) rotate(0);
}
to {
transform: translate(200px) rotate(45deg);
}
}
&:hover {
  transform: scale(1.1);
  background-color: green;
  color: white;
}
 `
const BotaoDesLike = styled.p`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 50%;
color: red;
font-size: 30px;
font-weight: 900;
text-align: center;
width: 50px;
height: 50px;
margin-top: 10px;
@keyframes esquerda {
from{
transform: translate(0) rotate(0);
}
to {
transform: translate(-200px) rotate(-45deg);
}
}
&:hover {
  transform: scale(1.2);
  background-color: red;
  color: white;
}
 `
const Container = styled.div`
position: relative;
height: 75vh;
width: 20vw;
border-radius: 10px;
box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
-webkit-box-align: center;
overflow: hidden;
animation:   ${props => {
    if (props.animation === "direita") {
      return "direita 0.9s  0s"
    } else if (props.animation === "esquerda") {
      return "esquerda 0.5s 0s"
    } else {
      return " "
    }
  }};
  @media screen and (max-width: 767px) {
  min-width: 80vw;
  height: 75vh;
}
 `
const ContainerFotoPerfil = styled.div`
width: 20vw;
height: 80vh;

 `
const ImagemPerfil = styled.img`
width: 20vw;
height: 100%;
display: block;
z-index: 1; 
border-radius: 10px;

@media screen and (max-width: 767px) {
width: 80vw;
height: 80vh;
}

 `
const NomePerfil = styled.p`
position: absolute;
z-index: 1;
color: white;
font-weight: 700;
margin-top: 50px;
 `
const ContainerTexto = styled.div`
height: 30%;
position: absolute;
bottom: 0px;
width: 100%;
background-image: linear-gradient(to top, rgba(10, 20, 10, 0.5), transparent);
color: white;
display: flex;
flex-wrap: wrap;
padding: 10px;
z-index: 1;
 `
const Bio = styled.div`
margin-top: 60px;
 `
function Pageprofile(props) {

  const [perfil, setPerfil] = useState([])
  const [animation, setAnimation] = useState("")

  useEffect(() => {
    profile()
  }, [])

  const profile = () => {

    axios.get(baseUrlGetProfile)
      .then((response) => {
        setPerfil(response.data.profile)
      })
      .catch((error) => {
        console.log(error);
      })
  }


  const like = () => {

    const body = {
      id: perfil.id,
      choice: true
    }
    axios.post(baseUrlChoosePerson, body)
      .then((response) => {
        console.log(response.data);
        setPerfil(response.data.isMatch)
        profile()
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
        profile()
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
      <Container animation={animation}>
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
      <ContainerButtonLike >
        <BotaoDesLike onClick={() => {
          deslike()
          setAnimation("esquerda")
        }}>X</BotaoDesLike>
        <ClearProfile
          profile={profile}
        />
        <BotaoLike onClick={() => {
          like()
          setAnimation("direita")
        }}>♥️</BotaoLike>
      </ContainerButtonLike>
    </div>
  )
}


export default Pageprofile;