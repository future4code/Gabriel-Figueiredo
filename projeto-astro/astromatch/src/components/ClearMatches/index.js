import React, { useState } from 'react'
import axios from 'axios'
import { baseUrlClear } from '../../constant'
import styled from 'styled-components'

const Botao = styled.button ` 
border-radius: 5px;
height: 30px;
font-size: 12px;
background-color: yellow;
width: 130px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  background-color: black;
  color: yellow;
  transform: scale(1.2)
}
`
const Container = styled.div `
margin-top: 150px;
margin-left: 70px;

 `


function ClearMatches(props) {

  const [remove, setRemove] = useState([])

  const removeMatches = () => {
    const body = {
      id: "wkbSFXRvGbKQv5uvilMu",
    }
    axios.put(baseUrlClear, body)
      .then((response) => {
        console.log(response.data);
        setRemove(response.data);
        props.matches()
        
      })
      .catch((error) => {
        console.log(error.response);
      })
    
  }

  return (
    <Container>
      <Botao  onClick={removeMatches}>Remover Matches</Botao >
    </Container>
  )
}


export default ClearMatches;