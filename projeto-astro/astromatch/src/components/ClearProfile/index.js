import React, { useState } from 'react'
import axios from 'axios'
import { baseUrlClear } from '../../constant'
import styled from 'styled-components'

const Botao = styled.p` 
margin-top: 25px;
border-radius: 5px;
height: 30px;
font-size: 12px;
background-color: yellow;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  background-color: black;
  color: yellow;
  transform: scale(1.2)
  
}
 `



function ClearProfile(props) {

  const [remove, setRemove] = useState([])

  const removeProfile = () => {
    const body = {
      id: "wkbSFXRvGbKQv5uvilMu",
    }
    axios.put(baseUrlClear, body)
      .then((response) => {
        console.log(response.data);
        setRemove(response.data);
        props.profile()
        
      })
      .catch((error) => {
        console.log(error.response);
      })
    
  }

  return (
    <div>
      <Botao onClick={removeProfile}>Remover Perfil</Botao>
    </div>
  )
}


export default ClearProfile;