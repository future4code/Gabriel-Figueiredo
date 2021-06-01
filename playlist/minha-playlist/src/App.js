import React from 'react'
import Contato from './components/CriarContato/Contato'
import Footer from './components/Footer/Footer'
import Home from './components/CriarContato/Home'
import styled from 'styled-components'


const ContainerApp = styled.div `
background-color: #1C1C1C;
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

  renderizaPagina = () => {

    switch (this.state.playlist) {
      case "nome":
        return <Contato trocarPagina= {this.trocarPagina}/>
        
      case "musica":
        return <Home trocarPagina= {this.trocarPagina}/>
      default:
    }
  }

    render() {
        return(
            <ContainerApp>  
               <div>
                 {this.renderizaPagina()}
               </div>
               <div>
                 <Footer/>
               </div>
                
            </ContainerApp>
        )
    }
}
