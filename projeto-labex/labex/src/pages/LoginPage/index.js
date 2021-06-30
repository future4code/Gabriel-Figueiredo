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

    const onSubmitLogin = () => {
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
      <div>
        <input type= "text" placeholder= "E-mail" value={email} onChange={onChangeEmail}></input>
        <input type= "number" placeholder= "Senha" value={senha} onChange={onChangeSenha}></input>
      </div>

     <button onClick={pageHome}>Voltar</button>
     <button onClick={onSubmitLogin}>Entrar</button>

    </div>
  );
}

export default LoginPage;