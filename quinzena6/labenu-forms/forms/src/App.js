import React from 'react';
import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2'
import Etapa3 from './pages/Etapa3'
import Final from './pages/Final'
import styled from 'styled-components'


const Tamanho = styled.button `

margin-left: 630px;

`

export default class App extends React.Component {

state = {

      etapa: 1
    }

  
    irParaProximaEtapa = () => {
      if(this.state.etapa){
        this.setState({etapa: this.state.etapa + 1})
      }

    }
   render(){
    const renderizarEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>
        case 2:
          return <Etapa2/>
        case 3:
          return <Etapa3/>
        case 4:
          return <Final/>
        default:
          break;
      }
      
    }

    
    return (
      <div>
        {renderizarEtapa()}
        <Tamanho onClick={this.irParaProximaEtapa}>Proxima etapa</Tamanho>
     </div>
    )
   }
  }