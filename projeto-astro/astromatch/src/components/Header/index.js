import styled from 'styled-components';

const ContainerHeader = styled.div `
display: flex;
justify-content: center;
`

const Texto = styled.h4 `
display: flex;
flex-direction: row;
padding: 10px;
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
     <div>
       <Texto><Texto1>Astro</Texto1><Texto2>match</Texto2></Texto>

     </div>
   </ContainerHeader>
  )
}


export default Header;