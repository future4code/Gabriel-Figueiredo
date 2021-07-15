import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { paises } from "../../hooks/Countries";

function ApplicationFromPage() {

  const [listaViagem, setListaViagem] = useState([])
  const [list, setList] = useState([])
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [candidato, setCandidato] = useState("")
  const [profissao, setProfissao] = useState("")
  const [pais, setPais] = useState("")

  
  
  const params = useParams()
  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }

  const onchangeNome = (e) => {
    setNome(e.target.value)
  }
  const onchangeIdade = (e) => {
    setIdade(e.target.value)
  }
  const onchangeCandidato = (e) => {
    setCandidato(e.target.value)
  }
  const onchangeProfissao = (e) => {
    setProfissao(e.target.value)
  }
  const onchangePais = (e) => {
    setPais(e.target.value)
  }
  const onchangeTrip = (e) => {
    setList(e.target.value)
    console.log("Teste", list);
}

  const applyToTrip = (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    const body = {
    name: nome,
    age: idade,
    applicationText: candidato,
    profession: profissao,
    country: pais
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trips/${params.id}/apply`, body, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        console.log(response.data);
        setList(response.data)
        console.log("foii",list);
      })
      .catch((error) => {
        console.log(error.response);
    })
  }

  useEffect(() => {
    trips()
  },[])
  const trips = () => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trips`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      setListaViagem(response.data.trips)
    })
    .catch((error) => {
      console.log("não logado", error.response);
    })
  }
  console.log("viagem", listaViagem);
  return (
    <div>
      <h1>Inscrever para uma Viagem</h1>
      <form onSubmit={applyToTrip}>
      <select value={list} onChange={onchangeTrip}>
      <option value="" disabled>Escolha uma Viagem</option>
      {listaViagem.map((list) => {
        return <option value={list.id} key={list.id}>{list.name}</option>
      })}
      </select>
       <input type="text" placeholder="Nome" value={nome} onChange={onchangeNome}></input>
       <input type="number" placeholder="Idade" value={idade} onChange={onchangeIdade}></input>
       <input type="text" placeholder= "Texto de Candidatura" value={candidato} onChange={onchangeCandidato}></input>
       <input type="text" placeholder="Profissão" value={profissao} onChange={onchangeProfissao}></input>
       <select value={pais} onChange={onchangePais}>
       <option value={""} disabled>Escolha um País</option>
        {paises.map((paises) => {
          return <option value={paises} key={paises}>{paises}</option>
        })}
       </select>
       <button>Criar</button>
     </form>
     <button onClick={pageHome}>Voltar</button>
    </div>
  );
}

export default ApplicationFromPage;