import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Texto = styled.h3`
display: flex;
justify-content: center;
align-items: center;

 `
const Botao = styled.button`
width: 100px;

 `

const Coluna = styled.div`
flex-direction: column;
padding: 0;
margin: 0;
  `


export default class ListaDeContatos extends React.Component {

    state = {
        listaContato: []
    }



    componentDidMount() {
        this.pegarLista()
    }


    pegarLista = () => {
        console.log("LISTA");
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                authorization: 'Gabriel-Figueiredo-Munoz'
            }
        })
            .then((response) => {
                console.log(response?.data);
                this.setState({ listaContato: response.data })
            })
            .catch((error) => {
                console.log(error.response?.data);
            })
    }
    apagar = (Id) => {
        if (window.confirm("Deseja mesmo deletar este contato?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${Id}`, {

                headers: {
                    authorization: 'Gabriel-Figueiredo-Munoz'
                }
            })
                .then((response) => {
                    console.log(response.data);
                    this.setState({ usuarios: response.data })
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        }
    }
    render() {

        const lista = this.state.listaContato.map((usuario) => {
            return (
                <Texto>
                    <div>

                        <p>{usuario.name}</p>
                        <Botao onClick={() => this.apagar(usuario.id)}>Deletar</Botao>
                    </div>

                </Texto>
            )
        })
        return (
            <Texto>
                <Coluna>
                    <h3>Lista de Contatos</h3>
                    {lista}
                </Coluna>
                
            </Texto>
        )
    }
}