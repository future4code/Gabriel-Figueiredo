import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginPage() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
    const history = useHistory()

    const pageHome = () => {
        history.goBack("/")
    }
    
    const onChangeEmail = (e) => {
      setEmail(e.target.value)
    }

    const onChangeSenha = (e) => {
      setSenha(e.target.value)
    }

    const onSubmitLogin = (e) => {
      e.preventDefault()
      const body = {
        email: email,
	      password: senha
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/login", body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        history.push("/admin/trips/list")
      })
      .catch((error) => {
        console.log(error.response);
      })
    } 
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={onSubmitLogin}>
        <input type= "text" placeholder= "E-mail" value={email} onChange={onChangeEmail} required></input>
        <input type= "password" placeholder= "Senha" value={senha} onChange={onChangeSenha} required></input>
        <button>Entrar</button>
      </form>

     <button onClick={pageHome}>Voltar</button>

    </div>
  );
}

export default LoginPage;