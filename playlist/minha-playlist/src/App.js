import React from 'react'
import Corpo from './components/Corpo/Corpo'
import Footer from './components/Footer/Footer'
import Header from './components/Corpo/Header'
import Home from './components/Corpo/Home'





export default class App extends React.Component {

  state = {
    listaUsuario: "contato"
  }

  trocarPagina = () => {
    console.log("Teste");
    if (this.state.listaUsuario === "contato") {
      this.setState({ listaUsuario: "usuarios" })
    } else if (this.state.listaUsuario === "usuarios") {
      this.setState({ listaUsuario: "contato" })
    }
  }
  
  alterandoPagina = () => {
    
    switch (this.state.listaUsuario) {
      case "contato":
        return <Corpo
        
        />
      case "usuarios":
        return <Home
        
        />
      default:
    }
  }

    render() {
        return(
            <div>
                <div>
                  <Header
                  trocarPagina= {this.trocarPagina}
                  alterandoPagina={this.alterandoPagina}
                  />
                </div>
                
                <div>
                  <Footer/>
                </div>
            </div>
        )
    }
}
