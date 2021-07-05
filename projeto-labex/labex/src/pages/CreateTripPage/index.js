import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { planets } from "../../hooks/Planet";

const ContainerFormulario = styled.form `
display: flex;
flex-direction: column;
align-items: center;
 `
const ContainerInput = styled.input `
width: 300px;
height: 30px;
margin: 20px;
 `
const ContainerSelect = styled.select `
width: 310px;
height: 30px;
 `
function CreateTripPage() {
  const [nome, setNome] = useState("")
  const [selecao, setSelecao] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")
  const [dias, setDias] = useState("")
  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }

  const onchangeNome = (e) => {
    setNome(e.target.value)
  }
  const onchangeSelecao = (e) => {
    setSelecao(e.target.value)
  }
  const onchangeData = (e) => {
    setData(e.target.value)
  }
  const onchangeDescricao = (e) => {
    setDescricao(e.target.value)
  }
  const onchangeDias = (e) => {
    setDias(e.target.value)
  }

  const criarViagem = (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    const body = {
      name: nome,
    planet: selecao,
    date: data,
    description: descricao,
    durationInDays: dias
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trips`, body, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response);
    })
  }
  return (
    <div>
     <h1>Criar Viagem</h1>
     <ContainerFormulario onSubmit={criarViagem}>
       <ContainerInput type="text" placeholder="Nome" value={nome} onChange={onchangeNome}></ContainerInput>
       <ContainerSelect name={planets} value={selecao} onChange={onchangeSelecao}>
       <option value={""} disabled>Escolha um Planeta</option>
        {planets.map((planets) => {
        return <option value={planets} key={planets}>{planets}</option>
        })}  
       </ContainerSelect>
       <ContainerInput id="date" type="date" value={data} onChange={onchangeData}></ContainerInput>
       <ContainerInput type="text" placeholder="Descrição" value={descricao} onChange={onchangeDescricao}></ContainerInput>
       <ContainerInput type= "number" placeholder="Duração em Dias" value={dias} onChange={onchangeDias}></ContainerInput>
       <button>Criar</button>
     </ContainerFormulario>
     <button onClick={pageHome}>Voltar</button>
    </div>
  );
}

export default CreateTripPage;