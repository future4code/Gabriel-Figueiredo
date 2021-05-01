import React from 'react';
import styled from 'styled-components' 


const Bloco = styled.div`
display: flex;
justify-content: start;
align-items: center;
border: 1px solid black;
margin: 10px 0 10px 0;
 `
const Imagem = styled.img`
width: 30px;
height: 30px;
 `
function CardMedio (props) {
    return(
        < Bloco className="imagem-endereco">
            <Imagem src = { props.imagemCasa }/>
            <p>{props.endereco}</p>
        </ Bloco>
    )
}
export default CardMedio;
