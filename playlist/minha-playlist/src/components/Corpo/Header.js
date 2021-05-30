import React from 'react'

import Corpo from './Corpo'
import styled from 'styled-components'


const ContainerCabecalho = styled.div`
border: 1px solid blue;
display: flex;
justify-content: space-between;
 `
const CabecalhoBotao = styled.button `
margin-right: 50px;
margin-top:22px;
width: 100px;
height: 40px;
border-radius: 40px;
 `
const CabecalhoTitulo = styled.h1 `
margin-left: 550px;
 `
export default class Header extends React.Component {

      
    render() {

        return (
            <div>

            <ContainerCabecalho>
                <div>
                    <CabecalhoTitulo>Minha Playlist</CabecalhoTitulo>
                </div>
                <div>
                    <CabecalhoBotao onClick= {() => props.trocarPagina()}>Ver Playlist</CabecalhoBotao>
                    {() =>props.alterarPagina()}
                </div>
            </ContainerCabecalho>
            <Corpo/>
            </div>
        )
    }
}