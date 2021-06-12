import styled from 'styled-components';

const ContainerHeader = styled.div `
display: flex;
justify-content: center;
`

const Texto = styled.h4 `
display: flex;
flex-direction: row;
margin: 0;
padding: 0;
`
const Texto1 = styled.h3 `
color: red;
font-size: 20px;
`
const Texto2 = styled.h3 `
font-size: 20px;
`

function Header() {
  return (
   <ContainerHeader>
       <Texto><Texto1>Astro</Texto1><Texto2>match</Texto2></Texto>
   </ContainerHeader>
  )
}


export default Header;