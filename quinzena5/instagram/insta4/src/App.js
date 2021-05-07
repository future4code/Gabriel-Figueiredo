import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
display: flex;
 `

class App extends React.Component {
  state = {
    usuario: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {  
        nomeUsuario:'João',
        fotoUsuario: 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg',
        fotoPost:'https://saude.abril.com.br/wp-content/uploads/2020/07/coronav%C3%ADrus-felinos-selvagens.png?w=680',
      },
      {
        
        nomeUsuario: 'Maria',
        fotoUsuario: 'https://harpersbazaar.uol.com.br/cultura/taina-muller-vive-uma-heroina-amoral-em-bom-dia-veronica/attachment/taina-muller-veronica/',
        fotoPost: 'https://casa.abril.com.br/wp-content/uploads/2019/07/1-agra.jpg?quality=95&strip=info&w=1024'
      }
    ]
  };
render() {

const componenteUsuario = this.state.usuario.map((usuario) => {
  
return (
  <Post
          nomeUsuario= {usuario.nomeUsuario}
          fotoUsuario= {usuario.fotoUsuario}
          fotoPost= {usuario.fotoPost}
  />
 
);
});

return(
  
<MainContainer>
  <input type="text" placeholder="nome do Usuario"/>
  <input type="text" placeholder="URL da imagem Usuario"/>
  <input type="text" placeholder="URL da imagem post"/>
  <button>Adicionar</button>
  {componenteUsuario}
</MainContainer>

)
}
}

export default App;
