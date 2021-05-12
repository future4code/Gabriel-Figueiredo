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
const Caixa = styled.div ` 
width: 200px;
margin-left: 580px
`
export default class Etapa1 extends React.Component {


    render(){
        return(
            
            <Cadastro>
                <h1>Etapa 1: Dados gerais</h1>
                <label>1. Qual seu nome?</label>
                <Tamanho type= "text" />
                <label>2. Qual sua idade?</label>
                <Tamanho type= "text"/>
                <label>3. Qual seu email?</label>
                <Tamanho type= "text"/>
                <label>3. Qual sua escolaridade</label>
                <Caixa>
                <select>
                    <option>ensino medio incompleto</option>
                    <option>ensino medio completo</option>
                    <option>ensino superior incompleto</option>
                    <option>ensino superior completo</option>
                </select>
                </Caixa>
               
            </Cadastro>
        )
    }
}


