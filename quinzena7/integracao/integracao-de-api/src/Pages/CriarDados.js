import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Texto = styled.h3`
display: flex;
justify-content: center;
align-items: center;
 `


export default class CriarDados extends React.Component {

    state = {
        inputName: "",
        inputEmail: "",

    }

    onChangeNome = (e) => {

        this.setState({ inputName: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    criarContato = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail

        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {

            headers: {
                authorization: 'Gabriel-Figueiredo-Munoz'
            }
        })
            .then((response) => {
                console.log(response);

                this.setState({ inputName: "", inputEmail: "", inputName: "", inputEmail: "" })

            })
            .catch((error) => {
                console.log(error.response);
            })
    }


    render() {

        return (
            <div>
                <Texto>
                    <h3>Criar Usuario</h3>
                </Texto>
                <Texto>
                    <input type="text" placeholder="Nome" value={this.state.inputName} onChange={this.onChangeNome} />
                    <input type="text" placeholder="E-mail" value={this.state.inputEmail} onChange={this.onChangeEmail} />
                    <button onClick={this.criarContato}>Criar</button>

                </Texto>


            </div>
        )
    }
}