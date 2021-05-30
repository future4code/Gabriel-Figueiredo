import React from 'react'
import styled from 'styled-components'


const Botao = styled.button `
margin-right: 50px;
margin-top: 25px;
width: 120px;
height: 40px;
border-radius: 40px;
 `
const NomePlaylist = styled.h1 `
margin-left: 550px;
 `

export default class Home extends React.Component {

    
    render() {

        return(
            <div>
                 <div>
                    <NomePlaylist >Minha Playlist</NomePlaylist > 
                </div>
                <div>
                    <Botao >Voltar para Home</Botao>
                    
                </div>
                <div>
                    <p>lista de contato</p>
                </div>
            </div>
        )
    }
}