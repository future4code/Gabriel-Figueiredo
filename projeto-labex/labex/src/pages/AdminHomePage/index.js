import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AdminHomePage() {

  const [detail, setDetailPage] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trip/Z8NOkDl2y02uZc2Zc8jC", {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      console.log("Logado", response.data.trip);
      setDetailPage(response.data.trip)
    })
    .catch((error) => {
      console.log("não logado", error.response);
    })
  },[])

  const history = useHistory()

  const pageHome = () => {
    history.goBack("/")
  }

  const tripDetails = (name) => {
    history.push(`/admin/trips/${name}`)
  }

  const createTrip = () => {
    history.push("/admin/trips/create")
  }
console.log("lista", detail.name);
const listaViagem = detail.name && detail.name.map((viagem) => {
  return <button onClick={() => tripDetails(viagem.name)}key={viagem.name}>{viagem.name}</button>
})
return (
    <div>
      {listaViagem}
     <h1>AdminHomePage</h1>
     <button onClick={pageHome}>Home</button>
     <button onClick={createTrip}>Create trip</button>
     
    </div>
  );
}

export default AdminHomePage;