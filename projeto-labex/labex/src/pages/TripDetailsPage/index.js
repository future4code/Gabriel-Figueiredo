
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function TripDetailsPage() {

  const params = useParams()
  const history = useHistory()
  const [detail, setDetailPage] = useState({})
  const [aprovado, setAprovado] = useState([])
  const [candidato, setCandidato] = useState([])
  const [listaViagem, setListaViagem] = useState([])

  const pageHome = () => {
    history.goBack("/")
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
      setCandidato([])
    })
    .catch((error) => {
      console.log("não logado", error.response);
    })
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trip/${params.id}`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      console.log("Logado2", response.data.trip);
      setDetailPage(response.data.trip)
      setCandidato(response.data.trip.candidates)
      console.log("eeeeeeeee", candidato);
    })
    .catch((error) => {
      console.log("não logado", error.response);
    })
  },[params.id])
  console.log("detalhe",detail);

  useEffect(() => {
    aprovarTrip()
  },[])

  const aprovarTrip = (aprovado, id) => {
    const token = localStorage.getItem("token")
    const body = {
      approve: aprovado
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trips/${params.id}/candidates/${id}/decide`, body, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      console.log("Aprovar", response.data);
      setAprovado(response.data)
    })
    .catch((error) => {
      console.log("reprovar", error.response);
    })
  }
  return (
    <div>
     <h1>TripDetailsPage</h1>
     <h2>{detail.name}</h2>
     <button onClick={pageHome}>Home</button>
      <h2>Pendentes</h2>
      <button onClick={() => aprovarTrip(aprovado)}>Aprovar</button>
      <button>reprovar</button>
    

    </div>
  );
}

export default TripDetailsPage;