import React from 'react'
import styled from 'styled-components'

const Cadastro = styled.form ` 
display: flex;
flex-direction: column;
text-align: center;
`


export default class Final extends React.Component{



    render(){

        return (

        <Cadastro>
            <h1>O formulario acabou</h1>
            <p>muito obrigado por participar! Entraremos em contato!</p>
        </Cadastro>

        )
    }
}