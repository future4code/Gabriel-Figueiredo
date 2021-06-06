import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const ContainerVerPlaylist = styled.div `
width:500px;
height:463px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 100px;
 `
const ContainerTitulo = styled.div `
background-color: #3CB371;
display: flex;
justify-content: space-between;
 `
const Titulo = styled.h1 `
margin-left: 550px;
 `
const BotaoHome = styled.button `
background-color: black;
color: white;
margin-left: 400px;
margin-top: 25px;
height: 40px;
border-radius: 20px;
 `
const ContainerListaPlaylist = styled.div `
display: flex;
color: white;
font-weight: 800;
font-family: Georgia, 'Times New Roman', Times, serif;
 `
const NomeLista = styled.p `
margin-left: 100px;
font-size: 30px;
 `
const GradePlaylist = styled.div `
border: 1px solid white;
padding: 10px;
margin: 5px;
display: flex;
justify-content: space-between;
width: 200px;
 `
const Guardalista = styled.div `
margin-bottom: 150px;

 `
export default class ListaDePlaylist extends React.Component {

    state = {
        lista: []
    }
    

    componentDidMount() {
        this.mostrarLista()
    }
    mostrarLista = () => {
        
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "Gabriel-Figueiredo-Munoz"
            }
        })
        .then((response) => {
            console.log(response.data.result.list);
            this.setState({lista: response?.data.result.list})
        })
        .catch((error) => {
            console.log(error.response?.data.result.list);
        })
    }

    removerPlaylist = (id) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "Gabriel-Figueiredo-Munoz"
            }
        })
        .then((response) => {
            alert ("Usuario delatado com sucesso!!")
            this.mostrarLista()
        })
       .catch((error) => {
           alert ("Erro!!!!Desculpe tente novamente")
       }) 
    }
    render() {
        const minhaPlaylist = this.state.lista.map((list) => {
            return <GradePlaylist key= {list.url}>
                <p onClick= {() =>this.props.listPlaylist(list)}>{list.name}</p>
                <button onClick= {() =>this.removerPlaylist(list.id)}>remover</button>
                </GradePlaylist>
        })
        return(
            <div>
                <ContainerTitulo>
                    <div>
                        <Titulo >Minha Playlist</Titulo > 
                    </div>
                    <div>
                        <BotaoHome>Home</BotaoHome>  
                    </div>
                    <div>
                    
                    </div>
                </ContainerTitulo>
                <ContainerVerPlaylist>
                    <ContainerListaPlaylist>
                        <NomeLista>Lista de Playlist</NomeLista>
                    </ContainerListaPlaylist>
                    <Guardalista>
                        {minhaPlaylist}
                    </Guardalista>

                </ContainerVerPlaylist>
            </div>
        )
    }
}