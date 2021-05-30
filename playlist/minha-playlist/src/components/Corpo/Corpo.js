import React from 'react'
import styled from 'styled-components'



const Conteudo = styled.div `
border: 1px solid pink;
width:500px;
height:400px;
display: flex;
flex-direction: column;
justify-content: center;
margin-right: 400px;
margin-top:200px;
 `


export default class Corpo extends React.Component {

    

    render() {

        return(
            <div>
               <div>
                    <h1>Minha Playlist</h1>
                </div>
                <div>
                    <button onClick={() => this.props.trocarPagina()}>Ver Playlist</button >
                    {this.props.alterandoPagina()}   
                </div>
                <Conteudo>
                <h3>Criar Playlist</h3>
                <input type= "text" placeholder="nome da playlist"></input>
                <button>Enviar</button>
                </Conteudo>
            </div>
            
        )
    }
}