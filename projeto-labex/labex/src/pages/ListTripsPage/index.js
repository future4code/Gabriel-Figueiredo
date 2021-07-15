import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function ListTripsPage() {

  const history = useHistory()
  const [listaViagem, setListaViagem] = useState([])

  const pageHome = () => {
    history.goBack("/")
  }
  const pageRegister = () => {
    history.push("/trips/application")
  }


  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trips`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      setListaViagem(response.data.trips)
      console.log("dddd", response.data.trips);
    })
    .catch((error) => {
      console.log("não logado", error.response);
    })
  },[])

  return (
    <div>
      {listaViagem.map((lista) => {
       return <div>
         <p key={lista.id}>Nome : {lista.name}</p>
         <p key={lista.id}>Descrição : {lista.description}</p>
         <p key={lista.id}>Planeta : {lista.planet}</p>
         <p key={lista.id}>Duração : {lista.durationInDays}</p>
         <p key={lista.id}>Data : {lista.date}</p>
         <button onClick={pageRegister}>Inscrever-se</button>
         </div>
        })}
     <button onClick={pageHome}>ListTripsPage</button>
    </div>
  );
}

export default ListTripsPage;