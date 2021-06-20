import React from 'react';
import Header from './components/Header/index'
import RenderPage from './components/RenderPage';
import styled from 'styled-components';


const ContainerApp = styled.div`
background-image: url("https://img.freepik.com/vetores-gratis/desenho-de-bandeira-vermelha-com-decoracao-de-coracoes-em-neon_1017-29888.jpg?size=626&ext=jpg");
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;
min-width: 100vw;
display: flex;
justify-content: center;
*{
padding: 0;
margin: 0;
}
`
const Container = styled.div`
background-color: #EEE9E9;
width: 20vw;
height: 95vh;
margin-top: 10px;
border-radius: 10px;
`

function App() {
  
  return (
    <ContainerApp>
      <Container>
        <Header />
        <RenderPage />
      </Container>
      
    </ContainerApp>
  )
}


export default App;
