import React from 'react'
import Corpo from './components/Corpo/Corpo'
import Footer from './components/Footer/Footer'
import Home from './components/Corpo/Home'
import styled from 'styled-components'

const Texto = styled.div `
background-color: red;
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
            <div>  
                <Texto
                  />
                <Corpo
                  trocarPagina= {this.trocarPagina}
                  alterandoPagina= {this.alterandoPagina}
                  />
                
                <div>
                  <Footer/>
                </div>
            </div>
        )
    }
}
