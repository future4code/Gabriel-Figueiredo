import React from 'react';
import styled from 'styled-components' 

const BlocoGrande = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Imagem = styled.img `
    width: 80px;
    margin-right: 10px;
    border-radius: 50%;
`
const Texto = styled.h4 `
    margin-bottom: 15px;
`
const Paragrafo = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
function CardGrande(props) {
    return (
        <BlocoGrande className="bigcard-container">
            <Imagem src={ props.imagem } />
            <Paragrafo>
                <Texto>{ props.nome }</Texto>
                <p>{ props.descricao }</p>
            </Paragrafo>
        </BlocoGrande>
    )
}

export default CardGrande;