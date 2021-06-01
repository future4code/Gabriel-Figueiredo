import React from 'react'
import axios from 'axios'
import styled from 'styled-components'



const ContainerCriarPlaylist = styled.div `
width:500px;
height:463px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 400px;
 `
const ContainerTitulo = styled.div `
background-color: #3CB371;
display: flex;
justify-content: space-between;
 `
const Titulo = styled.h1 `
margin-left: 550px;
 `
const BotaoVerPlaylist = styled.button `
background-color: black;
color: white;
margin-right: 50px;
margin-top: 25px;
height: 40px;
border-radius: 40px;
 `
const TextoCriarPlaylist = styled.h2 `
text-align: center;
font-size: 32px;
 `
const CampoDeTexto = styled.input `
width: 400px;
height: 40px;
border-radius: 30px;
text-align: center;
margin-left: 50px;
 `
const BotaoCadastro = styled.button `
margin: 40px 0 0 0;
width: 100px;
margin-left: 200px;
 `
export default class Contato extends React.Component {

    state = {
        name: ""
    }


    playlist = (e) => {
        this.setState({name: e.target.value})
    }

    criarPlaylist = () => {
        
        const body = {
            name: this.state.name

        }
            axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',body , {
                headers: {
                    Authorization: 'Gabriel-Figueiredo-Munoz'
                }
            }) 
            .then((response) => {
                console.log(response?.data);
                this.setState({name: " "})
            })
            .catch((error) => {
                console.log(error.response);
            })
    }
        
    render() {

        return(
            <div>
                <ContainerTitulo>

                    <div>
                        <Titulo>Minha Playlist</Titulo>
                    </div>
                    <div>
                        <BotaoVerPlaylist onClick= {this.props.trocarPagina}>Ver Playlist</BotaoVerPlaylist>
                        
                    </div>
                </ContainerTitulo>
                <ContainerCriarPlaylist>
                <div>
                    <TextoCriarPlaylist>Criar Playlist</TextoCriarPlaylist>
                </div>
                <CampoDeTexto type= "text" placeholder="nome da playlist" value= {this.state.name} onChange= {this.playlist}></CampoDeTexto>
                <BotaoCadastro onClick= {this.criarPlaylist}>Enviar</BotaoCadastro>
                </ContainerCriarPlaylist>
            </div>
            
        )
    }
}