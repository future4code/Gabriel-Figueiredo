import React from 'react'
import styled from 'styled-components'


const Conteudo = styled.div `
border: 1px solid pink;
width:500px;
height:600px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 400px;
 `


export default class Centro extends React.Component {

    render() {

        return(
            <Conteudo>
                <h3>Criar Playlist</h3>
                <input type= "text" placeholder="nome da playlist"></input>
                <button>Enviar</button>
            </Conteudo>
        )
    }
}