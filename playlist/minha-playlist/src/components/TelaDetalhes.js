import axios from 'axios'
import React from 'react'
import styled from 'styled-components'



const CardTexto = styled.div `
display: flex;
 `
const Card = styled.div `
border: 1px solid red;
height: 200px;
 `



export default class TelaDetalhes extends React.Component {
    
    state = {
        detalhe: [
            {
                "id": "006e1068-7941-45d3-9650-e2dd611eb0df",
                "name": "infiel",
                "artist": "marilia mendonca",
                "url": "https://www.youtube.com/watch?v=1teK3Gj0jJc&list=RDMM4YQBisfZ0rk&index=11"
            }
        ],
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

    mostraMusica = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${id}/tracks`,{
            headers: {
                Authorization: "Gabriel-Figueiredo-Munoz"
            }
        })
        .then((response) =>{
            console.log(response.data.result.list);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
         
    };

    /*criaMusica = () => {
        const body = {
            name: this.state.inputMusica, 
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistSelecionada}/tracks`, body, {
            headers: {
                Authorization: 'Gabriel-Figueiredo-Munoz'
            }
        })
        .then((response) => {
            console.log(response?.data);
           
        })
        .catch((error) => {
            console.log(error.response?.data)
        })
    }
*/

    render() {
        console.log("RRRR",this.state.detalhe);
        const musica = this.state.detalhe.map((detalhe) => {
            console.log(detalhe);
            return <Card 
            key= {detalhe.id}
            id= {detalhe.id}
            name= {detalhe.name}
            artist= {detalhe.artist}
            url= {detalhe.url}
            
            />
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