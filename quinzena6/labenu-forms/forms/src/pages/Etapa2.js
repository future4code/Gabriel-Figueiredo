import React from 'react'
import styled from 'styled-components'

const Cadastro = styled.form ` 
display: flex;
flex-direction: column;
text-align: center;
`
const Tamanho = styled.input `
width: 200px;
margin-left: 580px

`
export default class Educacionais extends React.Component {



    render (){
        return (
            <Cadastro>
                <h1>Etapa 2 - Informações do ensino superior</h1>
                <label>5. Qual curso?</label>
                <Tamanho type= "text"/>
                <label>6. Qual a unidade de ensino?</label>
                <Tamanho type= "text"/>
            </Cadastro>
        )
       
    }
    
}