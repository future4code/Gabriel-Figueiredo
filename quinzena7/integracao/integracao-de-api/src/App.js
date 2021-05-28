import React from 'react'
import axios from 'axios'
import CriarDados from './Pages/CriarDados'
import ListaDeContatos from './Pages/ListaDeContatos'
import styled from 'styled-components'


const Centro = styled.div`
display: flex;
justify-content: center;
flex-direction: column;


 `
const Texto = styled.h1`
 text-align: center;
  `
const Botao = styled.button`
  margin-left: 600px;
  width: 150px;
  
   `


export default class App extends React.Component {

  state = {
    listaUsuario: "contato"
  }

  trocarPagina = () => {

    if (this.state.listaUsuario === "contato") {
      this.setState({ listaUsuario: "usuarios" })
    } else if (this.state.listaUsuario === "usuarios") {
      this.setState({ listaUsuario: "contato" })
    }
  }

  alterandoPagina = () => {

    switch (this.state.listaUsuario) {
      case "contato":
        return <CriarDados />
      case "usuarios":
        return <ListaDeContatos />
      default:
    }
  }
  render() {
    return (
      <div>
        <Centro>
          <Texto>Labenusers</Texto>
          <Botao onClick={this.trocarPagina}>Trocar de Pagina</Botao >
          {this.alterandoPagina()}
        </Centro>
      </div>
    )
  }
}
