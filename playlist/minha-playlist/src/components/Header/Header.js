import React from 'react'
import styled from 'styled-components'


const Titulo = styled.div `
border: 1px solid blue;
display: flex;
justify-content: space-between;
 `
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



export default class Header extends React.Component {



    render() {
        return(
            <Titulo>
                <div>
                    <NomePlaylist >Minha Playlist</NomePlaylist > 
                </div>
                <div>
                    <Botao>Ver Playlist</Botao>
                </div>
               
            </Titulo>
        )
    }
}