import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { MdEmail, MdLock } from "react-icons/md";
import { Button} from "@material-ui/core";


const Container = styled.div`
  background-color: white;
  min-width: 100vw;
  min-height: 100vh;
`;

const ContainerLogin = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;
const ContainerTitulo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100px;
  height: 80px;
`;
const Titulo = styled.h1`
  margin-left: 400px;
`;
const ContainerForm = styled.form`

  font-size: 40px;
  margin: 20px;
  margin-top: 100px;
  margin-right: 120px;
  height: 100px;
`;
const CampoInput = styled.input`
  background: transparent;
  width: 100%;
  height: 35px;
  outline-width: 0;
  border: none;
`;
const ContainerInput = styled.div`
  color: grey;
  display: flex;
  margin-top: 10px;
  width: 450px;
  height: 40px;
  justify-content: center;
  align-self: center;
  border-radius: 5px;
  border: 1px solid grey;
`;
const Botao = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  background: blue;
  color: white;
  border-radius: 5px;
`;
const BotaoVoltar = styled.p`
  margin-top: 10px;
  margin-left: 10px;
`;
const BotaoEntrar = styled.div ` 
display: flex;
justify-content: center;
margin-top: 10px;
`
function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  const pageHome = () => {
    history.goBack("/");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: senha,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <Container>
      <BotaoVoltar>
        <Button onClick={pageHome} variant="outlined" color="secondary" size="small"  >Voltar</Button>
      </BotaoVoltar>
      <ContainerLogin>
        <ContainerTitulo>
          <Titulo>Login</Titulo>
        </ContainerTitulo>
        <ContainerForm onSubmit={onSubmitLogin}>
          <ContainerInput>
            <MdEmail />
            <CampoInput
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={onChangeEmail}
              required
            ></CampoInput>
          </ContainerInput>
          <ContainerInput>
            <MdLock />
            <CampoInput
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={onChangeSenha}
              required
            ></CampoInput>
          </ContainerInput>
          <BotaoEntrar>
          <Button type="submit" variant="contained" color="primary" size="small" width="50%"  >Entrar</Button>
          </BotaoEntrar>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
}

export default LoginPage;
