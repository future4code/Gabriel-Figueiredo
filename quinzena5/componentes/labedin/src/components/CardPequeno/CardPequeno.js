import React from 'react';
import styled from 'styled-components'


const BlocoDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
border: 1px solid black;
margin: 10px 0 10px 0;
 ` 
const ImagemEmail = styled.img`
width: 30px;
height: 30px;
`

function CardPequeno (props) {
    return(
        <BlocoDiv className="imagem-email">
            <ImagemEmail src = { props.imagemCaixa }/>
            <p>{props.email}</p>
        </BlocoDiv>
    )
}
export default CardPequeno;
