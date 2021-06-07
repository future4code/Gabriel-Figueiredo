import axios from 'axios'
import React from 'react'
import styled from 'styled-components'



const CardTexto = styled.div `
display: flex;
 `




export default class TelaDetalhes extends React.Component {
    
    state = {
        detalhe: [],
        inputMusica: "",
        inputArtist: "",
        inputUrl: ""
    }



    onChangePlaylist = (e) => {
        this.setState({inputMusica: e.target.value })
    }

    onChangeArtist = (e) => {
        this.setState({inputArtist: e.target.value })
    }

    onChangeUrl = (e) => {
        this.setState({inputUrl: e.target.value})
    }
    
    

    componentDidMount =  () => {
       this.mostraMusica()
    }

    mostraPlaylist = () => {

        axios.get( 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
        
        headers: {
            Authorization: "Gabriel-Figueiredo-Munoz"
        }
    })
    .then((response) => {
        console.log(response?.data.result.list);
        this.setState({detalhe: response?.data.result.list})
    })
    .catch((error) => {
        console.log(error.response?.data.result.list);
    })
    }

    mostraMusica = (Id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${Id}/tracks`,{
            headers: {
                Authorization: "Gabriel-Figueiredo-Munoz"
            }
        })
        .then((response) =>{
            console.log(response.data);
            
        })
        .catch((error) => {
            console.log(error.response);
        })
         
    };

    /*criaMusica = (id) => {
        const body = {
            name: this.state.inputMusica, 
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada}/tracks`, body, {
            headers: {
                Authorization: "Gabriel-Figueiredo-Munoz"
            }
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }*/


    render() {
        console.log("RRRR",this.props.playlistSelecionada);
        const musica = this.state.detalhe.map((detail) => {
            return (
                <div>
                    {detail.name}
                    {detail.artist}
                    {detail.url}
                    
                </div>
            )
            
        } )
        return(
            <div>
                <CardTexto>
                    <div>
                        <input type= "text" placeholder= "Nome da Playlist" 
                        value= {this.state.inputMusica} 
                        onChange= {this.onChangePlaylist}></input>
                    </div>
                    <div>
                        <input type= "text" placeholder= "Nome do Artista" 
                        value= {this.state.inputArtist} 
                        onChange= {this.onChangeArtist}></input>
                    </div>
                    <div>
                        <input type= "text" placeholder= "Digite a URL" 
                        value= {this.state.inputUrl} 
                        onChange= {this.onChangeUrl}></input>
                    </div>
                    <div>
                        <button onClick= {this.criaMusica}>Criar</button>
                    </div>
                </CardTexto>
                <button onClick= {this.props.detalheList}>Home</button>
               <div>{this.props.playlistSelecionada.name}</div>
                <div>{musica}</div>
                
            </div>
        )
    }
}