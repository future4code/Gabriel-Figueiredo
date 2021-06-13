import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { baseUrlMatchs } from '../../constant';



const ContainerImagem = styled.div`
display: flex;
justify-content: flex-start;
margin-top: -50px;
 `

const Imagem = styled.img`
width: 30px;
height: 30px;
margin-left: 10px;
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
  },[setPerfilVisto])


  return (
    <ContainerImagem>
      <p>{perfilVisto.name}</p>
      <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkBLaX2ZjCnAVsmtgc6ibWVW-1tn93FXuiRp06E0pqRkzd-b70kFbP20HUcdlZoTF_q0&usqp=CAU" onClick={props.voltaPagina}></Imagem>
    </ContainerImagem>
  )
}


export default PageMatchs;