import React from 'react'
import Corpo from './components/Corpo/Corpo'
import Home from './components/Corpo/Home'
import styled from 'styled-components'


const ContainerCabecalho = styled.div`
display: flex;
justify-content: center;
border: 1px solid blue;


background-color: blue;

 `
const Cor = styled.div `
background-color: yellow;


 `


export default class App extends React.Component {

  state = {
    playlist: "nome"
  }

  trocarPagina = () => {

    if (this.state.playlist === "nome") {
      this.setState({ playlist: "musica" })
    } else if (this.state.playlist === "musica") {
      this.setState({ playlist: "nome" })
    }
  }

  alterandoPagina = () => {

    switch (this.state.playlist) {
      case "nome":
        return <Corpo/>
        
      case "musica":
        return <Home/>
      default:
    }
  }

    render() {
       return(
          
            <ContainerCabecalho

            trocarPagina={this.trocarPagina}
            alterandoPagina={this.alterandoPagina}
           /> 
        
        )
    }
}
