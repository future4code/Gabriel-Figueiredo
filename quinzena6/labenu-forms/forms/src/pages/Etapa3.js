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
export default class Informacao extends React.Component {




    render(){
        return(
            <Cadastro>
                <h1>Etapa 3- InCadastroações gerais de ensino</h1>
                <label>Porque você não terninou um curso de graduação?</label>
                <Tamanho type= "text" />
                <label>Você fez algum curso complementar?</label>
                <Caixa>
                    <select>
                        <option>Nenhum</option>
                        <option>Cruso Tecnico</option>
                        <option>Curso de Inglês</option>
                    </select>
                </Caixa>
                
            </Cadastro>
        )
    }
}