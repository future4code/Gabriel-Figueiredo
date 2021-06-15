import React from 'react';
import Header from './components/Header/index'
import RenderPage from './components/RenderPage';
import styled from 'styled-components';
import ClearMatches from './components/ClearMatches';

const ContainerApp = styled.div`
display: flex;
justify-content: center;
padding: 50px 0 0 0;
`
const Container = styled.div`
border: 1px solid black;
width: 350px;
height: 500px;
border-radius: 10px;
`

function App() {
  return (
    <ContainerApp>
      <Container>
        <Header />
        <RenderPage />
      </Container>
      <ClearMatches />
    </ContainerApp>
  )
}


export default App;
