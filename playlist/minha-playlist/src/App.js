import React from 'react'
import CriaPlaylist from './components/Playlist/CriaPlaylist'
import Footer from './components/Footer/Footer'
import ListaDePlaylist from './components/Playlist/ListaDePlaylist'
import TelaDetalhes from './components/TelaDetalhes'
import styled from 'styled-components'


const ContainerApp = styled.div `
background-color: #1C1C1C;
 `

export default class App extends React.Component {

  state = {
    paginaAtual: "criaPlaylist",
    playlistSelecionada: null,
  }

  
  criaPlaylist = () => {
  this.setState({paginaAtual: "listaPlaylist"})
  }


  listPlaylist = (playlistSelecionada) => {
    this.setState({paginaAtual: "detalhePlaylist", playlistSelecionada: playlistSelecionada})
    
  }

  detalheList = () => {
    this.setState({paginaAtual: "criaPlaylist"})
  }
  renderizaPagina = () => {

    switch (this.state.paginaAtual) {
      case "criaPlaylist":
        return <CriaPlaylist 
        criaPlaylist= {this.criaPlaylist}/>
        
      case "listaPlaylist":
        return <ListaDePlaylist 
        listPlaylist= {this.listPlaylist}
        />
      case "detalhePlaylist":
        return <TelaDetalhes 
        playlistSelecionada= {this.state.playlistSelecionada}
        detalheList= {this.detalheList}
        />
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
